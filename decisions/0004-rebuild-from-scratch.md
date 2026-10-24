# 0004 — Rebuild the game from scratch, in the same two repos

- **Date:** 2026-10-22
- **Status:** accepted
- **Deciders:** the owner (asked Claude to carry out `PLAN.md`)

## Context

v0 (the UzbGuessr-era game) works, but the owner's TODO list (accounts, history, coins, a
shop, places, many panorama providers) touches every part of it at once. In v0 the
browser scores solo games, everything lives in `localStorage`, and Yandex is wired into
the game code. A shop with coins means the score has to come from the server.

## Options

1. Grow v0 step by step.
2. **Rebuild from scratch** in `geo-shafaq` and `api-geo-shafaq`, with v0 kept as the
   reference.

## Decision

Option 2. Both repos carry a `v0` tag on the last v0 commit. The new code replaces the old
files on `main`.

## Why

Server scoring, server-picked panoramas and the provider seam are design decisions, not
features. Bolting them onto v0 would mean rewriting every file anyway, while keeping v0's
quirks (two copies of the score formula, the host's browser picking the panorama).

## Consequences

- v0 is read with `git show v0:<file>`: room logic (`room.go`), scoring, the Tashkent street
  tool, the strings in `js/i18n.js`, the look in `css/style.css`.
- To put v0 online meanwhile, deploy the `v0` tag, not `main`. The tags are local until
  the owner pushes them (`git push origin v0`). _Pushed in both repos on 2026-10-22._
- Rooms with friends come back in Phase 5 of the plan. Until then the new app is solo only.
