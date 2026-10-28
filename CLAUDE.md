# Shafaq Geo — brief for Claude

Shafaq Geo is the owner's own game: you land on a street in Uzbekistan, look around, and
guess on the map where you are. Alone, or live with friends. Mostly played on phones.

> The owner's general rules are in `~/131/git.sriss.uz/abdullayevsh/_claude/`. Where they
> differ from this brief (git, keys, Docker), **this brief wins in this project**.

## The owner here: a CEO who tests the product

- **A pet project with real hopes.** Today fewer than 10 people play, all friends. The hope
  is a product thousands use (`PLAN.md` aims at 10 000 online).
- **The owner does not read code here.** They are the CEO and the designer: they open the
  game in the browser, on the laptop and on the phone, play it, and decide "is this what I
  wanted?". That is the test that counts.
- **So work is done when it runs:** up in the local Docker and played by you in the browser
  (phone size, light and dark). Then report in product words: what changed, the link, what
  to try. No code tours.
- **Don't get stuck.** Nothing under "Full access" needs a question. Ask about the product,
  not about permission.

More: [owner.md](owner.md).

## Full access

The owner, 2026-10-24: *"You have all access to Git, like databases, Docker, containers,
code, secrets, API keys, everything."* *"Privacy is no matters here … What matters is making
the product."* *"When I say git push, you need to push to main branch, simple."* There are no
real secrets here: no players' data yet, only development keys.

| Area | Without asking, Claude may | Details |
|---|---|---|
| Code | read and change everything under `~/131/github.com/hakim-134/` | [access.md §1](access.md#1-code) |
| Git | read-only git any time; on **"push"**, commit and push `main` (`cld20261028` while the owner works there, since 2026-10-28) | [access.md §2](access.md#2-git) |
| Keys | read and use every key and password of this project, and show them in chat. They only stay out of git | [access.md §3](access.md#3-secrets-and-keys) |
| Docker | build, run, recreate and remove Shafaq's own containers and images | [local.md](local.md) |
| Databases | in the shared `postgres`: create, migrate, fill, reset and drop the `shafaq_*` databases; in the shared `redis`: database 1 | [local.md §2](local.md#2-the-shared-postgres-and-redis) |
| The rest | install packages and tools, search the web, test the game in Chrome | [access.md §5](access.md#5-everything-else) |

Still the owner's call, asked in one line: spending money; the live server once it exists;
the owner's other projects on this laptop ([access.md §6](access.md#6-still-the-owners-call)).

## The owner's words

| The owner says | Claude does |
|---|---|
| **"push"** (also `p2r`, "git push") | commit the uncommitted work in the repos here and push `main`, or `cld20261028` while the owner works there ([access.md §2](access.md#2-git)) |
| **"docker up"** (also "update docker") | rebuild and restart the two local containers from the current code, play it once, give the links ([local.md §3](local.md#3-docker-up)) |
| **"do 3.2"** (or "do P1028 2.1") | that task from `PLAN.md` (or [P1028.md](P1028.md)); tick it there and update [roadmap.md](roadmap.md) |

## Who plays

People of Uzbekistan, most of them Muslims: honest, simple, sincere people who want to grow
and keep away from what is wrong. The game is **not religious** and never mentions religion,
but it stays **decent and clean**: no gambling, nothing vulgar, no tricks.
More: [players.md](players.md).

## Why it exists

**The owner wants to learn Tashkent**, the city they live in: real main streets they can
later drive or take the bus to. Not yards, villages or the outskirts.
New ideas should serve this first.

## What the owner cares about

- **Its own game, not a copy.** It grew out of BeloGuessr (a Belarus game). The first
  version felt "copied and low-effort"; the owner wants it done "our own way".
  Keep the credit to BeloGuessr, but nothing else Belarus-shaped.
- **Feels like a game, not a form.** Clear, quick, fun. The owner's own example: a red glow
  at the screen edges when time runs low, "like low health in a game".
- **Easy to understand.** A friend should be able to play without being told how.
- **Made for friends.** Sharing a room, a result or a picture should be one tap.
- **Uzbek first**, then English and Russian.

Look and feel: [design.md](design.md).

## How to work here

- The owner builds **both** the game pages and the server here. Frontend work is real work.
- Short, plain answers. One recommendation, not a list of options.
- **If an idea is hard, say so and offer the closest thing you can do.** Don't drop it,
  don't force it.
- Keep it simple while it is still "just an idea". No extra machinery.
- Try every change the way players use it: on a phone, in light and dark.

## Domains

| What | Address |
|---|---|
| The game | `geo.shafaq.uz` |
| The server (the game API) | `api.geo.shafaq.uz` |

These are the current domains. They may change later, or may not; the owner hasn't
decided. So keep them easy to change: don't spread them around, and mention them when a
change would make a later rename harder.

## A few firm rules

- **Keys never go into git.** The repos are public; bots that scrape GitHub would burn the
  free Yandex quota and the game would stop. Keys live in gitignored files
  ([access.md §3](access.md#3-secrets-and-keys)).
- **Players see Yandex only** (the owner, 2026-10-26): Yandex panoramas *and Yandex's map*
  ([decision 0012](decisions/0012-yandex-map.md)); no provider choice, no test panoramas, no
  other map or provider anywhere in the game. The server stays multi-provider: `PROVIDERS`
  is what players get, `TEST_PROVIDERS` (`demo`) plays only in games that ask for it
  ([local.md §1](local.md#1-what-runs)).
- The free Yandex key allows ~100 panorama views a day. Claude tests on `demo` through the
  hidden switch ([local.md §1](local.md#1-what-runs)); real Yandex rounds only when checking
  Yandex itself.
- One branch, `main` ([decision 0002](decisions/0002-deploy-branches.md)).
- No database or cache containers of our own: the shared `postgres` and `redis` only
  ([decision 0010](decisions/0010-local-docker.md)).
- How the code works is in each code repo's `README.md`, not here.

## Where things are

| What | Where |
|---|---|
| Code | `~/131/github.com/hakim-134/geo-shafaq` (the game), `api-geo-shafaq` (the server) |
| How the owner works; what a report looks like | [owner.md](owner.md) |
| What Claude may do; keys; git | [access.md](access.md) |
| The game on this laptop (Docker) | [local.md](local.md) |
| Who plays | [players.md](players.md) |
| Look and feel | [design.md](design.md) |
| What's next | [roadmap.md](roadmap.md) |
| The full plan (from prototype to product) | [PLAN.md](PLAN.md) |
| The order now (2026-10-28): what comes next, from the owner's intentions | [P1028.md](P1028.md) |
| What the owner buys before launch | [before-launch.md](before-launch.md) |
| Putting it on the server | [deploy.md](deploy.md) |
| In-game UI: HUD over the panorama, map, overlays | [skills/game-ui-frontend](skills/game-ui-frontend/SKILL.md) |
| HUD clarity; game feel (guess, line, score); aesthetic direction | [game-ui-design](skills/game-ui-design/SKILL.md); [game-designer](skills/game-designer/SKILL.md), [playfulness-fun](skills/playfulness-fun/SKILL.md); [frontend-design](skills/frontend-design/SKILL.md) |
| Why things are the way they are | [decisions/](decisions/README.md) |

If something here is no longer true, fix it in the same change.
