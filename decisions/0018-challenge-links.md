# 0018 — Challenge links: one try each, the share button becomes the challenge

- **Date:** 2026-11-02
- **Status:** accepted
- **Deciders:** Claude, on PLAN 8.3 and the owner's session prompt; the owner can say otherwise

## Context

PLAN 8.3: the same panoramas and rules for everyone, a leaderboard per challenge, a card for
Telegram. The game had "Natijani ulashish", a link to a finished game's page: a friend got a page of
answers, nothing to play. The site is a single-page app: its HTML is empty until a browser runs it,
so Telegram's robot, which runs nothing, has nothing to show.

## Decision

- **A challenge is made from a finished game:** its map, rules and the panoramas played (an endless
  game's: the rounds it had). The same game gives the same link; a room's players all get one link,
  and all of them stand on its board from the start.
- **One button.** "Do‘stni chaqirish" replaces "Natijani ulashish" on a game's end and a room's end.
  A game's own page still opens by its link.
- **One try each.** The link's second opening gives the same game, then the player's place. The
  streets are known by then: a second try would only climb the board. "Yana o‘ynash" after it is a
  new game on new streets.
- **A swapped panorama stays fair enough.** When a round's panorama can't open for a player, the swap
  comes from the challenge's seed, so all who fail there get the same one; the leaderboard keeps both.
- **The ring** in a challenge is its players, two guesses or more, the player included: as a room's.
- **The card.** `GET /v1/challenges/{code}/card` is a small page with the title, text and picture
  (`card.png`, drawn in Go in the game's fonts: the challenger, the map's sign, the score, the
  squares). On the server Caddy hands it to link-preview robots by their User-Agent on `/c/<code>`;
  people get the app. Not on the laptop: nothing outside can reach it.

## Why

- One button because the finished game's page and the challenge did the same job for the sender, and
  only one gives the friend something to do.
- By User-Agent because the other ways cost more: pre-rendering every challenge, or serving the app
  through the API. A robot we don't list gets the app and no preview: nothing breaks.

## Consequences

- The board reads all of a challenge's finished rows on each request. Fine now; at thousands of
  players on one link it wants its own page size and an index on the score.
- The finished games of a board are readable by link (as all finished games are), so someone could
  look before playing. The page leads there only after one's own game. Friends; not worth more yet.
- A real group can only be tried once the site is up (P1028 5.1).
