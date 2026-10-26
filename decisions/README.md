# Decision log — Shafaq Geo

Short records of real decisions: cases where a reasonable person would have chosen
differently, and the reasoning would be forgotten in three months.

Format: one file per decision, `NNNN-short-slug.md`, with Date, Status, Deciders,
Context, Options, Decision, Why and Consequences. Never rewrite an accepted one; supersede
it with a new file and mark the old one `superseded by NNNN`.

## Index

- [0001](0001-front-back-split.md) — split UzbGuessr into `geo-shafaq` and `api-geo-shafaq` (accepted)
- [0002](0002-deploy-branches.md) — one branch, `main`, for now (accepted)
- [0003](0003-kb-on-github.md) — the knowledge base lives on GitHub as `hakim-134/_geoshafaq_claude` (accepted)
- [0004](0004-rebuild-from-scratch.md) — rebuild from scratch in the same two repos, v0 kept as a tag (accepted)
- [0005](0005-stack.md) — Go + Postgres/PostGIS + Valkey, SvelteKit + MapLibre (accepted)
- [0006](0006-panorama-providers.md) — several panorama providers behind one interface (superseded by 0008)
- [0007](0007-hosting.md) — Docker Compose on servers in Uzbekistan, a CDN in front (accepted; its local half superseded by 0010)
- [0008](0008-yandex-and-google.md) — panoramas from Yandex and Google only; no open street imagery (accepted)
- [0009](0009-full-access.md) — full access for Claude; the owner tests the product, not the code (accepted)
- [0010](0010-local-docker.md) — the local game: two containers on the shared Postgres and Redis (accepted)
- [0011](0011-server-stack.md) — the server stack: one compose file deployed by hand, no CI; Caddy, Prometheus/Grafana, Loki, GlitchTip, pgBackRest (accepted)
- [0012](0012-yandex-map.md) — Yandex's map for guessing and results, instead of MapLibre on OpenStreetMap (accepted; supersedes the map part of 0005)
