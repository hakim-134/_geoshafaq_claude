# The game on the owner's laptop (Docker)

The owner tests every change here, on the laptop and on the phone over the laptop's Wi-Fi
([owner.md](owner.md)). They want **two containers, one for the game and one for the
server**, and **no database containers of our own**: the laptop is short on resources and
already runs one Postgres and one Redis for all projects
([decision 0010](decisions/0010-local-docker.md)). Built on 2026-10-24.

## 1. What runs

| Container | What | Port | Defined in |
|---|---|---|---|
| `shafaq-web` | the game: nginx (`nginx:stable-alpine`) serving `geo-shafaq/build/` | `8130` | `geo-shafaq/docker-compose.lcl.yml`, `nginx.lcl.conf` |
| `shafaq-api` | the server: migrations at start, then the worker and the API | `8131` | `api-geo-shafaq/docker-compose.lcl.yml` (its `Dockerfile`) |

`shafaq-api` joins the Docker network `infra` and reaches the shared containers by name.
`shafaq-web` mounts the whole `geo-shafaq` folder read-only, because each build replaces
`build/`.

| Who | Opens |
|---|---|
| The owner, on the laptop | <http://localhost:8130> |
| The owner's phone, on the laptop's Wi-Fi hotspot | <http://10.42.0.1:8130> |

**Panoramas.** Players get Yandex only (`PROVIDERS=yandex`), as on the server; the owner's
games here spend real Yandex views. `demo` (drawn test panoramas, free) is a test provider
(`TEST_PROVIDERS=demo`): it plays only in games that name it. That is the smoke test, and
Claude's browser checks with the hidden switch: in the page's console,
`localStorage.sg_test_providers = 'demo'` (remove it to go back). The game shows no sign of it.

The game finds the API on port 8131 of the same host by itself (`geo-shafaq/src/lib/config.ts`),
and the API links demo images relative to itself, so both addresses work. Both ports listen on
the LAN.

## 2. The shared Postgres and Redis

The machine's shared containers: `~/131/git.sriss.uz/abdullayevsh/_claude/me/tools.md`
(Docker). Shafaq's part:

| Container | Ours | Notes |
|---|---|---|
| `postgres` (postgres:16 + PostGIS 3.6) | `shafaq_lcl` (the local game) and `shafaq_test_*` (made and dropped by `make test`) | user `postgres`, password `PGPASSWORD` in `~/131/github.com/hakim-134/.envrc` |
| `redis` (redis:8) | database 1 | Valkey and Redis speak the same protocol; the API uses go-redis |

- `shafaq_*` databases are ours to reset or drop. Every other database belongs to another
  project ([access.md §4](access.md#4-docker-and-databases)).
- The server runs Postgres 17 ([decision 0005](decisions/0005-stack.md)); here it is 16. All
  migrations and integration tests pass on 16 (2026-10-24). Keep it that way, or say so when a
  change needs 17.
- The password is never in a URL or in the code: pgx takes `PGPASSWORD` when the URL has none.
  The `.envrc` above sets it and `TEST_DATABASE_URL`; the API's defaults
  (`api-geo-shafaq/internal/config/config.go`) already point at `shafaq_lcl` and Redis
  database 1.
- Claude's shell does not load direnv by itself: run with
  `direnv exec ~/131/github.com/hakim-134 <command>`.

## 3. docker up

The owner's **"docker up"** (also "update docker"), and the end of every task:

1. **The server.** In `api-geo-shafaq`: `direnv exec .. make lcl`. It rebuilds the image from
   the working tree and restarts `shafaq-api`; the migrations run at start.
2. **The game.** In `geo-shafaq`: `npm ci` if `package-lock.json` changed, then `npm run lcl`.
   It builds, starts `shafaq-web` if it isn't running, and nginx serves the new `build/` at once.
3. **Check.** `curl -s localhost:8131/v1/ready` (db and valkey ok), then
   `ORIGIN=http://localhost:8130 scripts/smoke.sh` in `api-geo-shafaq` (plays a demo game).
   Then play one round in Chrome at <http://localhost:8130> with the demo switch on (§1):
   phone size and laptop width, light and dark. If Claude in Chrome is not connected, headless
   `google-chrome` driven over its DevTools port does the same.
4. **Tidy.** `docker image prune -f` (dangling images only; the disk is over 80% full).
5. **Report** the two links and what to try ([owner.md](owner.md#the-report)).

Both build the working tree as it is, other sessions' uncommitted work included. If the build
breaks on another session's half-done work, name the files and stop there. Don't fix or revert
their work without the owner.

The page itself always comes from the network (the service worker caches only built files),
so a reload shows the new version.

## 4. When something is off

- `docker logs shafaq-api --tail 50`, `docker logs shafaq-web --tail 50`.
- After changing `geo-shafaq/nginx.lcl.conf`: `docker restart shafaq-web`. The file is mounted
  on its own, and an edit that replaces the file isn't seen until a restart.
- `shafaq-api` doesn't start: `PGPASSWORD` is missing (compose says so), or the `postgres`
  container was recreated without PostGIS (`_claude/me/tools.md` has the install line).
- Yandex panoramas fail on the phone but work on the laptop: the key's allowed sites need
  `10.42.0.1` (developer.tech.yandex.ru, the owner's account). Demo panoramas work anywhere.
- On the phone over plain http, a few things wait for https: the share sheet and "install as
  app". They get checked on the real site.
- A fresh database: drop `shafaq_lcl`, then `make up` and `make setup` (OpenStreetMap and v0's
  pools). The old `shafaq-geo-db-1` (6 072 panoramas, the test games) was copied in on
  2026-10-24; its full dump waits in `~/131/github.com/hakim-134/tmp/` until the owner deletes
  it.

`api-geo-shafaq/docker-compose.yml` is the server's stack, with its own Postgres + PostGIS,
Valkey, Caddy and the watch tools ([deploy.md §A](deploy.md#a-v1-the-server-stack)); the
laptop doesn't run it. To rehearse it here, run it with an override file and an env file on
spare ports (HTTP_PORT, HTTPS_PORT, `*.localhost` names), check, then `down -v` and remove its
images: nothing of it stays on the laptop ([decision 0011](decisions/0011-server-stack.md)).
