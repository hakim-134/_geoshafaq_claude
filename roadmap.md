# What's next

Only what the owner has said. Remove a line when it's done. The full plan is
`~/131/github.com/hakim-134/PLAN.md` (its checkboxes show what is built).

_Last checked: 2026-10-22._

## Now

- **The rebuild (v1)** is on `main` in both repos (pushed 2026-10-22): Phase 0 (free items), Phase 1
  (code side) and most of Phase 2 of the plan. A solo game plays end to end on a phone and a
  laptop, light and dark, scored by the server, on demo and Yandex panoramas.
- Next in the plan: finish Phase 2 (Mapillary, once there is a token), then Phase 3
  (sign-in with Google and Telegram, many identities per user).

## The owner's to-dos

- A free Mapillary token (mapillary.com/dashboard/developers), for the coverage count and the
  second provider.
- Glance at the guest emoji list (`api-geo-shafaq/internal/players/players.go`).
- For v0 online meanwhile: the server's address and access ([deploy.md](deploy.md)), add
  `geo.shafaq.uz` to the Yandex key's allowed sites, copy the key file to the server by hand,
  point `geo.shafaq.uz` and `api.geo.shafaq.uz` at the server (DNS).

## Not decided yet

- The final name and address. `geo.shafaq.uz` is temporary.
- A separate test version (`dev`) once real players use it.
- Uzbekistan only, or other countries one day (the place tree starts at "country").
