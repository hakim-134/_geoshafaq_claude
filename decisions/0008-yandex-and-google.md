# 0008 — Panoramas from Yandex and Google only; no open street imagery

- **Date:** 2026-10-23
- **Status:** accepted
- **Deciders:** the owner
- **Supersedes:** [0006](0006-panorama-providers.md) (its provider order; its one-interface design stays)

## Context

0006 put Mapillary second, after Yandex. An adapter for it was written but never tried.
The owner looked at Mapillary and similar open imagery (Panoramax, KartaView) and rejected
them: they look poor, and that is not something to give players. Google never announced
Street View for Uzbekistan, but GeoGuessr has Tashkent maps on Google (the owner has played
them), and the owner finds Google's imagery good.

## Options

1. Keep Mapillary second (0006).
2. **Yandex first, Google second**, more providers later; no open street imagery.

## Decision

Option 2.

- **Yandex** is the main provider. **Google** is the second. Our own 360° imagery stays a
  "later, maybe" (`PLAN.md` Phase 7). Mapillary, Panoramax and KartaView are not providers.
- The rest of 0006 stands: the server owns the panorama library and picks every round; one
  `PanoViewer` interface in the browser; each provider's SDK loads lazily; the `demo`
  provider for development and tests.
- **A Google round uses a Google guess map.** Google's terms (§3.2.3(e), last modified
  2026-08-26): "Customer will not … display Street View imagery and non-Google Maps on the
  same screen." So the guess map is an interface too: MapLibre for Yandex and demo rounds, a
  Google map for Google rounds.

## Why

The owner's call on quality: players see the panorama first, so it has to look like a
product. Yandex covers Uzbekistan best; Google is the second-best source there.

## Consequences

- The Mapillary adapter and its settings (`MAPILLARY_TOKEN`, `PUBLIC_MAPILLARY_TOKEN`,
  `shafaq-tools mapillary-audit`, the `mapillary-js` package) were removed on 2026-10-23.
- Google needs a Google Cloud project with billing and a key limited to our sites (the
  owner's). Pano IDs may be stored (Service Specific Terms), so they live in the library like
  Yandex points.
- Google's coverage is counted first: `shafaq-tools google` runs the free Street View
  metadata look-up (`source=outdoor`) near every library point and saves what it finds.
- Cost after the free tier: Dynamic Street View $14 per 1 000 (5 000 free a month) plus
  Dynamic Maps $7 per 1 000 (10 000 free): about 2¢ per Google round.
- **2026-10-24: Google waits.** Turning on billing asked for $50 up front, too much while the
  game is new. Until the owner says otherwise the game runs on **Yandex only**. The backend
  keeps the seams (the Google adapter, not enabled; `shafaq-tools google`; pano IDs in the
  library; per-provider caps), and the web app does nothing for Google. The steps for the day
  it comes are "Google day" in `PLAN.md`.
