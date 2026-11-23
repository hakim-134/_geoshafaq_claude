# Codex: what goes to it, and how

OpenAI's Codex runs on the owner's ChatGPT Plus, through the Claude Code plugin
`codex@openai-codex` (installed at user level, logged in). It saves Claude tokens: Codex does
the work, only its answer comes back. Why: [decision 0026](decisions/0026-codex-and-lean-sessions.md).

**Codex first, at full strength** (the owner, 2026-11-23): *"you will have a lot of usage in
Codex … feel free to use Codex with max configuration, with the best models … Claude tokens
are really going too fast."* So every build slice and fix round that a written brief can carry
goes to Codex, run as `--model gpt-6.2-sol --effort xhigh` (the config's default is `medium`);
reviews too (`review` takes no effort flag: it uses the config). Claude agents only for what
needs eyes or taste: playing the game, the steve-jobs review, a design with open questions.

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
S="$(ls -d ~/.claude/plugins/cache/openai-codex/codex/*/ | tail -1)scripts/codex-companion.mjs"
node "$S" review --wait                                  # the uncommitted changes
node "$S" adversarial-review --wait "doubt the Barg ledger: can a player earn twice?"
node "$S" task --write --model gpt-6.2-sol --effort xhigh "<brief>"   # builds
node "$S" task --model gpt-6.2-sol --effort xhigh "<question>"        # read-only digging
node "$S" status; node "$S" result                             # background jobs
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
  On this laptop (2026-11-23) it can't open sockets, so `make test` reaches no Postgres there:
  Codex runs `go build`, `go vet` and the unit tests, and **Claude runs
  `direnv exec .. make test`** (the integration tests) after it. If a task fails at once with
  `bwrap: loopback: Failed RTM_NEWADDR`, the sandbox itself didn't start and nothing was done;
  the owner fixed that once.
- It doesn't play the game. Anything judged by playing or looking is Claude's.

## On this laptop: the sandbox needs one AppArmor profile

Ubuntu 24.04 stops unprivileged programs from making user namespaces, and Codex's sandbox
(`/usr/bin/bwrap`) needs one. Without the fix every Codex call fails with
`bwrap: loopback: Failed RTM_NEWADDR` or `bwrap: setting up uid map: Permission denied`
(found 2026-11-23). The fix is the profile `/etc/apparmor.d/codex-bwrap`, the same shape as
Ubuntu's own profile for VS Code:

```
abi <abi/4.0>,
include <tunables/global>

profile codex-bwrap /{usr/bin/bwrap,home/*/.codex/packages/**/codex-resources/bwrap} flags=(unconfined) {
  userns,

  include if exists <local/codex-bwrap>
}
```

Installed once with sudo (the owner types the password):
`sudo install -m644 <file> /etc/apparmor.d/codex-bwrap && sudo apparmor_parser -r /etc/apparmor.d/codex-bwrap`.
Installed and checked 2026-11-23: a real Codex task ran. Inside the sandbox `go` is not on PATH;
a brief says to use `/snap/go/current/bin/go`. Check: `codex sandbox sh -c 'echo ok'` prints `ok`. If it fails again after a Codex or Ubuntu
update, check this profile first.
