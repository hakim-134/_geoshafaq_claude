# 0010 — The local game: two containers on the shared Postgres and Redis

- **Date:** 2026-10-24
- **Status:** accepted (built 2026-10-24)
- **Deciders:** the owner
- **Supersedes:** the local half of [0007](0007-hosting.md) (its compose file as "the one
  description of the stack, locally and on the server")

## Context

The owner tests every change in the browser and wants the game always runnable on the laptop.
The laptop is short on resources and runs one Postgres and one Redis for all projects
(`_claude/me/tools.md`). The rebuild gave Shafaq its own PostGIS 17 and Valkey containers
(`make up`), which the owner does not want.

## Options

1. Keep Shafaq's own database containers, the same versions as on the server.
2. **Two app containers** (the game, the server) on the shared `postgres` (16, plus the
   PostGIS package) and `redis`.

## Decision

Option 2: *"Don't create some new database like Postgres or Redis. We have existing ones, and
just in those containers create new databases."* `shafaq-web` on 8130, `shafaq-api` on 8131,
the database `shafaq_lcl`, Redis database 1. Details: [local.md](../local.md).

## Why

The owner's call: resources. The code allows it: its SQL runs on Postgres 16 and needs only
the PostGIS extension (checked 2026-10-24), and Valkey speaks Redis.

## Consequences

- Postgres 16 here, 17 on the server: SQL only 17 knows would break the local game.
- The shared `postgres` gets the PostGIS package; a recreated container needs it again
  (`_claude/me/tools.md`).
- `api-geo-shafaq/docker-compose.yml` describes the server only; the local files are
  `docker-compose.lcl.yml` in both repos.
- `shafaq-geo-db-1` and `shafaq-geo-valkey-1` were removed on 2026-10-24, after their data was
  copied into `shafaq_lcl` ([local.md §4](../local.md#4-when-something-is-off)).
- The API links demo images relative to itself when `PUBLIC_URL` is unset, and the game
  resolves them against the API, so a phone on the laptop's Wi-Fi works too.
