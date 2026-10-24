# 0006 — Panoramas come from several providers behind one interface

- **Date:** 2026-10-22
- **Status:** superseded by [0008](0008-yandex-and-google.md) (the provider order; the one-interface design stays)
- **Deciders:** the owner (TODO 14: "one of our key things")

## Context

Yandex is the only large panorama source in Uzbekistan. Its free terms cap panorama views
at about 100 a day and forbid paid products, so one vendor can block or reprice the game.
Google has no official Street View there. Mapillary is free but thin. Panoramax had about
ten photos in the whole country on 2026-10-22, none in Tashkent.

## Decision

- The **server** owns a panorama library (provider, provider's id, position, places) and
  picks every round's panorama. Each provider is a Go adapter with capabilities (can
  move, hides coordinates, has a date) and a payload for the browser.
- The **browser** has one `PanoViewer` interface (mount, heading, restrict movement,
  destroy, errors). Each provider's SDK loads lazily, only when a round needs it.
- Order: Yandex (licensed when the free limit gets close), Mapillary, then our own 360°
  imagery later. A `demo` provider (a drawn test panorama) exists for development and
  tests, so they never spend Yandex views.

## Why

Adding a provider becomes one Go adapter, one TypeScript adapter and a pipeline run. The
game, scoring and maps never change for it.

## Consequences

- For Yandex the browser reports the panorama it actually opened; the server accepts it
  only near the library point it chose (120 m on street maps, 1 km elsewhere) and scores
  against it.
- Yandex panorama views are counted per day from day one. The worker warns at 80% of the
  free limit, so the license is bought before the key is blocked, not after.
