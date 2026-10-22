# Shafaq Geo — brief for Claude

Shafaq Geo is the owner's own game: you land on a street in Uzbekistan, look around, and
guess on the map where you are. Alone, or live with friends. Mostly played on phones.

> The owner's general rules (git, tools, languages) are in
> `~/131/git.sriss.uz/abdullayevsh/_claude/`. This file is only about this game.

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

## How to work with the owner here

- Here the owner builds **both** the game pages and the server. Frontend work is real work.
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

- The Yandex map key is private (`geo-shafaq/.env.local`; v0: `config.js`). Never show it,
  never commit it.
- The free Yandex key allows ~100 panorama views a day. Develop and test on the `demo`
  provider; open real Yandex rounds only when checking Yandex itself.
- One branch, `main`. Commit or push only when the owner says so ("push" / `p2r` =
  commit and push `main`).
- How the code works is in each code repo's `README.md`, not here.

## Where things are

| What | Where |
|---|---|
| Code | `~/131/github.com/hakim-134/geo-shafaq` (the game), `api-geo-shafaq` (the server) |
| Look and feel | [design.md](design.md) |
| What's next | [roadmap.md](roadmap.md) |
| The full plan (from prototype to product) | `~/131/github.com/hakim-134/PLAN.md` |
| Putting it on the server | [deploy.md](deploy.md) |
| Why things are the way they are | [decisions/](decisions/README.md) |

If something here is no longer true, fix it in the same change.
