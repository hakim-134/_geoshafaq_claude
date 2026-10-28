# P1028: one prompt per session

The owner sends these in order, one per new Claude Code session opened in
`~/131/github.com/hakim-134`, each after the last one is played and pushed. A prompt that says
"Send only when" waits for that. They match the "Next up" table in [P1028.md](P1028.md#next-up).

## 1. The Steve Jobs review

```text
Shafaq Geo, session 1 of 22. Do P1028 1.1 and 1.2 (`_geoshafaq_claude/P1028.md` §3).

Make the `steve-jobs` skill (`_geoshafaq_claude/skills/steve-jobs/SKILL.md`): a product reviewer with taste who judges the game from the browser like a first-time player, never from the code, and hands exact fixes to the frontend sessions. Its beliefs, method, output and place in every task are in §3.

Make the playtest script (`geo-shafaq/scripts/playtest/`, `npm run playtest`): on demo panoramas it plays a solo game with a hint, a two-player room to its end and the place picker, and saves screenshots for phone light, phone dark and laptop. Its own Chrome profile only.

Then run the first full review in a fresh agent with the skill and the script. Its list becomes P1028 §1, and what Stage 2 doesn't cover goes into 2.4. Record decision 0014.

Follow "How each session works" in P1028.md §2.
```

## 2. One Play button

```text
Shafaq Geo, session 2 of 22. Do P1028 2.1: the home with one Play button.

One road sign for where you'll play (a tap chooses another place: /places for now), one quiet line for the settings, one big "O‘ynash" (one tap to a street), and under it the quiet "Do‘stlar bilan o‘ynash" (opens a room at once with the home's place and settings) and "Kodim bor" (the number plate for a friend's code). Gone: the other Play buttons, the Yolg‘iz / Do‘stlar bilan switch, the three-steps panel. One Tashkent on the home: "Toshkent ko‘chalari". The laptop's empty right half gets something worth seeing. Update design.md.

Done when a stranger on a phone reaches a street with one tap, and the home has one green button.

Follow "How each session works" in P1028.md §2.
```

## 3. Rooms: invite and podium

```text
Shafaq Geo, session 3 of 22. Do P1028 2.2 (a) and (b): rooms that explain themselves.

(a) The lobby's one job is bringing friends in: one big "Do‘stlarni chaqirish" (the share sheet, opening by itself when the phone allows it right after the tap), the number plate smaller under it, a QR icon, players popping in with a sound, one line for the place and rules (the host taps it to change them), and "Boshlash · 3" at the bottom. No explaining sentences.
(b) The end is a stage: a podium on every phone (third, second, first rise; confetti for everyone; "Siz 2-o‘rindasiz"), one next step (the host's "Yana o‘ynash"; friends are taken into the new game by themselves), "Natijani ulashish" as the one quiet second button, the rest under ⋯.

Play it with three players. Done when a host invites in two or three taps, a friend joins from the link without a tap, and three phones reach the podium.

Follow "How each session works" in P1028.md §2.
```

## 4. The next round by itself; the hint's cost

```text
Shafaq Geo, session 4 of 22. Do P1028 2.2 (c) and 2.3.

2.2 (c): in a room the next round starts by itself, after a ten-second ring on every phone; the host can press "Hozir" or hold it. The server gives the result phase a deadline like a round's, kept in the Valkey snapshot; roomsim, and a `docker restart shafaq-api` during the countdown, must still pass.
2.3: the hint's cost, shown. The server sends the score before hints (`base`) in `RoundResult` and `RoomScore`; the formula stays in `internal/score`. The result shows "4 412 −20% 💡" small over the big "3 530", counting up, then ticking down; room rows get a 💡 and the grey score before it; the final table, the game page and history show the hints. Free hints show nothing.

Done when, in a room on "O‘rta", everyone sees why the closer guess with a hint got fewer points.

Follow "How each session works" in P1028.md §2.
```

## 5. Small fixes

```text
Shafaq Geo, session 5 of 22. Do P1028 2.4: the small fixes.

Yandex's "open in Yandex Maps" button on the guess and result maps: hide it (`suppressMapOpenBlock` is set, but it still shows: find out why); if the free key forces it, move it out of the thumb's corner. The streets: take out "Srkver" and "Chkalovo", and read the whole list for more like them. Then what the first steve-jobs review left open (P1028 §1, 2.4), worst first.

End with a steve-jobs review of the whole game: Stage 2 is done when it says "Ship it". Then tell me it's time for the friend test (P1028 1.3).

Follow "How each session works" in P1028.md §2.
```

## 6. The marker, and tapping it

```text
Shafaq Geo, session 6 of 22. Do P1028 3.1 and 3.2: the real place's marker, and tapping it.

3.1: a round badge of about 36 px: a white ring, a green disc, a white 🏁 finish flag with a small chequer, a short point to the exact spot, a soft shadow. It drops in as now; on the end map each badge has its round number in a small gold dot. Clear on Xarita, Sputnik and Gibrid, light and dark; the same badge in the legend, the game page and rooms. Update design.md.
3.2: tapping a badge (a round's result, the end of a game, rooms, the game page, my streets) opens that place's panorama on Yandex Maps in a new tab, facing the round's first heading:
https://yandex.uz/maps/?panorama[point]=<lon>,<lat>&panorama[direction]=<heading>,0&panorama[span]=120,60
The street plate's "Xaritada ochish" opens the same. Inside Telegram, use its openLink. Yandex answers headless browsers with 429: check the link in a normal browser.

Follow "How each session works" in P1028.md §2.
```

## 7. The crowd circle

```text
Shafaq Geo, session 7 of 22. Do P1028 3.3: the crowd circle.

On every round's result, a soft gold ring around the real place, its radius the average distance of the guesses; it pulses out twice when the badge lands, then rests, with "O‘rtacha 2.3 km" on its edge, and one line for the player: "O‘rtachadan 1.2 km yaqinroq" (or "uzoqroq"). In a room: this round's players, two guesses or more, from the result. Alone: the API adds `crowd: {km, n}` from other players' guesses on the same panorama, shown with three or more. Still for reduced motion.

Done when, in a three-player room, every round shows the ring at the average and each player's line says closer or farther.

Follow "How each session works" in P1028.md §2.
```

## 8. The map of Uzbekistan

```text
Shafaq Geo, session 8 of 22. Do P1028 4.1 and 4.2: the map of Uzbekistan.

The server: `GET /v1/places/{slug}/map`, a place's children as SVG paths in one frame (simplified as a coverage so neighbours share one border, projected, `ST_AsSVG`), with label points, panorama counts and the player's progress; cached.
The game: `/places` opens on the map. The 14 parts; Tashkent as a big badge ("Shu yerdan boshlang" on a first visit); tap a region and the map flies into its districts (Tashkent: its 13 tumanlar); tap a district for a card with its entry sign, progress and one "O‘ynash". No panoramas: hatched, "Tez orada". Gold shades for what the player knows. The official maps as signs, and the list, stay under the map. The home's sign opens it. Record decision 0015.

Done when, on a phone, Uzbekistan → Tashkent → Chilonzor → a game is three taps, light and dark.

Follow "How each session works" in P1028.md §2.
```

## 9. My map

```text
Shafaq Geo, session 9 of 22. Do P1028 4.3: my map.

The profile's big picture: Tashkent's 13 tumanlar coloured by how well the player knows them, with the streets learned; a tap on a district shows its streets. On a laptop it fills the home's right half. Use session 8's map.

End with a steve-jobs review of the whole game and fix its musts. Then tell me it's time for the second friend test (P1028 1.3).

Follow "How each session works" in P1028.md §2.
```

## 10. The soft launch

```text
Shafaq Geo, session 10 of 22. Do P1028 5.1: the soft launch for friends.
Send only when: the server in Uzbekistan exists, DNS points geo.shafaq.uz, api.geo.shafaq.uz, stats.geo.shafaq.uz and errors.geo.shafaq.uz at it, and the game's own bot is made.

Server: <address>, root SSH once. The server's bot token: <token> (the laptop keeps its own bot).

Set it up and deploy as deploy.md §A says; this message is my word for the server. The free Yandex key gets a daily cap well below 100 (DAILY_CAPS); tell me what to add to the key's allowed sites. The privacy and terms pages in uz/ru/en go live with sign-in.

Done when friends play on geo.shafaq.uz from their own phones, and the cap stops play before Yandex would.

Follow "How each session works" in P1028.md §2, and play it on the real site this time.
```

## 11. Challenge links

```text
Shafaq Geo, session 11 of 22. Do PLAN 8.3 and 3.5: challenge links (P1028 Stage 6).

A challenge is a map, rules and fixed panoramas: everyone with the link plays the same streets, guests included, and lands on its leaderboard. A card for Telegram; "challenge a friend" from any finished game and from a room's end. The crowd circle (3.3) uses the challenge's players. Tick 8.3 and 3.5 in PLAN.md.

Done when a challenge link sent to a Telegram group puts friends on one leaderboard as guests.

Follow "How each session works" in P1028.md §2.
```

## 12. The daily challenge

```text
Shafaq Geo, session 12 of 22. Do PLAN 8.4: the daily challenge (P1028 Stage 6).

One a day, Toshkent ko‘chalari first: the same streets for everyone, the day by Tashkent time. On the home it is one quiet line, not a second Play button. The day's leaderboard; sharing as a row of coloured squares. No streak to lose, no guilt for a missed day (players.md). Tick it in PLAN.md.

Follow "How each session works" in P1028.md §2.
```

## 13. Streets I miss

```text
Shafaq Geo, session 13 of 22. Do PLAN 8.5: streets I miss (P1028 Stage 6).

A map made of the player's worst rounds, the streets guessed far off, played until each is learned and leaves the list. It opens from "my streets" and from my map. Tick it in PLAN.md.

Follow "How each session works" in P1028.md §2.
```

## 14. The map maker

```text
Shafaq Geo, session 14 of 22. Do PLAN 8.1: the map maker (P1028 Stage 6).

A player makes a map from places picked on the map of Uzbekistan, an area drawn on the map, or streets; the library fills it with panoramas and says how many. Default rules; private, unlisted or public. Phone first, as simple as the home: one main button per screen. Tick it in PLAN.md.

Done when a player makes "My mahalla" on a phone in about a minute and plays it.

Follow "How each session works" in P1028.md §2.
```

## 15. Map pages

```text
Shafaq Geo, session 15 of 22. Do PLAN 8.2: map pages (P1028 Stage 6).

Every map gets a page: plays, likes, best scores, tags; maps can be searched; public maps wait in a moderation queue (the first part of PLAN 6.4: a small admin page, or shafaq-tools for now). Tick 8.2, and check Phase 8's "Done when" in PLAN.md: a player makes "My mahalla", sends the challenge link to a Telegram group, and friends land on the leaderboard as guests.

Follow "How each session works" in P1028.md §2.
```

## 16. Security and legal pages

```text
Shafaq Geo, session 16 of 22. Do PLAN 6.3 and 6.5 (P1028 Stage 7).

6.3, the security pass: rate limits, input limits, session fixation, CSRF on cookie auth, the WebSocket origin; write down what was checked and what was fixed. 6.5: the terms and privacy pages complete in uz/ru/en, and a credits page (BeloGuessr, OpenStreetMap, Yandex). Tick them in PLAN.md.

Follow "How each session works" in P1028.md §2.
```

## 17. The admin

```text
Shafaq Geo, session 17 of 22. Do PLAN 6.4: the admin that launch needs (P1028 Stage 7).

Reports and bans (the command line today), the map moderation queue (from 8.2), users; the panorama review queue only if the location pipeline runs. Only for the owner's account. Not a full back office. Tick it in PLAN.md.

Follow "How each session works" in P1028.md §2.
```

## 18. The load test

```text
Shafaq Geo, session 18 of 22. Do PLAN 6.2: the load test (P1028 Stage 7).
Send only when: the Yandex license and the hosting are decided (PLAN 6.1).

k6 with 10 000 simulated players in PLAN §6's mix (70% alone, 30% in rooms of about four), on servers like the real ones, rented for a day: tell me the price before renting. Demo panoramas only, never Yandex. Fix what breaks. Tick it in PLAN.md.

Done when p95 API is under 200 ms and no room drops.

Follow "How each session works" in P1028.md §2.
```

## 19. The launch

```text
Shafaq Geo, session 19 of 22. Do PLAN 6.1 and 6.6: the launch (P1028 Stage 7).
Send only when: the Yandex license is bought and its key is ready, and the production servers exist.

The production deploy, DNS, a CDN for the game's files; the daily caps set to what the license allows; v0 retired. This message is my word for the live server. Tick 6.1 and 6.6 in PLAN.md, and update roadmap.md.

Follow "How each session works" in P1028.md §2, and play it on the real site.
```

## 20. Barg, earned

```text
Shafaq Geo, session 20 of 22. Do PLAN 9.2 and 9.3: Barg, earned (P1028 Stage 8).

9.2: my leaf coin (`~/131/github.com/hakim-134/Glossy Green Leaf Coin Icon.png`), cropped and exported as PLAN 9.2 says. 9.3: the wallet as an append-only ledger (idempotency keys, balance = sum). Barg is earned by learning and playing well (a district learned, the daily challenge, a challenge won), never by time spent; shown on the profile. Nothing is sold yet. Tick them in PLAN.md.

Follow "How each session works" in P1028.md §2.
```

## 21. The shop

```text
Shafaq Geo, session 21 of 22. Do PLAN 9.4: the shop, with earned Barg (P1028 Stage 8).

Profile frames first, shown in rooms and on leaderboards; then pin and trail skins, compass skins, room emotes. Fixed prices, cosmetic only, the three basic compasses free, no random rewards (players.md). Tick it in PLAN.md.

Follow "How each session works" in P1028.md §2.
```

## 22. Selling Barg

```text
Shafaq Geo, session 22 of 22. Do PLAN 9.5 and 9.6: selling Barg (P1028 Stage 8).
Send only when: the company exists (PLAN 9.1) with Payme and Click merchant accounts, and the Yandex license allows a shop.

Payme and Click on the web, Telegram Stars in the Mini App; webhooks → River jobs → the ledger. The admin for items, prices, sales, refunds and a ledger audit. Tick them, and Phase 9's "Done when", in PLAN.md.

Follow "How each session works" in P1028.md §2.
```
