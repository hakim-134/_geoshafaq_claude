# 0005 — The stack: Go + Postgres/PostGIS + Valkey, SvelteKit + MapLibre

> The map part (MapLibre, Protomaps) is superseded by [0012](0012-yandex-map.md): the game
> uses Yandex's map since 2026-10-26.

- **Date:** 2026-10-22
- **Status:** accepted
- **Deciders:** the owner (asked Claude to carry out `PLAN.md`)

## Context

The rebuild (0004) needs a database, accounts, live rooms and a web app that is quick on
phones over mobile data. The first target is 10 000 players online at once, run by one
person.

## Decision

- **API** (`api-geo-shafaq`): Go, one modular monolith with `cmd/api`, `cmd/worker` and
  `cmd/tools`. stdlib `net/http`, pgx + sqlc, goose migrations, oapi-codegen from
  `api/openapi.yaml` (contract first), `log/slog`, River (a Postgres job queue),
  gorilla/websocket.
- **Data:** PostgreSQL 17 + PostGIS. Valkey (Redis-compatible) for live-room snapshots,
  rate limits and presence.
- **Web** (`geo-shafaq`): SvelteKit + TypeScript built as a static SPA (adapter-static),
  a PWA. MapLibre GL for the guess map; the basemap is a self-hosted Protomaps PMTiles
  file of Uzbekistan. The API client is generated from the same OpenAPI file.

## Why

Go is the owner's language, and one Go process handles 10K players. River keeps the job
queue in Postgres, so there is no extra server. PostGIS answers "which district is this
point in" and "which panoramas are inside this map". SvelteKit gives small bundles and is
easy to read for a backend developer. Self-hosted tiles mean no per-request map bill.

## Consequences

- The contract file is the one source of truth between the two repos: change it, then run
  `make gen` in the API and `npm run gen` in the web app.
- Scoring lives only in Go. The web app shows what the server sends.
