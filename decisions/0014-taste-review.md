# 0014 — The taste review gates every change players see

- **Date:** 2026-10-28
- **Status:** accepted
- **Deciders:** the owner (asked for the skill), Claude (how it runs)

## Context

The owner tests Shafaq Geo by playing it, not by reading code ([0009](0009-full-access.md)).
The sessions that build its screens judged them by the code they had just written, and the
owner kept finding what a first-time player meets at once: eight things to look at before the
first street, two Tashkents that look the same, a room that needs "three steps" explained.
The owner, 2026-10-28: *"We need a skill of Steve Jobs, so it can check the product from the
browser and give feedback to the frontend agents."*

## Options

1. The builder checks its own work in the browser, as before.
2. The owner reviews every change.
3. **A separate review with taste**, by an agent that hasn't seen the work, from screenshots
   of the game played like a stranger, before the owner sees it.

## Decision

Option 3. The `steve-jobs` skill ([skills/steve-jobs](../skills/steve-jobs/SKILL.md)) reviews
from the browser, never from the code, and hands the builder ten points at most, the top three
**must**, ending in "Ship it" or "Not yet". The playtest script (`npm run playtest` in
`geo-shafaq`) plays the journeys on demo panoramas in a throwaway headless Chrome and saves the
screenshots, so a review costs minutes.

At the end of every task that changes what players see: build → docker up → the review in a
**fresh agent** (it gets the address, not the builder's notes) → fix the musts → review again →
report to the owner with the last verdict. The owner can also say "steve jobs" at any time.

## Why

A builder can't see its own screens fresh; the owner shouldn't be the first to find the
obvious. A fresh agent with a fixed bar (one green button, one tap to a street, two taps to
invite, short sentences, phone and dark mode) catches it before the owner plays.

## Consequences

- Every player-facing task costs one or two review rounds more (minutes, with the script).
- A task that changes a journey updates `geo-shafaq/scripts/playtest/playtest.ts` with it, or
  the next review plays the old screens.
- The first full review (2026-10-28) replaced the list of fixes in [P1028.md](../P1028.md) §1;
  what Stage 2 doesn't cover went into its 2.4.
- The review only advises; the owner's play and word still decide what ships.
