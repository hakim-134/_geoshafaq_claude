# 0022 — The finished game: four tabs round the map of Uzbekistan; a fixed finish line for November

- **Date:** 2026-11-11
- **Status:** accepted
- **Deciders:** the owner, in a long talk with Claude (his words: [P1111-owner-words.md](../P1111-owner-words.md))

## Context

By 2026-11-03 most of [P1028](../P1028.md) was built, and the owner still felt the game was
*"kind of going, kind of not finishing"*: about 70% of what he wanted, *"but it's not the
thing."* Some of what was built came from a loose word taken literally (he said "banner" and
meant a small picture of the place inside its parent). And the plan kept growing, so the end
kept moving. He wants the game finished in November 2026 and off his mind.

## Options

1. Go on down P1028's list (soft launch, the daily challenge, the map maker, launch).
2. Polish what exists and call it finished.
3. Stop, write down the product as the owner sees it, and build exactly that, in a fixed order,
   with nothing added on the way.

## Decision

Option 3, as [P1111.md](../P1111.md).

- **The product is four tabs:** O‘yin (alone, or one against one with a stranger), Do‘stlar
  (rooms), O‘rganish (learning and testing: Uzbekistan deep, the world's basics, Tashkent's
  buses), Profil. In the first three, our map of borders is the main thing on the screen.
- **Place-in-parent** (the parent's shape with the place filled) is every place's face. Banners
  are removed, from the game and the API.
- **A game can span several places** of any level. Each is equally likely per round; a round is
  scored by its own place's size.
- **The whole look changes**, to a bold game look in GeoGuessr's spirit, made our own. The
  road-sign style of [design.md](../design.md) goes. The owner approves it on three screens
  before it spreads.
- **Photos** for signed-in players, kept small in Postgres; emojis stay the fallback.
- **One against one is a health duel**, as in GeoGuessr, not a fixed number of rounds. Rated
  games are the whole of Uzbekistan and for accounts only. An empty queue is said plainly.
- **Sessions are led by Fable**, which decides and checks; Opus agents build, Sonnet agents do
  the plain work (P1111 §4).
- **The finish line is fixed.** New ideas in November go to P1111 §11.

## Why

- A list that grows cannot be finished. A picture can: the owner can look at the game and say
  yes or no.
- The owner thinks in pictures, and so will the players: a shape inside its parent is known at
  a glance where a name is not.
- The look goes first so no screen is drawn twice. Ranked goes last because it is the only part
  the free Yandex key cannot carry.
- Learning needs no panoramas, so the largest new part of the product has no daily limit and
  no cost.

## Consequences

- Supersedes the home of P1028 2.1 (one Play button) and the style part of design.md. The
  place map of [0015](0015-place-map.md) and [0016](0016-place-map-whole.md) stays and becomes
  the centre.
- P1028's open stages (soft launch, the daily challenge, the map maker, launch) wait until
  P1111 is done. The Yandex license is bought after it, as the owner said.
- Teams, large games of strangers, mahallas beyond Tashkent and Barg for quizzes are put off on
  purpose.
- Two parts depend on data not yet checked (mahallas, bus routes). Session 1 checks them before
  anything is built on them.
- The stranger modes are built but stay switched off on the live server until the license.
