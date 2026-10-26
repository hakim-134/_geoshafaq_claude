# Before launch: what the owner buys

Phase 0 of `PLAN.md`, the paid items (0.3–0.5), worked out so that each one is a short job
for the owner. Nothing here is bought yet (2026-10-24). Prices and procedures were checked on
the web that day; check them again before paying.

| # | What | When | Who |
|---|---|---|---|
| 0.3 | Yandex commercial license | when the worker warns (80% of Yandex's own daily count), at the latest before launch | the owner |
| 0.4 | Database hosting in Uzbekistan, and the database registered | before sign-in (Phase 3) goes public; guests alone keep no personal data | the owner |
| 0.5 | A legal entity | before the shop (Phase 9); the Yandex contract wants one too | the owner |

## 0.3 Yandex commercial license

**Measure first.** Yandex counts every call to its service, and only its own count decides a
block (free terms §4.3). The browser calls Yandex more often than once a round: `locate`, then
every step in a Move round. So:

1. developer.tech.yandex.ru → Connect API → **Developer's Account API**. Put its key in
   `YANDEX_CABINET_KEY` wherever the worker runs (`.envrc` locally, the server's env later).
   The worker then reads Yandex's own count every 10 minutes and warns at 80%.
2. Play 10 Yandex rounds (some Move, some No move) and read the metric
   `shafaq_yandex_requests_today` (or the cabinet's statistics page). That gives requests per
   round, the number the quote is built on.

**What it costs** (yandex.com/maps-api/tariffs): the JavaScript API is sold per year by
request count. Basic starts at **$10 000 a year for 2.5M requests** (about 6 800 a day); then
10M, 25M, 50M; Advanced $13 000. Panoramas are not priced separately there; an older Yandex
price list had **$2 000 a year for up to 500 panorama requests a day**. So the license, not the
servers, is the big cost, and `PLAN.md` §6's "2–6M views a day at 10K players" would be far
beyond the Basic tier. The quote decides how many Yandex rounds a day the game can afford; the
per-provider daily cap (task 2.7) then keeps the game inside what was bought.

**Ask Yandex** (through "Apply for a license" / "Contact support" on the tariffs page):

> Hello. We are building Shafaq Geo (geo.shafaq.uz), a geography game about Uzbekistan:
> a player sees a street panorama (JavaScript API 2.1, `ymaps.panorama`) and guesses the place
> on a map. We expect about N rounds a day now and up to M at launch; each round uses about R
> requests by your statistics. Please send a quote, and tell us:
>
> 1. How panorama requests are counted in JS API 2.1: `panorama.locate`, the player, each
>    step to the next panorama.
> 2. May we store panorama positions (latitude, longitude, heading) for longer than 30 days,
>    as a list of points we pick rounds from?
> 3. (Settled 2026-10-26: the guess map is Yandex's own map now, decision 0012.) How do map
>    loads and map tiles count against the license?
> 4. The game will sell cosmetic items (profile frames). Is that allowed under the license?
> 5. Can the contract be with a company in Uzbekistan, paid in USD or UZS?

Fill in N, M and R from the measurement. Questions 2 and 3 are risks R1 and R2 in `PLAN.md`;
if the answer to 3 is no, Yandex rounds need a Yandex guess map.

## 0.4 Hosting in Uzbekistan, and the database register

Uzbek law (personal-data law, art. 27-1) wants Uzbek citizens' data on servers **physically
in Uzbekistan**, and the database in the state register. That is the Postgres server (accounts:
Telegram IDs, Google emails). The web app, map tiles and images may sit on a CDN anywhere.

**First, the HostKey VPS.** On the server: `curl -s ipinfo.io/country`. If it does not say
`UZ`, it stays for v0 and development only, and the database moves before accounts go public
([decision 0007](decisions/0007-hosting.md)).

**Hosting: Serverspace, Tashkent region** (opened April 2026, in East Telecom's data center).
Pay by the hour, an API, cards accepted: right for one person, and the Phase 6 load test can
rent big servers for a day and give them back. Seen as well: AIRNET (Tier III, on TAS-IX, from
200 000 so'm a month) and Billur (from 161 000 so'm a month). Start with one server; `PLAN.md`
§6 sizes the two-server setup for 10K players.

**The register** (rules: Cabinet of Ministers regulation No. 71, 2020-02-08):

1. pd.gov.uz (the Personalization Agency), sign in with id.gov.uz.
2. Apply to register the database: what is kept (Telegram ID and name, Google email, game
   history), why (accounts for the game), where (the Uzbek server).
3. Free. The agency answers within 15 days with a certificate.

**Backups stay in Uzbekistan too.** The server's backups (pgBackRest, encrypted) need
S3-compatible storage off the server, and they hold the same personal data: pick it at the
same Uzbek host (or a second Uzbek server), not a foreign cloud. Until then they live on the
server's own disk ([decision 0011](decisions/0011-server-stack.md)).

Register in the legal entity's name if it exists by then (0.5). The sources found are from
2021–2025; check pd.gov.uz for the current form.

## 0.5 A legal entity

**An LLC (MChJ) with IT Park residency.** Only legal entities can be IT Park residents (a
sole trader, YaTT, cannot); computer games are on its list of allowed activities; the taxes
are low. Payme and Click merchant accounts and the Yandex contract need a company anyway.

Ask an accountant before registering:

- the tax rate for a resident (the sources found disagree);
- the change of 2026-04-01 that takes benefits away from payment organizations and
  marketplaces: a game selling its own cosmetics should not be one, but confirm;
- what Payme and Click ask from a merchant.

## Sources

- Yandex: [free terms](https://yandex.ru/legal/maps_api/en/) (§4.3, §6.1.2),
  [tariffs](https://yandex.com/maps-api/tariffs),
  [panorama price list (older)](https://yandex.com.tr/dev/tariffs/doc/en/jsapi/prices/),
  [Developer's Account API: limits](https://yandex.com/dev/developer-help/doc/en/api/get-limits)
- Register: [DLA Piper, Uzbekistan](https://www.dlapiperdataprotection.com/index.html?t=registration&c=UZ),
  [Lexology](https://www.lexology.com/library/detail.aspx?g=c705796b-e78b-4a69-a3bc-f4267b841089),
  [Azizov & Partners](https://azizovpartners.uz/en/memos/registration-of-databases-containing-personal-information/)
- Hosting: [Serverspace Tashkent](https://serverspace.io/about/news/new-serverspace-data-center-in-uzbekistan-tashkent-located/),
  [AIRNET](https://airnet.uz/en/vds), [Billur](https://www.billur.com/vps/?language=english)
- Legal entity: [IT Park residency](https://tax-legal.uz/en/it-park/),
  [IT Park 2026 rules](https://www.outsource.gov.uz/en/media/new-rules-are-being-introduced-for-it-park-uzbekistan-residents)
