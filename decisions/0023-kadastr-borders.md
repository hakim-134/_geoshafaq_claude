# 0023 — Tashkent's (and Qibray's) mahalla borders: the state cadastre's data, used without a written yes, marked so it can be taken out

- **Date:** 2026-11-12; source changed 2026-11-20
- **Status:** accepted
- **Deciders:** the owner

## Context

P1111 0.2 found one near-full set of mahalla borders for Tashkent: the Kadastr agency's public
map layer (426 of the city's 585 mahallas). It is open to look at and carries no licence to
re-use. OpenStreetMap, which we may use, is half done and no district is whole
([research/P1111-mahallas.md](../research/P1111-mahallas.md)).

The owner called the agency for a week. Nobody answered, and on 2026-11-19 he asked for an
open, public source instead, so the work would not wait any longer.

A search on 2026-11-19 found no fully open and complete set: not on data.gov.uz, not in
OpenStreetMap, not in the world's border datasets (they stop at districts). It found one set
published openly: **github.com/pdlpad/SOATO**, under CC BY 4.0, with all 593 Tashkent shapes.
Its author does not say where they came from; they match the agency's own shapes, so it is
almost certainly the cadastre's data, republished. Its open licence is the publisher's word,
not the agency's.

## Options

1. Wait for the agency's written yes. P1111 3.3 stops until then.
2. OpenStreetMap only: four districts, each with holes.
3. The agency's own live layer (426), with OpenStreetMap laid in: six districts whole or nearly.
4. The open SOATO set, cleaned: all twelve old districts whole (585 of 585).

## Decision

**Option 4** (2026-11-20), keeping the rules first set for option 3 on 2026-11-12.

The owner, 2026-11-12: *"We are doing useful thing and as Uzbeks I think they would and will
allow this for us, so I want to keep going … if they disallow me we will remove all work
related to kadastr … and keep it in comments too, so we can see it easily."* And 2026-11-19:
*"I need to finish my project … we need to use something open source … something that's
public."*

So that "remove all of it" stays one small job and not a hunt:

1. **One word marks it: `KADASTR`.** Every line of code, script, migration, test or text that
   exists only because of this data has a comment that starts `KADASTR:` and names this
   decision. `grep -rn KADASTR` in the three repos must list all of it, and nothing else.
2. **Every border knows where it came from.** A mahalla's row says `soato` (or `osm` if any
   comes from OpenStreetMap later). Removing this data is one delete.
3. **The file stays out of git**, like the keys: the repos are public and git never forgets.
   The cleaned file lives in a gitignored folder and is loaded into the database by a script.
4. **The game credits it** where mahallas are shown: *"Mahalla chegaralari: SOATO ochiq
   to‘plami (CC BY 4.0)"*, with the link.
5. **Only the mahalla borders of Tashkent city and of Qibray** (the owner's home, added
   2026-11-20) are used, as P1111 3.3 needs. Nothing else of the set.

The cleaned file and the script that makes it: `~/131/github.com/hakim-134/tmp/P1111/mahallas/soato/`
(its `README.md`).

## If anyone objects

If the agency, or anyone with a right to the data, asks us to stop: delete the rows marked
`soato`, delete the gitignored file, remove every line `grep -rn KADASTR` finds, and 3.3 falls
back to OpenStreetMap only (holes said plainly on the screen) or moves to
[P1111 §11](../P1111.md#11-what-waits). Write it here. If the agency ever says yes, write that
here too, and the `KADASTR:` comments stay as plain source notes.

## Why

- The owner judges the risk small and the use good: a game that teaches people of Tashkent
  their own mahallas, from the state's own public data, with credit.
- The open set is the only complete one, it is published openly under an open licence, and
  the city's own book confirms it: every district has exactly the city's count of mahallas.
- Uzbekistan's copyright law frees official documents (article 8) and protects a database only
  where its selection is creative (article 7); the borders of every mahalla, as official
  decisions set them, are a fair case for "free to use". It is not settled, and nobody here is
  a lawyer: that is why the marking stays.

## Consequences

- P1111 3.3 builds all twelve old districts whole, and Qibray's 60; Yangi Toshkent says "Tez
  orada".
- The owner no longer needs the agency's answer for the game to go on.
- The risk is the owner's and is taken knowingly.
