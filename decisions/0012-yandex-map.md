# 0012 — Yandex's map for guessing and results

- **Date:** 2026-10-26
- **Status:** accepted (built 2026-10-26); supersedes the map part of [0005](0005-stack.md)
- **Deciders:** the owner

## Context

The game showed Yandex panoramas but guessed on our own map: MapLibre with a self-hosted
Protomaps basemap built from OpenStreetMap (155 MB of tiles). The owner, asking for "only
Yandex" in the game, saw that map and said Yandex "has a truly deep and great map for
Uzbekistan and we need to use it". Yandex's free terms also say panoramas may not be shown
on third-party maps (risk R2 in `PLAN.md`).

## Decision

Every map in the game is Yandex's (JS API 2.1, the script the panoramas already load): the
guess map, the round result, the final summary. Above the guess map, v0's toolbar is back (the
owner: it "was very good, player friendly"): **Xarita / Sputnik / Gibrid**, remembered on the
device, and a button that keeps the map big on a computer. Hard rules ("no map labels") use
Yandex's satellite view only, the one Yandex map without place names. **Yandex's map is always
light, in dark mode too** (the owner, 2026-10-30: "Never use Yandex dark map … use light
Yandex maps all the time even game is in dark mode"; a CSS filter that darkened the tiles was
built in P1028 2.4 and removed the same day). MapLibre, Protomaps and the tile file are gone.

## Why

Yandex's map of Uzbekistan is the most detailed there is, it is the map players know, and
it settles R2.

## Consequences

- The game is smaller (no MapLibre, no 155 MB of tiles to host).
- Map loads count against the Yandex key, like the panoramas: part of the license quote.
- Place names in results (street, district, metro) still come from OpenStreetMap through the
  API, so the credit stays.
- Google day: a Google round brings a Google map behind the same guess-map component.
- **Yandex's "open in Yandex Maps" box stays** (checked 2026-10-30, P1028 2.4). The free key
  loads with `enterprise: false`, and on that tier Yandex shows the box ("Yandex Xaritada
  ochish", "Borish usuli") whatever `suppressMapOpenBlock` says. Yandex wants it there on the
  free tier, so the game doesn't hide it with CSS; it moves it: from the bottom left (where the thumb places
  pins and the result panel begins) to the top left of every map. The result's key moved to
  the bottom left. With the license (PLAN 6.1), check whether `suppressMapOpenBlock` works,
  and drop the move if it does.
