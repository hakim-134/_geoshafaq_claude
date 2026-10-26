# Shafaq Geo — The Plan

From a working prototype to **the product**. Built from [TODO.md](TODO.md), the current code of
both repos, and research (sources at the end).

_Written: 2026-10-22, updated 2026-10-26. Status: being built. ☑ = done, ◐ = partly done (the note
says what is left). Progress: Phase 0 (done; the paid items wait for their time), Phase 1 (built and
rehearsed; it goes live with the server), Phase 2 (done 2026-10-26), Phase 3 (built 2026-10-26; Google sign-in waits for its client id, the owner's). Pushed to `main` on 2026-10-22; `v0` tags pushed._

**Panoramas now: Yandex only** (the owner, 2026-10-24). Google comes later, when the game shows
real potential (a month or more). The backend is built so adding Google is a small job
(§4, "Google-ready backend"); the web app does nothing for Google until then. **Players see only
Yandex** (the owner, 2026-10-26): no provider choice, no test panoramas, no other provider named.

**How to use this plan.** Every task has a number (`3.2`). The owner hands one task, or a few, to a
session ("do 3.2"); the session does it, ticks it here (☑ or ◐ with a note) and updates the
knowledge base's roadmap. The order to take them in is [§5.0 Next up](#50-next-up).

---

## 0. Goal in one paragraph

A phone-first geo game about Uzbekistan, Tashkent first, that people play to **learn the
streets they live on**. Guests can play at once; accounts keep history, progress and
purchases. Panoramas come from **several providers** behind one interface. The first target is
**10 000 players online at once** on a small, cheap, boring setup. Room to grow to
600–700K later is left as **seams in the design**, not built now.

## 1. What the research changed

These findings decide the order of the plan. Check them before anything else.

| # | Finding | What it means |
|---|---|---|
| R1 | **Yandex free terms cap Panorama Display at 100 requests a day** (§6.1.2) and the free API **"may not be used in projects requiring payment"** (§4.1.1). Data may be cached **≤ 30 days** (§5.1.5). Only Yandex's own statistics count (§4.3); Yandex may suspend or block the key **without notice** (§6.7, re-checked 2026-10-26). Breaking the limits again and again leads to a **permanent block**. | The product cannot run on the free key: not at 10K players, not with a shop, and not with a stored location library. A **commercial Yandex license is a phase-0 task.** Even v0 for friends will hit 100/day quickly. |
| R2 | Yandex terms also say panoramas may not be shown "on third-party cartographic materials" (§6.1.1). | Settled (2026-10-26): Yandex rounds use **Yandex's own map** for guessing and results (decision 0012). |
| R3 | **Yandex is the only big panorama source for Uzbekistan.** Google has some (R4). 2GIS has no panoramas. Yandex re-shot Tashkent in 2026 (~130K new photos). | Multi-provider is a **business-survival** feature, not only a nice one: one vendor can block or reprice us. |
| R4 | **Google Street View**: Google announced no coverage of Uzbekistan, but GeoGuessr has Tashkent maps on Google (the owner has played them), so there is some; how much is Google's own and how much is uploaded by people is unknown until the scan counts it. Its terms (last modified 2026-08-26) say: **"Customer will not … display Street View imagery and non-Google Maps on the same screen"** (§3.2.3(e)). Pano IDs **may** be stored (Service Specific Terms). Price: Dynamic Street View 5 000 free a month (~160 a day), then $14 per 1 000; Dynamic Maps 10 000 free, then $7 per 1 000 (re-checked 2026-10-26). Metadata look-ups are free. | Google is **provider #2, later** (the owner, 2026-10-24: Google billing wants $50 up front; too much while the game is new). The backend stays ready for it (§4). When it comes: a **Google round uses a Google guess map**, coverage is counted first with the free metadata look-up, and a Google round costs ~2¢ after the free tier. |
| R5 | **Uzbek personal-data law (art. 27-1)**: data of Uzbek citizens must be stored on servers **physically in Uzbekistan** and the database registered in the state register. | Accounts (emails, Telegram IDs) mean the **database must be hosted in Uzbekistan**. Check where the current HostKey VPS is. Static files and imagery can sit on a CDN. |
| R6 | **Telegram Login is now OpenID Connect** (Authorization Code + PKCE, `oauth.telegram.org`, client ID/secret from @BotFather). Mini Apps sell digital goods in **Telegram Stars**. | Google and Telegram both fit one OIDC code path. A Telegram Mini App is a strong channel in Uzbekistan; its shop pays in Stars. |
| R7 | **GeoGuessr**: custom maps (Pro only), challenge links, Duels (6 000 HP), Battle Royale, Move / No move / NMPZ. **WorldGuessr**: free map making, tens of thousands of community maps, 1v1 ranked with ELO; source is public but **PolyForm Noncommercial** (read, don't copy). | User maps and challenge links are the growth engine of both. Free map making is what beat GeoGuessr's paywall. |

## 2. Decisions (one recommendation each)

| Topic | Decision | Why |
|---|---|---|
| Rebuild? | **Yes, from scratch**, in the same two repos. Tag the current code `v0` and keep it as the reference (room logic, scoring, the Tashkent street data tool). | v0 is client-scored, localStorage-only, one provider hard-wired. Every TODO item touches all of that. |
| Repos | Keep **`api-geo-shafaq`** (Go: API, live games, workers, data tools, migrations, the OpenAPI contract) and **`geo-shafaq`** (web app). | Decision 0001 still holds: separate deploys. The web app generates its client from the API's contract. |
| Backend | **Go**, one modular monolith: `cmd/api`, `cmd/worker`, `cmd/tools`. stdlib `net/http` routing, **pgx + sqlc**, **goose** migrations, **oapi-codegen** (contract first), `log/slog`, **River** (Postgres job queue), gorilla/websocket. | The owner's language. One binary handles 10K players easily. River means no extra queue server. |
| Database | **PostgreSQL 17 + PostGIS**. **Valkey** (Redis-compatible) for live-room snapshots, rate limits, presence. | PostGIS does place lookup, coverage and map-making queries. Valkey keeps rooms alive across deploys. |
| Web app | **SvelteKit + TypeScript**, built as a static SPA (adapter-static), PWA. **Yandex's map** for guessing and results (the same JS API as the panoramas; satellite on hard rules). Until 2026-10-26 MapLibre with a self-hosted Protomaps basemap (decision 0012). (Google rounds, later, will need a Google map: R4, "Google day".) | Small bundles for phones on mobile data; simple for a backend developer; Yandex knows Uzbekistan's streets best. |
| Panorama viewers | One **`PanoProvider` adapter** per provider: Yandex JS API 2.1 now; **Photo Sphere Viewer** for `demo` (and our own imagery, later); Google Maps JS API (`StreetViewPanorama`) on "Google day". | See §4. The game never talks to a provider directly. |
| Auth | Own sessions (opaque token, hashed in Postgres, HttpOnly cookie). **Google OIDC**, **Telegram OIDC**, **Telegram Mini App `initData`**, Telegram bot deep-link login. Many identities per user. | No JWT puzzles; one OIDC code path; logout and "sign out everywhere" just work. |
| Scoring | **Always on the server**, solo too. `score = 5000 · e^(−10·d / D)`, where `D` is the map's size (bbox diagonal), generalising v0's `scaleKm`. One Go package, the web app only displays it. | Coins, leaderboards and history are worthless if the browser decides the score. Removes the score.go / game.js duplicate. |
| Hosting | **Docker Compose**, no Kubernetes. Two servers **in Uzbekistan** (app + db), **Cloudflare** (or similar) CDN for the web app, map tiles and our own imagery. | Enough for 10K (see §6); law R5; cheap; the owner can run it alone. |
| Branches | Revisit decision 0002 before launch: `dev` + `main`(prod), `dev.geo.shafaq.uz`. | Real players + a shop = no testing on prod. |

> Recorded as decisions 0004–0008 in `_geoshafaq_claude/decisions/`.

## 3. The core model

Everything playable is a **Map**. "Toshkent ko‘chalari", "Samarqand", a user's "My mahalla"
and the daily challenge are all maps; the four v0 areas become four official maps.

```text
Place ──< Place                 country → region (viloyat) → district/city (tuman/shahar) → (later: mahalla)
  │                              name uz/ru/en, polygon, outline SVG, banner?, size D
Panorama  (provider, provider_id, lat/lon, heading, taken_at, place_ids[], quality, status)
Map ──< MapSource                 a map = places and/or hand-picked panoramas and/or streets
  │     default Rules, owner (official | user), visibility, likes, plays
Rules     rounds, time, movement (move | no move | NMPZ), hints (count, type), compass on/off,
          providers (list | random), scoring D        ← one struct for solo, rooms, challenges
Game ──< Round ──< Guess        every game kept: who, map, rules, seed, each round and guess
Challenge = Map + Rules + fixed panoramas (seed), shared by link, own leaderboard
User ──< Identity (google | telegram | …)   ── Session
     ── Profile (name, emoji avatar, frame) ── Wallet ──< LedgerEntry ── Inventory ──< Item
```

- **Panoramas belong to providers, not maps.** A map points at places; the server picks a
  panorama from the library at round start. "Random provider" = pick among providers that cover
  that place.
- **The server picks the panorama** (v0 lets the host's browser pick it). The client gets
  only what its viewer needs (§4).
- **Places** come from OSM admin boundaries (`admin_level` 4 = regions, 6 = districts) and city
  polygons, ODbL with credit. The outline SVG is generated from the simplified polygon. The
  banner is optional (Wikimedia Commons photo, with credit).

## 4. The panorama-provider architecture (key feature)

```text
                 ┌──────────── server ─────────────┐        ┌────────── browser ──────────┐
 data pipeline → │ Panorama library (PostGIS)       │  round │ PanoViewer adapter           │
 (per provider)  │  provider, id, pos, heading, …   │ ─────▶ │  yandex | demo (google later) │
                 │ Provider registry: capabilities  │  token │  mount, heading, restrict,   │
                 └──────────────────────────────────┘        │  destroy, errors              │
                                                             └──────────────────────────────┘
```

**Server side, `provider` package.** Each provider has:
- `Capabilities`: can move? can hide coordinates? has date? has heading? licence/credit text.
- `Discover(area)`: finds candidate panoramas (pipeline only, never during a game).
- `Validate(pano)`: is it still there (periodic re-check job; Yandex data may be cached ≤ 30
  days unless the license says otherwise).
- `RoundPayload(pano)`: what the client gets. Yandex needs a position (it leaks to cheaters);
  our own imagery gets an **opaque signed URL** (no coordinates).

**Browser side, one TypeScript interface.** `mount(el, payload, rules)`, `heading$` (feeds the
compass), `restrict(move | noMove | nmpz)`, `destroy()`, `onError`. Adapters load their SDK
lazily, so a player on Yandex never downloads the Google script.

**The guess map belongs to the provider when its terms say so.** Google forbids Street View next
to a non-Google map (R4), so a Google round brings its own guess map (Google Maps JS API) behind
the same `GuessMap` interface. Yandex rounds use Yandex's map (the owner, 2026-10-26: "Yandex
has a truly deep and great map for Uzbekistan"; it also settles R2).

**Provider order:**
1. **Yandex**, commercial license once the free limit gets close. **The only provider for now.**
2. **Google, later** (the owner's call, when the game shows potential): the panoramas it has in
   Uzbekistan (the scan counts them), with a Google guess map. See "Google day" after Phase 10.
3. **Own imagery**, later: a 360° camera on the main streets of Tashkent, served from our CDN,
   viewed with Photo Sphere Viewer. Fresh, no per-view fee, the only cheat-proof provider.
4. Later, others. Adding one = one Go adapter + one TS adapter + a pipeline run.

**Google-ready backend.** What the server keeps in place so Google is a small job later. The web
app does nothing for Google until "Google day".

| | Seam | Where |
|---|---|---|
| ☑ | Library keyed by `(provider, ref)`; Google's pano IDs may be stored (R4) | `panoramas` table |
| ☑ | The round payload carries either a point to search near (Yandex) or the provider's id (Google) | `provider.View` (`Near` / `Ref`) |
| ☑ | A Go adapter for Google, written but **not enabled** (`PROVIDERS` has no `google`) | `internal/provider/google.go` |
| ☑ | The coverage scan, ready to run: `shafaq-tools google` (free metadata look-ups) | `internal/library/google.go` |
| ☑ | The round picker only takes enabled providers; games record each round's panorama, so its provider | `internal/maps`, `rounds` |
| ☑ | Two tiers: `PROVIDERS` (what players get, counted on the menu) and `TEST_PROVIDERS` (only in games that name them: `demo` for tests, or Google tried quietly before players see it) | `provider.Registry`, config |
| ☑ | A capability "needs its own guess map", sent with the round as `guessMap` (`yandex`, `google`; absent = any map), so the web can switch maps later (task 2.7) | `provider.Capabilities`, OpenAPI |
| ☑ | Views counted, warned and **capped per provider per day**, not only Yandex: `DAILY_CAPS` (default `google=160`); a provider at its cap gives way to the game's others, a started game always finishes, a new game with nothing left gets "today's panoramas are used up" (task 2.7) | `provider_usage`, worker |

**Location pipeline** (`cmd/tools`, River jobs, admin review):
OSM roads inside a place (main roads weighted up: trunk/primary/secondary/tertiary) → probe each
provider for panoramas near the points → quality checks (indoor, tunnel, duplicates, too far from
the road) → tag with places via PostGIS → human review queue in the admin → `active`.

## 5. The plan

Ordered by dependency. Each phase ends with something usable. ☐ = task, ☑ = done, ◐ = partly done,
**Done when** = the check.

### 5.0 Next up

One line = about one session. Take them top-down; skip a line only if the owner says so.

| # | Tasks | What the session delivers |
|---|---|---|
| 1 | **4.3, 4.4** | Rounds and time as sliders; hints as a rule (0…N, type, cost). |
| 2 | **4.5, 4.6** | The three compasses; Move / No move / NMPZ finished. |
| 3 | **4.1, 4.2** | Place picker (region → district, outline SVG) and progress per place. |
| 4 | **5.1, 5.2** | Live rooms on the new engine, surviving a redeploy (Valkey snapshots). |
| 5 | **5.3–5.5** | Room joining (code, link, QR, Telegram), host tools, limits. |
| 6 | **8.3, 3.5** | Challenge links, and "challenge a friend" from a finished game. |

**Not in the queue on purpose:** 1.6 (CI) is not wanted now; 1.7–1.8 are built and go live with the server, and Phase 6 waits for it (the owner's); 0.3 waits until
Yandex views near the free limit; Phase 9 waits for a legal entity; Google day and Phase 7 wait for
the owner's word.

### Phase 0 — Unblockers

Money is not the blocker (the owner, 2026-10-22): the owner buys the Yandex license as soon as
real use nears the free limit. So nothing here waits; the paid items are bought **when needed, at
the latest before launch** (Phase 6). Only selling needs a legal entity (Phase 9).

**Now (free):**

- ☑ **0.1** Write decisions 0004–0007 (rebuild, stack, providers, hosting) in the knowledge base.
- ☑ **0.2** **Count Yandex panorama views per day** (a metric from day one) and tell the owner at ~80% of
  the free limit (~100 a day). Going over **again and again** gets the key blocked for good (R1), so
  the license is bought before that, not after. Tests use a fake provider, never Yandex.
  _2026-10-24: only Yandex's own count decides (free terms §4.3), and the browser calls Yandex
  more than once a round, so the worker also reads Yandex's count from the Developer's Account
  API (`YANDEX_CABINET_KEY`); one warning a day from whichever count gets there first. Days run
  by Moscow time, as Yandex's do._

**When the free limit gets close, at the latest before launch (the owner buys):** each one is
worked out in `_geoshafaq_claude/before-launch.md` (prices, what to ask Yandex, where to host,
how to register the database, which company), so it is a short job when its time comes.

- ☐ **0.3** **Yandex commercial license.** Get a quote for the expected volume (§6: around 2–6M panorama
  views a day at the 10K peak). Ask: storing panorama positions, a panorama next to an OSM map
  (R2), a paid shop in the product.
- ☐ **0.4** **Hosting in Uzbekistan** for the database (R5); pick the provider; register the personal-data
  database.

**Before the shop (needs a legal entity):**

- ☐ **0.5** **Legal entity** for selling (needed for Payme/Click, and for the Yandex contract).

- **Done when:** the free items are done. The paid items are checked again at Phases 6 and 9.
  _Done 2026-10-24. Found on the way: the Yandex Basic license starts at $10 000 a year for 2.5M
  requests, far below §6's 10K-player volume, so the quote decides how many Yandex rounds a day
  the game can afford, and task 2.7's daily cap holds it there._

> Meanwhile v0 may go online for friends only, as `deploy.md` says, knowing the free key allows
> ~100 panorama views a day.

### Phase 1 — Skeleton

- ☑ **1.1** Tag `v0` in both repos; start the new layout on `main` (or on `dev`, if 0002 is revised).
  _Tagged and pushed. v0's files are in `_v0/` of each repo. Branches stay `main` (0002, revisited
  before launch)._
- ☑ **1.2** API: Go module layout, config from env, `slog`, health/ready endpoints, graceful shutdown.
- ☑ **1.3** OpenAPI contract file + oapi-codegen (Go) + openapi-typescript (web).
- ☑ **1.4** Postgres + PostGIS + Valkey in `docker compose` for local and server; goose migrations; sqlc.
- ☑ **1.5** Web: SvelteKit + TS, design tokens from `design.md` (flag colours, girih, Unbounded/Onest,
  light/dark), i18n uz/en/ru from day one, PWA shell.
- ☐ **1.6** CI (GitHub Actions): lint, test, build images; deploy to dev on push.
  _Not now (the owner, 2026-10-24, again 2026-10-26): **no CI, no pipelines, no `.github/` folder**
  in any repo until the owner asks. The workflows were removed from both repos. `make lint` and
  `make test` (API), `npm run lint`, `check`, `test` (web) run by hand._
- ☑ **1.7** Observability: Prometheus metrics, Grafana, Loki logs, error tracking (GlitchTip, self-hosted).
  _2026-10-26: the whole server in `api-geo-shafaq/docker-compose.yml` (decision 0011): Caddy,
  Prometheus → Grafana with the "Shafaq Geo" dashboard, Alloy → Loki, GlitchTip for the API (every
  Error log line) and the browser (a ~1 KB reporter). Deployed by hand: `deploy/deploy.sh` on the
  server, `scripts/deploy.sh` for the game. Rehearsed on the laptop, then removed._
- ◐ **1.8** Backups: pgBackRest to off-site storage, plus a tested restore.
  _2026-10-26: pgBackRest in the db container: WAL archived all the time, full on Sundays,
  differential nightly, encrypted, to S3-compatible storage; a checked restore every Sunday;
  failures and the weekly "restore OK" on Telegram. Rehearsed with MinIO as the S3: restored
  copy matched live row for row. Left: the owner picks the storage, in Uzbekistan (law R5);
  until then backups stay on the server's disk._
- **Done when:** an empty app deploys to dev, with metrics, logs and a restored backup.
  _Everything but the server itself was proven on the laptop (2026-10-26); the check is
  repeated on the server's first deploy (`deploy.md` §A)._

### Phase 2 — Game core + provider #1 (parity with v0, solo)

- ☑ **2.1** `place` package: import regions + districts + Tashkent from OSM; outline SVG; size `D`.
- ☑ **2.2** Panorama library schema + `provider` package + **Yandex adapter** (server + web).
- ☑ **2.3** Pipeline v1: re-create v0's pools (2 356 Tashkent street points, cities, whole country) as
  library rows with places attached.
- ☑ **2.4** Rules struct + validation; official maps = the four v0 areas.
- ☑ **2.5** Solo game API: start game → server picks round panoramas (seeded, no repeats, min distance)
  → guess → server scores → next. Timers enforced by the server with a grace period.
- ☑ **2.6** Web: menu, game screen, guess map (Yandex's map since 2026-10-26; MapLibre + PMTiles
  before), round result (street, district, metro,
  like v0), final summary, share card.
- ☑ **2.7** **Google-ready backend** (server only, small): the two open seams in §4: the "own guess map"
  capability in the round payload, and per-provider daily caps with fall-back in the picker. No
  web work.
  _2026-10-26: both seams built (§4). The cap counts rounds handed out, which is less than
  Yandex's own count, so a Yandex cap meant to keep the free key safe must sit well below 100.
  The web got only the player's message for a game that cannot start ("Bugungi panoramalar
  tugadi. Ertaga yana keling!"). Found on the way and fixed: Russian street names put the type
  first, as the map does ("улица Фурката", not "Фурката улица"; adjectives stay:
  "Чиланзарская улица"), and English place names have one form ("Yunusabad District",
  "Samarkand")._
- **Done when:** a solo game plays end-to-end on a phone, light and dark, three languages, scored
  by the server, on Yandex and `demo`.
  _Done 2026-10-26: demo games in uz (phone, light), en (phone, dark), ru (laptop); one Yandex
  round on a phone in dark; all scored by the server, no console errors._

### Phase 3 — Players: guests, accounts, history (TODO 2–6)

- ◐ **3.1** **Guest by default** (TODO 6): first visit creates a guest user + session silently. Emoji avatar
  from a curated list (50–100, reviewed for taste); the name is the same emoji + 2 digits, `🐼_42`.
  Names are not unique (100 emojis × 100 numbers = 10 000 names), so the user ID tells players
  apart. No sign-in wall anywhere. _Done; the emoji list (70) wants the owner's review._
- ◐ **3.2** Sign-in with **Google** and **Telegram** (OIDC), **Telegram bot** deep-link, Telegram Mini App
  `initData` (TODO 3).
  _2026-10-26: Telegram through the bot's deep link (a link on the phone, a QR code on the
  laptop; works on any address, localhost included) and the Mini App's `initData`, both built
  and tested. Google sign-in (Google's button, ID token checked on the server) is built and
  stays hidden until `GOOGLE_CLIENT_ID` is set: the owner makes the OAuth client (free). The
  Telegram login widget is not needed: the bot's link does the same without a fixed domain.
  Left: the owner's own bot instead of `tmp67bot` (`TELEGRAM_BOT_TOKEN`), and the Mini App
  button in BotFather once the game is on https._
- ☑ **3.3** **Many identities per user** (TODO 4): link any number of Google and Telegram accounts; unlink
  while ≥ 1 remains; identity already owned by another user → offer to merge (confirm on both).
  _Done: "confirm on both" = the player proves the other account (signs in with it) and then
  says yes on a card that shows both; the other account's devices stay signed in, to the
  merged one._
- ☑ **3.4** Guest → account upgrade keeps everything (history, progress, coins).
  _Done: a guest that signs in becomes the account; a guest that signs in to an existing
  account moves into it with its games. No coins yet (Phase 9); the merge moves whatever the
  user owns._
- ◐ **3.5** **Game history** (TODO 5): every game and round stored; "My games" list; one game page with
  the round map replay; "play this again" / "challenge a friend" from it.
  _Stored; the last games on the home and the profile, all of them on "All games"; a finished
  game opens by its link with the map, also for others ("⚽_90's game", their page one tap
  away, "Play this map"); "challenge a friend" waits for Phase 8._
- ☑ **3.6** Profile page: name, avatar, stats, streets learned.
  _Done: `/me` (change name and avatar, ways to sign in, sign out here or everywhere) and every
  player's page `/u/<id>`. "Learned" = a guess within 500 m of the street at least once; the
  profile shows learned and seen out of the 185 streets, games, rounds, best, average,
  spot-on rounds, the best game on each map, the last games._
- ☑ **3.7** Moderation basics: name filter (uz/ru/en), report button, admin ban.
  _Done: the filter reads both scripts and digits for letters, and keeps out staff-like names;
  Report on a player's page (rude name, cheating, other); the admin is the command line for
  now: `shafaq-tools reports | ban | unban` (a banned player can look but not start games)._
- **Done when:** a guest plays, signs in with Telegram on the phone, links Google on the laptop,
  and sees the same history on both.
  _2026-10-26: played through with Telegram on both devices (the bot's Start simulated in the
  database; the bot's side has its own test) and with Google in the integration test; Google in
  the browser waits for the client id._

### Phase 4 — Places, settings and game feel (TODO 9–11, 13)

- ☐ **4.1** **Place picker** (TODO 11): country → region → district/city, each card with name, outline SVG,
  banner (if any), panorama count, the player's progress. "Start narrow, go wide": suggest the
  next wider place after a good score.
- ☐ **4.2** **Progress per place**: streets/districts seen and mastered (v0's "0 / 185 ko‘cha", generalised).
- ☐ **4.3** **Analog settings** (TODO 13): rounds as a slider 1–20 + "endless"; time as a slider
  10 s – 10 min with soft snaps + "no limit".
- ☐ **4.4** **Hints as a rule** (TODO 9): 0, 1, 2 … N per game, or per round; the type (region / district /
  circle); the cost. Rooms and challenges carry the host's hint rule.
- ☐ **4.5** **Compass** (TODO 10): three styles as a player preference, fed by the viewer's heading —
  classic (red north), modern (GeoGuessr-like strip), mnemonic (N 🐻‍❄️, S 🐧, E ☀️, W 🤠).
  "No compass" is a rule, for hard games.
- ◐ **4.6** Movement rule: Move / No move / NMPZ, offered only where the provider can do it.
- ☑ **4.7** Game feel from `design.md`: low-time red glow, sounds, score-bar fill.
- **Done when:** a player picks Chilonzor, sets 7 rounds, 1:30, 1 hint, mnemonic compass, no move,
  and the game follows all of it.

### Phase 5 — Live rooms v2

- ☐ **5.1** Rooms on the new engine: same Rules, server-picked panoramas, server scoring, history saved
  for every player (guests too).
- ☐ **5.2** Room state snapshotted to Valkey on every phase change → a deploy or crash does not end games
  (v0's biggest operational pain).
- ☐ **5.3** Join by code, link, QR, Telegram share; reconnect with the session, not a per-room token.
- ☐ **5.4** Host tools: kick, transfer host, change rules between games, rematch.
- ☐ **5.5** Limits: room size (v0: 12, keep), rate limits per connection.
- **Done when:** 12 phones play a room while the API is redeployed, and nobody notices.

### Phase 6 — Launch v1 (replace v0)

- ☐ **6.1** Yandex commercial license and Uzbek hosting are in place (Phase 0), if not bought earlier.
- ☐ **6.2** Load test with k6: 10 000 simulated players (§6 mix) on the real servers; fix what breaks.
- ☐ **6.3** Security pass: rate limits, input limits, session fixation, CSRF on cookie auth, WS origin.
- ☐ **6.4** Admin panel: places, maps, panorama review queue, users, reports, feature flags.
- ☐ **6.5** Legal pages: terms, privacy (uz/ru/en), credits (BeloGuessr, OSM, Yandex; Google once it is added).
- ☐ **6.6** Production deploy, DNS, CDN; v0 retired.
- **Done when:** k6 shows 10K players with p95 API < 200 ms and no dropped rooms, and real players
  are on v1.

### Phase 7 — Own imagery (provider #3) (TODO 14, continued) — **later**

Not now (the owner, 2026-10-22): maybe one day. Phases 8–10 do not depend on it, except ranked duels.
The provider interface (§4) keeps the door open.

- ☐ **7.1** Buy and test a 360° camera; capture 3–5 main Tashkent streets as a trial.
- ☐ **7.2** Import pipeline: equirectangular → multires tiles → CDN; GPS + heading from the camera track;
  face and number-plate blurring (required before publishing).
- ☐ **7.3** Own-imagery adapter (Photo Sphere Viewer), opaque round payloads (no coordinates in the client).
- ☐ **7.4** "Provider" choice in Rules and in the menu: Yandex / Google / Shafaq / random.
- **Done when:** a Tashkent streets game can run entirely on our own panoramas.

### Phase 8 — Maps by players, challenges, daily (TODO 12)

- ☐ **8.1** **Map maker**: pick places, draw a polygon, or click streets; the library fills it with
  panoramas; or hand-pick panoramas. Default Rules. Private / unlisted / public.
- ☐ **8.2** Map pages: plays, likes, best scores, tags, search; moderation queue for public maps.
- ☐ **8.3** **Challenge links**: same panoramas + rules for everyone; leaderboard per challenge; share
  card for Telegram.
- ☐ **8.4** **Daily challenge**: one per day per official map, Wordle-style share text.
- ☐ **8.5** (Own idea, for the learning goal) **"Streets I miss"**: a map built from the player's worst
  rounds, replayed until learned.
- **Done when:** a player makes "My mahalla", sends the challenge link to a Telegram group, and
  friends land on the leaderboard as guests.

### Phase 9 — Economy and shop (TODO 7–8)

- ☐ **9.1** **Shop gate** (Phase 0): a legal entity exists. Until then, Barg is only earned, never sold.
- ☐ **9.2** **Barg icon**: the owner's `Glossy Green Leaf Coin Icon.png` (1254 px, transparent, AI-made).
  Left: crop to the coin (it fills only ~880 px and sits
  off-centre), export 512/128/64/32/24 px WebP + PNG, move into `geo-shafaq` assets. Checked: it reads
  well on light and dark and down to ~20 px; draw a flat SVG only if 16 px looks weak in the real UI.
  Never an emoji in place of the icon.
- ☐ **9.3** **Barg**, the one currency. **Wallet as a ledger**:
  append-only entries, balance = sum, idempotency keys, no edits. Earn Barg by playing (daily,
  streaks, challenges), buy Barg with money.
- ☐ **9.4** **Shop**: profile frames first (TODO 8); then avatar packs, compass skins, pin and trail skins,
  room emotes. **Cosmetic only, never pay-to-win.** The three basic compasses stay free.
- ☐ **9.5** Payments: **Payme / Click** on the web; **Telegram Stars** inside the Mini App. Webhooks → River
  jobs → ledger.
- ☐ **9.6** Admin: items, prices, sales, refunds, a ledger audit view.
- **Done when:** a player buys coins with Payme, buys a frame, and the frame shows in rooms and on
  leaderboards.

### Phase 10 — Reach

- ☐ **10.1** **Telegram Mini App**: same web app, Telegram theme, `initData` sign-in, Stars shop, share to chat.
- ☐ **10.2** Ranked 1v1 duels with rating, only on providers that hide coordinates (own imagery).
- ☐ **10.3** More providers as they appear; more cities captured.

### Google day — only when the owner says (TODO 14)

The owner adds Google once the game shows potential (2026-10-24: "a month or even later"). In order:

- ☐ **G.1** Billing on the owner's Google Cloud project; two keys: a **browser key** (sites `localhost`,
  `geo.shafaq.uz`; Maps JavaScript API only) and a **server key** (Street View Static API only).
- ☐ **G.2** Run `shafaq-tools google`: count and save Google's panoramas (Google's own vs uploaded).
- ☐ **G.3** Web: Google viewer (`StreetViewPanorama`) behind `PanoViewer`, and a **Google guess map** behind a
  `GuessMap` interface, used when the round says "own guess map" (R4).
- ☐ **G.4** Enable it: `PROVIDERS=yandex,google`, a daily cap for Google (task 2.7), the provider choice in
  Rules and the menu, credits.
- **Done when:** a Google round plays on a phone with a Google map and stops at its daily cap.

## 6. Sizing for 10 000 players online

Assumptions: 70% solo, 30% in rooms of ~4; a round lasts ~40 s.

| Load | Estimate | Fits on |
|---|---|---|
| Round starts + guesses | 10 000 / 40 s ≈ 250 rounds/s → ~500–1 000 API req/s | One Go process uses a fraction of 8 cores |
| Database writes | ~250 guesses/s, ~50 games/s | Postgres on NVMe, easily; partition `guesses` by month later |
| WebSockets | ~3 000 room connections | One Go process (~tens of KB each) |
| Yandex panorama views | 250/s at peak → **2–6M a day** depending on the daily curve | The license quote (Phase 0) |
| Own imagery traffic | ~2 MB a round → up to ~4 Gbit/s if every round used it | **CDN**, never from our server |
| Map tiles | Yandex's, from Yandex | the license quote (Phase 0) |

**Setup:** app server (8 vCPU / 16 GB: nginx or Caddy, 2× API replicas for zero-downtime
deploys, worker, Valkey) + db server (4–8 vCPU / 16 GB / NVMe: Postgres + PostGIS), both in
Uzbekistan; CDN in front. Phase 6 proves this with k6; adjust there, not now.

**Seams kept open for 600–700K (not built now):** stateless HTTP API behind a load balancer; rooms
addressed by code so they can be sharded across game nodes; Valkey pub/sub between nodes; read
replicas and partitioned history; panoramas and tiles already on a CDN; providers already
pluggable.

## 7. TODO → plan

| TODO | Where |
|---|---|
| 1 Real DB (PG) | Phase 1 (Postgres + PostGIS) |
| 2 Auth users | Phase 3 |
| 3 Google, Gmail, Telegram bot | Phase 3 ("Gmail" = Google sign-in) |
| 4 Many identities per user | Phase 3 |
| 5 History of every game | Phase 3 (solo), Phase 5 (rooms) |
| 6 Guests with emoji names | Phase 3 (`🐼_42`) |
| 7 Internal currency | Phase 9 (Barg) |
| 8 Selling frames and more | Phase 9 |
| 9 Configurable Help | Phase 4 |
| 10 Three compasses | Phase 4 |
| 11 Cities, regions, districts with SVG and banner | Phase 2 (data), Phase 4 (picker, progress) |
| 12 Player-made sets and challenges | Phase 8 |
| 13 Analog rounds and time | Phase 4 |
| 14 Many panorama providers | §4; Phase 2 (Yandex; backend ready for Google), Google day (later), Phase 7 (own, later), Phase 10 (more) |

## 8. Questions

**Answered (2026-10-22):**

- "gmail" in TODO 3 = **Google sign-in**. No email-code sign-in.
- Guest names use **the emoji itself**: `🐼_42`, not `Panda_42`.
- **One currency**, earned and bought: **Barg**. Icon: the owner's glossy green leaf coin
  (`Glossy Green Leaf Coin Icon.png`), never the 🍃 emoji.
- **Money is not a blocker**: the owner buys the Yandex license when the free limit gets close.
  No legal entity yet; the shop waits for one (Phase 9).
- **Own imagery: not now, maybe later** (Phase 7).
- **Providers: Yandex first, Google second** (2026-10-23). Yandex is the preferred choice.
- **Google waits** (2026-10-24): billing wants $50 up front, too much while the game is new. Yandex
  only for now; Google when the game shows potential. Backend ready, no web work for it until then.
  (Google *sign-in*, Phase 3, is separate and free: it needs no Maps billing.)

**Open:**

1. **Uzbekistan only**, or other countries one day? _Assumed: Uzbekistan only, but the place tree
   starts at "country", so it is not closed._

## Sources

- Yandex Maps API free-use terms: [overview](https://yandex.com/dev/commercial/doc/en/),
  [full terms](https://yandex.ru/legal/maps_api/en/), [FAQ](https://yandex.com/dev/commercial/doc/en/concepts/faq)
- Street view coverage: [Wikipedia: list of street view services](https://en.wikipedia.org/wiki/List_of_street_view_services),
  [Yandex re-shot Tashkent (podrobno.uz)](https://podrobno.uz/cat/obchestvo/na-panoramakh-tashkenta-poyavilis-novye-ulitsy-i-obshchestvennye-prostranstva/),
  [2GIS in Tashkent (spot.uz)](https://www.spot.uz/ru/2019/08/30/2gis/)
- Google pricing: [Google Maps Platform pricing](https://developers.google.com/maps/billing-and-pricing/pricing?hl=de)
- Google terms: [Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms) (§3.2.3(e)),
  [Service Specific Terms](https://cloud.google.com/maps-platform/terms/maps-service-terms) (pano ID caching)
- Telegram: [Log in with Telegram (OIDC)](https://core.telegram.org/bots/telegram-login),
  [Telegram Stars](https://telegram.org/blog/telegram-stars)
- Uzbek data localization: [Mondaq: law amended](https://mondaq.com/data-protection/1197754/the-law-on-personal-data-has-been-amended),
  [kun.uz 2024](https://m.kun.uz/en/news/2024/12/26/uzbekistans-data-localization-law-hinders-entry-of-apple-pay-and-google-pay),
  [kun.uz 2025](https://ad.kun.uz/en/news/2025/07/22/experts-urge-uzbekistan-to-revise-data-localization-rules-to-support-innovation)
- GeoGuessr / WorldGuessr: [GeoGuessr (Wikipedia)](https://en.wikipedia.org/wiki/GeoGuessr),
  [WorldGuessr vs GeoGuessr](https://www.worldguessr.com/compare-to-geoguessr),
  [WorldGuessr source](https://github.com/codergautam/worldguessr)
