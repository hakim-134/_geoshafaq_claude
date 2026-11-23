# Look and feel

The game should feel **Uzbek, bold and playful**: a real game, as finished as GeoGuessr, but
ours. The owner chose the look himself, option by option, in a look lab
([decision 0024](decisions/0024-look-chosen-in-a-lab.md)); since P1111 session 3 (2026-11-20) it
is on every screen ([decision 0025](decisions/0025-place-faces.md)). The tokens and the kit are
in `geo-shafaq/src/app.css`, whose header lists every class.

## The look: Turquoise tile

- **The ground is Khiva's turquoise** (`#0D808D → #08606C` by day, `#0C3B43 → #062830` by
  night), a soft glow in the middle. Text straight on the ground is white.
- **Raised things are milk**, never plain white (`#FFF9EC`): panels, sheets, the map's tiles.
  Ink on milk is deep teal. By night the panels are deep teal and the map's tiles stay milk.
- **Colours mean things.** Gold: stars, what is learned, the face in the map's square. Green:
  the real place and the one key to press. Red: a miss, low time. The picked places: each its
  own colour of eight (`--pick-1…8`, light and dark), the same on the map at every level and on
  its picture in the list. A player's own colour: their pin and their line in a room (never
  green).
- **Lettering:** M PLUS Rounded 1c Black for titles, numbers and keys, leaning 8° (`.d`, and
  `.lbl` inside a key; the font has no italic, so the lean is a skew); Onest for text. Digits
  are one width, so a counting score doesn't jump. A title on the ground floats on a stacked
  shadow (`.float`); a small gold tag over it (`.kick-tag`) names a kind or a parent.
- **Keys are raised, with a lip, and go down when pressed.** Their words are capitals. One
  green key per screen (`.btn-primary`); everything else is quiet: a glass chip on the ground
  (`.btn-chip`), an outline on milk (`.btn-ghost`), a red outline for leaving (`.btn-danger`).
  Telegram's button keeps Telegram's blue.
- **Soft corners** (24 px), soft shadows, motion with a purpose (a podium rising, a key going
  down), still for reduced motion.
- **The top bar** (`GameBar`) is on every page: the gold eight-point star and "Geo**Shafaq**"
  ("Geo" white, "Shafaq" gold, leaning), the language, light or dark, and the player's face as
  a gold coin. The same star on a turquoise tile is the app's icon.
- **A sub page** (`SubPage`) has a round glass back key and its title big, white and leaning;
  its content stands on milk panels and lists (`.panel`, `.panel-list`), big numbers on a milk
  strip (`.stats`).
- **On a laptop** the ground fills the window and the content stands in a centred column, or
  the map large at one side with a column beside it. Nothing stretched edge to edge, nothing
  stuck in the top half.
- **Yandex's maps stay light at night** (the owner, 2026-10-30): never darken or filter them.
- Avoid what makes a page look machine-made: a gradient banner with a giant slogan, rows of
  identical cards, stat pills, numbered circles.

## Places wear their faces

The owner: *"You may not know the shape of Buxoro, but by looking at its parent and the selected
part, you can recognise it easily."* A place is never a word alone and never a sign.

- **A place's face** is its parent's whole shape with the place filled gold (`PlaceInParent`,
  `<PlaceInParent place="jondor-tumani" on="panel|ground">`): milk tiles with teal seams on the
  ground, faint turquoise tiles on milk. About 32–42 px beside a name in a row, 64–160 px on a
  page's head. A place too small to see (Tashkent on the country, Kogon) gets a gold ring.
- **What frames it:** a Tashkent district in Tashkent's districts; a district or town elsewhere
  in its region; a region in Uzbekistan; Tashkent city in Toshkent viloyati, its shape filling
  the region's hole; Uzbekistan all gold. Mahallas will sit in their district.
- **It stands wherever a place is named:** a round's result (on the plaque), the end of a game
  and each of its streets (the district's face), history, records, a room's place, a challenge,
  the places page and its list, the wallet's learned districts, the Telegram card.
- **A street is its name** in the leaning letters, its district under it in small text, the
  district's face beside it. No street plates, no road signs, no banners.
- **The one real-world object kept: a room's code is an Uzbek number plate** (white, a black
  rim, the flag and UZ at the right end), raised off the ground: friends read it aloud like a
  car's number.

## The screens

- **The home** (P1111 1.1, 1.3): "Xayrli kun, Ukki 42", the list of picked places above the
  map of Uzbekistan as milk tiles (one place: its face and name; several: a row of their faces
  on a phone, rows of face, name and × at the left on a laptop; a "+" for the ready-made maps).
  The map is the picker ([decision 0027](decisions/0027-several-places-one-mixed-map.md)): it
  opens on Uzbekistan with no way up; a tap goes in, in place (a region, Tashkent, then a
  district or town); the square at the top left wears the face of what is on screen and goes
  up one level; inside a place one quiet outline key, "Tanlash", adds it to the list ("✓
  Tanlangan" in its colour takes it out). Picked places wear their colours at every level. The
  settings as one quiet line of facts that opens a sheet; the big green "O‘YNASH" plays the
  list; under it "Do‘stlar bilan o‘ynash" and "Kodim bor". The four tabs replace it in P1111
  1.4.
- **A round:** little over the street: small dark capsules with a lip (round, score, the clock
  only when there is one), no blur. A round opens with a slanted plaque, gone in a second and a
  half. Under 0:10 the clock is red and beats and the screen's edges glow red, "like low health
  in a game". On a phone one big key says what to do ("Xaritada belgilash") and the map slides
  up as a sheet with the street still in sight.
- **The reveal is the reward:** the line runs from the guess to the real place, the 🏁 badge
  drops with a ring, the verdict pops, up to three stars light (1 000, 2 500, 4 000), the score
  counts up big in the leaning numbers, and the place's plaque swings in: deep teal with a gold
  seam, the district in gold capitals over the street, its face at the left. A perfect round
  gets confetti.
- **The end of a game is the streets collected**, on the ground under the map: the map's face
  and name with its kind, the headline ("Yangi rekord!", "Birinchi o‘yin!"), the total counting
  up, the stars and the distance, then the streets on one milk panel: the round's number on a
  gold coin (the same number as its badge on the map), then the district's face, whole, then the
  street in the leaning letters over its district. A room's end has the same list. A tap shows
  that round on the map. "YANA O‘YNASH" green and fixed at the bottom; "Do‘stni
  chaqirish" and home quiet under it. On a laptop the column at the left, the map large beside it.
- **History** (`/games`): days in small white capitals, each a milk panel of rows: the map's
  face, its name, rounds and hints, the score.
- **The profile is about the streets, and short:** the face as a big gold coin with a pen, the
  name floating, the Barg chip; **"Sizning Toshkentingiz"**, Tashkent's districts as milk tiles
  in gold as strong as what is learned (a district's sheet lists its streets and plays there);
  three numbers on a milk strip; a milk menu with raised colour tiles. On a laptop the map large
  at the right.
- **The shop** is calm milk tiles with the thing itself, its name and its price in Barg: no
  sales, no timers, no "new", nothing random, "Faqat chiroy uchun: ballni o‘zgartirmaydi". A
  tap shows it big with one key; too little Barg says how much is missing, never a dead key.
  **The wallet** is the leaf coin and the balance big, how Barg is earned, and its history.
- **Settings show each choice as what it looks like:** the words in each language, a tiny home
  by day and by night, the compasses over a street, the map looks. The chosen tile has a gold
  ring and a tick.
- **The error page:** the milk map with a gold "?" pin looking about, "Bu ko‘cha bizda yo‘q",
  one green key home.

## Rooms

- **The lobby has one job, bringing friends in** (P1028 2.2): one big "DO‘STLARNI CHAQIRISH"
  (the phone's share sheet; on a laptop it copies and the QR stands beside it), the number plate
  under it with a QR key, the players as milk faces popping in with a two-note sound (👑 on the
  host's, a tiny pin of each one's colour, the player's own name gold), a dashed "+" seat that
  invites too, one milk card for the place and the rules (its face, its name, the facts; the
  host taps it to change them), and "BOSHLASH" at the bottom, a quiet glass key while the host
  is alone. Once a friend is in the invite goes quiet and the green key is the only filled one.
  A friend sees the faces first and "Xona egasi boshlaydi" with the host's face. No explaining
  sentences.
- **A room goes on by itself** (P1028 2.2 c): after a reveal a green ring counts ten seconds on
  every phone; the host has ⏸ and a green "HOZIR"; held, the host gets the big key back. A
  room's round has ☰ "Menyu" with "Xonadan chiqish", never a pause: a room's clock never stops.
- **A room's round shows its clock in the players' chip,** "👥 1/2 · 0:45". After the first
  guess the others get 45 s; the clock turns gold under 0:15 and red under 0:10 with the red
  edges.
- **A room's end is a stage** on the ground: "Siz 2-o‘rindasiz" floating white; third, second
  and first rise as raised bronze, silver and gold steps with big leaning numbers, then a
  fanfare and confetti on every phone; then the streets on milk with their faces, the map with
  every badge, and one next step: the host's "YANA O‘YNASH" (friends are taken in; new streets),
  the friends' "Xona egasi yangi o‘yin boshlaydi" beside the host's face; "Do‘stni chaqirish"
  quiet; the rest under ⋯.

## Rules that stay

- **A hint's cost is shown, never explained** (P1028 2.3): small over the big score, the score
  before the hint and a gold "−20% 💡" chip: "4 412 −20% 💡" over "3 530", counting up, then
  ticking down. A room's row carries "💡 ~~4 412~~"; the podium "💡 −639"; history "💡 2". Free
  hints show nothing.
- **The real place is a round 🏁 badge** (P1028 3.1, `flagSvg` in `src/lib/map/map.ts`): a white
  ring, a green disc, a white finish flag, a short point to the spot. On the end map each badge
  wears its round's number in a gold dot. A tap opens the place's panorama on Yandex Maps
  (P1028 3.2), only after the result.
- **The crowd's ring** (P1028 3.3): a soft gold ring round the real place at the round's average
  distance, pulsing out twice as the badge lands, "O‘rtacha 2.3 km" on its edge, and one line:
  "O‘rtachadan 1.2 km yaqinroq" or "uzoqroq".
- **Every count counts the learned streets:** "23 / 177 o‘rganildi". **Gold on a map is learned
  streets only** (the taste review, 2026-11-23): a district only played in stays milk; the first
  learned street is a light gold wash, all of them full gold. On the home's map gold is the chosen
  place instead. **No zero is ever shown**: no "0 / 177", no "0 Aniq topildi", no Barg at 0, no
  "O‘rganilgan · 0"; what isn't earned stays out of sight. Under a guess within 500 m,
  "✓ Ko‘cha o‘rganildi" with a rising note.
- **A face on the gold coin must show**: no mostly-yellow emoji among the faces (🌙 ⭐ 🍋 🌽 🌻
  went, 2026-11-23).
- **A map's names stand on it:** zoomed into a place, every part has its name, inside its shape
  where it fits, else a milk pill with a short line.
- **Barg is the owner's leaf coin** (`Coin.svelte`), never an emoji; shown when earned and beside
  the name, nowhere at 0, not on the home. **Frames** are a ring on the face's own edge.
- **Guests' names are words** (P1028 2.4): "Ukki 42", the same in every language.
- **A challenge's link is a friend saying "beat this"** ([decision 0018](decisions/0018-challenge-links.md)):
  the sender's face, "Suvsar 86 sizni chaqirdi", their score big in gold, "Yenga olasizmi?", the
  map's card with its face, one green key; after playing, "Siz 2-o‘rindasiz" and the board. In
  Telegram the card is the game's ground with the star, the map's face and name, the score in
  gold, its squares and a green "O‘YNASH" (`internal/card` in the server).
- **Qiyinlik is how hard the place is to guess, nothing else** ([0017](decisions/0017-difficulty-is-the-place.md)).
- **Long lists have numbered pages**, not endless scrolling. **A name wraps at its spaces**,
  never inside a word (`src/lib/fit.ts`).

## Feel

- **Phone first.** Big tap targets, one hand, nothing hidden behind hover.
- **Show, don't explain.** A colour, a glow, a shape or a sound says more than a sentence.
- **Small rewards:** every round names the street, the district and the nearest metro, and shows
  the district's face, so every round teaches something.
- **The first game teaches by showing:** a finger swipes over the street, the big key breathes,
  the map shows where to tap. Never again on that device.
- **Sounds are made on the spot** and soft: a pop for the pin, rising notes for stars, a short
  fanfare for a perfect round or a new best, a falling note (not a buzzer) for a far miss.
- Text is short and friendly, Uzbek first (Latin, with `o‘` and `g‘`).
- **Decent:** nothing a family in Tashkent would mind seeing ([players.md](players.md)).

The owner's test: play it as a 5-year-old would. Anything a child can't read at a glance gets a
picture, a colour or a motion instead of words. The game UI skills
([game-ui-frontend](skills/game-ui-frontend/SKILL.md) first) carry the details.

## Before calling a design done

- Looks right on a phone and on a laptop.
- Looks right in light and in dark.
- Reads well in all three languages (Russian and English words can be longer).
- Every place named has its face; nothing on the screen is in another style.
