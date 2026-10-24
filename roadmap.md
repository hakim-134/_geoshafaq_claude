# What's next

Only what the owner has said. Remove a line when it's done. The full plan is
`~/131/github.com/hakim-134/PLAN.md` (its checkboxes show what is built).

_Last checked: 2026-10-24 (Phase 0 finished: what is left is buying, see [before-launch.md](before-launch.md))._

## Now

- **The rebuild (v1)** is on `main` in both repos (pushed 2026-10-22): Phase 0 (free items), Phase 1
  (code side) and most of Phase 2 of the plan. A solo game plays end to end on a phone and a
  laptop, light and dark, scored by the server, on demo and Yandex panoramas.
- **Panoramas: Yandex only** for now. Google comes later, when the game shows potential
  ([decision 0008](decisions/0008-yandex-and-google.md)); the backend stays ready for it.
- Next: the queue in `PLAN.md` §5.0 ("Next up"); the owner hands tasks to sessions by number
  ("do 3.2"). First: 2.7 (Google-ready backend), then 3.2 (sign-in with Telegram and Google).
- **The local game** runs in Docker for the owner to try, at <http://localhost:8130>, rebuilt
  by every `docker up` ([local.md](local.md)).

## The owner's to-dos

- Yandex's own count of our requests: developer.tech.yandex.ru → Connect API → Developer's
  Account API, and put its key in `YANDEX_CABINET_KEY` (and a bot in `TELEGRAM_ALERT_TOKEN` /
  `_CHAT` for the warning). Then measure requests per round ([before-launch.md](before-launch.md)).
- Check where the HostKey VPS is: `curl -s ipinfo.io/country` on it (law: the accounts
  database must be in Uzbekistan).
- Let auto mode trust this project: add the entries in
  [decision 0009](decisions/0009-full-access.md#the-auto-mode-entries) to
  `~/.claude/settings.json` (or tell a session to).
- For v0 online meanwhile: the server's address and access ([deploy.md](deploy.md)), add
  `geo.shafaq.uz` to the Yandex key's allowed sites, copy the key file to the server by hand,
  point `geo.shafaq.uz` and `api.geo.shafaq.uz` at the server (DNS).

## Not decided yet

- The final name and address. `geo.shafaq.uz` is temporary.
- A separate test version (`dev`) once real players use it.
- Uzbekistan only, or other countries one day (the place tree starts at "country").
- When to add Google panoramas ("Google day" in `PLAN.md`): the owner decides, once the game shows
  potential.
