# What Claude may do in Shafaq Geo

The owner's decision of 2026-10-24 ([decision 0009](decisions/0009-full-access.md)): full
access, no permission questions. This page is the detail behind
[CLAUDE.md → Full access](CLAUDE.md#full-access).

## 1. Code

- Everything under `~/131/github.com/hakim-134/`: `geo-shafaq` (the game), `api-geo-shafaq`
  (the server), `_geoshafaq_claude` (this knowledge base), `PLAN.md` and the doorway
  `CLAUDE.md`. Create, change, move and delete files as the work needs.
- Several sessions often work here at once, in the same working trees. Their uncommitted
  changes are the owner's work too: build on them, never revert them.
- v0 lives in the `v0` tag and the `_v0/` folders: read it, don't change it.

## 2. Git

- Read-only git (`status`, `diff`, `log`, `show`, `fetch`) any time.
- One branch, `main`, in every repo ([decision 0002](decisions/0002-deploy-branches.md)). No
  `alw…` working branches here.
- Nothing is committed until the owner says **"push"** (or `p2r`, "git push", "commit and
  push"). Then, in each repo here that has changes:
  1. `git status`. Build output, dumps and keys must not go in; if one shows up, add it to
     `.gitignore` instead.
  2. Commit all of it, other sessions' changes included: the owner tested the whole working
     tree. Short English messages that say what changed for the player; a few commits when
     the work splits easily, otherwise one.
  3. `git push origin main`. Rejected because `main` moved? `git pull --rebase origin main`,
     then push again. Resolve conflicts you understand; otherwise stop and name the files.
- Never force-push, rewrite pushed history or delete tags.
- A push deploys nothing: no server pulls `main` by itself ([deploy.md](deploy.md)).
- `~/131/git.sriss.uz/abdullayevsh/_claude` (the owner's general rules) changes only when a
  rule there is wrong for this project, and is pushed on the same "push".

## 3. Secrets and keys

Read them, use them, show them in chat: there is no privacy concern here. One rule only:
**they never go into git.** The repos are public, bots scrape GitHub for keys within minutes,
and the free Yandex key's ~100 views a day would be gone: the game would stop. (Claude Code's
auto mode refuses such a commit anyway.)

| Key | Where | For |
|---|---|---|
| `PUBLIC_YANDEX_KEY` | `geo-shafaq/.env.local` | panoramas in the browser. It ships inside the game's JavaScript by design; Yandex protects it with its list of allowed sites, not by secrecy |
| `GOOGLE_MAPS_KEY` | `geo-shafaq/.env.local` | `shafaq-tools google` (coverage look-ups). Google rounds are off ([decision 0008](decisions/0008-yandex-and-google.md)) |
| `TELEGRAM_ALERT_TOKEN`, `TELEGRAM_ALERT_CHAT` | `~/131/github.com/hakim-134/.envrc` | the worker's warning at 80% of the Yandex limit |
| `TELEGRAM_BOT_TOKEN` | not set yet: the owner's to-do ([roadmap.md](roadmap.md)); until then the alert bot's token (`tmp67bot`) | "sign in with Telegram" (the bot's link, the Mini App) |
| `GOOGLE_CLIENT_ID` | not set yet: the owner's to-do ([roadmap.md](roadmap.md)) | Google's sign-in button; public by design, like the Yandex key |
| `YANDEX_CABINET_KEY` | not set yet: the owner's to-do ([roadmap.md](roadmap.md)) | the worker reads Yandex's own count |
| Shared Postgres password | `PGPASSWORD` in `~/131/github.com/hakim-134/.envrc` (a copy of the work projects' `POSTGRES_PASSWORD`) | the local database ([local.md §2](local.md#2-the-shared-postgres-and-redis)); `docker exec postgres psql -U postgres` needs none |
| The VPS address and access | from the owner, when the server is set up | [deploy.md](deploy.md) |
| The server's passwords (database, Grafana, GlitchTip, backups) and `GLITCHTIP_DSN` | the server's `/srv/shafaq/api-geo-shafaq/.env`, made from `deploy/env.example` | [deploy.md §A](deploy.md#a-v1-the-server-stack) |
| `PUBLIC_GLITCHTIP_DSN` | `geo-shafaq/.env.local` | browser errors to GlitchTip; public by design, like the Yandex key |

A key that isn't in this table: ask the owner in one line (they hand keys over gladly), then
add it here.

## 4. Docker and databases

- Shafaq's own containers, images and volumes (names starting with `shafaq-`): build, run,
  recreate, remove.
- The shared `postgres`: databases named `shafaq_*` are ours. Create, migrate, fill, reset and
  drop them. The container has the PostGIS package for them
  ([local.md §2](local.md#2-the-shared-postgres-and-redis)).
- The shared `redis`: database 1 is ours. Never `FLUSHALL`.
- **Everything else on that Docker belongs to the owner's other projects**: every other
  database, the `postgres` and `redis` containers themselves, every other container. Never
  change, stop or remove them.
- No database or cache containers of our own ([decision 0010](decisions/0010-local-docker.md)).

## 5. Everything else

- Install the packages and tools the work needs (`npm install`, `go get`, `go install`).
- Search the web whenever it helps: docs, prices, other geo games.
- Drive Chrome (Claude in Chrome) to test the game at its local addresses ([local.md](local.md)).

## 6. Still the owner's call

Ask in one line, then wait:

- **Money**: anything that buys something or turns on billing (Yandex license, Google
  billing, hosting, domains).
- **The live server**, once it exists: deploys and changes there happen on the owner's word
  ([deploy.md](deploy.md)).
- **The owner's other projects** on this laptop: their data, containers and repos (§4).

## 7. If Claude Code blocks an action

Claude Code's auto mode checks every action. It reads this knowledge base's `CLAUDE.md`, and
it learns which repos, keys and containers here are trusted from `autoMode.environment` in
`~/.claude/settings.json`; project settings can't set that. The entries are in
[decision 0009](decisions/0009-full-access.md#the-auto-mode-entries); `claude auto-mode config`
shows whether they are in place. Only the owner's own message can add them: auto mode blocks
Claude from widening its own permissions.

When something routine is blocked anyway:

- don't look for a way around it; finish the rest of the task;
- say in one line what was blocked and why;
- the owner approves it with a message that names the action, or under `/permissions` →
  Recently denied (`r` retries it).

If the same kind of block keeps coming back, propose one more line for `autoMode.environment`.
