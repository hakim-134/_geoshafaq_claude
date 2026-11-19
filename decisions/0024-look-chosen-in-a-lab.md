# 0024 — The new look: Turquoise tile, chosen by the owner in a look lab

- **Date:** 2026-11-19
- **Status:** accepted (on the home, a round and a round's result; the rest of the game in
  session 3)
- **Deciders:** the owner, by picking options in the look lab; Claude built the lab and the pick

## Context

[P1111 1.1](../P1111.md#-11-the-new-look) asked for the whole look changed: *"a real game, bold
and finished the way GeoGuessr is, but ours."* Session 2 drew three directions as mock-ups,
picked one itself ("Lojuvard": lapis ground, white panels, Geologica slanted) and built it on
three screens. The owner's answer (2026-11-13,
[his words](../P1111-owner-words.md#11-after-seeing-the-first-new-look-2026-11-13)): potential,
but the font too edgy, the lapis too sharp, white where he remembered a warm milk, the home's map
opening another page; keep the logo and the result's plaque with its place-in-parent picture; the
name is GeoShafaq; and *"make configurable layout alternatives … I test and choose."*

## Options

1. Draw another three directions and pick one again.
2. Ask him to describe what he wants in words.
3. Build a page where he switches every option himself (colours, font, lean, capitals, corners,
   depth, map style, where the place's name stands) on the real screens with real shapes, and
   sends back the combination.

## Decision

Option 3: the look lab (`~/131/github.com/hakim-134/tmp/look-lab/`, outside git; served by the
`shafaq-lab` container while it is needed). Seven palettes, ten fonts that carry `o‘ g‘` and
Uzbek Cyrillic, four ready combinations, a "Copy my choice" line. His pick:

`colours=firuza · night=yes · font=mplusrounded · lean=8 · keys=caps · corners=soft · depth=raised · map=tiles · name=above`

- **Colours: Turquoise tile.** Khiva's turquoise for the ground (`#0D808D → #08606C` by day,
  `#0C3B43 → #062830` by night), milk panels (`#FFF9EC`), milk map tiles, never plain white.
  Green stays the key and the real place, gold the chosen place, stars and what is learned, red
  the miss; a place marked but not yet chosen is blue.
- **Lettering: M PLUS Rounded 1c**, Black, for titles, numbers and keys, leaning 8°; Onest for
  text. The font has no italic and Chrome won't slant an upright font by a small angle (it
  leaves it upright below about 14° and tips it far more above), so the lean is a skew of the
  element: the `.d` class and a key's `.lbl` (`--lean` in `app.css`). Its digits are one width.
- **Capitals on keys, soft corners (24 px), raised keys with a lip, the map as tiles.**
- **The place's name above the map, beside its place-in-parent picture.**
- **The home's map zooms in place** (the owner's rule for every map from now on: one map, one
  behaviour): a tap goes in, the small place-in-parent square at the map's top left goes back,
  a tap marks a district, the gold "Shu joyni tanlash" at its bottom right chooses, and nothing
  round the map moves. It never leads to another page. While a district is marked blue, the
  green "O‘ynash" plays that district (what the player is looking at); a small pill names what
  the gold button would choose, and shows only with it.
- **The name players read is GeoShafaq** (the game, its share texts, the app's name on a phone,
  the Telegram card and bot). Repos and folders keep their names.

## Consequences

- The tokens live in `geo-shafaq/src/app.css` ("THE NEW LOOK"), still hung on `html.look2` and
  switched on only by the three screens; session 3 moves them to `:root`, deletes the old look
  and the switch, and rewrites [design.md](../design.md).
- "Lojuvard" is gone; its mock-ups stay in `tmp/P1111/look/` for reference only.
- Choosing the whole of Uzbekistan from the home waits for the map picker (P1111 1.3): on the
  country the gold button doesn't show, so the home at rest keeps one big button.
- For a question of taste, the owner chooses by trying (a page of options), not by reading or by
  judging one finished design ([CLAUDE.md](../CLAUDE.md#what-the-owner-cares-about)).
