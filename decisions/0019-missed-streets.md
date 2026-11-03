# 0019 — Streets I miss: each player's own private map, rewritten at each new game

- **Date:** 2026-11-02
- **Status:** accepted
- **Deciders:** Claude, on PLAN 8.5; the owner played it on 2026-11-03

## Context

PLAN 8.5: a map of the player's worst rounds, played until each street is learned and leaves the list.
"Everything playable is a map", so a game, its results and its panorama picking should all just work.

## Decision

- **One private map per player** (`miss-<player id>`). Its sources are rewritten at each new game: every
  street been on and not yet guessed within 500 m. Private maps answer "not found" to anyone else.
- **Framed as the street map.** It takes its box and size from "Toshkent ko‘chalari", or the guess map
  would frame the last street left.
- **One round a street.** Its rounds are capped at its streets, and the picker never brings a street back
  while another is unplayed (it used to, when nothing else was far enough from the earlier rounds).
- **It's practice.** It never becomes the home's sign, has no challenge button and sets no record: the
  streets were just shown to the player.
- **Only from my streets** (the owner, 2026-11-03): not under my map.

## Consequences

- Each player who plays it adds one row to `maps`. The catalog keeps at most about 500 in memory.
