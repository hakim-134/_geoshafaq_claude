# P1111: one prompt per session

The owner sends these in order, one per new Claude Code session opened in
`~/131/github.com/hakim-134`, **with Fable as the session's model**, each after the last one is
played and pushed. A prompt that says "Send only when" waits for that. They match the "Next up"
table in [P1111.md](P1111.md#next-up).

Every prompt ends with "Follow P1111 §4": Fable leads, decides and checks; Opus agents build;
Sonnet agents do the plain work; the game is brought up and played before anything is reported
([P1111.md §4](P1111.md#4-how-each-session-works)).

## 1. Look before you build

```text
Shafaq Geo, P1111 session 1 of 15. Do P1111 0.1–0.4 (`_geoshafaq_claude/P1111.md` §6).

First read P1111.md whole and P1111-owner-words.md whole: they are what I want this month, in my own words. Nothing players see changes in this session.

You are the lead. Send helpers out in parallel and judge what they bring back:
- 0.1: play StudyGe (studyge.com), Squiz (squiz-app.com) and GeoGuessr (its look and lettering, the 5 000 moment, duels and rating). Really play them in the browser, with screenshots. For each: what we take, what we leave, why. Ideas and feelings only, never their pictures, sounds or fonts.
- 0.2: is there a full, correct set of mahalla borders for Tashkent city? A verdict.
- 0.3: are Tashkent's bus routes in OpenStreetMap good enough to draw? A verdict, and a proposed list of the most popular, most useful buses (10 at least, 30 if the data allows), with how you chose them, for me to strike and add.
- 0.4: free data for the world's countries: shapes, flags, capitals, names in Uzbek, Russian and English.

Write the four findings to `_geoshafaq_claude/research/P1111-*.md`: short, with sources and a verdict each. Then bring the knowledge base up to date as 0.4 says (CLAUDE.md, README.md, roadmap.md, the decisions' index with 0022, a note on P1028.md).

Report in plain words: the four verdicts, the bus list, and anything in P1111 that the findings change.

Follow P1111 §4.
```

## 2. The new look, on three screens

```text
Shafaq Geo, P1111 session 2 of 15. Do P1111 1.1, its first half: the new look on three screens. +w/b&as

Read P1111 §1 and §7, my words on taste and fonts in P1111-owner-words.md, and research/P1111-references.md. I want the whole look changed: a real game, bold and finished the way GeoGuessr is, but ours. The map of Uzbekistan and its shapes are the identity. Free fonts that carry o‘ and g‘, Cyrillic and digits well.

Build it on three screens only: the home, a round, a result. Phone and laptop, light and dark. Have two or three directions tried by separate agents first if that helps you choose; show me one. Then stop: I look at the before and after and say yes or what to change. Do not restyle anything else yet.

Follow P1111 §4.
```

## 3. The look everywhere; place-in-parent

**Send only when** the look of session 2 has the owner's yes.

```text
Shafaq Geo, P1111 session 3 of 15. Do the rest of P1111 1.1, and 1.2. +w/b&as

The look I approved goes onto every screen of the game: phone and laptop, light and dark. No screen stays in the old style. Rewrite design.md for it and record the decision.

Then place-in-parent (P1111 §5 and 1.2): the parent's whole shape with the place filled in. Build it as one component, at avatar size and as a large tile. The banners go, from the game and from the API, with their photos and credits: I never wanted a banner, I wanted this. Put the picture wherever a place is named: a round's result, the end of a game, history, the room's places, the profile.

Done when no banner is left anywhere, and someone who has never seen Jondor's shape can tell where it is from its picture.

Follow P1111 §4.
```

## 4. The map picker; several places in one game

```text
Shafaq Geo, P1111 session 4 of 15. Do P1111 1.3: the map picker, and games across several places.

Read P1111 §5 (the map, the picked places) and 1.3. The map opens on Uzbekistan with no back button. A tap goes in. Inside a place, the small square at the top left shows that place in its parent, and a tap on it goes up one level. "Tanlash" picks the place. I can pick as many places as I like, at any level: each one joins a list with its picture and name, and is marked on the map in its own colour.

Server: a game, a room and a challenge hold a list of places. Each round picks one of them, each equally likely, then a panorama inside it; the round is scored by its own place's size. The guess map opens showing all the picked places.

Build on today's place map; keep what decision 0016 settled. Done when I pick Yunusobod, Buxoro and Samarqand in a few taps, see all three marked and listed, and play rounds from each.

Follow P1111 §4.
```

## 5. The four tabs

```text
Shafaq Geo, P1111 session 5 of 15. Do P1111 1.4 and 2.1: the four tabs, and the O‘yin and Do‘stlar tabs built round the map.

Four tabs at the bottom on a phone (at the side or top on a laptop), hidden during a round: O‘yin, Do‘stlar, O‘rganish, Profil (P1111 §2). The old home with one Play button is replaced.

O‘yin: the map as the main thing, the picked places, one big "O‘ynash" for playing alone. Do‘stlar: the tab is the room's lobby: the map, the friends' faces across the top, the picked places, invite as it works today, "Boshlash"; "Kodim bor" lives here. O‘rganish and Profil hold, for now, what already exists and belongs there (1.4).

Remove what the tabs replace: no screen may be reachable only through an old menu. Done when every screen of the game is at most two taps from a tab, and I open a room, pick two places on the map and start with a friend.

Follow P1111 §4.
```

## 6. The small fixes

```text
Shafaq Geo, P1111 session 6 of 15. Do P1111 2.2, 2.3 and 2.4.

2.2: a tap on the compass turns the view to north, changing only the direction left and right; the tilt up or down stays as it was. With "move" and "stay". And the compass's style leaves the room's settings: everyone has their own in their profile. Whether a game has a compass at all stays a rule.
2.3: a guest can change their name any time: in the lobby, during a game, at its end. If the middle of a round is awkward, offer it right after each guess. Everyone in the room sees the new name at once.
2.4: the 5 000 moment: a perfect round gets its own celebration, seen and heard, short, ours and not a copy of GeoGuessr's. In a room everyone sees whose it was.

Play a room with a guest on a second phone and meet all four.

Follow P1111 §4.
```

## 7. O‘rganish: the engine; Uzbekistan

```text
Shafaq Geo, P1111 session 7 of 15. Do P1111 3.1 and 3.2: the quiz engine, and Uzbekistan's regions and districts.

Read P1111 §9, my words on learning in P1111-owner-words.md, and research/P1111-references.md. One engine for every quiz to come: "find it on the map" (the main kind, StudyGe's way) and "name it" (from a few choices); two ways to play, O‘rganish (no clock, the right answer shown, what was missed comes back) and Sinov (points, time, a result); levels that grow; progress kept with the account and coloured in on the map.

Then Uzbekistan on it: the regions; the districts of one region or of Tashkent; and every district of the country in two steps (the name is given; tap its region, then the district).

Done when I learn Tashkent's districts until the map is fully coloured, and find Jondor by going into Buxoro.

Follow P1111 §4.
```

## 8. Tashkent's mahallas

```text
Shafaq Geo, P1111 session 8 of 15. Do P1111 3.3: Tashkent's mahallas.

Build what research/P1111-mahallas.md says is possible: inside a district of Tashkent, its mahallas, drawn and learned the same way as regions and districts, one level deeper. Place-in-parent for a mahalla is its district with the mahalla filled. Tashkent only. If the data covers only some districts, build those well and say plainly which are missing.

Done when I learn the mahallas of my own district on the map.

Follow P1111 §4.
```

## 9. The world

```text
Shafaq Geo, P1111 session 9 of 15. Do P1111 3.4: the world.

Countries on the map, by continent and then the whole world; flags; capitals. The basics, done well, on the same engine. Data as research/P1111-world.md found. Small countries must be easy to tap on a phone. Names in Uzbek first, then Russian and English.

Done when I can find the countries of Asia on the map, and match flags and capitals for the whole world, on my phone.

Follow P1111 §4.
```

## 10. Tashkent's buses

**Send only when** the owner has approved the list of buses from session 1.

```text
Shafaq Geo, P1111 session 10 of 15. Do P1111 3.5: Tashkent's buses.

The approved list is in research/P1111-buses.md. A route is drawn on the map of Tashkent; I pick its number from a few. After the answer, name the route's main stops: that is the useful part. Same engine, same two ways to play. Check each route's line against Yandex's map before it goes in.

Done when I can tell the popular buses apart by their routes.

Follow P1111 §4.
```

## 11. Any quiz, with friends

```text
Shafaq Geo, P1111 session 11 of 15. Do P1111 3.6: any quiz, with friends.

On every quiz in O‘rganish, a smaller button "Do‘stlar bilan". It opens a room on the Do‘stlar tab with that quiz already chosen; the host may change its settings; friends join as they join any room. Two players or more, the same questions for everyone, points for right answers and the time counted, judged by the server. The end is the room's podium. The room's street game must not get more complicated for it.

Play it with three players. Done when I send flags to a friend from one tap and we race.

Follow P1111 §4.
```

## 12. Profil; your own photo

```text
Shafaq Geo, P1111 session 12 of 15. Do P1111 4.1 and 4.2: the Profil tab, and your own photo.

4.1: one place for the photo or emoji and the name, what I have learned shown on the map, Barg and the shop as they are, the compass's style and the other settings, the ways to sign in.
4.2: a signed-in player uploads a photo and crops it to a square; it is their face everywhere an emoji was, with a shop frame round it. No photo: the emoji, as today. Guests keep emojis. Keep it small in Postgres, no new service. The report button covers photos, and shafaq-tools can take one down.

Done when my photo is on my profile, in a room and on the podium.

Follow P1111 §4.
```

## 13. The duel

```text
Shafaq Geo, P1111 session 13 of 15. Do P1111 5.1: the duel.

One against one, GeoGuessr's way: both start with the same health; after each round whoever scored less loses the difference; later rounds hurt more; once one player has guessed, the other has a short time left; it ends when one player's health is gone. Take the numbers from research/P1111-references.md, then play it and tune them.

Build it as a kind of room, so two friends can duel from the Do‘stlar tab. Make the health and the hit after each round something you feel.

Done when I duel a friend on two phones to the end.

Follow P1111 §4.
```

## 14. Strangers and the rating

```text
Shafaq Geo, P1111 session 14 of 15. Do P1111 5.2, 5.3 and 5.4: strangers, the rating, fair play.

On the O‘yin tab: "for rating" (the whole of Uzbekistan, signed-in players only) and "just for fun" (I pick one place and meet someone who picked the same; no rating). When nobody is there, say so plainly and let the player decide: no invented opponents, no fake numbers. An Elo-style rating on the profile and one table of the best.

Fair play as 5.4 says, said honestly. The stranger buttons sit behind one server setting: off on the live server until the Yandex license, on locally.

Test with simulated players as well as two real phones. Done when two accounts find each other, duel, and both ratings move.

Follow P1111 §4.
```

## 15. Finished

```text
Shafaq Geo, P1111 session 15 of 15. Do P1111 6.1: finished.

Judge the whole game as one thing. A steve-jobs review of every tab by a fresh agent, as a stranger; fix until it says "Ship it". Hunt for leftovers: screens, routes, texts, API fields and code that nothing reaches any more, and remove them. Every text in Uzbek, Russian and English. The knowledge base true again: CLAUDE.md, design.md, roadmap.md, each repo's README.

Then play the picture in P1111 §0 from its first line to its last, and give me one short page: what is finished, what waits, and what I buy next.

Follow P1111 §4.
```
