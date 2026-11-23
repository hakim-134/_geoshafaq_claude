# 0027 — Several places in one game are one mixed map; each place in its turn, scored by its own size

- **Date:** 2026-11-23
- **Status:** accepted
- **Deciders:** the owner (P1111 1.3: pick as many places as he likes, at any level); Claude for how

## Context

P1111 1.3 lets a player pick Yunusobod, Buxoro and Samarqand for one game. The task asks that
"a game, a room and a challenge hold a list of places", that each round picks one of them
"each equally likely", and that a round is scored by the size of its own place.

## Options, and the decision

1. **Where the list lives:** a new `places` list on games, rooms and challenges (every create,
   every room snapshot, every challenge copy, history and leaderboards changed), or **one map
   made of the list**. Chosen: one map. `POST /v1/maps/mix {parts}` gives an unlisted map
   `mix-<hash>` whose parts are the places' own maps (`place-<slug>`) or ready-made maps
   (`tashkent-streets`, `historic`, `uzbekistan`). Games, rooms, challenges, "Yana o‘ynash",
   history and best scores keep working on a map's slug, untouched. The same places in any
   order give the same map. A place inside another picked one is folded into it, and one place
   left is that place's own map.
2. **"Each equally likely":** a fair coin each round, or **each in its turn** (no place comes
   twice before every place with panoramas left has come once, in an order the game's seed
   shuffles). Chosen: in turn. Each place is still equally likely in every round, and with a
   fair coin a five-round game of three places misses one of them about 4 times in 10.
3. **Scoring:** by the size of everything mixed, or **by the round's own place**. Chosen: its
   own place, as the task says. Each round stores its size (`rounds.size_km`,
   `challenge_rounds.size_km`, `sizeKm` in a room's Valkey snapshot). Old rounds have none and
   use the game's size, so their scores read back unchanged. Hints use the round's size too.
4. **The picker's list:** may it be empty? **No.** It always holds one item, and the last one
   has no ×. A new player's list is the default ("Toshkent ko‘chalari"), which isn't their
   choice: their first "Tanlash" (or first ready map) replaces it, and every later one adds.
   This was first built as "always adds", and the taste review found a stranger who picked
   Buxoro playing Tashkent too. A place holding picked ones replaces them; a place inside a
   picked one replaces it (the player narrows down). Up to eight, each in its own colour
   (`--pick-1…8`). The ready-made maps that are no one place on the map ("Tarixiy shaharlar",
   "Butun O‘zbekiston") are added from a "+" at the end of the list. Tashkent is "Toshkent
   ko‘chalari", as before.
5. **What the green key plays:** always the list, or **what is on screen**. Chosen: on
   screen. While the map shows a playable place that isn't in the list (or inside a picked
   one), "O‘YNASH" plays that place alone; everywhere else, the list. A small second line in
   the key names what it plays ("Samarqand viloyati", or "Yunusobod · Buxoro · Samarqand").
   Session 3's taste review had found the green key ignoring the screen, and this one found it
   again: one filled key and a quiet "Tanlash" weren't enough, while the key named nothing.

## Consequences

- `/places` and `/places/<slug>` are gone; an old link opens the home's map at that place
  (`/?at=<slug>`).
- A mix is a row in `maps` (unlisted) with `pick = {"parts": […]}`, and `map_sources` holds its
  places, so lists of games find its face without loading it. Metrics count mixes as "mix".
- A mix's name is its parts' names joined ("Yunusobod tumani, Buxoro viloyati, …"), and its
  face is the smallest place holding them all (often Uzbekistan). The room and history show
  that as they show any map. A screen made for a mix (all the faces) can come later.
- Codex's review (2026-11-23) noted two edge cases left as they are, both only when picked
  parts overlap, which the picker prevents: a panorama shared by two parts counts as a turn
  for both, and a district folded into "Toshkent ko‘chalari" loses its few panoramas off the
  named streets.
