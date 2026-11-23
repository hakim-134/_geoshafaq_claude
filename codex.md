# Codex: what goes to it, and how

OpenAI's Codex runs on the owner's ChatGPT Plus, through the Claude Code plugin
`codex@openai-codex` (installed at user level, logged in). It saves Claude tokens: Codex does
the work, only its answer comes back. Why: [decision 0026](decisions/0026-codex-and-lean-sessions.md).

## What goes to Codex

| Work | How |
|---|---|
| **A code review of every task**, before the report | `review` (below), in each repo the task changed |
| A focused challenge of a risky change (scoring, Barg, rooms, migrations) | `adversarial-review "<what to doubt>"` |
| **A well-defined build slice**: the contract (OpenAPI) is fixed, the files are named, "done" is testable | `task --write`, with a brief |
| Digging: why a test fails, where something is used, what a log says | `task` (read-only) |
| A second try at a bug Claude is stuck on | `task --write` |

## What stays with Claude

Leading and deciding; the design and anything about taste or the look; the OpenAPI contract;
briefs; `docker up` and **playing the game in headless Chrome**; the steve-jobs review (it
plays the game); data imports that need judgement; the knowledge base; git and "push". Small
things Claude finishes in a few steps stay with Claude: a Codex round trip isn't free either.

## How

The script, from inside the repo (`geo-shafaq` or `api-geo-shafaq`):

```bash
CX="node $(ls -d ~/.claude/plugins/cache/openai-codex/codex/*/ | tail -1)scripts/codex-companion.mjs"
$CX review --wait                                  # the uncommitted changes
$CX adversarial-review --wait "doubt the Barg ledger: can a player earn twice?"
$CX task --write "<brief>"                         # builds; add --background for long ones
$CX task "<question>"                              # read-only digging
$CX status; $CX result                             # background jobs
```

Or the `codex:codex-rescue` agent (`Agent`, `subagent_type: "codex:codex-rescue"`) for a task,
in the background while Claude does something else. Two writers never touch the same file
(P1111 §4).

**A brief for Codex** is the same as for any helper (P1111 §4), and more: Codex has not read
this knowledge base and reads no `CLAUDE.md`. Say in it: which repo and files; the contract;
what not to touch; "done" as a command that passes (`make test`, `npm run check`, `npm test`);
the rules it would break by accident: keys never in git, Yandex only for players, `KADASTR:`
comments, no new containers, no commits (Claude commits on "push").

**After Codex**: Claude reads the diff, runs the checks, `docker up`, plays it. A Codex "done"
is a claim, like any helper's. A review finding is weighed, not obeyed: fix what a player or
the data would hit.

## Limits

- Plus has its own 5-hour and weekly limits. If Codex answers that the limit is reached, Claude
  agents take the work, and the report says so in one line.
- Codex's sandbox may have no network: package installs and Docker stay with Claude.
- It doesn't play the game. Anything judged by playing or looking is Claude's.
