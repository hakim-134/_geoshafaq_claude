# What's next

Only what the owner has said. Remove a line when it's done. The full plan is
[PLAN.md](PLAN.md) (its checkboxes show what is built).

_Last checked: 2026-10-28 (the home with one Play button; the taste review and the playtest; Phase 5 built: live rooms that survive a deploy; Phase 4 built: places, settings, compasses; Phase 3 built: accounts, profiles, the new home; Phase 2 done; Phase 1 built: the server stack waits only for a server, see [deploy.md](deploy.md#a-v1-the-server-stack))._

## Now

- **The rebuild (v1)** is on `main` in both repos (pushed 2026-10-22): Phase 0 (free items), Phase 1
  (code side) and Phase 2 of the plan (done 2026-10-26, with 2.7: the server is ready for Google
  and keeps every provider inside a daily budget). A solo game plays end to end on a phone and a
  laptop, light and dark, scored by the server.
- **Yandex only** for now: panoramas *and* the map ([decision 0012](decisions/0012-yandex-map.md));
  players see nothing of any other provider (2026-10-26).
  Google comes later, when the game shows potential
  ([decision 0008](decisions/0008-yandex-and-google.md)); the backend stays ready for it.
- **Phase 1 is built** (pushed 2026-10-26): the whole server in one compose file with
  HTTPS, Grafana (metrics and logs), GlitchTip (errors from the server and from players'
  phones) and backups with a weekly checked restore, rehearsed on the laptop. Deploys by hand,
  no CI ([decision 0011](decisions/0011-server-stack.md)). It goes live when the server exists.
- **Phase 3 is built** (2026-10-26): sign in with Telegram (the bot's link or its QR code,
  and by itself inside Telegram), many ways in per player, merging, guests keep everything,
  profiles with the streets learned, reports and bans (`shafaq-tools`). The game's pages were
  redesigned with it: the home is a lobby with the maps as Uzbek road signs
  ([design.md](design.md)), plus the profile, a player's page and "All games".
  [Decision 0013](decisions/0013-accounts.md).
- **Phase 4 is built** (2026-10-26): pick any region, city or district (`/places`) and play
  just there, with progress per place; rounds and time as sliders (endless, no limit); hints as
  a rule (how many, per round or game, region → district → circle, cost); Move / Stay / Still;
  three compasses. Most of the country has no panoramas yet (only v0's pools): the location
  pipeline (PLAN §4) is what fills it.
- **Phase 5 is built** (2026-10-26): live rooms with friends on the new engine. "Do‘stlar
  bilan o‘ynash" on the home opens a room; the code (shown as a number plate), a link, Telegram
  or a QR code brings friends in; the host starts, goes on, changes the rules, hands the room on
  or removes a player. Every player keeps the game in their history. A deploy in the middle of a
  round goes unnoticed (checked with 12 simulated phones).
- **The redesign** (2026-10-27, branch `redesign` in both code repos, on the owner's word;
  not on `main` yet): the game's screens rebuilt for players, the game UI skills applied. One
  tap from a sign to a game, a calmer round screen, the first game's tips, the reveal with
  stars and the street's own plate, the streets collected at the end, sounds
  ([design.md → Game feel](design.md#game-feel-the-redesign-2026-10-27)); then the short
  profile with its own pages, "my streets" (the server's one addition: `GET /v1/me/streets`),
  friends mode's three steps, and sharing as a link. Waits for the owner to play it; it goes into `main` on their word.
- **The taste review** (2026-10-28, P1028 1.1 and 1.2): the `steve-jobs` skill plays the game
  like a stranger and hands exact fixes; `npm run playtest` in `geo-shafaq` plays every journey
  on demo panoramas and saves the screenshots. It now gates every change players see
  ([decision 0014](decisions/0014-taste-review.md)). The first review said "Not yet": its ten
  points are P1028's new §1, the leftovers in 2.4.
- **One Play button** (2026-10-28, P1028 2.1, branch `cld20261028`): the home is one sign
  (where you'll play; a tap opens the place picker, which now starts with the ready-made maps),
  one quiet settings line, one green "O‘ynash" (one tap to a street), then one quiet row of
  links, "Do‘stlar bilan o‘ynash" (a room at once) and "Kodim bor". "Toshkent" left the home
  (unlisted on the server; old games and rooms keep it). On a laptop the right half is
  "Sizning Toshkentingiz": the 13 tumanlar with their names, gold where the player has been,
  the chosen place marked. The review's leftovers (the picker, the end page) are in 2.4.
- **Rooms that explain themselves** (2026-10-28, P1028 2.2 a and b): the lobby is one big
  "Do‘stlarni chaqirish" (the phone's share sheet opens by itself after the tap where it can; a
  laptop copies the link and shows the QR), the plate and a QR icon, friends popping in as
  faces with a sound, one card for place and rules, "Boshlash · 3" at the bottom. The end is a
  podium on every phone, "Siz 2-o‘rindasiz", one "Yana o‘ynash" that takes everyone in, a quiet
  "Natijani ulashish" and ⋯. Next: the next round by itself (2.2 c) and the hint's cost (2.3).
- Next: [P1028.md](P1028.md) (2026-10-28), the order from the owner's intentions: rooms, the
  hint's cost, the small fixes, the result map, the map of Uzbekistan; then PLAN's Phases 8, 6 and 9 (8.3 and 3.5 are in its Stage 6).
- **The local game** runs in Docker for the owner to try, at <http://localhost:8130>, rebuilt
  by every `docker up` ([local.md](local.md)).

## The owner's to-dos

- **The game's own Telegram bot** (BotFather, free; e.g. @ShafaqGeoBot, with the game's
  picture and a short description). Sign-in uses `tmp67bot` ("tmp") until then. Put its token
  in `TELEGRAM_BOT_TOKEN` (`~/131/github.com/hakim-134/.envrc` for the laptop). The laptop and
  the server need **different** bots: only one program can read a bot's messages.
- **Google sign-in:** Google Cloud console → APIs & Services → Credentials → OAuth client ID
  (type Web; authorised JavaScript origins `http://localhost:8130` and later
  `https://geo.shafaq.uz`), free. Its client id goes in `GOOGLE_CLIENT_ID`; the Google button
  appears by itself.
- **Look at the guest emojis** (70, `api-geo-shafaq/internal/players/players.go`) and the
  new road-sign home; say what to change.
- **Try a room** (Phase 5): open one on the laptop, join from the phone with the QR code.
  The words to check: "Do‘stlar bilan o‘ynash", "xona egasi", "Xonadan chiqarish", and the
  code as a number plate.
- **Try Phase 4**: the place picker, the settings, the three compasses (tap the compass in a
  game). The words to check: "Joyida" (no move), "Surat" (NMPZ), "Rasmli" (the picture
  compass), and the compass letters Sh / Shq / J / G‘. West on the picture compass: 🌵 now or
  🤠 (one line: `MNEMONIC` in `geo-shafaq/src/lib/compass.svelte.ts`).

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
