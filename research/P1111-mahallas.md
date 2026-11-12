# P1111 0.2: Tashkent's mahallas

_Checked 2026-11-11._

> **The owner's decision, 2026-11-12** ([decision 0023](../decisions/0023-kadastr-borders.md)):
> build from the Kadastr agency's borders now, while he keeps asking the agency (it has not
> answered his calls). Everything that comes from them is marked `KADASTR` and comes out in one
> go if the agency says no. The verdict below is what was found, before that decision.

## Verdict: not possible now, one letter away

- **Only one set of mahalla borders is anywhere near full: the Kadastr agency's.** It has 426 of
  Tashkent's 585 mahallas. Three districts are complete: **Yakkasaroy, Yangihayot,
  Mirzo Ulug‘bek**.
- **It has no licence.** It is public to look at, with no terms for re-use. A public game must not
  show it until the agency says yes in writing.
- **OpenStreetMap, which we may use, is half done.** No district is complete. The best, Olmazor
  and Yunusobod, have about half their mahallas.
- **Closest step:** the owner writes to the Kadastr agency for permission. With a yes, 3.3 can
  ship those three districts at once and add the others as the agency fills them in. The two
  sources together also nearly fill **Olmazor (96%), Mirobod (94%) and Yunusobod (89%)**: six
  districts of twelve.
- **Without a yes,** OpenStreetMap alone gives a map with holes: Olmazor 76%, Yunusobod 74%,
  Yakkasaroy 65%, Chilonzor 63% of the district, the rest under 60%. It can be built, honestly
  labelled ("37 of 64 mahallas"), but it is not "the mahallas of my district".
- **The lead re-ran this** (2026-11-11): the layer answers 426 for Tashkent today, its licence
  fields are empty, and every "covered" number below came out the same.

## District by district

Official count: the hokimiyat's 2025 book of place names (below); its numbers add up to 585.
"Covered": the share of the game's district that the mahallas cover. OSM: closed areas named
as a mahalla (in brackets: how many match an official name). Kadastr data fetched 2026-11-11,
OSM extract 2026-10-22.

| District | Official (2025) | Kadastr | Kadastr covered | OSM areas | OSM covered | Verdict |
|---|---|---|---|---|---|---|
| Bektemir | 18 | 15 | 79% | 1 (1) | 1% | no: 3 missing |
| Chilonzor | 55 | 32 | 71% | 25 (22) | 63% | no |
| Mirobod | 39 | 30 | 63% | 20 (17) | 58% | no |
| Mirzo Ulug‘bek | 70 | 68 | 98% | 24 (22) | 49% | **yes**, 2 missing (0.8 km²) |
| Olmazor | 64 | 32 | 63% | 37 (31) | 76% | no |
| Sergeli | 46 | 39 | 69% | 3 (3) | 7% | no |
| Shayxontohur | 51 | 20 | 40% | 6 (5) | 18% | no |
| Uchtepa | 60 | 44 | 55% | 0 | 0% | no |
| Yakkasaroy | 21 | 21 | 100% | 15 (13) | 65% | **yes** |
| Yangihayot | 30 | 30 | 100% | 2 (1) | 1% | **yes** |
| Yashnobod | 67 | 55 | 67%* | 2 (2) | 3% | no |
| Yunusobod | 64 | 40 | 68% | 37 (31) | 74% | no |
| Yangi Toshkent | not found | 0 | 0% | 0 | 0% | no |

\* includes 10 of Mirzo Ulug‘bek's mahallas; see the border note below.

Both sources laid together cover: Yakkasaroy 100%, Yangihayot 100%, Mirzo Ulug‘bek 98%, Olmazor
96%, Mirobod 94%, Yunusobod 89%, Chilonzor 84%, Bektemir 79%, Sergeli 69%, Yashnobod 69%,
Uchtepa 55%, Shayxontohur 49%. Where both have a mahalla the shapes agree, so they can be merged.

- **Borders meet in the Kadastr set.** Overlap is 0.00% in every district. In the three complete
  districts there are no holes: the mahallas tile everything, parks and factories included.
- **The holes elsewhere are missing mahallas, not parks.** In Uchtepa, 11.1 of 12.6 km² uncovered
  is housing; in Shayxontohur 9.5 of 16.0; in Olmazor 10.7 of 12.5. The airport is a true hole
  (4.3 km² in Sergeli, 5.7 in Yashnobod).
- **Spill**: 0.2–6.5% of a district's mahallas lie outside the game's border (Yangihayot 6.5%).
- **The game's own border is out of date in one place.** 10 of Mirzo Ulug‘bek's mahallas
  (Chingeldi, Iqtidor, Alisherobod and 7 more, about 18 km²) lie inside OSM's Yashnobod. The
  official areas agree with the Kadastr: Mirzo Ulug‘bek 59.4 km², Yashnobod 58.9 km². OSM has
  38.7 and 78.2. This also affects today's district map.
- **Yangi Toshkent** has no official count yet. The Kadastr still files its mahallas under
  Yuqorichirchiq and O‘rtachirchiq (Tashkent region): 17 reach into it, 9 mostly inside, covering
  41% of it. Most of it is fields.
- **OSM overlaps**: Yakkasaroy 9.4%, Chilonzor 2.4%, Yunusobod 2.4% (shapes drawn twice).

**Where I draw the line:** at least 95% of the official mahallas, at least 95% of the district
covered (the airport and water aside), no overlaps, every name in Uzbek Latin. With fewer, a
player meets blank streets where his own mahalla should be. That is the confusing hole.

## Names

- **Kadastr**: all in Uzbek Latin, none in Cyrillic, no name twice in a district. Marks vary:
  `ʻ` (U+02BB) in 73 names, a straight `'` in 10, `ʼ` in 1. 36 end in "MFY". 410 of 426 match
  the official list once marks are ignored. The other 16 are spelling variants ("Salar" for
  Salor, "Murruvat", "1-Charx Kamolon" against "Charx Kamolon-1").
- **OSM**: `name` in Latin with `'`, `` ` `` or `ʻ`, plus "mahallasi"/"mahalla"/"MFY"; `name:uz`
  set on 2 of 172 areas. 6 points in Yangihayot and 1 in Sergeli have Cyrillic names only.

## Size on a phone

A typical mahalla is 550–800 m across. The smallest is Bayot in Mirobod, 232 m. A district is
drawn about 350 px wide. The widest circle inside a typical mahalla is then 11–33 px; the smallest
mahalla of a district gets 4–17 px. A finger needs about 44 px. In Mirzo Ulug‘bek, 34 of 58
mahallas are under 12 px wide at the first view; in Yakkasaroy none are.
**Advice:** open a district already zoomed about 2×, let a tap take the nearest shape and light it
before it counts, and keep the pinch. Yakkasaroy (14 km², 21 mahallas) is the easiest first level.

## Freshness

- **Kadastr**: drawn 2026-03-14, last changed 2026-10-29. Nationally the layer holds 5 141
  mahallas; UzA (2026-02-02) says the agency and the Mahallas Association surveyed 9 008. More
  will come.
- **OSM**: live today, 248 mahalla-like objects; 196 last edited in 2026. 32 mappers, but two
  (danik1988, FUZZY_42) made the last edit on 185 of them. Sources are imagery and local
  knowledge; no import. Where both exist the shapes agree: 63 OSM areas share over 90% with a
  Kadastr one. They follow the same streets.

## Sources and licences

| Source | Borders? | Tashkent | Download | Usable? |
|---|---|---|---|---|
| Kadastr agency, layer `MAHALLA_UZKAD_DB16` (open.ngis.uz) | yes | 426 of 585 | public ArcGIS query, no login | **no: no licence** |
| OpenStreetMap | patchy | 172 areas, ~half of districts' names | Overpass, extract | yes: ODbL, credited |
| Hokimiyat, *Toshkent shahri joy nomlarining izohli lug‘ati* (2025) | no | names, counts, neighbours | PDF | the facts, yes |
| uz.wikipedia "Toshkent mahallalari" | no | counts, older name lists | yes | yes: CC BY-SA |
| City council decisions 2023–24 (kengash.gov.uz) | in words, per Wikipedia | – | not opened | – |
| GADM 4.1, geoBoundaries, HDX | no: districts are the deepest | – | – | – |
| Wikidata | no | 3 items, no shapes | – | – |
| Yandex, 2GIS | not checked | – | – | no: proprietary |
| data.egov.uz, opendata.tashkent.uz | not checked (token / app only) | – | – | – |

**The Kadastr licence, plainly.** The layer's metadata has no licence and no terms
(`licenseInfo` and `copyrightText` are empty). The only wording found is Cabinet resolution 732
(2020), read in full by the lead: it is the rulebook of the *construction ministry's* cadastre
geoportal, not clearly of this one, and all it says is that people who have not signed in "may
freely use only its open information" (point 21), in "viewing mode" (point 16). That is leave to
look, not to copy into another product. So: no copy in git, no shapes in the game, until the
agency answers. The shapes would never need to be in git (the server imports them, as it does
OpenStreetMap), so the one question is whether the game may show them. That is the owner's call
to make or to ask. Tracing it into OSM is not a way
round: OSM forbids sources without explicit permission. Satellite pictures don't show mahalla
borders, so mapping the missing ones in OSM is not a matter of hours.

## Picture

`~/131/github.com/hakim-134/tmp/P1111/mahallas/coverage.png`: Kadastr on the left, OSM on the
right, the game's districts outlined, grey where no mahalla is drawn. Raw data and every script
are in the same folder (`README.md`, `scripts/`).

## For session 8

Build from the Kadastr now, with OpenStreetMap laid in where it has none, as
[decision 0023](../decisions/0023-kadastr-borders.md) says: a `KADASTR:` comment on everything
that exists because of this data, `kadastr` or `osm` as the source on every row, the agency's
file in a gitignored folder (never committed), the agency named as the source on the screen.

- **Source**: `https://db.ngis.uz/db/rest/services/UZKAD/MAHALLA_UZKAD_DB16/FeatureServer/0/query`
  with `where=region_code='1726'&outFields=*&outSR=4326&f=geojson`, paged by 200
  (`resultOffset`, `orderByFields=id`). Fields: `mahalla_name`, `district_name`,
  `soato_district`, `mahalla_code` (a stable id), `modify_at`.
- **Level**: kind `mahalla`, one level under the 13 districts. Hang each under the district it
  lies in most, but **fix Mirzo Ulug‘bek first**: by overlap, 10 of its mahallas land in
  Yashnobod.
  Either take the two districts' borders from the Kadastr (same permission) or wait for OSM.
- **Names**: `CleanUz`, then `ʻ`/`'` after o and g to `‘`, drop " MFY"/" QFY", and check the 16
  variants against `tmp/P1111/mahallas/official/official_mahallas_2025.csv`. "Sirg‘ali tumani"
  in the data is Sergeli.
- **Clean**: `ST_MakeValid` (4 are multipolygons), `ST_CoverageSimplify` per district as in
  [0016](../decisions/0016-place-map-whole.md), clip the 0.2–6.5% spill to the district.
- **Show** only the districts that pass the line above; the others say "Tez orada".
- **OSM, if ever needed**: no admin relations at level 9 or 10. Mahallas are closed ways with
  `landuse=residential` and a name ending "mahallasi"/"MFY", or `place=neighbourhood` areas; 8
  ways carry `boundary=administrative` + `admin_level=8`. Query: `scripts/q3_light.overpass`.

## Sources

- Kadastr layer: https://db.ngis.uz/db/rest/services/UZKAD/MAHALLA_UZKAD_DB16/FeatureServer/0 ;
  portal item: https://portal.ngis.uz/portal/sharing/rest/search?q=mahalla&f=json ; https://open.ngis.uz
- 9 008 mahallas surveyed (UzA, 2026-02-02): https://uza.uz/ar/posts/mahallalar-nomlari-va-chegaralari-qonunchilik-asosida-qayta-korib-chiqiladi_814308
- Cabinet resolution 732 (2020): https://lex.uz/docs/-5112432
- Hokimiyat's book of place names (2025): https://api.tashkent.uz/upload/storage/2026/01/%D0%96%D0%BE%D0%B9_%D0%BD%D0%BE%D0%BC%D0%BB%D0%B0%D1%80%D0%B8_%D0%9B%D0%BE%D1%82%D0%B8%D0%BD.pdf
- Wikipedia, 585 as of 2024-10-25: https://uz.wikipedia.org/wiki/Toshkent_mahallalari
- Yangi Toshkent takes parts of 14 region mahallas: https://anhor.uz/uzl/news/yangi-toshkent/
- OpenStreetMap via https://overpass-api.de ; https://gadm.org ; https://www.geoboundaries.org
