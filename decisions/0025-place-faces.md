# 0025 — Every place wears its face; the road signs go; the new look everywhere

- **Date:** 2026-11-20
- **Status:** accepted
- **Deciders:** the owner (P1111 1.1 and 1.2, his words on the banner); Claude for how

## Context

P1111 session 3 put the look the owner chose ([decision 0024](0024-look-chosen-in-a-lab.md))
on every screen, and place-in-parent wherever a place is named
([P1111 1.2](../P1111.md#-12-place-in-parent-everywhere)). The old look named places with
**road signs**: a blue street plate for "Toshkent ko‘chalari" and for every street, a brown
sign for sights, a green highway sign for the country, a white entry sign for a picked place
(`MapSign`, `StreetPlate`, the old [design.md](../design.md) "Signs, not cards"). The API also
had a `banner` photo per place, never filled. The owner: *"I didn't want a banner, I wanted it
as an avatar showing place in parent … I randomly said banner, and that's what Claude Code
implemented."*

## Options

1. Keep the road signs, restyled, and add the place's picture beside them.
2. Replace the signs with the place's picture and its name in the new lettering; keep only the
   one real-world object that does a job: the room's code as a number plate.
3. Replace them with plain names.

## Decision

Option 2.

- **A place's face** is the parent's whole shape with the place filled gold
  (`PlaceInParent`, from 24 px beside a name to 160 px on a page's head). The server draws it in
  one answer, `GET /v1/places/{slug}/face`, kept in memory and in the browser for a day. Every
  answer that names a map or a street carries the slug to draw it (`face`).
- **The frame** is the place's parent, with one rule beyond the tree: a city directly under the
  country that a region's outer ring encloses is shown in that region (Tashkent city in Toshkent
  viloyati, its own shape filling the region's hole), because on the whole country it would be
  a dot. A region is shown in Uzbekistan; Uzbekistan is all gold.
- **The signs go**: `MapSign`, `StreetPlate`, their colours and their sign kinds; a street is
  its name in the new lettering, beside its district's face. The challenge's Telegram card
  shows the map's face instead of the blue sign.
- **Banners go** from the API and the database (`banner`, `bannerCredit`, migration 00016).
- **The room's code stays a number plate**: friends read it aloud like a car's number.
- **The app's icon** is the gold eight-point star on a turquoise tile; the old pin is gone.
- **One look**: the tokens are on `:root`; `html.look2`, the switch, the old top bar and the old
  title font (Unbounded) are deleted.

## Consequences

- [design.md](../design.md) is rewritten for the new look; "Signs, not cards" is gone.
- A new place kind (mahallas, P1111 3.3) gets its face for free: its frame is its district.
- A history row for a map spread over the country (the historic cities) shows all of
  Uzbekistan gold, not its few cities.
