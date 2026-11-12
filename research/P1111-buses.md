# P1111 0.3: Tashkent's buses

_Checked 2026-11-11._

## Verdict

**Good enough for most listed routes, after named fixes; four routes must be drawn by us.**
OpenStreetMap has Tashkent's routes **numbered 1–60** (59 numbers), mapped fresh in May–Nov
2026, both directions, stops named in Uzbek and Russian. They match the 2026 references closely.
Routes **61–199 are almost all missing** (the city has 164), among them the busiest route,
**131**, and **116, 67 and 115**. So: draw from OSM the routes that pass the check (18 on the
list below, plus 93 once fixed), and build the four missing lines ourselves on OSM's own streets
and stops, checked by eye.

## The proposed list

**Approved by the owner, 2026-11-12, as it is: all 23 routes**, nothing struck, nothing added.
Session 10 builds them all, the four missing lines and the repair of 93 included, each line
checked against Yandex's map. The choice is closed. Strongest first.
Data: **ready** = OSM line whole and checked against 2026 references; **fix** = OSM has it, needs
the named repair; **missing** = not in OSM, session 10 builds the line. `r…` = OSM relation id.

**Top 10**

| # | from → to | passes | why | data |
|---|---|---|---|---|
| 131 | Do‘stlik-2 → Olimpiya mehmonxonasi (Qoraqamish) | Qipchoq metrosi, Sergeli bozori, Janubiy vokzal, Chilonzor metrosi, Beruniy maydoni, Universitet shaharchasi | busiest route every day in the carrier's counts | missing |
| 24 | Do‘rmon (TTZ) → Yunusobod 6-daha | Navro‘z bozori, Buyuk Ipak Yo‘li metrosi, Oloy bozori, TATU, Yunusobod dehqon bozori | top 2 daily (2026), top 3 monthly (2021–23) | ready r1950381 |
| 8 | Sergeli 10-daha → Chilonzor 25-daha | Sergeli bozori, Janubiy vokzal, Chilonzor metrosi, Farhod bozori | top 3 daily | ready r19902170 |
| 9T | Toshkent vokzali → Chilonzor 25-daha | Qushbegi, To‘qimachilik kombinati, Novza metrosi, Farhod bozori | top 5 daily | ready r19923551 (fix name tag) |
| 38 | O‘zbekqishloqmash zavodi → Sergeli 10-daha (Oriyat) | Minor metrosi, Oloy bozori, Amir Temur xiyoboni, Oybek metrosi, Bobur bog‘i, Sergeli bozori | top 5 daily | ready r19892577 (other way has a 2.3 km hole) |
| 116 | Shifokorlar shaharchasi → Chilonzor buyum bozori | Tibbiyot akademiyasi, Beruniy metrosi, Farhod bozori, Chilonzor metrosi, Toshkent avtovokzali | top 5 daily | missing |
| 14 | Toshkent vokzali → TTZ avtostansiyasi | San’at muzeyi, Vestminster universiteti, Tibbiyot akademiyasi, Buyuk Ipak Yo‘li metrosi, Lokomotiv stadioni | top 5 daily; the owner named it | ready r19964757 |
| 67 | Yunusobod 19-daha → Toshkent-2 xalqaro aeroporti | Chinobod, TATU, Oloy bozori, Amir Temur xiyoboni, Oybek metrosi, Saodat savdo markazi | the owner named it; airport from the north | missing |
| 12 | Qo‘yliq dehqon bozori → Toshkent-2 xalqaro aeroporti | Farg‘ona bozori, Transport universiteti, Toshkent vokzali, Saodat savdo markazi, Qushbegi | airport + railway station + Qo‘yliq | ready r19934969 |
| 93 | Food City → Yunusobod 9-daha | Qo‘yliq, Farg‘ona bozori, O‘zbekiston mehmonxonasi, Oloy bozori, TATU, Yunusobod dehqon bozori | top 3 monthly 2021 and 2023; south–north through the centre | fix: 6–8 pieces, holes 0.5–2.4 km |

**The rest**

| # | from → to | passes | why | data |
|---|---|---|---|---|
| 58 | Darxon maydoni → Do‘stlik-2 | Oybek metrosi, Bobur bog‘i, Janubiy vokzal, Sergeli bozori | top 3 monthly 2021; a bus every 8 min | ready r20708365 (OSM starts 1 stop past Darxon) |
| 115 | Salar, g‘isht zavodi (ToshGRES) → Gulobod (Chorsu) | Hayvonot bog‘i, Bodomzor, TATU, Oloy bozori, Mustaqillik maydoni, Chorsu | the owner named it; region to Chorsu, every 10 min | missing; half outside the city |
| 17 | Geofiziklar / Humoyun → Chorsu | Navro‘z bozori, Buyuk Ipak Yo‘li metrosi, Oloy bozori, Navoiy muzeyi, Chorsu | east to west through the centre | ready r1866150 |
| 5 | Feruza → Chorsu | Yunusobod 19/14-daha, Turkiston metrosi, Yunusobod metrosi, Tinchlik metrosi, Chorsu bozori | the north to Chorsu | ready r19874860 |
| 40 | Toshkent vokzali → Sergeli 12-daha | Saodat savdo markazi, Janubiy vokzal, Sergeli bozori, Qipchoq metrosi | station to Sergeli | ready r20507556 |
| 44 | Aviasozlar → Chorsu | Tuzel metrosi, Tibbiyot akademiyasi, Mustaqillik maydoni, Navoiy muzeyi, Chorsu | the east to Chorsu | ready r20591927 |
| 13 | Izza → TSUM | Al-Xorazmiy, Farhod bozori, Milliy bog‘ metrosi, Beshyog‘och, TSUM | the far west to the centre | ready r19938781 |
| 11 | Beltepa → Mahalliy havo yo‘llari aeroporti | Tibbiyot akademiyasi, Beruniy maydoni, Chorsu, Bobur maydoni, Toshkent-2 aeroporti | north-west to both airports | ready r10996573 |
| 23 | Farhod bozori → Chorsu metrosi | Chilonzor 7-mavze, Tinchlik metrosi, Chorsu bozori | short, every 10 min, two bazaars | ready r20219453 |
| 32 | Sergeli 6A → Gulobod (Chorsu) | Chilonzor buyum bozori, Olmazor metrosi, Bobur maydoni, Beshyog‘och, Chorsu bozori | south-west loop to Chorsu | ready r20414392 |
| 51 | Yunusobod 6-daha → Beshyog‘och maydoni | TATU, Oloy bozori, Amir Temur xiyoboni, TSUM, Paxtakor | Yunusobod to the centre | ready r20619377 |
| 28 | Tibbiyot akademiyasi → Yangiobod | Beruniy maydoni, Chorsu, Mustaqillik maydoni, Do‘stlik metrosi | north-west to east, long | ready r20299593 |
| 57 | Oloy bozori → Erkin | Amir Temur xiyoboni, Oybek metrosi, Janubiy vokzal, Choshtepa metrosi | Oloy to the south | ready r20704131 (looks like 38 on the map) |

**Considered, left out**

- 16 TTZ ↔ Toshkent vokzali: same ends as 14, a near-twin. 15 and 54 (Qo‘yliq 1 → Do‘stlik
  metrosi): twins of each other. 6, 7: short loops inside Yunusobod, nothing to recognise.
- 1, 19, 21 (to TSUM), 2 (Darxon → Chilonzor 25), 25, 26, 43, 50: ready in OSM, but they repeat
  corridors already on the list (Buyuk Ipak Yo‘li, Rustaveli, Amir Temur).
- 37 (TSUM → local airport), 76, 94, 106 (to Toshkent-2): more airport routes; 76/94/106 missing.
- 18 Chilonzor metrosi → Tuzel: ready apart from a 1.4 km hole; fix is easy if wanted.
- 137, 197: the only routes into Yangi Toshkent (the new city); missing in OSM.
- 77, 84, 120, 121, 140, 183, 188: old OSM relations without stops; not checked further.

## How the list was chosen

There **is** some passenger data, but only the top of it. Since 16 Sep 2026 the carrier
(Toshshahartransxizmat) posts on Telegram the five busiest routes of the morning, 06:00–10:00.
Over 19 posts (16 Sep – 10 Nov 2026): **131** (19 of 19 days, ~5 500 riders), **24** (19), **8**
(18), **9T** (17), **38** (12), **116** (5), **14** (4). Nothing below the top five is published.
Older monthly tops: June 2021, 131 / 24 / 93 (kursiv.media, checked); news of Aug 2021 and
Jul–Aug 2023 also name 58 and 8 (seen in search results, pages not opened).
The rest is judgement: routes that link places everyone goes (Chorsu, Oloy, Farhod and Qo‘yliq
bazaars, both airports, the railway stations, Sergeli, Yunusobod, Chilonzor), long lines through
the centre, short headways on 2GIS (131: 7 min, 58: 8, 38/115/23: 10), and the owner's own
numbers (14, 67, 115). For the quiz, routes were spread over the city and near-twins dropped
(`routes-each.png` shows each one alone). Every number was seen on Wikiroutes (edited Oct 2026)
and on 2GIS's live data today.

## How good OSM is

- **127** bus relations (two are a village route 7 with no line), **67** numbers, **116** in
  route masters, 125 PTv2. 126 of 127 edited in 2026 (median 2026-08-12) by a few local mappers.
- **58** numbers have both directions. **78** relations are one piece, **32** have only tiny gaps
  (≤ 150 m, invisible at city scale), **15** have real holes (routes 18, 33, 38, 39, 40, 57, 58,
  93 and the old ones). 3 829 stops in order, 46 unnamed.
- **Coverage is the problem, not quality:** the carrier runs 164 routes; OSM has 1–60 well and
  almost nothing above 60.

Compared with Wikiroutes (city list, edited 9 and 22 Oct 2026) and 2GIS (live, today):

| route | OSM | reference (2026) | stops of the reference found in OSM | result |
|---|---|---|---|---|
| 67 | none | Yunusobod 19 → Toshkent-2 aeroporti, every 12–13 min | — | missing |
| 14 | 2 ways, whole | Toshkent vokzali ↔ TTZ avtostansiyasi | 29 / 33 | matches; 2GIS line same shape |
| 115 | none | Salar g‘isht zavodi ↔ Gulobod, every 10 min | — | missing |
| 24 | 2 ways, whole | Do‘rmon ↔ Yunusobod 6 (carrier says "TTZ AShB – Yunusobod 6") | 42 / 46 | matches; 2GIS same shape |
| 8 | 2 ways, whole | Sergeli 10 ↔ Chilonzor 25 | 29 / 31 | matches |
| 9T | 2 ways, whole | Chilonzor 25 ↔ Toshkent vokzali | 31 / 32 | matches; OSM name says "2 avtobus" |
| 38 | 1 way whole, 1 with 2.3 km hole | Oriyat (Sergeli 10) ↔ O‘zbekqishloqmash | 36 / 37 | matches; fix the hole |
| 12 | 1 way whole, 1 with gaps ≤ 84 m | Qo‘yliq bozori ↔ Toshkent-2 aeroporti | 43 / 44 | matches; 2GIS same shape |
| 17 | 2 ways, whole | Geofizika ↔ Chorsu | 41 / 43 | matches (OSM calls the end Humoyun) |
| 58 | 1 way whole, 1 with 2.3 km hole | Darxon maydoni ↔ Do‘stlik-2 | 43 / 44 | OSM runs 1 stop past Darxon |
| 93 | 6 and 8 pieces | Food City ↔ Yunusobod 9 | 36 / 46 | broken line, stops partly missing |
| 131, 116 | none | as in the list | — | missing |

Typical faults: a hole where a way was split or rebuilt (the same 2.3 km gap on Shota Rustaveli's
bus lane breaks one direction of 38, 40, 57 and 58); a wrong `name` tag (9T); a Cyrillic "Т" in
`ref` (9Т, 13Т); a terminal one stop beyond the reference; apostrophes typed as `'` or `ʻ`; a few
stop names left in Russian. Wikiroutes' headways look bulk-set and were not used.

## For session 10

- **Select** by relation id, not by number (two routes share some numbers, ids are stable):
  `[out:json][timeout:120]; rel(id:1950381,19902170,19923551,19892577,19964757,19934969,
  20708365,1866150,19874860,20507556,20591927,19938781,10996573,20219453,20414392,20619377,
  20299593,20704131,19901536); out meta geom;` Store each relation's `version`; on refresh,
  re-check any route whose version changed.
- **One clean line per route:** take one direction (the id in the table, the whole one); keep
  ways with role empty/forward/backward in member order; chain them, flipping ways as needed;
  join gaps ≤ 100 m; refuse the route if any gap is > 150 m. One direction is enough at city
  scale (one-way streets differ by a block). Simplify to ~15 m, then project like the districts.
  Clip to the city border and say so for routes that leave it (115, 24 at Do‘rmon).
- **Missing routes (131, 116, 67, 115) and 93:** OSM already has their stops as nodes
  (Universitet shaharchasi, Olimpiya, Qipchoq metrosi, Beruniy maydoni, Shifokorlar shaharchasi,
  High Town City). Route between those stops over OSM roads (a local OSRM/Valhalla on the
  Uzbekistan extract, or hand-picked OSM ways), in the stop order the carrier and its depots
  announce. Use 2GIS/Yandex only to look, never to trace or copy. Or ask Tashkent's OSM mappers
  to add them; they mapped 1–60 between May and Nov 2026.
- **Stop names:** from each stop's `name:uz`, else `name`; normalise `'`, `ʻ`, `’` to `‘`
  (O‘zbekqishloqmash, Qo‘yliq); fix the few Cyrillic ones by hand. Show the 4–6 places of the
  "passes" column after the answer, not all 30–45 stops.
- **Check against Yandex's map before a route goes in** (the owner's own browser; headless gets a
  "limited" page): same two ends, same main streets, no extra stop at the ends (58), no hole
  (38, 93). Then read the carrier's Telegram for changes since 2026-11-11: routes change often
  (20 extended to Chorsu and 106 shortened in April 2026; a city master plan to reorganise routes
  was announced in March 2026).
- Licences: OSM is ODbL and already credited. Wikiroutes ("all rights reserved") and 2GIS are
  proprietary: used here only to check, nothing copied into the game. The carrier's ridership
  posts are public statements; quoting the numbers is fine.

## Sources

- OpenStreetMap via Overpass API, 2026-11-11 13:38 UTC; raw files in `tmp/P1111/buses/`.
- Toshshahartransxizmat, t.me/tshtxuz: daily busiest-route posts 16 Sep – 10 Nov 2026 (e.g.
  t.me/tshtxuz/8467, /8559); "164 routes". Site tashbus.uz: no public route list found.
- Wikiroutes, ru.wikiroutes.info/tashkent/catalog: 238 city-bus pages, most edited 2026-10-09 or
  2026-10-22 (some numbers, e.g. 9, 10, 36, 90, 102, 111, last edited 2023: treat as stale).
- 2GIS public site, 2gis.uz/tashkent, 47 routes looked at 2026-11-11 (live headways, lines).
- Yandex Maps: blocked headless Chrome ("limited"); not used.
- spot.uz 2026-09-16 (170 bus routes, 165 by the carrier); anhor.uz 16 Sep (131, 116, 24, 38);
  kursiv.media 2021-07-05 (June 2021: 131, 24, 93); kun.uz 2026-03-14 (master plan).
