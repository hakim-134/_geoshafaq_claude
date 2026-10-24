# 0007 — Docker Compose on servers in Uzbekistan, a CDN in front

- **Date:** 2026-10-22
- **Status:** accepted (the hosting provider is not chosen yet); its local half superseded by
  [0010](0010-local-docker.md): locally the game runs on the shared Postgres and Redis
- **Deciders:** the owner (asked Claude to carry out `PLAN.md`)

## Context

Accounts store emails and Telegram IDs. Uzbek personal-data law (art. 27-1) says data of
Uzbek citizens must be stored on servers physically in Uzbekistan, and the database must
be registered. The first target is 10 000 players online, run by one person.

## Decision

- Docker Compose, no Kubernetes. One app server (Caddy or nginx, two API replicas,
  worker, Valkey) and one database server (Postgres + PostGIS), both **in Uzbekistan**.
- A CDN in front of the web app, map tiles and (later) our own imagery.
- The current HostKey VPS is fine for v0 and for development. Before accounts go public,
  check where it is; if not in Uzbekistan, the database moves.

## Why

Enough for 10K (see `PLAN.md` §6), within the law, cheap, and the owner can run it alone.
The design keeps seams for 600–700K (stateless API, rooms addressed by code, Valkey
pub/sub) without building them now.

## Consequences

- `api-geo-shafaq/docker-compose.yml` is the one description of the stack, locally and on
  the server.
- Before launch (Phase 6 of the plan): pick the Uzbek hosting and register the database.
