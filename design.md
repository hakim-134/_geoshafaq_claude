# Look and feel

The game should feel **Uzbek, warm and playful**, not like a generic map app.

## Style

- **Colours of the flag:** sky blue, green and red, with gold and deep lapis blue
  (the blue of old tiles). Green always marks the real place.
- **Warm paper background** in light mode, deep night blue in dark mode. Both themes
  must look finished, not one "real" and one afterthought.
- **Girih pattern:** a soft eight-point star lattice, as on Uzbek tiles. Use it as a quiet
  texture, never as noise.
- **Fonts:** Unbounded for titles (bold, round, game-like), Onest for everything else.
- Rounded corners, soft shadows, clear big buttons.

## Signs, not cards

Players find their way by reading signs, so the game speaks that language
([decision 0013](decisions/0013-accounts.md) came with it, 2026-10-26):

- **Every map is a road sign of Uzbekistan:** a plate with a white inner border and two
  bolts, a small line on top (as the district on a street plate) and the name big. "Toshkent
  ko‘chalari" is a blue street plate, "Toshkent" a white town sign, "Tarixiy shaharlar" a
  brown sign for sights, "Butun O‘zbekiston" a green highway sign (`src/lib/maps/sign.ts`).
  Small plates mark the map in lists. A new kind of map gets a sign of its own, not a card.
- **The home is a lobby, not a landing page:** a greeting by the time of day and the player's
  name, one question ("Bugun qayerga boramiz?"), the signs, the settings folded into one line
  ("Oson · 5 raund · vaqtsiz"), and Play, which on a phone stays at the bottom under the thumb.
  What a player has not earned yet stays out of sight: "how to play" only until the first game,
  "keep your games" only after one.
- **The profile is about the streets:** the big number is the Tashkent streets learned; the
  other numbers sit on a dark scoreboard.
- Avoid what makes a page look machine-made: a gradient banner with a giant slogan, rows of
  identical cards, stat pills, numbered circles.

## Feel

- **Phone first.** Big tap targets, one hand, nothing hidden behind hover.
- **Show, don't explain.** A colour, a glow or a sound says more than a sentence.
- **Small rewards:** the score bar fills, the result card names the street, district and
  nearest metro, so every round teaches something.
- **Tension near the end:** warnings and a red glow when time runs low.
- Text is short and friendly, in Uzbek first (Latin script, with `o‘` and `g‘`).
- **Decent:** nothing a family in Tashkent would mind seeing ([players.md](players.md)).

## Before calling a design done

- Looks right on a phone and on a laptop.
- Looks right in light and in dark.
- Reads well in all three languages (Russian and English words can be longer).
