# 0009 — Full access for Claude; the owner tests the product, not the code

- **Date:** 2026-10-24
- **Status:** accepted
- **Deciders:** the owner

## Context

Sessions here were slow and often blocked. Two things did it:

- The owner's general rules (`_claude`) were made for paid work: keys never shown, git only by
  explicit order and on working branches, shared things left alone. They applied here too,
  because this project didn't say otherwise.
- Claude Code's auto mode trusts only the repo a session starts in. Sessions here start in
  `~/131/github.com/hakim-134/`, a folder that holds three repos but is not one itself, so all
  three looked like someone else's. Its defaults also block printing keys and changing shared
  databases.

Meanwhile the owner works here as CEO and designer: they test the game in the browser and
don't read code. Fewer than 10 people play, all friends, and there is no players' data yet.

## Options

1. Keep the general rules and approve actions one by one.
2. **Full access in this project**, keys kept out of git only.

## Decision

Option 2, in the owner's words: *"You have all access to Git, like databases, Docker,
containers, code, secrets, API keys, everything."* *"When I say git push, you need to push to
main branch, simple."* What it covers: [access.md](../access.md). How a task goes and ends:
[owner.md](../owner.md).

Auto mode is told the same in two places: this knowledge base's `CLAUDE.md` (auto mode reads
CLAUDE.md) and `autoMode.environment` in `~/.claude/settings.json`, the only place it learns
which repos, data and services to trust (project settings can't set it). The entries are below.

## Why

*"Privacy is no matters here … What matters is making the product."* For a pet project with
hopes, speed matters more than ceremony, and the owner judges the result in the browser anyway.

## Consequences

- Keys still never go into git: the repos are public, and a scraped Yandex key would stop the
  game. Auto mode refuses such commits anyway.
- `_claude` (its `CLAUDE.md` §2, `me/git-rules.md`, `me/tools.md`) names this project as the
  exception to the general rules.
- `hakim-134/.claude/settings.json` (`Bash(*)`) does nothing in auto mode, which ignores such
  broad rules; it only matters in the other permission modes.
- **Revisit when real players' data arrives** (sign-in goes public, `PLAN.md` Phase 3). Emails
  and Telegram IDs on the server are real privacy, under Uzbek law; the production database
  then gets its own rules.

## The auto-mode entries

For `~/.claude/settings.json`, merged into what is there (keep `"$defaults"`). Only the owner's
own message can add them: auto mode blocks Claude from widening its own permissions.
Check with `claude auto-mode config`.

```json
{
  "permissions": {
    "allow": ["ClaudeInChromeDomain(localhost:8130)", "ClaudeInChromeDomain(10.42.0.1:8130)"]
  },
  "autoMode": {
    "environment": [
      "$defaults",
      "**Organization**: one person, the owner: a backend developer with job projects and one hobby project, Shafaq Geo, on this laptop. The Shafaq Geo entries below apply only to work in ~/131/github.com/hakim-134/; everything else keeps the default rules.",
      "**Trusted repo — Shafaq Geo** (the owner's own hobby game; the owner's decision of 2026-10-24): sessions usually start in the project folder ~/131/github.com/hakim-134/, which is not itself a git repo. Treat its three repos as the session's trusted repo: geo-shafaq (the web game), api-geo-shafaq (the Go API) and _geoshafaq_claude (the project's knowledge base for Claude), all public on github.com/hakim-134, the owner's personal GitHub account. Each has one branch, main. Committing and pushing main of these repos when the owner says \"push\" (or p2r, git push) is the normal workflow and deploys nothing: no server pulls main by itself.",
      "**Data retention / declassification — Shafaq Geo**: there is no user data yet, and the project's keys are low-sensitivity development keys of a hobby project: geo-shafaq/.env.local (PUBLIC_YANDEX_KEY, a Yandex Maps browser key that ships inside the game's JavaScript by design, and GOOGLE_MAPS_KEY), ~/131/github.com/hakim-134/.envrc (the project's Telegram alert bot), and the password of the shared local Postgres, which Shafaq's local database URL uses. The owner allows Claude to read them, use them, print them in the transcript or chat, copy them into the project's gitignored env files, and build the browser key into the local web build. They never go into a git commit.",
      "**Key internal services — the owner's laptop Docker**: the shared containers postgres (postgres:16) and redis (redis:8) on the Docker network infra serve all of the owner's projects. For Shafaq Geo the owner allows: installing the PostGIS package (postgresql-16-postgis-3) in the postgres container; creating, migrating, filling, resetting and dropping databases named shafaq_* there (shafaq_lcl for the local game, shafaq_test_* for the integration tests); using redis database 1; building, running, recreating and removing Shafaq's own containers, images and volumes (names starting with shafaq-). Shafaq's local databases hold development data only. Every other database and container on this Docker belongs to the owner's other projects: never alter, stop or remove them.",
      "**Trusted internal domains — Shafaq Geo local game**: the web game on port 8130 and its API on port 8131 of this laptop, at localhost and at 10.42.0.1 (the laptop's own Wi-Fi hotspot address, which the owner's phone uses). Opening and driving them in Chrome to test the game is routine."
    ]
  }
}
```
