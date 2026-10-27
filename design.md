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
  A place picked in the place picker is a white entry sign with its outline, the larger place
  on the small line ("Toshkent" over "Chilonzor tumani"); the way to the picker is a blank
  dashed plate.
- **A room's code is an Uzbek number plate** (white, a black rim, the flag and UZ at the
  right end): friends read it out like a car's number. Each player keeps one colour in the
  room (their avatar's ring, their pin on the result map); green stays the real place's.
- **The home is a lobby, not a landing page:** a greeting by the time of day and the player's
  name, one question ("Bugun qayerga boramiz?"), one switch (Yolg‘iz / Do‘stlar bilan), the
  settings as three facts (a coloured dot for how hard, a flag for rounds, a clock for time)
  that open a sheet, then the signs. **A sign is the Play button**: a tap starts the game, or
  opens a room in friends mode. A friend's code is typed onto a number plate and joins by
  itself at five letters. What a player has not earned yet stays out of sight: "Shu yerdan
  boshlang" on the first sign only before the first game, "keep your games" only after one.
- **The profile is about the streets, and short** (2026-10-27): the big number is the
  Tashkent streets learned, three numbers on a dark scoreboard (games, best, perfect), then a
  menu to simple pages of their own: my games, my streets (each a street plate, learned ones
  ticked), records, settings, ways to sign in, name and picture.
- **Friends mode says how a room starts:** three steps above the signs (tap a map, send the
  code, start); a friend's code goes on a number plate below.
- **The real place is a small Uzbekistan flag on a pole**, planted on the spot (`flagSvg` in
  `geo-shafaq/src/lib/map/map.ts`). No player's pin can look like it: theirs are drops of one
  colour each, and green stays out of their colours.
- **Settings show each choice as what it looks like:** the words in each language, a tiny
  screen in light and dark, the compasses turning over a bit of street, the map looks, the
  sound playing when turned on. The chosen tile has a green rim and a tick.
- **Long lists have numbered pages**, not endless scrolling (all games: ten a page, by day).
- **Sharing a game is a link** to it on the site (`geo.shafaq.uz/game/…`, from
  `geo-shafaq/src/lib/config.ts`), with a row of coloured squares, not a picture. A room's final table shares the player's own
  game of it (everyone's table is on that page); a room's invitation is the room's link.
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

## Game feel (the redesign, 2026-10-27)

The owner's test: play it as a 5-year-old would. Anything a child can't read at a glance gets
a picture, a colour or a motion instead of words. The game UI skills
([game-ui-frontend](skills/game-ui-frontend/SKILL.md) first) carry the details.

- **Everything pressable is a chunky plate** with a darker edge under it that sinks when
  pressed (`.btn` in `app.css`). Labels are sentence case, never capitals.
- **A round shows little:** one status pill (round dots, score), the clock only when there is
  one, a pause button (compass style, sound, leave). The hint and "back to start" sit under the
  thumb; on a phone one big button says what to do ("Xaritada belgilash"), and the map slides
  up as a sheet with the street still in sight above it.
- **Each round opens with its number** on a small blue plate ("2-raund · Qayerdasiz?").
- **The first game teaches by showing:** a finger swipes over the street, then the big
  button breathes, then the map shows where to tap. Never again on that device.
- **The reveal is the reward:** the line runs from the guess to the real place, the real pin
  drops with a ring, and only then the verdict pops, up to three stars light (1 000, 2 500,
  4 000 points), the score counts up with soft ticks, and **the place's own sign swings in**: a
  blue Tashkent street plate with the district above the name, a white entry sign for a
  district or town, a green one for a region. A perfect round gets confetti of girih stars in
  the flag's colours.
- **The end of a game is the streets collected:** the total counting up, the stars won, and
  each round's street as a small plate; a tap shows it on the map.
- **Sounds are made on the spot** (no files) and are soft: a pop for the pin, rising notes for
  stars, a short fanfare for a perfect round or a new best, a falling note (not a buzzer) for a
  far miss. One switch in the pause menu mutes them.

## Before calling a design done

- Looks right on a phone and on a laptop.
- Looks right in light and in dark.
- Reads well in all three languages (Russian and English words can be longer).
