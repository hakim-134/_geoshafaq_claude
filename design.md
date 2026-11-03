# Look and feel

The game should feel **Uzbek, warm and playful**, not like a generic map app.

## Style

- **Colours of the flag:** sky blue, green and red, with gold and deep lapis blue
  (the blue of old tiles). Green always marks the real place.
- **Warm paper background** in light mode, deep night blue in dark mode. Both themes
  must look finished, not one "real" and one afterthought. **Yandex's maps stay light in
  dark mode** (the owner, 2026-10-30): never darken or filter their tiles.
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
  time of day and the player's name (a guest's is the avatar's word and a number, "Ukki 42"), one
  question ("Bugun qayerga boramiz?"), then **one
  sign: where you'll play** (the last place played or picked; "Toshkent ko‘chalari" the first
  time), with how much is known there and "⇄ Boshqa joy". **The sign says where; the one
  button plays.** A tap on the sign opens the place map at the sign's place (a ready map: the
  country). Under the sign, the settings as one quiet line of three facts (a
  coloured dot for how hard, a flag for rounds, a clock for time) that opens a sheet. Then the
  big green **"O‘ynash"**, the only box: one tap and you are on a street. Under it, one quiet
  row of links: **"Do‘stlar bilan o‘ynash"** opens a room at once with the same place and
  settings, **"Kodim bor"** opens the number plate, where a friend's code joins by itself at
  five letters. One count of the streets on the home: the one under the sign. What a player has not
  earned yet stays out of sight: before the first game the button breathes (no words on it)
  and the sign has no "0 / 185"; after one, the count, a quiet "Oxirgi o‘yin: 12 780 ball"
  and, for a guest, "Natijalarni saqlash · ✈ Telegram" as a link, not a button.
- **A room's lobby has one job, bringing friends in** (P1028 2.2, 2026-10-28): one big sky
  "Do‘stlarni chaqirish" (the phone's share sheet; on a laptop it copies, "Havola nusxalandi", and
  the QR stands beside it), the number plate under it with a QR icon, the players as faces
  (each in their colour's ring, 👑 on the host's) popping in with a two-note sound, a dashed "+"
  seat that invites too, one line for the place and rules (the small sign, then the facts; on a
  phone the rounds are a number by the flag and the clock shows only when there is a limit, so
  they fit beside the sign), and "Boshlash ▶" at the bottom, quiet while the host is alone (no
  number on it: by "⚑ 3" it read as the rounds; the faces say who is in). Once a friend is in,
  the invite goes quiet and the green button is the only filled one. A friend sees the faces first. No explaining sentences.
- **Streets I miss** wear red only on the way in (a pale red row with a pin and the count, in my
  streets): red is where the guess went. The list is plain street plates, worst first; a
  street leaves it without ceremony, and the last one gets confetti.
- **A room's end is a stage:** a podium (gold, silver, bronze steps) where third, second and
  first rise with rising notes, then a fanfare and confetti on every phone, and each phone says
  its own place ("Siz 2-o‘rindasiz", "Siz g‘olibsiz!"). On a phone it comes first and the map is
  under the streets. One next step: the host's "Yana o‘ynash" (friends are taken in; new
  streets, away from the ones just played), the
  friends' "Xona egasi yangi o‘yin boshlaydi" beside the host's face; "Natijani ulashish"
  quiet; the rest under ⋯.
- **A room goes on by itself** (P1028 2.2 c): after a round's reveal a green ring counts ten
  seconds on every phone, beside "Keyingi raund" ("Keyingi" on the host's, or "Natijalar"); it turns gold with a soft
  tick on the last three. The host has a pause button and a green "Hozir" beside it; a held
  result gives the host the big button back. Nobody waits on one person's tap. That ring's ⏸
  is a room's only pause: a room's round has ☰ "Menyu" (compass, sound, "Xonadan chiqish"),
  never "Pauza", because a room's clock never stops.
- **A room's round shows its clock in the players' chip,** "👥 1/2 · 0:45", not in the middle
  where it covered the count. After the first guess the others get 45 s, in a room with no time
  limit too: the clock appears then, turns gold under 0:15 and red under 0:10 with the red
  edges, so nobody is cut off without warning. On a phone the row stays one row (a second
  would cover the compass): the chip's clock has no icon, the round dots are smaller, and a
  ten-round room shows "3/10 raund" instead of ten dots.
- **A hint's cost is shown, never explained** (P1028 2.3), the way the owner drew it: small and
  grey over the big score, the score before the hint and a solid gold "−20% 💡" chip (one per hint; the bulb's gold, in light and dark):
  "4 412 −20% 💡" over "3 530". The number counts up to 4 412, the small line drops in with a
  soft falling note, and the big number ticks down. On a phone the result has no score bar
  (the stars say it) and a long street name gets smaller to stay on one line, so a room's three
  rows fit above the buttons. A room's row carries the same gold pill, "💡 ~~4 412~~", before "+3 530"; the
  podium puts what the hints cost under the total, "💡 −639"; the game page's room table and
  history say "💡 2". Before the tap the bulb carries its price in the same gold, "−20%" (red
  read as "wrong"). Free hints show nothing.
- **On a laptop the home's right half is "Sizning Toshkentingiz":** Tashkent's 13 tumanlar
  drawn from their borders, each with its name, paper where the player hasn't been and the stars'
  gold with a gold edge as streets are seen and learned, as strong as the share of them (solid only
  when all are learned). "23 / 177 ko‘cha o‘rganildi" beside the title. The sign's place is marked: a district
  filled sky blue, its count and a way to its streets beside the title ("Chilonzor: 9 / 25 ko‘cha ›"),
  "Toshkent ko‘chalari" the whole city edged. A
  district's count shows on hover; a click makes it the sign at once and the page stays on the
  home, so "O‘ynash" plays it (`src/lib/maps/CityMap.svelte`). Before the first game the city glows under a gold "Shu
  yerdan boshlang" instead of the title. On this map Mirzo Ulug‘bek's far piece isn't drawn; the
  place map keeps it.
- **The place map is the map people know** (P1028 4.2, 2026-10-29, the owner's words): the
  map of Uzbekistan, whole, its 14 parts drawn from their borders, neighbours on one shared line,
  paper where the player hasn't been and the stars' gold from the first street seen, deeper as streets
  are seen and learned, names where they fit; Tashkent city, a few pixels wide, is a
  round badge, and on a first visit it glows under a gold "Shu yerdan boshlang". A tap on a
  region flies into it and its districts and towns come up, the region whole in its own shape;
  Tashkent shows its 13 tumanlar. A
  tap on a place with nothing inside picks it (sky blue); a second tap lets go. **What plays is
  where you stopped:** the picked place, else the place on screen (Tashkent: its one sign, the
  blue "Toshkent ko‘chalari"), in one bar at the bottom
  (its sign, the progress, the green "O‘ynash", which starts the game and makes it the home's
  sign). On the country's map the choice is the ready maps as road signs, all in sight:
  "Butun O‘zbekiston" (the country edged), "Toshkent ko‘chalari" (Tashkent lit), "Tarixiy
  shaharlar" (gold stars on Samarqand, Buxoro, Xiva, Shahrisabz). A place with few panoramas (under 10)
  plays what it has, its name in italics; only a place with none is hatched and says "Tez orada" (in dark they sink into the background; the playable ones
  are the raised navy; their names grey). A name is a tap on its place; a town is a dot with
  its name in a white pill ("Samarqand shahri"); a district's name stands inside its own shape
  (along it, when the shape is a thin strip), and names never move when a place lights. The
  same places are a list behind one folded "Ro‘yxat". No statistics, no legend, no explaining
  sentences; a phone's country page fits the screen.
- **Guests' names are words** (P1028 2.4): the avatar stays the emoji, the name is its Uzbek
  word and a number from 10 to 99, "Ukki 42", the same in every language, in the header too.
  No avatar whose word teases (🦥 "yalqov", 🐵 "maymun").
- **The profile is about the streets, and short** (2026-10-27): its big picture is **my map**
  (P1028 4.3): "Sizning Toshkentingiz", the 13 tumanlar coloured by what the player knows, "23 / 177
  ko‘cha o‘rganildi" over them, names level, edge to edge on a phone. A tap on a district is a sheet
  of its streets (each a plate; learned ones ticked), how many still wait, and a green "Shu yerda
  o‘ynash". Then three numbers on a dark scoreboard (games, best, perfect), then a
  menu to simple pages of their own: my games, my streets, records, settings, ways to sign in, name
  and picture.
- **Every count counts the learned streets** (2026-11-02, the review): "23 / 177 o‘rganildi"; a bar
  is green for learned over gold for seen. What was only seen shows as gold, in bars and on maps, and
  in the street lists; never as a number that disagrees. No "0 / 177": what isn't earned stays out of
  sight, and the map says how it starts, "Birinchi ko‘chani 500 m ichida toping". Under a guess within
  500 m of a street, "✓ Ko‘cha o‘rganildi" in green with a rising note.
- **A name wraps at its spaces, never inside a word:** a heading with a player's name shrinks until
  its longest word fits (`src/lib/fit.ts`).
- **A challenge's link is a friend saying "beat this"** (PLAN 8.3, 2026-11-02;
  [decision 0018](decisions/0018-challenge-links.md)): "Do‘stni chaqirish" on a game's end and a
  room's end, the same streets for whoever opens it. A friend meets the sender's face, "Suvsar 86
  sizni chaqirdi", their score big in gold, "Yenga olasizmi?", the sign, one green button, and the
  board from two players up. Before one's own game the board's rows
  lead nowhere: they show where the streets are. After it: "Siz 2-o‘rindasiz", the board, "Do‘stni
  chaqirish". In Telegram: a card on night blue with the flag's stripe, the sender, the map's sign,
  the score in the stars' gold, its squares and a green "O‘ynash" (`internal/card` in the server).
- **The real place is a round 🏁 badge** (P1028 3.1, 2026-10-30; `flagSvg` in
  `geo-shafaq/src/lib/map/map.ts`): about 36 px, a white ring with a faint dark hairline, a
  green disc, a white finish flag with a navy chequer, a short point to the exact spot and a
  soft shadow on the ground. The white ring keeps it clear on Sputnik and Gibrid. On the end
  map each badge has its round's number in a gold dot on its shoulder, and the guess pin of that
  round carries the same number; a later round sits on top. The same badge is the legend's
  "Haqiqiy joy", and in "my streets". No player's pin can look like it: theirs are drops of one
  colour each, and green stays out of their colours.
- **The crowd's ring** (P1028 3.3, 2026-11-02): on every round's result, a soft gold ring
  around the real place, its radius the round's average distance. As the badge lands it pulses
  out from the badge twice; the ring stays where the first pulse ends, and the gold pill
  "O‘rtacha 2.3 km" comes on its edge when the last has gone, on the part of the ring in sight
  and clear of the pins. Under "2.3 km uzoqda" one line with a little gold ring: "O‘rtachadan 1.2 km
  yaqinroq" or "uzoqroq". In a room: that round's players, two guesses or more. Alone: other
  players on the same panorama, three or more. Gold, because green is the real place, red the
  line, and a player has their own colour. The map frames the ring unless it is over eight
  times the farthest guess; then it runs past the edges and the line says it. Still for reduced
  motion: the ring and its pill just stand there.
- **Tap the badge, see the place** (P1028 3.2): it opens that place's panorama on Yandex Maps
  in a new tab, facing the way the round began (`panoramaUrl` in `map.ts`; inside Telegram
  through its `openLink`). On a laptop the badge's hint says "Panoramada ko‘rish ↗"; the
  link under the result's street plate ("Panoramada ko‘rish ↗") opens the same (the plate
  itself stays a sign), and in "my streets" each whole row does. No words over the map: on a device's first result the
  badge's ring keeps calling a few times more instead. Only after the result: during a round
  nothing links to the place.
- **The place map goes close** (2026-11-02, the owner's idea): a pinch, the wheel, or + and − in the
  corner, and a finger or the mouse moves the map; up to 12×. It stays the same level: the country's
  map shows regions however close, a region's its districts; going deeper is a tap. Close up every
  place gets its name, inside its own shape, big or small, with panoramas or not, and pills and
  their lines mostly go by themselves: looking at the map teaches the shapes and the names.
- **Qiyinlik is how hard the place is to guess, nothing else** ([0017](decisions/0017-difficulty-is-the-place.md)):
  Oson, O‘rta and Qiyin pick from a map's easier or harder places; the map, its names, labels, hints
  and scoring stay the same on all three.
- **Settings show each choice as what it looks like:** the words in each language, a tiny
  screen in light and dark, the compasses turning over a bit of street, the map looks, the
  sound playing when turned on. The chosen tile has a green rim and a tick.
- **Long lists have numbered pages**, not endless scrolling (all games: ten a page, by day).
- **Sharing a game is a challenge's link** (`/c/…`), with a row of coloured squares, not a picture. A
  room's end shares the same, with everyone there on its board; a room's invitation is the room's
  link. On a game's end "Do‘stni chaqirish" and the way home stand under the green button, always in
  sight, as on a room's end.
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
  one, a pause button (compass style, sound, leave; ☰ "Menyu" in a room). The hint and "back to start" sit under the
  thumb; on a phone one big button says what to do ("Xaritada belgilash"), and the map slides
  up as a sheet with the street still in sight above it.
- **Each round opens with its number** on a small blue plate ("2-raund · Qayerdasiz?").
- **The first game teaches by showing:** a finger swipes over the street, then the big
  button breathes, then the map shows where to tap. Never again on that device.
- **The reveal is the reward:** the line runs from the guess to the real place, the real place's
  badge drops with a ring, and only then the verdict pops, up to three stars light (1 000, 2 500,
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
