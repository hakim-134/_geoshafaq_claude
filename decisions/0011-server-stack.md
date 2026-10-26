# 0011 — The server stack: one compose file, deployed by hand; logs, errors and backups inside it

- **Date:** 2026-10-26
- **Status:** accepted (built and rehearsed on the laptop 2026-10-26; goes live with the server)
- **Deciders:** the owner ("Phase 1 needs to be done as intended"; "no CI, no pipelines, no
  `.github/` folder" until asked), Claude (the details)

## Context

Phase 1 of `PLAN.md` asks for an app that deploys to dev with metrics, logs, error tracking
and a tested backup. There is no server yet, the owner runs everything alone, and the owner has
said twice that there is no CI (the old workflows failed on every push and were removed).

## Options

1. CI (GitHub Actions) builds images and deploys on every push. Ruled out by the owner.
2. Host-level nginx and certbot on the server, as the v0 page (`deploy.md`) planned.
3. **Everything in `api-geo-shafaq/docker-compose.yml`**, Caddy in front, deployed by one
   script run by hand.

## Decision

Option 3.

- **Deploy:** on the server, `deploy/deploy.sh` (git pull, build, migrate, restart, check).
  The game: `scripts/deploy.sh` in geo-shafaq (build on the laptop, rsync). No CI.
- **Front door:** Caddy, HTTPS by itself. Four addresses, all set in the server's `.env`:
  the game, the API, `stats.` (Grafana) and `errors.` (GlitchTip).
- **Metrics:** Prometheus (30 days) → Grafana, with the "Shafaq Geo" dashboard provisioned
  from the repo (games, rounds, Yandex views against the limit, speed, errors, logs).
- **Logs:** Grafana Alloy ships every container's lines to Loki (30 days). Promtail is not
  used: it reached its end of life in 2026.
- **Errors:** GlitchTip 6, one process, its queue in Postgres (no Valkey of its own). The API
  and worker send every Error log line (sentry-go); the game in the browser sends crashes with
  a ~1 KB reporter of our own, not the Sentry SDK, to keep phones' downloads small.
- **Backups:** pgBackRest inside the database container. Postgres archives every WAL segment
  as it fills; a full backup on Sundays, a differential one every other night (03:00 Tashkent),
  encrypted, to S3-compatible storage; every Sunday the backup is restored into a scratch
  directory and checked against the live database. Failures, and the weekly "restore OK", go
  to the owner on Telegram.
- PostGIS image `17-3.6` (Debian trixie): `17-3.5` is built on bullseye, whose Postgres
  package repository is gone, so pgBackRest could not be installed on it.

## Why

One file describes the whole server, so a new server is `git clone`, `.env`, one command. A
person deploying by hand needs one command, not a pipeline to babysit. Caddy needs no certbot.
Everything runs on one 6 GB VPS (GlitchTip is the heaviest, a few hundred MB).

## Consequences

- The stack was run on the laptop under its own names with a MinIO standing in for S3:
  HTTPS front door, metrics, logs, an API error and a browser error in GlitchTip, a backup and
  a restore that matched the live data row for row. Then it was removed (decision 0010: no
  database containers of our own on the laptop stay).
- **Backup storage must be in Uzbekistan too** (personal-data law, `before-launch.md` 0.4):
  an S3 bucket at the Uzbek host, or a second Uzbek server. Until it is set, backups stay on
  the server's own disk (they survive a crash, not a lost server).
- v0's page (`deploy.md`, host nginx) is for v0 only. v1 and v0 cannot share ports 80/443
  on one VPS; v1 replaces v0 there, or v1's `.env` moves Caddy to other ports.
