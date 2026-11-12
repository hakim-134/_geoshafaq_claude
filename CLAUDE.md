# Shafaq Geo — brief for Claude

Shafaq Geo is the owner's own game: you land on a street in Uzbekistan, look around, and
guess on the map where you are. Alone, or live with friends. Mostly played on phones.

In November 2026 it is being finished as **four tabs round the map of Uzbekistan**: O‘yin
(play), Do‘stlar (rooms with friends), O‘rganish (learn the regions, districts, mahallas, the
world, Tashkent's buses) and Profil. What "finished" is, and the order: [P1111.md](P1111.md).

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
| Git | read-only git any time; on **"push"**, commit and push `main` | [access.md §2](access.md#2-git) |
| Keys | read and use every key and password of this project, and show them in chat. They only stay out of git | [access.md §3](access.md#3-secrets-and-keys) |
| Docker | build, run, recreate and remove Shafaq's own containers and images | [local.md](local.md) |
| Databases | in the shared `postgres`: create, migrate, fill, reset and drop the `shafaq_*` databases; in the shared `redis`: database 1 | [local.md §2](local.md#2-the-shared-postgres-and-redis) |
| The rest | install packages and tools, search the web, test the game in Chrome | [access.md §5](access.md#5-everything-else) |

Still the owner's call, asked in one line: spending money; the live server once it exists;
the owner's other projects on this laptop ([access.md §6](access.md#6-still-the-owners-call)).

## The owner's words

| The owner says | Claude does |
|---|---|
| **"push"** (also `p2r`, "git push") | commit the uncommitted work in the repos here and push `main` ([access.md §2](access.md#2-git)) |
| **"docker up"** (also "update docker") | rebuild and restart the two local containers from the current code, play it once, give the links ([local.md §3](local.md#3-docker-up)) |
| **"steve jobs"** | the taste review of what runs now, in a fresh agent ([skills/steve-jobs](skills/steve-jobs/SKILL.md)) |
| **`+w/b&as`** (added to a task) | with before & after screenshots: photograph the game before the first edit; the task ends with one page of what was asked and every change, before next to after ([skills/before-after](skills/before-after/SKILL.md)) |
| **"do P1111 3.2"** (or "do P1028 2.1", "do 3.2") | that task from [P1111.md](P1111.md) (or [P1028.md](P1028.md), or `PLAN.md`); tick it there and update [roadmap.md](roadmap.md). A P1111 task is done the way [P1111 §4](P1111.md#4-how-each-session-works) says |

## Who plays

People of Uzbekistan, most of them Muslims: honest, simple, sincere people who want to grow
and keep away from what is wrong. The game is **not religious** and never mentions religion,
but it stays **decent and clean**: no gambling, nothing vulgar, no tricks.
More: [players.md](players.md).

## Why it exists

**The owner wanted to learn geography, found GeoGuessr, and wanted to play it in their own
country.** Google barely covers Uzbekistan; Yandex covers it widely. The owner, 2026-11-11:
*"I knew I'm not alone … who doesn't know his country well enough, just lives, goes to work …
But life is more than that. You should be curious about your country."*

- **For all Uzbeks**, *"a lot of people, not just my friends"* ([players.md](players.md)).
- **Show, don't type.** *"I'm a really visual person. I want to represent and show things."*
  Shapes on a map are remembered; lists of names are not. So our map of borders is the heart
  of every screen, and a place's face is its **place-in-parent** picture: the parent's whole
  shape with the place filled in ([P1111 §5](P1111.md#5-the-three-building-blocks)).
- **Useful in life.** Where Buxoro is, which district is which, where bus 67 goes. Uzbekistan
  goes deep (*"it's our nation, it's our place"*); the world gets the basics.
- **Tashkent first**, the city the owner lives in: real main streets they can later drive or
  take the bus to. Not yards, villages or the outskirts.
- **Rivalry between people who know each other.** Friends first, strangers for rating second.

The owner's own words, whole: [P1111-owner-words.md](P1111-owner-words.md). New ideas should
serve these. **In November 2026 nothing new is added:** the finish line is fixed in
[P1111.md](P1111.md) ([decision 0022](decisions/0022-four-tabs.md)); a new idea goes to its
[§11](P1111.md#11-what-waits).

## What the owner cares about

- **Its own game, not a copy.** It grew out of BeloGuessr (a Belarus game). The first
  version felt "copied and low-effort"; the owner wants it done "our own way".
  Keep the credit to BeloGuessr, but nothing else Belarus-shaped.
- **Feels like a game, not a form.** Clear, quick, fun. The owner's own example: a red glow
  at the screen edges when time runs low, "like low health in a game".
- **One thing at a time** (Steve Jobs's way): one screen, one job, one main button. Fewer
  things, each one right; when a new thing replaces an old one, the old one goes.
- **Easy to understand.** A friend should be able to play without being told how.
- **Made for friends.** Sharing a room, a result or a picture should be one tap.
- **Uzbek first**, then English and Russian.

Look and feel: [design.md](design.md). Its road-sign style is being replaced by a bolder game
look ([P1111 1.1](P1111.md#-11-the-new-look)); until design.md is rewritten (session 3), the
new look's rules are P1111 §7 and [research/P1111-references.md](research/P1111-references.md).

## How to work here

- The owner builds **both** the game pages and the server here. Frontend work is real work.
- Short, plain answers. One recommendation, not a list of options.
- **If an idea is hard, say so and offer the closest thing you can do.** Don't drop it,
  don't force it.
- Keep it simple while it is still "just an idea". No extra machinery.
- Try every change the way players use it: on a phone, in light and dark.
- **P1111 sessions have one lead and many hands** (the owner runs them on Fable): the lead
  decides, briefs and checks by playing; Opus agents build; Sonnet agents do the plain work
  ([P1111 §4](P1111.md#4-how-each-session-works)).

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
- **The Kadastr agency's mahalla borders are used before its yes**
  ([decision 0023](decisions/0023-kadastr-borders.md)). Everything that exists because of them
  carries a `KADASTR:` comment, every row its source, and the agency's file stays out of git,
  so it can all come out in one go.
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
| **The order now (2026-11-11): the finished game, in 15 sessions** | [P1111.md](P1111.md); one prompt per session: [P1111-prompts.md](P1111-prompts.md) |
| What the owner wants, in their own words (2026-11-10/11) | [P1111-owner-words.md](P1111-owner-words.md) |
| What was checked before building: the three model games, the data for mahallas, buses and the world | [research/](research/) |
| The order before it (2026-10-28); its open stages wait for P1111 | [P1028.md](P1028.md) |
| The full plan (from prototype to product) | [PLAN.md](PLAN.md) |
| What the owner buys before launch | [before-launch.md](before-launch.md) |
| Putting it on the server | [deploy.md](deploy.md) |
| The taste review ("steve jobs"): play it like a stranger, hand exact fixes | [skills/steve-jobs](skills/steve-jobs/SKILL.md), [decision 0014](decisions/0014-taste-review.md) |
| Before & after pictures of a task (`+w/b&as`) | [skills/before-after](skills/before-after/SKILL.md) |
| In-game UI: HUD over the panorama, map, overlays | [skills/game-ui-frontend](skills/game-ui-frontend/SKILL.md) |
| HUD clarity; game feel (guess, line, score); aesthetic direction | [game-ui-design](skills/game-ui-design/SKILL.md); [game-designer](skills/game-designer/SKILL.md), [playfulness-fun](skills/playfulness-fun/SKILL.md); [frontend-design](skills/frontend-design/SKILL.md) |
| Why things are the way they are | [decisions/](decisions/README.md) |

If something here is no longer true, fix it in the same change.
