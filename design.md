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
  bolts, a small line on top (as the district on a street plate: a name, not a slogan, e.g.
  "Asosiy ko‘chalar") and the name big. "Toshkent
  ko‘chalari" is a blue street plate, "Tarixiy shaharlar" a brown sign for sights, "Butun
  O‘zbekiston" a green highway sign (`src/lib/maps/sign.ts`); old games on "Toshkent" keep its
  white town sign. Small plates mark the map in lists. A new kind of map gets a sign of its
  own, not a card. A place picked in the place picker is a white entry sign with its outline,
  the larger place on the small line ("Toshkent" over "Chilonzor tumani").
- **A room's code is an Uzbek number plate** (white, a black rim, the flag and UZ at the
  right end): friends read it out like a car's number. Each player keeps one colour in the
  room (their avatar's ring, their pin on the result map); green stays the real place's.
- **The home is a lobby with one green button** (P1028 2.1, 2026-10-28): a greeting by the
  time of day and the player's name (none while a guest still has the made-up "🐼_42"), one
  question ("Bugun qayerga boramiz?"), then **one
  sign: where you'll play** (the last place played or picked; "Toshkent ko‘chalari" the first
  time), with how much is known there and "⇄ Boshqa joy". **The sign says where; the one
  button plays.** A tap on the sign opens the place picker, whose first page is the
  ready-made maps as signs, then the regions (no "choose all of Uzbekistan": "Butun
  O‘zbekiston" is that). Under the sign, the settings as one quiet line of three facts (a
  coloured dot for how hard, a flag for rounds, a clock for time) that opens a sheet. Then the
  big green **"O‘ynash"**, the only box: one tap and you are on a street. Under it, one quiet
  row of links: **"Do‘stlar bilan o‘ynash"** opens a room at once with the same place and
  settings, **"Kodim bor"** opens the number plate, where a friend's code joins by itself at
  five letters. One count of the streets on the home: the one under the sign. What a player has not
  earned yet stays out of sight: before the first game the button breathes (no words on it)
  and the sign has no "0 / 185"; after one, the count, a quiet "Oxirgi o‘yin: 12 780 ball"
  and, for a guest, "Natijalarni saqlash · ✈ Telegram" as a link, not a button.
- **On a laptop the home's right half is "Sizning Toshkentingiz":** Tashkent's 13 tumanlar
  drawn from their borders, each with its name, paper where the player hasn't been and gold as
  streets are seen and learned, as strong as the share of its streets (solid only when all are
  learned; in dark, the stars' gold with a gold edge). The sign's place is marked: a district
  filled sky blue with its name below the map, "Toshkent ko‘chalari" the whole city edged. A
  district's count shows on hover; a tap opens it in the picker
  (`src/lib/maps/CityMap.svelte`). Before the first game the city glows. The place map and "my
  map" (P1028 4.2, 4.3) grow out of it.
- **The profile is about the streets, and short** (2026-10-27): the big number is the
  Tashkent streets learned, three numbers on a dark scoreboard (games, best, perfect), then a
  menu to simple pages of their own: my games, my streets (each a street plate, learned ones
  ticked), records, settings, ways to sign in, name and picture.
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
