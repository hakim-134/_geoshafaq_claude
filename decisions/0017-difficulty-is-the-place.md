# 0017 — Qiyinlik is how hard the place is to guess, and nothing else

- **Date:** 2026-11-02
- **Status:** accepted
- **Deciders:** the owner (what it means), Claude (how)

## Context

Oson, O‘rta and Qiyin came from v0: they set the scoring, took away hints, hid the map's names (Qiyin
played on the satellite) and hid the panorama's labels. The owner, 2026-11-02: *"this is only about
hardness of location to guess, not about avable maps of help or mst, just about how hard is ths
place to guess, That's it, no need to restrict some other things."*

## Options

1. Keep the scoring difference, drop the rest.
2. **Only the places change.** Every difficulty scores alike, with the same map, labels, hints and
   movement; each panorama has a hardness, and the difficulty picks by it.

## Decision

Option 2. `panoramas.hardness`, 0 to 1 (`RateHardness`, at `library.Tag`): 45% how far the nearest metro
station is (4 km and more: all of it), 40% how far the middle of the nearest town (12 km and more),
15% no named street. A difficulty is a slice of **this map's own** places: Oson the easiest 40%,
O‘rta the middle 60%, Qiyin the hardest 40% (`Map.PickAt`). When its slice is used up, any other
place: a difficulty never refuses a game.

## Why

A slice of each map means "Oson" works on any map, Tashkent's streets or the whole country: tested
over ten rounds each, hardness 0.26 against 0.48 on Toshkent ko‘chalari, 0.28 against 0.83 on Butun
O‘zbekiston. Rating by what we already have needs nothing new; it is a first guess at "hard".

## Consequences

- Oson used to score double: the same guess now gets fewer points there, and a score means the same
  on every difficulty. Old games keep their scoring; rooms and games from before have no difficulty.
- Everyone gets the panorama's labels (house numbers, shop names) and the map's names, the labels
  once Oson's alone. Hints and movement are the player's, under "Ko‘proq"; a player's saved choice
  keeps what it had.
- `rules.Rules.ScoreScale`, `PanoLabels` and `MapLabels` stay on the server for old games.
- Later: how far players really guess on a panorama is the honest measure. Rate by it once real
  games outnumber the test ones.
