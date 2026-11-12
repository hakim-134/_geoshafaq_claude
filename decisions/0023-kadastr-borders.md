# 0023 — Mahalla borders from the Kadastr agency, before its yes, marked so they can be taken out

- **Date:** 2026-11-12
- **Status:** accepted; the agency's answer is still open
- **Deciders:** the owner

## Context

P1111 0.2 found one near-full set of mahalla borders for Tashkent: the Kadastr agency's public
map layer (426 of the city's 585 mahallas; Yakkasaroy, Yangihayot and Mirzo Ulug‘bek complete).
It is open to look at and carries no licence to re-use. OpenStreetMap, which we may use, is
half done and no district is whole ([research/P1111-mahallas.md](../research/P1111-mahallas.md)).

The owner has been calling the agency. Nobody has answered yet.

## Options

1. Wait for the agency's written yes. P1111 3.3 (Tashkent's mahallas) stops until then.
2. OpenStreetMap only: four districts, each with holes.
3. Build from the agency's borders now, keep asking, and keep everything that comes from them
   easy to find and easy to remove.

## Decision

Option 3. The owner, 2026-11-12: *"We are doing useful thing and as Uzbeks I think they would
and will allow this for us, so I want to keep going … one day I will reach to them and if
(even though I dont think this might happen) they disallow me we will remove all work related
to kadastr … so we need to keep going right now, and keep it in comments too, so we can see it
easily."*

So that "remove all of it" is one small job and not a hunt:

1. **One word marks it: `KADASTR`.** Every line of code, script, migration, test or text that
   exists only because of this data has a comment that starts `KADASTR:` and names this
   decision. `grep -rn KADASTR` in the three repos must list all of it, and nothing else.
2. **Every border knows where it came from.** A mahalla's row says `kadastr` or `osm`. Removing
   the agency's borders is one delete; OpenStreetMap's stay.
3. **The agency's file stays out of git**, like the keys: it lives in a gitignored folder and
   is loaded into the database by a script. The repos are public and git never forgets, so a
   file committed once could not be taken back.
4. **The game says whose borders they are**, where mahallas are shown: the agency's name as
   the source, next to OpenStreetMap's.
5. **Nothing else of the agency's is used**: mahalla borders of Tashkent only, as P1111 3.3
   needs. Not its other layers.

## If the agency answers

- **Yes:** write the date and the words here, change the status to "accepted, permission
  given", and the `KADASTR:` comments stay as plain source notes.
- **No:** delete the rows marked `kadastr`, delete the gitignored file, remove every line
  `grep -rn KADASTR` finds, and P1111 3.3 falls back to OpenStreetMap only (four districts with
  holes, said plainly on the screen) or moves to [P1111 §11](../P1111.md#11-what-waits). Write
  it here.

## Why

- The owner judges the risk small and the use good: a game that teaches people of Tashkent
  their own mahallas, from the state's own public map, with credit.
- Waiting would stop a whole session for an answer that may take weeks.
- Marking costs almost nothing now and saves a hunt later.

## Consequences

- P1111 3.3 can be built in session 8 without waiting: six districts whole or nearly
  (Yakkasaroy, Yangihayot, Mirzo Ulug‘bek; with OpenStreetMap laid in, Olmazor, Mirobod,
  Yunusobod); the others say "Tez orada".
- Until the agency answers, this stays on the owner's list ([roadmap.md](../roadmap.md)).
- The risk is the owner's and is taken knowingly: the borders are shown in a public game
  before a written yes.
