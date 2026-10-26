# 0013 — Accounts: Telegram through the bot, merging, moderation by the command line

- **Date:** 2026-10-26
- **Status:** accepted (built 2026-10-26)
- **Deciders:** the owner (Phase 3 of `PLAN.md`: "Phase 3 needs to be done"), details by Claude

## Context

Phase 3 brings accounts: guests sign in with Telegram and Google, link several, merge, keep
everything; a profile; a name filter, reports and bans. The plan named "Telegram OIDC".
Telegram's login widget needs the site's domain set in BotFather and does not work on
`localhost` or the laptop's Wi-Fi address, where the owner tests.

## Options

1. Telegram's login widget (or its OAuth): one domain per bot, nothing to test locally.
2. **The bot's deep link:** the game opens `t.me/<bot>?start=login_<code>`, the player presses
   Start, the bot confirms the code, the game collects it. Plus the Mini App's signed
   `initData` when the game is opened inside Telegram.

## Decision

- Option 2. On a phone it is a link into the Telegram app; on a laptop the same link as a QR
  code for the phone's camera. Works on every address.
- Google: Google's own button and its ID token, checked on the server against Google's keys.
  Shown only when `GOOGLE_CLIENT_ID` is set.
- A guest who signs in becomes the account. A guest who signs in to an account that exists
  moves into it with its games and its session (no question: a guest has nothing to choose).
  An account that signs in with another account's identity is asked to merge, on a card that
  shows both; the other account's games, identities and devices move in, and it is deleted.
  The last way to sign in cannot be removed.
- Names: the player's own (2–24 characters) through a filter for Uzbek, Russian and English
  (both scripts, digits for letters, staff-like names). Guests keep the emoji name until they
  change it; signing in does not copy the Telegram or Google name (privacy).
- Reports from a player's page; the admin is `shafaq-tools reports | ban | unban` for now. A
  ban stops new games and follows merges.

## Why

The deep link is the one way that works the same on the laptop, the phone and the real site,
and it is what Uzbek players already do with bots. Merging by a confirmed card keeps "made for
friends" simple: one person, one account, whichever device. A command-line admin is enough
for fewer than ten players; an admin page can come when reports do.

## Consequences

- The worker reads the bot's messages; only one program may, so the laptop and the server need
  different bots (`TELEGRAM_BOT_TOKEN`). Until the owner makes the game's bot, `tmp67bot` signs
  players in.
- The bot answers `/id` with chat IDs (for `TELEGRAM_ALERT_CHAT`), and greets everyone else.
- The Mini App button (BotFather) waits for https on the real site.
