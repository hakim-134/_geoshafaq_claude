# 0001 — Split UzbGuessr into a frontend and a backend repo

- **Date:** 2026-10-21
- **Status:** accepted
- **Deciders:** the owner

## Context

UzbGuessr was one folder: the static game plus a Go server that served those files **and**
ran the live rooms. It ran on the owner's laptop and was shared over the LAN or ngrok. The
owner now has a VPS and the domain `shafaq.uz`, and wants to keep building the game as a
real project, under the temporary names `geo.shafaq.uz` (web) and `api.geo.shafaq.uz` (API).

## Options

1. Keep one repo; the Go server keeps serving the pages on one domain.
2. Two repos: static frontend on `geo.`, API-only Go server on `api.geo.`.

## Decision

Option 2. Repos `hakim-134/geo-shafaq` and `hakim-134/api-geo-shafaq`. The files were
copied from `NotiLo-A/UzbGuessr`, which stays as it was.

## Why

The owner's choice, matching how they work elsewhere: a Go backend with its own deploy,
and a frontend that is just files. nginx serves the pages; the API restarts (which ends
all rooms) only when the backend changes.

## Consequences

- The page and the API are on different origins. The API checks the page origin itself
  (`origins.go`, for WebSocket and CORS). Before, gorilla's default "same host" check did it.
- The API address lives in `geo-shafaq/js/api.js`, the allowed web origin in
  `api-geo-shafaq/main.go`. Renaming the domain is one edit on each side plus nginx,
  certbot and the Yandex key's referrers.
- The Yandex key left the code: `config.js` is gitignored and has to be put on the
  server by hand.
- Locally the pages run on `:8130` (`serve.py`) and the API on `:8131`. The Go server no
  longer serves `tools/collect.html`; `serve.py` does.
- Scoring exists twice (`score.go` and `js/game.js`), now in two repos. Change both together.
