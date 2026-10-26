# What's next

Only what the owner has said. Remove a line when it's done. The full plan is
[PLAN.md](PLAN.md) (its checkboxes show what is built).

_Last checked: 2026-10-26 (Phase 1 built: the server stack waits only for a server, see [deploy.md](deploy.md#a-v1-the-server-stack))._

## Now

- **The rebuild (v1)** is on `main` in both repos (pushed 2026-10-22): Phase 0 (free items), Phase 1
  (code side) and most of Phase 2 of the plan. A solo game plays end to end on a phone and a
  laptop, light and dark, scored by the server.
- **Yandex only** for now: panoramas *and* the map ([decision 0012](decisions/0012-yandex-map.md));
  players see nothing of any other provider (2026-10-26).
  Google comes later, when the game shows potential
  ([decision 0008](decisions/0008-yandex-and-google.md)); the backend stays ready for it.
- **Phase 1 is built** (pushed 2026-10-26): the whole server in one compose file with
  HTTPS, Grafana (metrics and logs), GlitchTip (errors from the server and from players'
  phones) and backups with a weekly checked restore, rehearsed on the laptop. Deploys by hand,
  no CI ([decision 0011](decisions/0011-server-stack.md)). It goes live when the server exists.
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
- For the server (v1, [deploy.md §A](deploy.md#a-v1-the-server-stack)): the server and its
  SSH access, four DNS names, and later an S3 bucket in Uzbekistan for backups.
- For v0 online meanwhile: the server's address and access ([deploy.md §B](deploy.md#b-v0-for-friends-plan-only)), add
  `geo.shafaq.uz` to the Yandex key's allowed sites, copy the key file to the server by hand,
  point `geo.shafaq.uz` and `api.geo.shafaq.uz` at the server (DNS).

## Not decided yet

- The final name and address. `geo.shafaq.uz` is temporary.
- A separate test version (`dev`) once real players use it.
- Uzbekistan only, or other countries one day (the place tree starts at "country").
- When to add Google panoramas ("Google day" in `PLAN.md`): the owner decides, once the game shows
  potential.
