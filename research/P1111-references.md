# P1111 0.1: the models, played

_Checked 2026-11-11 and 12. Pictures of all three are in `~/131/github.com/hakim-134/tmp/P1111/`
(`studyge/`, `squiz/`, `geoguessr/`): for looking only, never for the game or for git._

## Verdict

- **StudyGe is the model for "find it on the map", Squiz for "name it" and for what comes
  back, GeoGuessr for the look's confidence, the duel's numbers and the 5 000 moment.** From
  each we take ideas and feelings; none of their pictures, sounds, texts or fonts.
- **All three were really played.** Squiz on 2026-11-11: two full daily challenges on its free
  web side, at phone size, with wrong answers on purpose. StudyGe and GeoGuessr on 2026-11-12,
  by the lead, in the owner's Chrome once he had signed in to both: a full round of StudyGe's
  learning mode; in GeoGuessr the daily challenge (five rounds) and one whole ranked duel.
- **Playing confirmed what had been read**, the duel's numbers to the point: 6 000 health, the
  hit is the difference times the winner's own multiplier, +0.5 for every round won, 15 seconds
  after the first guess, no pin means 0.
- **Playing added four things** (each is in "Played by the lead" under its game):
  StudyGe asks only about the countries the player has opened; it leaves the map zoomed in
  after a wrong answer, which costs the next question; it never says what was missed; and
  GeoGuessr ends every round with one line that teaches how to know the country.
- **Still not seen:** a real 5 000 (the best round was 4 955), so that moment is known from
  GeoGuessr's own code only; StudyGe's sound, its upright-phone layout, its rings round tiny
  islands (videos only) and its other modes.

## What we take, in one place

### For the quiz engine (P1111 3.1)

"Find it on the map" (StudyGe's way):

1. **The map is the whole screen.** The question is one short line in a pill at the top: the
   name, or a flag, a capital, a bus number. Small quiet controls in the corners. Nothing else.
2. **A tap selects, a button answers.** The tapped shape lights and "Tasdiqlash" appears; the
   player may tap another shape first. On a phone a slipped finger becomes a correction, not a
   mistake. One try per question.
3. **Right:** the shape takes the "learned" colour and keeps it, so the map fills as the player
   goes; the next question comes by itself in under a second.
4. **Wrong teaches twice:** it names what was tapped ("Bu — Kattaqo‘rg‘on"), then the map flies
   to the right shape and lights it, and waits for "Davom etish". **Then the map goes back to the
   whole area by itself**: StudyGe leaves it zoomed in, and the next question is lost to
   zooming out (played).
5. **Small shapes** get a dot or a ring of fixed size in their own colour, rings close in on
   the pick before it counts, and the map can be pinched. No list as a way out.
6. **The area is picked by tapping it on the map** (Buxoro, then its districts), not from
   checkboxes.

"Name it" (Squiz's way):

7. **The place lit inside its parent's map at the top, big name buttons at the bottom** for the
   thumb. It is our place-in-parent picture, large.
8. **Choices grow inside a session: 2, then 4, then 6,** and the wrong ones are neighbours, so
   the region is learned too.
9. **Right moves on by itself (about 0.4 s). Wrong stops**: the picked one and the right one stay
   side by side, enlarged, with a kind line and "Davom etish".

Both ways:

10. **O‘rganish**: no clock; a missed place comes back later in the same session and on the next
    visit, until it is answered right a few times in a row. Squiz's ladder (2 days, 4 days, a
    week, two weeks, a month) is the honest model if we ever want more.
11. **Sinov**: a thin time bar inside the question's pill, a running count, and a result that
    says what was missed. A percentile only when it is real.
12. **The same place asked in several forms** (map to name, name to map, flag, capital; for
    buses, line to number).

### For the look (P1111 1.1)

- **One bold title face, heavy and leaning forward, with the numbers as the hero.** Free and
  checked letter by letter: **Geologica Black, slanted, for titles; Onest stays for text.**
  Today's title font, Unbounded, cannot write Қ Ғ Ҳ.
- One deep ground colour, one loud action colour on a button with a lip that looks pressed,
  small dark capsules over the panorama, springy motion with overshoot.
- **Ours, not theirs:** colours from our own story, and the map of Uzbekistan as the hero where
  GeoGuessr puts its characters.

### For the 5 000 moment (P1111 2.4)

Starts within half a second of the result, peaks hard, is gone in about 2.5 s, **lets taps pass
through** so it never holds up the next round, has its own short sound, and leaves a mark on
that round in the game's summary. In a room everyone sees whose it was. The art is ours: the
number in our title face with the place's shape lighting up.

### For the duel and the rating (P1111 5.1–5.3)

| Rule | Start with |
|---|---|
| Health | 6 000 each (our rounds also score up to 5 000, so the numbers carry over) |
| The hit | the difference in score × the winner's multiplier; only the loser loses health |
| Multiplier | ×1 at first; +0.5 to your own for every round you win; it never goes down |
| After the first guess | the other player has 15 s |
| At the deadline | a placed pin counts as the guess; no pin scores 0 |
| A tie | nobody is hurt |
| Healing rounds | none |
| How it is felt | scores count up, the higher crashes into the lower and becomes the hit, the hit flies into a slanted health bar that turns to warning under half and danger under a sixth |
| What is on the screen | each player's multiplier as a badge beside their health bar; the countdown as a pill at the top once the first guess is in; the map always opens whole (GeoGuessr's remembers the last round's view, which costs seconds) |
| Rating | one Elo-style number, the gain depending on the opponent; one table. No divisions, weeks or seasons |

### What we leave

Coins, XP, daily rewards, paywalls and subscriptions (StudyGe, Squiz); a daily set that cannot
be played again and "Congratulations!" on any score (Squiz); a settings form in front of the
quiz (StudyGe); divisions, weekly groups, seasons and decay (GeoGuessr); and every picture,
mascot, sound, text and font of all three.

---

## StudyGe

A world-geography quiz app (iOS, Android, Huawei, plus a Unity web build). It is built round
one move: you are given a name, flag or capital, and you tap the right shape on a full-screen
coloured map. 5M+ downloads, rated 4.6–4.8.

**What I actually played: none of the quizzes.** The web version (`studyge.com/app`) is a
sign-in wall: email, Google or Apple, with no guest play (`03-web-signin-wall-laptop.png`). On
a phone it first shows a "Web version for PC … may work incorrectly" page
(`02-web-phone-warning.png`). The brief says no accounts, so I stopped there. Playing the apps
would need an Android emulator or an iPhone, and this laptop has neither. Everything below
therefore comes from what I **watched, not played**: frame-by-frame captures of seven gameplay
videos on YouTube (2022–2026; the main ones are 2025–26 and match today's app), the App Store
and Google Play pages with their screenshots and reviews, and the landing page, which I opened
at phone and laptop size. Sound could not be checked. The videos are tablet or landscape-phone
recordings (the 2026 one is a phone held sideways), so the phone-portrait layout is known only
from store screenshots.
That was 2026-11-11. On 2026-11-12 the owner had signed in, and the lead played it: next section.

### Played by the lead, 2026-11-12

In the owner's Chrome, on the laptop, on his account (a new one: level 1, no coins). Learning
mode, topic Names, one round of ten questions with wrong answers on purpose. The web build took
over a minute to load. Chrome's window was in the background, where the game runs at one picture
a second, so the lead kept it running by hand; the clock's length below is therefore rough.

**Confirmed, as the videos showed:**
- The question is one line in a pill at the top ("Where is **China** located?") with a thin
  green time bar under it. Coins top left, pause top right, "1/10" bottom left, zoom-out bottom
  right. Nothing else.
- A tap selects (the country turns grey) and a green **Confirm** appears at the bottom. Confirm
  answers.
- **Wrong:** a small card beside the country you tapped names it, with its flag and capital
  ("Argentina, Buenos Aires"). The map flies to the right country, which blinks. Confirm becomes
  **Continue** and the game waits.
- **Right:** the coins jump with a sparkle (+6) and the next question is there at once. No
  "Correct!" text was seen in this mode.

**New, from playing:**
- **You open countries first, and the quiz asks only about those.** Learning mode starts on a
  dark, grey world map: "Tap any country". A tap shows the country's card (flag, name, capital,
  what a right answer pays) and an **Unlock** button. The first ten are free. In the quiz only
  the opened countries are in colour; the rest of the world stays dark grey. Each country loses
  its colour once it has been asked, right or wrong, so the coloured set empties.
- **Learning mode has a clock too**, about ten seconds a question. When it runs out the question
  counts as wrong and the right country is shown.
- **After a wrong answer the map stays zoomed in where it flew.** The next question starts
  there with the clock running, and the player has to press zoom-out first. The lead lost three
  questions this way.
- **A missed country does not come back** inside the round, and **the end never says what was
  missed.** After question ten come three screens of rewards: "1 day in a row" with a week of
  flames, the streak's coming prizes, "Reward! ×18" coins. Then the map again.
- **How it grows:** a round with no mistake pays ×3 and makes the next quiz longer: 10, 15, 20,
  30, 50, 100, then all 239. A counter shows "10 / 239" countries opened.
- **The next country costs coins.** Uzbekistan was 110 coins; a right answer pays 6, and the
  whole round earned 18. Learning more is a grind or a purchase.
- **Its first-time help is good:** three small tips, one at a time ("Step 1 of 3: open this
  country"), each pointing at the one button to press.

**What this changes for us:**
- Take: ask only what the player chose, with those shapes in colour and the rest quiet. It is
  our map picker and our levels, seen in play.
- Take: tips one at a time, pointing at one button.
- Do better: after showing the right place, go back to the whole area by ourselves.
- Do better: a missed place comes back, and the result names what was missed.
- Leave: a clock in learning, coins that gate the next place, three reward screens in a row.

**Still not seen:** sound, the upright-phone layout, the rings round tiny islands, User mode
and the online game. Sections 1–8 below are the videos' account; where they differ from the
above, the above is right.

### 1. How a question is asked
- The map fills the whole screen. A frosted-glass pill sits at the top centre: "Where is
  **Uzbekistan** located?", with the name in bold. It is about 1/2 of the screen wide and ~60
  px tall on a tablet (`09-video-question-world.jpg`). Flags: "Find the country with this
  flag", with the flag inside the pill on the right (`14-video-flag-question-tiny-arrows.jpg`).
- A thin green timer bar runs under the text, inside the pill. An older version also had a
  round "00:10" clock on the left of the pill.
- The corners stay small and quiet: "?" top left, pause top right, "Correct: 37" with a thin
  progress bar and "38/235 (16 %)" bottom left, zoom-out magnifier bottom right. In 2026 the
  "?" and "Correct" are replaced by a coin count top left and "9/246" bottom left (`16-…`).
  Nothing else is on screen: no score panel, no name list.
- On a portrait phone (store shot) it is the same pill at the top with the map below
  (`05-store-shots-2-modes.jpg`, right).

### 2. Right tap and wrong tap (watched, not played)
- **A tap does not answer.** The tapped country darkens (a grey-teal tint), and a big green
  **Confirm** button appears at the bottom centre (`10-video-tap-then-confirm.jpg`). You can
  tap something else before confirming. This is their guard against fat fingers.
- **Right:** a large translucent green "Correct!" fades over the middle of the map. The counter
  goes up, and the next name is in the pill in under ~1 s. In "clear map" mode the found
  country turns **white** and stays white, so the map visibly empties as you go
  (`11-video-correct.jpg`).
- **Wrong (2023 video, slowed to 1/4 speed):** at Confirm, a translucent red "Wrong!" appears,
  and **a card with the flag and name of the country you did tap** pops up beside it
  ("Portugal", `17-video-wrong-names-your-tap.jpg`). Within ~0.5 s the map flies to the right
  country, which **blinks** between grey, green and its own colour (`18-…`, `13-…`, sequence in
  `19-video-wrong-sequence.jpg`). The counter does not rise. Confirm becomes **Continue**, and
  the game waits until you tap it. One try per question.
- The 2026 version is the same in shape: coins top left (+~120 per right answer), "9/246"
  bottom left, and the next question in the pill at once. The map does **not** move by itself
  after a right answer: the player zooms out again by hand (`16c-…`).
- Colours: bright flat fills (red, yellow, green, blue, purple, orange, cyan), thin dark
  borders, pale blue sea. Disputed areas are grey.

### 3. Small countries on a small screen
- **Glowing dots.** Islands and microstates too small to see are drawn as a dot with a soft
  halo in the country's colour, so they read as targets at world zoom
  (`12-video-tiny-islands-halos.jpg`, `06-landing-map-small-islands.png`). In Europe, Monaco,
  San Marino and Liechtenstein get solid coloured circles.
- **Rings on the pick (2026).** Tap near a tiny island and two green rings close in on it in
  ~0.5 s, settling as a double circle around the spot, while Confirm fades in (`16b-…`,
  `16-video-2026-tiny-island-rings.jpg`). The rings are ~10× the island's size, so you can see
  what you picked before you commit. An older version used four small arrows pointing in from
  four sides (`14-…`).
- **Free pinch-zoom and pan**, plus a zoom-out button. Players zoom into the Caribbean or the
  Pacific to pick an island group (`12-…`).
- **Tap then Confirm** turns a wrong tap into a correction rather than a mistake.
- What players say: "the smaller islands are just fuzzy dots. If there were more zoom
  capability, that would make it perfect" (Play review). I saw no inset boxes and no list
  fallback.

### 4. Learn against test
- One settings page holds both (`08-video-quiz-settings.jpg`). **Difficulty:** "Training (no
  timer)", Easy, Medium, Hard. With "All questions from the region" the choices become "Clear
  map mode" (found countries turn white) and "Expert".
- Training differs from the others only in having no clock. The rest is the same screen. I did
  not see a hint button in use (the "?" is unexplained) or a separate result style for
  training.
- Test: a per-question timer bar, a running "Correct: n" and a percentage. I did not catch the
  end screen in any video.
- **Repeats** live in **Progress mode** (read, not played): "Gradual map learning mode …
  upgrades affect other modes" (`07-video-mode-select.jpg`). A Play review: "not overwhelming
  because you get to control which countries you want to learn, and gradually introduce new
  ones … it won't stop quizzing me on Africa and Europe over and over."

### 5. Levels and progress
- Content is cut by **continent**: Africa / Europe / Asia / America / Australia and Oceania, as
  toggle chips. One version picks them **by tapping the continents on a white world map**,
  which fill with colour as you choose them (`15-video-region-picker.jpg`). Size: 10 questions,
  or all of the region (up to 235).
- Levels are the difficulty steps above, plus Progress mode's gradual unlock.
- Progress shown: a player level with an XP bar, coins, diamonds and a day-streak flame on the
  home screen. Also achievements, statistics, a daily reward ("7 days! Excellent work") and a
  rating in multiplayer. On the quiz map itself, progress shows only as countries turning white
  in clear-map mode. I saw no "what you know" map outside a quiz.

### 6. Kinds of quiz
- Question: **Names / Capitals / Flags**. Answer: **Select on map** (the main one) or **Select
  from list** (multiple choice: "What is Canada's capital? Ottawa / Toronto"; "Which flag
  belongs to the UK?" with flag cards) (`04-store-shots-1.jpg`).
- 70+ maps: US states, Subjects of Russia, Indian states, UK counties, Turkey's regions,
  historical maps (1914, 1939), seas, rivers, mountains, and (new in 2.7) cities and time
  zones. Most of these are behind Premium. Multiplayer (sign-in): live duels and rooms of up to
  6.

### 7. The feel
- About **4 taps** from opening to the first question: Play → User mode → (settings, defaults
  kept) → Start. The quiz screen is clean: almost all map, one sentence, one button.
- What makes it "clever, visual": the **map is the answer sheet**, with no text options. The
  empty-the-map loop of clear-map mode is satisfying. Tiny targets are made tappable without
  breaking the map. And the next question comes fast.
- Weak spots: the settings page is a five-row form of chips, not a game. The paywall is heavy
  (Premium £6.99 a month, £24.99 a year, £39.99 for ever; maps £1.99 each; ads with a "Delete
  ads" purchase). The web is login-only and "for PC". "Correct!" in translucent green is hard
  to read over a busy map. Neighbours sometimes get near-identical colours. The glass pill
  takes on the colours under it (it turns pink over Kazakhstan's red). Reviews report mistakes
  in the data and progress that does not sync between devices.

### 8. Uzbekistan and Uzbek
- Uzbekistan appears only as one country in the world quiz (`10-…`). I found **no Uzbekistan
  regions map** in any list I could see: store text, in-app purchases, reviews. I could not
  check the in-app map menu.
- **No Uzbek language.** The site lists 26 languages and the app 26, including Russian, Turkish
  and Ukrainian, but not Uzbek. Nothing about Tashkent, districts, mahallas or buses.

### What we take
- **The map is the whole screen; the question is one short line in a pill at the top.** No
  other text. This matches the owner's "show, don't type".
- **Tap, then Confirm** (with a visible selection). Mis-taps on a phone stop being punishments.
  For tiny targets, **rings close in on the pick**.
- **A wrong tap teaches twice**: it names what you tapped ("that was Portugal") *and* shows
  where the right one is. For us: "Bu — Kattaqo‘rg‘on", then fly to the right district.
- **Glowing dots for tiny places**, coloured like the country, plus free pinch-zoom. We need
  this for microstates and islands, and later for small mahallas.
- **Wrong answer: fly to the right shape, paint it, wait for "Davom etish".** The player always
  sees where it really is. That is the learning moment. In O‘rganish it should come back later.
- **Clear-the-map**: what you find turns white and the map empties. That is a visible, honest
  measure of progress, and the same picture can colour in "what I know" on the O‘rganish tab
  (P1111 §9).
- **Pick the area by tapping it on the map** (the continent picker) instead of ticking boxes.
  For us: tap Buxoro to choose Buxoro's districts.

### What we leave
- The five-row settings form. We give two big buttons, O‘rganish and Sinov, and levels instead.
- Coins, diamonds, XP levels, daily rewards and paywalls. They are clutter and not honest for
  our players.
- Translucent "Correct!" text and glass that changes colour. Our feedback must read on any
  colour, in light and dark.
- Random neighbour colours: ours should never put two touching areas in the same colour.
- Unity, login-only web, "designed for desktop": we are a phone-first web game with guest play.
- Their pictures, illustrations, sounds, texts and fonts: none of it, as always.

### Sources
- studyge.com (landing, `/app`, `/signin`), opened 2026-11-11
- App Store: https://apps.apple.com/gb/app/studyge-world-map-quiz/id1444539710 (text, in-app
  purchases, reviews); iTunes lookup API for screenshots
- Google Play: https://play.google.com/store/apps/details?id=com.mileoDev.geography (text,
  reviews)
- YouTube, watched frame by frame: 9NyllBX3pBo "StudyGe Gameplay" (2025-10); 4dGLT9pvkl4
  "Playing studyGe" (2025-10); oHZKVutKilI "MAP GEO LIVE is playing StudyGe" (2026-11);
  kEuvpqxJaXk "World – Clear Map Mode" (2026-11); l7XFHT6ac-0 "until I get a country wrong"
  (2023); M_F5CCsCnfo "quiz of flags" (2022); JJ9gCm6A1Vw "Is the StudyGe app worth it" (2025)
- Screenshots: `~/131/github.com/hakim-134/tmp/P1111/studyge/` (for the owner and the lead
  only; never in git or the game)

---

## Squiz

A phone quiz app made by one French developer, Simon Mercier (iOS and Android, first released
March 2026). **Played:** its free web side, "Squiz – Challenges" (`defis.squiz-app.com`), at
phone size: two full daily challenges, Flags and Capitals and U.S. States, with deliberate
wrong answers, plus a second visit. **Read, not played:** the phone app itself (lessons, spaced
reviews, difficulty, timed quiz). We only saw it through its store pictures and texts. The site
says plainly: *"The web version of Squiz is not yet available, please use the mobile
application."*

It is the right app. It is the geography and learning quiz the owner described, not the
Australian company of the same name.

**1. What it is.** It has 19 courses and 4,176 items: world flags, countries and capitals, US
states, French departments, Spanish provinces, GeoGuessr clues (bollards, road signs, plates),
dog, cat and bird breeds, kanji, the periodic table, constellations and orienteering symbols.
It has no ads. It is free, with an optional subscription, "Squiz Plus" ($1–$48). In the app you
sign in with Google or play as a guest. The web challenges need no account. (Read: store pages.
Played: web.)

**2. How a question with choices is asked.** *Played.*
- A dark green "blackboard" at the top holds the prompt. The prompt is a name, a capital, a
  flag on a tilted white card, or a **shape lit in purple on a small regional map, with its
  neighbours drawn round it** (web-05, web-12, web-16).
- The answers are full-width purple buttons stacked at the bottom, in the thumb zone. When the
  answers are pictures (maps or flags), they come as one or two columns of cards (web-01,
  web-09).
- Tiny countries get a purple circle drawn round them, so they can be found (web-01, Cabo
  Verde).
- **The number of choices grows inside one session: 2 for questions 1–5, 4 for questions 6–10,
  and 6 for questions 11–15** (web-01 → web-07 → web-11).
- Wrong choices are close ones: neighbours (Ghana against Togo, Nigeria and Burkina Faso,
  web-09) or places seen earlier in the same session.
- The web challenges have no clock. The app also has a "Timed quiz" (store-shots-2, read).
- A counter at the top shows 1/15, ✓ right and ✗ wrong.

**3. Right and wrong.** *Played* (sound was off in the test browser).
- **Right answer:** the button turns green with a ✓ and the others fade. The next question
  slides in from the side after about 0.4 s. No tap is needed (web-04).
- **Wrong answer:** the picked choice turns red ✗ and the right one green ✓. The other choices
  disappear, leaving the two side by side. On map questions the two maps grow large, so the
  player can compare them (web-08, web-10).
- About 1.5 s later a purple strip rises with a kind line ("You're improving with each try!",
  "Oops! No worries, let's continue!") and one **Continue** button. **After a wrong answer the
  game waits for the player.** After a right one it moves on alone (web-02, web-06).

**4. How missed questions come back.**
- *Played (web).* One challenge is 15 questions about only 8–10 places. Each place is asked in
  different forms: name → map, map → name, capital → country, flag → name. Each new form has
  more choices. Ghana: map at Q10, capital at Q11. Palau's capital: Q8 with 4 choices, Q14 with
  6 (web-11, web-13, web-17).
- This repetition is built into the day's fixed set. Places came back whether I had got them
  right or wrong, so it is **not** a reaction to mistakes.
- There is no end-of-session round of what was missed. The result screen lists no mistakes
  (web-14).
- The second visit: a finished challenge shows its score on its card and cannot be replayed
  until it changes at Paris midnight (web-15). A half-played one resumes at the same question.
- *Read (app).* The app has true spaced repetition. A just-learned item is reviewed after 2
  days. If it is still right, after 4 days, then 1 week, 2 weeks and 1 month. A grade badge
  goes F → E → D → C → B → A, and A means "locked in your memory". Grades go up "when you
  succeed". A wrong review presumably sends the item back, but we did not see that. The app has
  a Review tab, a "Review now / Later" prompt and (version 2.4) "Suggested mistakes to review"
  (store-shots-2, site-home-screen).

**5. How it makes things easier than a map.**
- Few choices at first, more later (2 → 4 → 6).
- The same place is met in several forms within minutes.
- Tiny places are circled.
- Wrong choices start easy and get closer.
- The app adds a 5-step difficulty slider ("Easy" …), chosen before a quiz (read).
- No hints were seen.

**6. Levels and progress.** *Read (app).*
- A course is cut into lessons ("Eastern Europe: 22 items, 39/39 quiz, 6/18 reviews") with a
  percent badge (site-home-screen).
- A lesson is a vertical path of nodes (? question, ⏱ timed) ending in a "Final sprint"
  (store-shots-1).
- Each item carries its F–A grade.
- Three ✗ boxes next to "1/14" in the app's quiz look like 3 allowed mistakes. That is not
  confirmed.
- No streaks, daily goals or push pressure were seen in the store pictures or texts. The web
  has one daily set with a countdown ("Challenges change in 6 h 04 min").
- *Played (web):* the result screen shows a real percentile ("You did better than 17 % of
  players"), **Challenge a friend** (a share link) and app-store buttons. It says
  "Congratulations!" even after a weak score (web-14).

**7. The feel.** *Played.* It takes 1 tap from the home page to the first question (web-00). It
is calm and quick: warm cream background, a red-panda mascot, short kind lines, no ads, no
sign-up and no cookie wall. One question has one job. Clutter is low: the result page pushes
the app twice, and on the web at 390 px a 2×2 picture grid was cut off on the right (web-09).
The web side is drawn on a canvas (Kotlin Compose).

**What we take**
- **"Name it" layout:** the place lit in its parent's map at the top, big name buttons at the
  bottom for the thumb. This is our place-in-parent picture almost exactly (web-05, web-16).
- **Choices that grow 2 → 4 → 6 within a session, with neighbours as wrong choices.** It is
  easy at the start and real learning by the end. The neighbours teach the region too.
- **A wrong answer stops and shows the right one next to the picked one** (enlarged for maps),
  with a kind line and Continue. A right answer moves on by itself. It fits O‘rganish exactly:
  no clock, the right one is shown.
- **One place asked in several forms in one session** (map ↔ name ↔ capital/flag, and for
  buses: route ↔ number).
- **For "comes back until known":** the app's simple ladder (2 d → 4 d → 1 w → 2 w → 1 m, a
  grade per item, then known) is a good, honest model. Ours can be smaller: missed ones come
  back later in the same session, and again on the next visit, until answered right a few times
  in a row.
- **Small things:** a circle round tiny places; a real percentile and a one-tap "challenge a
  friend" on the result.

**What we leave, and why**
- Their pictures, mascot, sounds, texts and fonts: we take ideas only.
- A daily fixed set that cannot be replayed: for learning, players must be able to go again at
  once. A shared fixed set fits Sinov with friends, not O‘rganish.
- "Congratulations!" on any score: it isn't honest. Our result should say what was missed.
- Subscriptions and app-store pushes: not for us now.
- A difficulty slider before playing: one more choice in front of the game. Our levels already
  grow.

**Sources**
- https://squiz-app.com (landing, SRS ladder, catalogue), https://squiz-app.com/terms (web
  challenges, accounts, Squiz Plus)
- https://defis.squiz-app.com (played, 2026-11-11)
- https://play.google.com/store/apps/details?id=com.squiz.app (10K+ downloads, updated
  2026-11-07)
- https://apps.apple.com/app/id6758568460 (developer, screenshots, 3 reviews, prices; release
  notes "Suggested mistakes to review")
- Pictures: `tmp/P1111/squiz/` (web-00 … web-17, store-shots-1/2, site-home-screen). For
  looking only, never for the game or git.

---

## GeoGuessr

**Played, seen, read (2026-11-11; played for real the next day, see "Played by the lead").** The owner's Chrome was **not signed in**, and GeoGuessr's "Play now"
asks you to sign up first, so no classic round, daily challenge or duel was played. **Seen in
the browser:** the landing page, with its fonts, colours and buttons measured from the live
styles. **Played:** the free, no-account Halloween mode (Horrorguessr, open until 16 November)
up to its first round. Its health-bar HUD shows, but the panorama stays black in headless
Chrome. **Read:** the 5 000 moment and the duel scoring, from GeoGuessr's own public web code
(build `1.8954-3126c7c`, fetched 2026-11-11), and from a public repository whose authors logged
live duels from GeoGuessr's server in September 2026. Also read: GeoGuessr's help centre and
changelog, for the rating. **Not seen:** the ranked queue, a real classic result screen, a real 5K.

Pictures (for looking only, never for the game): `landing.jpg`, `horror-how-to-play.png`,
`horror-round-hud.png`, `fonts-specimen.png`, `geoguessr-5k-rebuilt-0.15s.jpg` and `-1.0s.jpg`.
The two 5K frames were rebuilt from GeoGuessr's own CSS and images. They are not a screen recording.

### Played by the lead, 2026-11-12

In the owner's Chrome, on his free account, on the laptop: today's Daily Challenge (five
rounds, 17 032 of 25 000) and one ranked duel, won in five rounds. Classic "World" maps are for
subscribers; the daily challenge and duels were free. No money was spent.

**A classic round.**
- Over the panorama: a compass strip at the top centre with the time in a pill under it (3:00),
  the five rounds and the total in a dark panel top right, a small map bottom right that grows
  when the pointer is over it. The pin is your own avatar. Under the map one button: grey
  "Place your pin on the map", then green **Guess**.
- **The result.** The map takes the whole screen, starts at the whole world and flies in to
  fit both pins in about two seconds, a dashed line between them. One bar at the bottom: the
  flag of the right country with a tick or a cross, the time, the distance, the score in
  yellow, and a green **Next**.
- **One line that teaches**, on a card at the left of every result: "Korean circles: in
  written Korean you will find a lot of big circles", "Irish plates", "Black roofs". It turns a
  miss into something learned.
- **The end.** "YOUR SCORE **17,032** OF 25,000 POINTS" in huge slanted digits over the dimmed
  map with all five pairs of pins, a bar in five parts, "+235 XP", a medal. Then a page with a
  card per round (points, km, time) and tables: My game, Friends, Clubs, **Uzbekistan**, All.
- **No 5 000 was scored** (rounds: 1 734, 4 955 at 14 km, 2 172, 3 944, 4 227), so the 5 000
  moment below is still from the code.

**A duel.** The opponent was found in about four seconds.

| Round | Me | Opponent | Hit | Winner's multiplier | Health after (me / opponent) |
|---|---|---|---|---|---|
| 1 | 4 277 | 3 724 | −553 | ×1 | 6 000 / 5 447 |
| 2 | no pin: 0, "∞ km" | 4 922 | −4 922 | ×1 | 1 078 / 5 447 |
| 3 | 44 | 4 | −60 | ×1.5 | 1 078 / 5 387 |
| 4 | 3 939 | 1 975 | −3 928 | ×2 | 1 078 / 1 459 |
| 5 | 3 911 | 1 720 | −5 478 | ×2.5 | 1 078 / 0 |

- **Every rule in the table under "Duels" held**: 6 000 each; no clock until the first guess;
  then a countdown pill at the top (seen at 00:12); no pin at the deadline scores 0; the hit is
  the difference times the **winner's own** multiplier; each win adds 0.5 to the winner's.
- **On the screen:** two slanted health bars in the top corners with avatar, flag and name;
  each player's multiplier as a badge beside their bar. At the result a dark band comes down
  over the top: "Round 2" in the middle, both scores counting up in big outlined digits, both
  distances counting up in a pill between them with the winner's half green, then the hit in
  red on the loser's side with a small "×1.5". The bar slides and turns yellow when low. The
  map below shows the place and a dotted line to each guess. The next round starts by itself.
- **The end:** "VICTORY!" in huge glowing letters a beat after the screen appears, the winner's
  avatar large with "1ST", the loser's small with "2ND", one green button "Play next duel", and
  a summary listing every round with its flag, both healths, the hit and the multipliers.
- **The rating:** a new account is Unranked. "Play 3 duels to get ranked", shown as three steps
  that tick off, beside the ladder Bronze, Silver, Gold, Master, Champion.
- **A trap:** the small map opens on wherever the last round ended (North America when the
  answer was Chile) and did not always grow under the pointer. Inside a 15-second countdown
  that cost a round. Our map of Uzbekistan must always open whole.

**What this changes for us:** nothing in the rules; they are confirmed. Two things for the
screens: the multiplier beside each health bar, and the countdown as a pill at the top. The
teaching line after a round is a new idea, so it goes to P1111 §11, not into November.

### The look and the lettering

What makes it read as a finished game (seen, measured on the landing page and in the Halloween HUD):

- **One typeface, used loud.** Every word is in GeoGuessr's own font. Titles are 900 weight,
  **italic, all caps**, 72 px, white, with a stacked soft dark shadow so they float. Buttons
  use 700 italic caps. Body text uses the same family upright, at 400 to 700. The italic gives
  the forward lean: it reads as speed, sport and a game, not a form.
- **Colour: a deep night violet behind everything** (`#171235`; `#393273` for raised panels),
  a violet brand (`#7950e5`, light `#a685ff`), and **one lime-green action**. The main button is
  a vertical gradient from bright lime `#97e851` to deep green (about `#479440`). Accents are
  yellow `#ffc628` (5K, medals), red `#e94555` (danger, health) and sky `#00a2fe`.
- **Depth on every button.** The pill shape has a 60 px radius. It has a 1 px light line inside
  the top edge, a 2 px dark lip inside the bottom edge, and a soft drop shadow
  (`0 4px 18px` at 25% black). So it looks like a physical key you can press down. The label
  carries a 1 px dark shadow.
- **Illustrated, warm characters**: a chibi explorer and mascots, rather than stock photos.
- **The HUD sits on the panorama in small dark capsules.** The Halloween HUD has a **slanted
  (parallelogram) red health bar** at top left, with a heart and "6000 / 6000" in heavy italic
  (the big number large, the max small). It has a compass strip at top centre, round dark icon
  buttons, and a small map at bottom right that grows on hover, with one wide "GUESS" button
  under it.
- **Motion is springy**: numbers count up, panels pop in with overshoot (an ease-out-back
  curve), and things wobble on impact (see the duel below).

**Their fonts (measured from the font files):** `GeoGuessr Sans` (Regular to Black, with
italics) is *"Copyright © 2024 by GeoGuessr. All rights reserved. Designed by Letters from
Sweden."* It is their own commissioned font, so we can't use it, and it has **no Cyrillic
at all** (395 glyphs, Latin only; it does have `‘` and tabular digits). The Halloween titles use
**Shlop** by Typodermic, a paid licence, also with no Cyrillic. Character to aim for: a heavy,
compact, slightly rounded geometric sans, in black italic.

**Free replacements, checked glyph by glyph** with fontTools on the files from the Google
Fonts repository (`google/fonts/ofl/…`). All are SIL OFL 1.1. "Tabular" means a `tnum` feature
is in the font, or the digits are equal width by default. A ✗ is a measured gap. The specimen
`fonts-specimen.png` shows the gaps as fallback serif letters.

| Font (role) | o‘ g‘: `‘` U+2018 / `ʻ` U+02BB | Russian Cyrillic | Ў Қ Ғ Ҳ ў қ ғ ҳ | Tabular digits |
|---|---|---|---|---|
| **Geologica** Black, slant −12 (display) | ✓ / ✗ | ✓ | ✓ | ✓ `tnum` |
| **Exo 2** Black Italic (display) | ✓ / ✓ | ✓ | ✓ | ✓ `tnum` |
| **Nunito** Black Italic, weight up to 1000 (display) | ✓ / ✓ | ✓ | ✓ | ✓ (equal by default) |
| **Montserrat** Black Italic (display) | ✓ / ✓ | ✓ | ✓ | ✓ `tnum` |
| **Fira Sans** Black Italic (display) | ✓ / ✓ | ✓ | ✓ | ✓ `tnum` |
| **Onest** (text; our text font today) | ✓ / ✓ | ✓ | ✓ | ✓ `tnum` |
| **Inter** (text) | ✓ / ✓ | ✓ | ✓ | ✓ `tnum` |
| **Golos Text** (text) | ✓ / ✗ | ✓ | ✓ | ✓ `tnum` |
| Unbounded (our display font today) | ✓ / ✓ | ✓ | ✗ **Қ қ Ғ ғ Ҳ ҳ missing** | ✓ |
| Rubik | ✓ / ✗ | ✓ | ✗ Ҳ ҳ missing | ✓ |
| Manrope | ✓ / ✗ | ✓ | ✗ Қ Ғ Ҳ missing | ✓ |
| Russo One, Days One | ✓ / ✗ | ✓ | ✗ Қ Ғ Ҳ missing | ✗ |
| Commissioner | ✓ / ✓ | ✓ | ✓ | ✗ no `tnum`, digits uneven |
| Lilita One, Baloo 2 | ✓ | ✗ no Cyrillic | ✗ | — |

Uzbek Latin as we write it uses `‘` (U+2018), which every candidate has. The missing `ʻ` in
Geologica and Golos only matters if we ever switch to U+02BB. **Unbounded, our display font
today, can't write Uzbek Cyrillic**, which is one more reason to replace it.

**Recommendation: Geologica (display) + Onest (text).** Geologica Black, slanted −12°, has the
round bowls and compact heavy body of GeoGuessr's font, so it gives the same confidence
without being the same letters. It is one variable file (weight, slant, and a "sharpness" axis
that can make it ours). It passes all of Uzbek Latin, Russian and Uzbek Cyrillic, with tabular
digits for scores and timers. Onest already carries our text and passes everything. Keeping it
means only the display font changes. Runner-up for display: Exo 2 Black Italic, which is more
"sport", squarer and narrower.

Two notes from the lead's own check of the font files (2026-11-12): the digits of every font
here are of unequal width until `font-variant-numeric: tabular-nums` is set, so scores and
timers need it; and Unbounded's missing Қ Ғ Ҳ matters today wherever a player's name is drawn
in the title font, since guests and Telegram names are often written in Uzbek Cyrillic.

### The 5 000 moment

Read from GeoGuessr's public code (`__5k-celebration` CSS, the 5K component, the classic round
screen, the duel screen). Then rebuilt with their own CSS and images to see it (the two frames).
Not triggered live.

1. **When.** In a classic round it starts **0.5 s** after the round's result appears. In a duel
   it starts **2.45 s** after the result panel (2.25 s in World League), once the scores are shown.
2. **What is seen.** A full-screen layer covers everything:
   - A golden, bokeh-sparkle background zooms from 150% to 100% and fades in to 80% (over
     5 s, but nearly all of it in the first fraction of a second).
   - A huge golden **"5K!"** (half the screen width) shoots from nothing to full size with a
     very sharp ease-out.
   - About eleven golden tokens burst around it, each popping in at a random 0 to 0.4 s delay:
     hexagon badges stamped "5K", map pins, and the mascot's head. They sit at angles
     (±15 to 35°), and some are blurred as if near or far, which gives depth.
   - If both duel players hit 5 000, the word is **"10K"**.
3. **What is heard.** In duels, a dedicated 5K sound plays **1.1 s** in, at 1.25× volume. No
   sound call was found in the classic overlay itself (unsure whether the round screen adds one).
4. **How it leaves.** At **2.0 s** the picture shrinks to 80% and fades out in 0.4 s. The
   whole layer fades out over 1 s. It is gone at about **2.5 to 3 s**.
5. **In the way?** No. The layer has `pointer-events: none`, so the result screen under it can
   be tapped all the time, and "next round" is never blocked.
6. It also lasts: a **5K badge** replaces the number on that round's row in the end-of-game
   card, and the shared text result marks a 5K round with 🎯.

Feel: one sharp, golden "jackpot" burst, about 2.5 s long, then out of the way.

### Duels

How a round plays: both see the same place. The first guess starts a short clock for the
other. When the result shows, the higher score "hits": the lower player loses the difference,
times the winner's multiplier. You play until someone's health is 0. Numbers below are for
GeoGuessr's own duel settings (party defaults and logged live games). For ranked I found no
official page with the numbers, so ranked-only values are marked unsure.

| Rule | Number | Source |
|---|---|---|
| Starting health | **6 000** each (the World Championship uses 5 000) | logged party defaults [R1]; API guide "typically 6000" [R2]; Wikipedia [W] |
| Damage | (winner's score − loser's score) × **winner's** multiplier, rounded; only the loser loses health | logged and checked on 4 live duels [R1]; Wikipedia [W]; example (4788−4732)×1.5 = 84 [R3] |
| Multiplier, now | **Individual since April 2026**: round 1 is ×1; after each round you win, *your* multiplier grows **+0.5** (×1.5, ×2, …); it never goes down | patch notes 17 Apr 2026 [C1]; party default 0.5, first possible in round 2 [R1]; Wikipedia "0.5x" for 2026 [W]; API guide [R2] |
| Multiplier, before | Mutual: both rose together each round. 2021: rounds ×2, ×3, ×4… (it was ×2, ×4, ×8, ×16 at launch). Team Duels: double from round 4, then triple | GeoGuessr tweet, Nov 2021 [T]; help, Team Duels [H3]; mutual +0.5 per round seen in a logged game [R1] |
| Clock after the first guess | **15 s** (Turbo mode: 10 s) | party default and logged `endTime = guess + 15 s` [R1]; the client's countdown track covers the last 15 s [R4]; changelog 3 Jul 2026 for Turbo [C2] |
| Round time before anyone guesses | none by default (no clock until the first guess); a cap can be set (60 s seen). Ranked: unsure | [R1] |
| Tie | no damage; both get the +0.5 | [R1] |
| Nobody guesses | at the deadline a placed pin counts as the guess; no pin = 0 points | [R1] |
| Healing round | was round 5 (cut to 50% in 2021); off by default now; removed in Team Duels | [T]; [H3]; [R1] |
| Typical length | unsure: about 4 to 8 rounds (a third-party guide; it fits 6 000 health and typical gaps of 500 to 1 500 points) | [G] |
| Between rounds | about 8 s from result to next round, then a 3-2-1 with a tick per number | [R1]; [R4] |

**How the hit is felt** (GeoGuessr's client code, read [R3]):
- The result panel slides in.
- Both scores count up from 0 over 0.75 s, with a counting sound, then hold for 1 s.
- The higher score flies sideways into the lower one (0.4 s) with a **crash** sound, and turns
  into the difference with a little wobble.
- If a multiplier applies, the difference becomes the damage, and a **"×1.5"** label springs to
  1.3× size with its own sound.
- The damage number **flies to the loser's health**, grows to 1.75× and fades. The health
  number springs down and the bar slides, with a "lost health" sound. This is about 4.8 s after
  the panel opens (5.3 s with a multiplier).
- A tie: both scores meet in the middle and burst, with a tie sound, and nobody is hurt.
- The health bars are **slanted**. They turn to a warning colour **below 3 000** and danger
  **below 1 000**.
- Music changes when a multiplier is active. In the last 15 s a countdown track plays and the
  music speeds up 4%. Party duels flash red at 15 s left [C1].

### The rating

- **Elo-like, one hidden number.** What you gain or lose depends on your opponent's rating
  [H1]. It shows only from Gold up [H1]. There are separate stat-only ratings for Moving,
  No Move and NMPZ [H1].
- **10 divisions**, as the help centre says [H2]. The wiki's names [F]: Bronze; Silver 3, 2, 1;
  Gold 3, 2, 1; Master 2, 1; Champion.
- **Weekly groups.** After your first duel of the week you join a group of up to 60 players
  in your division. At the week's end the top of each group goes up and the bottom goes down
  [H2]. Master and Champion are ranked by rating. Bronze to Gold are ranked by **Weekly Points**
  [H2], with "point tokens" since May 2026 [C3]. Champion is one single group [H2].
- **Inactivity.** Skip a week and you can't be demoted. After 2 weeks your division badge is
  hidden [H2]. Rating decay, and a demotion shield in Gold, came in June 2026 [C3].
- **Also:** placement games, seasons (Ice, Stone, Turtle) and maps that rotate every few weeks [C1–C3].
- **The queue** was not seen (it needs an account). The client has a "match found" sound [R3].

### What we take, what we leave

- **The look.**
  - **Take** the feeling: one bold display face, heavy and leaning forward, with numbers that
    are the hero. One dark, rich background colour. One loud action colour on a pressable,
    lipped pill button. A slanted health bar. Small dark capsules over the panorama. Springy
    motion with overshoot.
  - **Leave** their font (licensed, and Latin only), their violet-and-lime palette, their
    mascots and their art.
  - **Ours**: Geologica + Onest. Colours from our own story (lapis and tile blue, the flag's
    green, gold). The map of Uzbekistan as the hero instead of characters.
- **The 5 000 moment.**
  - **Take** the shape: a burst that starts fast (in 0.5 s), peaks hard, lasts about 2.5 s,
    lets taps pass through, has its own short sound, and leaves a mark on the round in the
    summary. In a room, everyone sees whose it was.
  - **Leave** the golden "5K!" art, the tokens, the mascot heads and the sound file.
  - **Ours** could be: "5 000!" in our display face, with the place-in-parent shape and the
    real spot lighting up, in our own colours.
- **The duel.**
  - **Take** the rules as they are today: 6 000 each; damage = difference × the winner's
    multiplier; +0.5 for each round you win (it rewards a lead and keeps games short); 15 s
    after the first guess; a tie hurts nobody; a placed pin counts at the deadline; no healing
    round.
  - **Take** the staging: the count-up, the crash, the ×N pop, and the damage flying into a
    slanted health bar that turns to warning, then danger.
  - **Leave** their sounds, the Turbo, Team and World League variants, and anything paid.
- **The rating.**
  - **Take** one Elo-style number, gain depending on the opponent, and one table, as P1111 5.3
    says.
  - **Leave** for now the 10 divisions, weekly groups, point tokens, seasons, decay and
    placement games: too much machinery for a game with friends and a few strangers.
  - **Maybe later**: named tiers drawn as our map's colours, once there are players to fill them.

### Sources

- GeoGuessr landing page and Horrorguessr: https://www.geoguessr.com/ , https://www.geoguessr.com/horrorguessr (seen and played 2026-11-11)
- GeoGuessr client code, build `1.8954-3126c7c`: `https://www.geoguessr.com/_next/static/…` (5K component in chunk `23301`, CSS `0644972185d9a4c2.css`, duels in chunk `68079`, classic round in chunk `1015`)
- [H1] Help, ranked play: https://geoguessr.freshdesk.com/support/solutions/articles/206000056733-a-guide-to-geoguessr-s-ranked-play
- [H2] Help, What is Multiplayer? (modified 5 Oct 2026): https://geoguessr.freshdesk.com/support/solutions/articles/206000056746-what-is-multiplayer-
- [H3] Help, What is Team Duels?: https://geoguessr.freshdesk.com/support/solutions/articles/206000056765-what-is-team-duels-
- [C1] Patch notes 17 Apr 2026: https://geoguessr.canny.io/changelog/patch-notes-17th-april-2026 ; [C2], [C3] changelog (3 Jul, 26 Jun, 8 May 2026): https://geoguessr.canny.io/changelog
- [T] GeoGuessr on X, Nov 2021, duels update (seen as a search result, not opened): https://twitter.com/geoguessr/status/1463155185656729612
- [W] Wikipedia, GeoGuessr World Championship: https://en.wikipedia.org/wiki/GeoGuessr_World_Championship
- [R1] Logged live duels (party defaults, timers, multipliers): https://github.com/sp4ghet/rashinban2026-scripts/blob/main/docs/geoguessr/presenter-protocol.md
- [R3] Scoring animation, traced from GeoGuessr's client: https://github.com/sp4ghet/rashinban2026-scripts/blob/main/docs/geoguessr/scoring-animation.md and `sfx-timing.md`
- [R4] Round and countdown audio: https://github.com/sp4ghet/rashinban2026-scripts/blob/main/docs/geoguessr/round-sfx-timing.md
- [R2] Community API guide: https://github.com/NickEvans4130/Geoguessr-API-Guide/blob/main/docs/duels.md
- [F] Fandom wiki, Divisions: https://geoguessr.fandom.com/wiki/Divisions
- [G] Third-party guide (round count, unsure): https://omnigame.fun/guides/geoguessr/geoguessr-how-to-improve-your-rank/
- Fonts: https://github.com/google/fonts/tree/main/ofl (geologica, exo2, nunito, montserrat, firasans, onest, inter, golostext, unbounded, rubik, manrope, russoone, daysone, commissioner, lilitaone, baloo2)
