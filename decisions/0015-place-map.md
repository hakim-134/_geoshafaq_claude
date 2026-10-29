# 0015 — Our own map of borders for choosing a place; Yandex's for playing

- **Date:** 2026-10-29
- **Status:** accepted
- **Deciders:** the owner (asked for it), Claude (how)

## Context

The owner, 2026-10-29: *"I want to make it fully intuitive when selecting place: show the
Uzbekistan map, regions are clickable, if click get into it like zoom in and make that inner
region main, then show tumans; tumans are clickable as well, if click it is choose. When the
user stops, use that place."* And: *"I want to use patterns Uzbek people are used to, like the
map of Uzbekistan or the map of Tashkent."* The place picker was a page of signs and
statistics, one level at a time. The owner's UFA project has an SVG map of Uzbekistan
([P1028 §6](../P1028.md#6-stage-4-the-map-of-uzbekistan)).

## Options

1. Take the UFA project's SVG paths (Vue, 14 parts, districts as 13 MB of JSON).
2. **Draw our own from the borders the server already has** (OpenStreetMap, imported with the
   places: 14 parts, 181 districts, 24 cities, Yangi Toshkent included).
3. Yandex's map with the borders drawn on it.

## Decision

Option 2. `GET /v1/places/{slug}/map` draws a place's children in one frame (Web Mercator, the
longer side 1000, SVG paths from `geom_simple`, a point well inside each for its name; 42 KB
for the country, 9 KB for Tashkent). Names, progress and panorama counts stay in
`/v1/places/{slug}`. The game draws it as a flat, warm picture (`PlaceMap.svelte`); playing
stays on Yandex's map ([0012](0012-yandex-map.md)).

## Why

The slugs match our places, so progress and "O‘ynash" work without a mapping table; Yangi
Toshkent is there (the UFA data has 12 of Tashkent's 13 tumanlar); the license is
OpenStreetMap's, already credited ("Joy nomlari: © OpenStreetMap"). The UFA map gave the ideas:
the drill-down, the zoom, Tashkent as a round badge on the country's map.

## Consequences

- Neighbours are simplified one by one, not as a coverage, so a border can show a hair of gap
  at a large zoom; at the sizes the map is drawn it doesn't show. `ST_CoverageSimplify` is the
  way if it ever does.
- A new place level (mahallas, later) needs nothing new: the same endpoint draws it.
- OpenStreetMap's Uzbek names are sometimes Karakalpak, Russian-spelled or missing an o‘
  ("Ugrut", "Bozataw rayonı"); `uzFixes` in `internal/places/osm.go` corrects them by slug, so
  every import keeps the fix.
