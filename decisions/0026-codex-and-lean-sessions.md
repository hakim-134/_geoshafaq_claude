# 0026 — Codex does the bounded work; reviews are capped; the lead's context stays small

- **Date:** 2026-11-23
- **Status:** accepted
- **Deciders:** the owner (use Codex, save tokens, keep the knowledge), Claude (where each goes)

## Context

The owner, 2026-11-23: Claude tokens run out; they now also have ChatGPT Plus with Codex, and
want Codex used where it is good, *"to save token and use codex's pro sides"*. Knowledge must
not be lost: *"we need to save knowledge, we shouldn't remove all history."*

Shafaq Geo is ~95% of the owner's Claude use (Claude Code logs, Oct–Nov 2026):

- 409 owner messages became 17,600 API turns, ~43 per message. Long sessions ran 300–980
  turns with 250k–440k tokens of context **on every turn**. That is the biggest cost.
- 38 `steve-jobs` reviews: ~33M output and cache-write tokens (about a quarter of the
  project's), ~70 agent-hours, 2,655 screenshots read. The review loops until "Ship it": the
  place map was reviewed 7 times.
- Screenshots read in the lead's own session: 583, of them 342 from `+w/b&as` pages. A picture
  read in a 400k session is paid again on every later turn.
- `+w/b&as` itself was already on the owner's word only (10 of 40 sessions, each from the
  owner's prompt).

## Decision

1. **Codex (OpenAI's plugin, `codex@openai-codex`, on the owner's ChatGPT Plus) does the
   bounded work:** a code review of every task before it is reported; well-defined build
   slices with a written brief (where an Opus agent was used for "build this to the
   contract"); digging through code and logs when only the answer matters. Claude keeps
   what needs the whole picture or taste: leading, design, briefs, the OpenAPI contract,
   `docker up`, playing the game, the taste review, writing the knowledge base, git. How:
   [codex.md](../codex.md).
2. **The taste review is capped:** one full review per task, then one re-check of its musts
   only (the touched journeys), then the report with what is left. More rounds only when the
   owner says "steve jobs". It plays the touched journeys in `phone-light` (+ `phone-dark`
   when colour changed); all four views and every journey only when asked, or in P1111 6.1.
   Changes [0014](0014-taste-review.md)'s "review again" loop; the rest of 0014 stands.
3. **Screenshots are looked at by agents, not the lead.** The lead reads `problems.txt` and
   the agents' findings, and opens a picture only to settle a doubt. The `+w/b&as` pairs are
   checked by a Sonnet agent that returns the numbered list.
4. **`+w/b&as` stays on the owner's word only.** Claude never adds it to a task or a prompt.
5. **Knowledge lives in this knowledge base, not in a long chat.** A finished task is written
   down (P1111, roadmap, design.md, a decision) before anything else; then the session can end
   and the next one starts small. One task per session where the owner's prompt allows. Read
   big files in parts.

## Why

- Codex runs on another subscription; only its answer enters Claude's context. A review by
  another model is also a better second opinion than Opus reading Opus.
- The 7-pass loops polished what the owner judges by playing anyway; the owner can always ask
  for another pass.
- A long session costs its whole context on every turn; the knowledge base already holds what
  a new session needs (that is what it is for).

## Consequences

- P1111 §4 is changed: tokens are now a limit too (it said they weren't, 2026-11-11).
- If Codex is out of its Plus limit, Claude agents do the work as before, and the report says
  so in one line.
- After a week (2026-11-30): a few lines to the owner on what Codex did well and badly, and
  the token numbers again, so this can be kept or changed.
