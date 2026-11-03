# 0020 — Players' maps (parked): a map is its sources; public waits for a person

- **Date:** 2026-11-02
- **Status:** accepted
- **Deciders:** Claude, on PLAN 8.5, 8.1, 8.2 and the owner's session prompts; the owner can say otherwise

## Context

PLAN 8.1: a player makes a map from places, a drawn area or streets; private, unlisted or public.
8.2: pages, likes, best scores, tags, search, a moderation queue. 8.5: a map of the player's worst
rounds. The game already had `maps` and `map_sources` (a place, a street or a panorama), so "everything
playable is a map" could carry all three.

## Decision

- **A drawn area is a source** (`map_sources.area`), not a list of panoramas copied in: the map fills
  by itself as the library grows. One loop per map; a loop that crosses itself is made valid.
- **The library says how many.** `POST /v1/maps/preview` counts on the players' providers; under 3
  places, or 3 streets on a map of streets alone (one round a street), there is no button. Green dots on the draw map show where panoramas are, so nobody
  draws over nothing. The dots cost no panorama views.
- **Rounds stay inside.** A player's map looks for its panorama within 300 m and doesn't move the
  search point (official maps: 1 km and a jitter); a map of streets alone plays as the street map.
- **Who sees it.** Private: only its owner, others get "not found". Unlisted: anyone with the link.
  Public: waits in the queue; until a person approves it, it plays by its link and isn't in the
  search. Renaming or retagging an approved map sends it back to the queue.
- **The queue is `shafaq-tools queue | approve | reject`** for now (the first part of 6.4), like reports
  and bans. The API reads the state fresh: it takes effect at once. A rejection's reason shows its owner.
- **Tags are a fixed eight**, chosen, not typed: nobody has to moderate free words. Names go through
  the same filter as players' names.
- **Best scores are points per round**, a player's best game, games of at least 3 rounds (or the whole
  map when it is smaller): a 3-round game and a 10-round game compare, one lucky round isn't a record.
- **A small map scores on at least 5 km.** On its own 1 km, a guess 100 m off would score next to nothing.
  streets were just shown to the player.

## Why

- Sources over copies because a mahalla drawn today should get tomorrow's panoramas, and the same query
  serves every map.
- A person in the queue because the players are families ([players.md](../players.md)) and a public map
  is what strangers see; the name filter alone can't judge a map.
- Default unlisted because the game is made for friends: the link is what gets sent.

## Consequences

- A deleted map stays in the table (`deleted_at`): finished games point at it.
- A map's sources can't be edited yet, only its name, who sees it and its tags. Draw a new one.
- Link previews exist for challenges only; a map's own link in Telegram shows no card. The challenge
  link is what the Phase 8 loop sends.
- Nobody is told when a map waits in the queue: someone has to run `shafaq-tools queue`.
