# 0016 — The place map draws whole places on shared borders, and cuts no place off

- **Date:** 2026-11-02
- **Status:** accepted
- **Deciders:** the owner (no place cut off; difficulty), Claude (how), on session 8's prompt and two taste reviews

Changes three things in [0015](0015-place-map.md), whose choice of our own map stands.

## Context

Session 8's prompt asks for neighbours simplified as a coverage. Reviews on 2026-11-02 found a
region's map a hatched rectangle with rounded corners, and green buttons that refuse: Xorazm is lit
with 2 panoramas, and the game wants 5. A first fix hid every place under 10 panoramas. The owner,
that day: *"dont cutoff places, players want to play all places also it might be someones home
place, so try to add more panaramas … if still not enough make that places name italic showing it
is has less locations, that's ok."*

## Options, and the decision

1. **Borders:** each shape simplified alone, or **as a coverage** (`ST_CoverageSimplify` over a
   place's children, by about 1.5 of the frame's units). Coverage.
2. **Frame:** cropped to what plays with the hatched rest cut off, or **the place whole**, in its
   own shape. Whole. Towns keep their dots and pills.
3. **A place with few panoramas:** refused, hidden, or **played, with its name in italics** (under
   10, the longest game; `fewPlaces` in the game). A game plays what the place has: ten rounds asked,
   six there, six rounds. Only a place with none says "Tez orada".

## Why

- The coverage costs nothing and pays twice: half the data (17 KB for the country, was 42), and
  1 km² of slivers over Tashkent gone, which had pushed names out of their shapes.
- People know their region by its shape; the owner asked to "see that region with its tumanlar".
  Buxoro's two lit places are small in a lot of desert; a pinch brings them close.
- A place may be someone's home. A short game there is worth more than a cleaner map.

## Consequences

- The whole map stays the frame because going close is one pinch away (the owner, the same day): a
  small place is read by zooming, not by cropping the map. So the two reviews' quarrel is settled.

- What Yandex has decides the rest. Its public coverage layer
  (`yandex.uz/maps/?l=stv,sta&ll=<lon>,<lat>&z=11`), looked at on 2026-11-02: dense in Samarqand,
  Buxoro with Kogon and Xiva, the road between some of them, a little in Nukus; nothing to be seen
  in the Farg‘ona valley or around Qarshi. A license adds no streets; those places wait for Google
  or our own camera (PLAN §4). 13 panoramas added that day, and there is room in those three cities,
  at `panorama.locate`'s cost: each call counts against the free key's ~100 a day and reaches only
  about 100 m (`scripts/playtest/probe.mjs`).
- `ST_CoverageSimplify` needs GEOS 3.12 or newer: the local PostGIS 3.6.4 and the server's image
  have it. Samarqand keeps one 7.6 km² overlap (its city and its district overlap in
  OpenStreetMap's data, so that border stays as drawn); `ST_CoverageClean` would mend it.
