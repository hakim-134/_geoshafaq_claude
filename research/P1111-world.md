# P1111 0.4: the world's countries

_Checked 2026-11-11._

## Verdict

- **Shapes:** Natural Earth 1:50m (public domain), redrawn to the UN's view in 7 places. It has
  all 195 countries; the whole world is 65 KB as the game's SVG paths (22 KB gzipped).
- **Flags:** `flag-icons` 7.6.0 (MIT), 4:3: all 195, up to date on every flag we checked.
- **Capitals:** Wikidata (CC0), one answer per country, coordinates for all 193 asked.
- **Names:** countries from Unicode CLDR, capitals from Wikidata, with small fixes already made
  in the draft. The owner should look at **31 names** (list below).
- **Nothing blocks session 9.** One design job remains: 54 countries are too small to tap on a
  phone, and in the Caribbean their rings overlap, so it needs an inset.

| What | Source | Licence | Covers | Size | What it lacks |
|---|---|---|---|---|---|
| Shapes | Natural Earth 5.1.1, 1:50m | public domain | 195/195 | world 65 KB (22 gz); a continent 21–55 KB (8–20 gz) | takes de-facto sides (fixed below) |
| Shapes, rejected | Natural Earth 1:110m | public domain | 166/195 | — | 29 small countries |
| Flags | `flag-icons` 7.6.0 | MIT | 195/195 | 1.27 MB all; median 0.7 KB; Serbia 177 KB | true aspect ratios (always 4:3) |
| Capitals | Wikidata P36 + P625 | CC0 | 193/193 with coordinates | — | 6 Uzbek labels (filled by hand) |
| Country names | CLDR 49 (`uz`, `ru`, `en`) | Unicode licence | 195/195 in all three | — | 6 outdated or odd forms (fixed) |

## The list of countries

- **The 193 UN member states** from the UN's own list, with ISO 3166-1 codes (alpha-2, alpha-3,
  numeric).
- **Both UN observer states are asked too: Holy See (VA) and Palestine (PS)**, 195 in all. The
  UN seats both; treating them alike stays neutral. Uzbekistan recognises Palestine, and
  players expect both on the map.
- **Continents**, as a school atlas in Uzbekistan groups them: Afrika 54, Osiyo 48, Yevropa 44,
  Shimoliy Amerika 23, Avstraliya va Okeaniya 14, Janubiy Amerika 12. One continent each.
- The choices:
  - **Rossiya: Yevropa.** Its capital and most people are there; the UN says Eastern Europe.
    The Asia map still draws it, as land never asked about.
  - **Turkiya, Qozog‘iston, Kipr, Armaniston, Gruziya, Ozarbayjon: Osiyo**, as in Uzbek and
    Russian school textbooks and in the UN's grouping.
  - **Misr: Afrika** (Sinai is a small part). **Central America and the Caribbean: Shimoliy
    Amerika.** **Indonesia, Timor-Leste: Osiyo. Papua New Guinea: Okeaniya.**

## Where the shapes and the UN list disagree

Natural Earth's default file quietly takes sides: it draws Crimea in Russia and the Golan in
Israel. The game follows **the UN's own world map** instead. Point-of-view files exist only at
1:10m and none is the UN's, so the draft fixes 1:50m by hand. Each row was tested with a point
inside the place (`scripts/s3_disputes.py`).

| Place | Natural Earth default | What the game does | Why |
|---|---|---|---|
| Crimea | Russia | part of Ukraine | UN General Assembly resolution 68/262 |
| Donetsk, Luhansk, Zaporizhzhia, Kherson | Ukraine | unchanged | same |
| Golan Heights | Israel | part of Syria | Security Council resolution 497 |
| West Bank, Gaza, East Jerusalem | Palestine (at 1:50m) | Palestine, asked | an observer state on the list |
| Western Sahara | split: two thirds inside Morocco | all of it drawn, never asked; Morocco without it | on the UN's list of non-self-governing territories |
| Kosovo | own country | merged into Serbia | not a UN member; UN map, resolution 1244 |
| Taiwan | own country | merged into China | UN General Assembly resolution 2758 |
| Northern Cyprus | own country | merged into Cyprus | recognised only by Türkiye |
| Somaliland | own country | merged into Somalia | recognised by no UN member |
| Hong Kong, Macao, Åland | separate | merged into China, Finland | parts of them under any view |
| Kashmir, Aksai Chin, Arunachal | the lines each side holds | kept; the area itself never asked | the UN map draws the same lines, "final status not agreed" |
| Siachen Glacier | own grey area | drawn, never asked | claimed by India and Pakistan |
| Abyei, Ilemi, Hala’ib | Sudan, Kenya, Egypt | kept, never asked about | tiny at this scale; the game names no claimant |
| Transnistria, Abkhazia, S. Ossetia, Karabakh | inside Moldova, Georgia, Azerbaijan | unchanged | matches the UN |
| Greenland, Falklands, Chagos, Puerto Rico, 33 more dependencies | own features | drawn, never asked | not UN members |
| French Guiana, Réunion | part of France | unchanged; continent frames cut them off | legally France |
| Antarctica | own feature | not drawn | no country's; wastes the screen |

**1:110m lacks 29 of the 195** (AD AG BB BH CV DM FM GD KI KM KN LC LI MC MH MT MU MV NR PW SC
SG SM ST TO TV VA VC WS) and has 11 shapes not on our list. **1:50m and 1:10m lack none**; they
have 45 and 57 shapes not on our list.

## Small countries

Tiny = the largest piece is **under 12 px across** when its continent fills a 390 px phone
width, in the projections recommended below:

| Continent | Tiny | Which | Rings that overlap |
|---|---|---|---|
| Yevropa | 7 | AD LI LU MC MT SM VA | San Marino and Vatican |
| Osiyo | 12 | AM BH BN BT CY KW LB MV PS QA SG TL | 6, the Levant and the Gulf |
| Afrika | 11 | BI CV DJ GQ KM LS MU RW SC ST SZ | 6 |
| Shimoliy Amerika | 13 | AG BB BS BZ DM GD HT JM KN LC SV TT VC | 12, the whole Caribbean |
| Janubiy Amerika | 0 | — | — |
| Okeaniya | 11 | FJ FM KI MH NR PW SB TO TV VU WS | none |

On one world map 390 px wide, **140 of 195** are under 12 px, so the whole-world quiz needs
pinch-zoom; continent maps do not. Natural Earth's "tiny countries" points cover only 38 of ours
at 1:50m and carry some wrong codes (Saint Helena as GB), so the draft uses its own point: the
centre of the largest piece (`ST_MaximumInscribedCircle`).

**Recommendation:** a **fixed 22 px ring at that point** counts as the country, shown as a soft
circle so the player sees where to tap. Where rings overlap (Caribbean, Gulf, Levant, around
Rwanda), the first tap zooms that corner and the second answers. **Shimoliy Amerika also gets a
Caribbean inset**, since 12 of its 13 rings overlap. The StudyGe notes (0.1) may refine this.

## Projection

- **Whole world: Equal Earth** (EPSG:8857). It looks like Robinson, shows Africa at true size,
  and had the fewest tiny countries: 140, against Mercator 141, Natural Earth 143, Robinson 144.
  Web Mercator also gives the biggest file (81 KB).
- **Each continent: Lambert azimuthal equal-area** centred on it. Fewer or equal tiny countries
  than Mercator everywhere (Europe 7 vs 8, Asia 12 vs 13, N. America 13 vs 15), and Oceania needs
  it because it crosses 180°. PostGIS takes a proj string:
  `ST_Transform(g, '+proj=laea +lat_0=52 +lon_0=15')`. Uzbekistan stays in Web Mercator.

## Uzbek names

**Coverage.** Countries: CLDR 195/195 in `uz`, `ru`, `en`; Wikidata 195/195 in each;
uz.wikipedia 194 (no Netherlands). Capitals: Wikidata has Uzbek labels for 187 of 193; the 6
missing (Gitega, Ciudad de la Paz, South Tarawa, Abuja, Oslo, Sri Jayawardenepura Kotte) are
filled by hand. No Cyrillic leaked into any Uzbek name; no English was left untranslated.

**Apostrophes.** CLDR mixes `ʻ` (U+02BB, 4 names), `‘` (U+2018, 1) and `’` (U+2019, 1):
`Oʻzbekiston` beside `Amerika Qo‘shma Shtatlari`. Wikidata uses U+02BB. On import, any
apostrophe after o or g becomes `‘` (U+2018); every other one becomes `’` (`Kot-d’Ivuar`).

**CLDR against Wikidata:** 42 of 195 countries differ, mostly hyphens (Kosta-Rika / Kosta Rika)
or Wikidata's long formal names (Xitoy Xalq Respublikasi). CLDR's short forms suit a quiz.
**The 25 samples by hand** — right: Amerika Qo‘shma Shtatlari (short AQSH), Buyuk Britaniya,
Xitoy, Germaniya, Hindiston, Misr, Janubiy Koreya, Kot-d’Ivuar, Birlashgan Arab Amirliklari,
Saudiya Arabistoni, Qozog‘iston, Qirg‘iziston, Turkiya, Niderlandiya, Chexiya, Yangi Zelandiya;
Pekin, Qohira, Afina, Varshava, Vashington, Tokio, Parij, Bishkek, Dushanbe, Ashxobod.
Doubtful: Gretsiya / Yunoniston, Shveytsariya / Shveysariya, Ostona / Astana, Nyu Deli.

**Already fixed in the draft:** Svazilend → Esvatini (renamed 2018); Falastin hududlari →
Falastin; Myanma (Birma) → Myanma; Kongo – Brazzavil / – Kinshasa → Kongo Respublikasi / Kongo
Demokratik Respublikasi. Capitals: no "shahri" or "(shahar)" (Gvatemala, Mexiko, Panama,
Vatikan, Lyuksemburg); Al-Quvayt → Kuvayt; Tarobulus al-G‘arb → Tripoli; Santa Domingo →
Santo-Domingo; capitals in Sent-Jorjes, Port-of-Speyn, Port-Vila. Russian: США, ОАЭ in full,
Северная / Южная Корея.

**For the owner, 31 names to check by eye** (the draft uses the form before the bar):

| Countries | | Capitals | |
|---|---|---|---|
| Gretsiya \| Yunoniston | Myanma \| Birma | Nyu-Dehli \| Nyu Deli | Kishinyov \| Kishinev |
| Vengriya \| Mojariston | Salvador \| El Salvador | Ostona \| Astana | Ulan-Bator |
| Gruziya \| Gurjiston | Dominikan \| Dominikana Respublikasi | Anqara \| Ankara | Abu Dabi |
| Shveytsariya \| Shveysariya | Bagama orollari \| Bagamalar | Kiyev \| Kiyiv | Gavana |
| Kot-d’Ivuar \| Fil Suyagi Qirg‘og‘i | Buyuk Britaniya \| Birlashgan Qirollik | Ar-Riyod \| Riyod | Syudad-de-la-Pas |
| Esvatini \| Svazilend | Mavrikiy \| Mavritsiya | Tripoli \| Tarobulus | Shri-Jayavardenepura-Kotte |
| Sharqiy Timor \| Timor-Leste | Mongoliya \| Mo‘g‘uliston | Kuvayt \| Al-Quvayt | Janubiy Tarava |
| Kongo Respublikasi, Kongo DR | Ummon \| Oman | | |
| Niderlandiya \| Gollandiya | | | |

## Capitals

One accepted answer; the other capital goes on the answer card.
- **By the constitution:** Bolivia Sucre, Benin Porto-Novo, Netherlands Amsterdam, Malaysia
  Kuala Lumpur, Yemen Sanaa. **Official:** Sri Lanka Sri Jayawardenepura Kotte, Eswatini
  Mbabane. **Seat of government:** South Africa Pretoria (not Cape Town, Bloemfontein).
- **Moved:** Kazakhstan Ostona; Burundi Gitega (2019); **Equatorial Guinea Ciudad de la Paz**
  (decree, January 2026). **Indonesia stays Jakarta:** Nusantara still waits for its decree
  (court, May 2026). Nauru has no official capital: Yaren.
- **Israel and Palestine: no capital question.** The UN has not settled Jerusalem's status;
  any answer takes a side.

## Flags

| Set | Licence | Covers | Total | Heaviest | Ratio | Current? |
|---|---|---|---|---|---|---|
| `lipis/flag-icons` 7.6.0 | MIT | 195 | 1.27 MB (420 KB gz) | RS 177, BO 100, MX 83 KB | 4:3 or 1:1 | yes: Kyrgyzstan 2023, Syria 2025, Mauritania 2017, Honduras 2022 |
| `hampusborgos/country-flags` 1.2.10 | public domain | 195 | 2.52 MB | SV 236, BO 229 KB | true, 26 kinds | no: old Kyrgyzstan, Honduras |
| Twemoji `@twemoji/svg` 15.0.0 | package MIT; graphics CC-BY 4.0 | 195 | 348 KB | KZ 26 KB | square emoji | no: old Syria, Honduras |

**Recommendation: `flag-icons`, 4:3.** svgo saves only 3%. A quiz shows about 10 flags (a few
KB); the 6 over 50 KB (RS BO MX ES SV ME) can go as 320×240 WebP. Afghanistan is the old
tricolour in every set; which flag the UN flies for it in 2026 was not checked. OpenMoji (CC
BY-SA) and Wikimedia Commons were not measured.

## For session 9

- **Import** `tmp/P1111/world/world50_un.topojson` into PostGIS: 233 features, 195 `kind=q`.
  `countries.json` is filled for all 195; empty only: the capitals of Israel and Palestine (by
  choice). Read `tmp/P1111/world/README.md` first.
- **Draw** with the place map's own query (`PlaceMapShapes`): project as above, longer side
  1000, `ST_CoverageSimplify` **1.5 units for the world, 2 for a continent**, drop island specks
  under 2 units² (each country keeps its largest piece), `ST_AsSVG` precision 1, clip context
  land to the frame. Without the speck rule the world is 112 KB instead of 65.
- **Frames** (lon/lat box, projection centre): `scripts/s6_frames.py`; results `frames/*.json`;
  pictures `pictures/world-phone.png`, `asia-phone.png` and one per continent.
- **Credits** on the game's About page, next to BeloGuessr, and in a `THIRD_PARTY` file:
  "Made with Natural Earth" (courtesy, not required); "Flags: flag-icons © Panayiotis
  Lipiridis, MIT" (MIT wants its text with the code); "Country names: Unicode CLDR © Unicode,
  Inc." (the Unicode licence wants its notice in the documentation). Wikidata is CC0.

## Sources

- UN member states: https://www.un.org/en/about-us/member-states
- Natural Earth 5.1.1: https://www.naturalearthdata.com/downloads/ (files from naciscdn.org)
- CLDR 49 JSON: https://github.com/unicode-org/cldr-json (`cldr-localenames-full`)
- Wikidata Query Service: https://query.wikidata.org/ (queries in `scripts/q_*.rq`)
- Flags: https://github.com/lipis/flag-icons, https://github.com/hampusborgos/country-flags,
  https://github.com/jdecked/twemoji
- Equatorial Guinea: https://www.africanews.com/2026/01/05/equatorial-guinea-relocates-capital/
- Jakarta: https://www.thestar.com.my/aseanplus/aseanplus-news/2026/05/15/court-ruling-raises-further-questions-over-future-of-indonesia039s-nusantara
