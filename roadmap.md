# What's next

Only what the owner has said. Remove a line when it's done. The full plan is
`~/131/github.com/hakim-134/PLAN.md` (its checkboxes show what is built).

_Last checked: 2026-10-24._

## Now

- **The rebuild (v1)** is on `main` in both repos (pushed 2026-10-22): Phase 0 (free items), Phase 1
  (code side) and most of Phase 2 of the plan. A solo game plays end to end on a phone and a
  laptop, light and dark, scored by the server, on demo and Yandex panoramas.
- **Panoramas: Yandex only** for now. Google comes later, when the game shows potential
  ([decision 0008](decisions/0008-yandex-and-google.md)); the backend stays ready for it.
- Next: the queue in `PLAN.md` §5.0 ("Next up"); the owner hands tasks to sessions by number
  ("do 3.2"). First: 2.7 (Google-ready backend), then 3.2 (sign-in with Telegram and Google).

## The owner's to-dos

- Glance at the guest emoji list (`api-geo-shafaq/internal/players/players.go`).
- For v0 online meanwhile: the server's address and access ([deploy.md](deploy.md)), add
  `geo.shafaq.uz` to the Yandex key's allowed sites, copy the key file to the server by hand,
  point `geo.shafaq.uz` and `api.geo.shafaq.uz` at the server (DNS).

## Not decided yet

- The final name and address. `geo.shafaq.uz` is temporary.
- A separate test version (`dev`) once real players use it.
- Uzbekistan only, or other countries one day (the place tree starts at "country").
- When to add Google panoramas ("Google day" in `PLAN.md`): the owner decides, once the game shows
  potential.
