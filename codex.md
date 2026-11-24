# Codex: the default pair of hands

OpenAI's Codex runs on the owner's ChatGPT Plus, through the Claude Code plugin
`codex@openai-codex` (installed at user level, logged in). **It is the default subagent for
code** (the owner, 2026-11-24): Claude leads, Codex does the work, only its answer comes back.
Two reasons, in the owner's order: **save Claude tokens**, then **save time**. Codex usage is
plentiful: *"feel free to use it as much as needed."* Why: [decision 0026](decisions/0026-codex-and-lean-sessions.md),
[decision 0028](decisions/0028-codex-default-subagent.md).

## Model and effort

Always **`gpt-6.2-astra`** (Astra, Codex's most capable model; it is also the default in
`~/.codex/config.toml`). The effort follows the task, the owner's ladder:

| The task is | `--effort` | For example |
|---|---|---|
| easy | `medium` | a rename, a text in three languages, one small fix in a named file, a "where is X used" |
| typical | `high` | a slice to a fixed contract, a bug with a known place, tests for finished code |
| a little harder, or more | `xhigh` | across several packages, scoring / Barg / rooms / migrations, a bug Claude couldn't place, a second try after a failed run |

`high` is the config default, so a call without `--effort` (and `review`, which takes no
effort flag) runs at `high`. When unsure between two rungs, take the higher one: Codex tokens
are cheap, a redo is not.

## What goes to Codex, and what stays with Claude

**To Codex: every piece of code work a written brief can carry.** Build slices, fixes, fix
rounds after a review, tests, digging through code and logs, a code review of every task,
and a second try at anything stuck. Several slices that don't share files run **at once, in
the background**: that is where the time is saved.

**With Claude:** leading and deciding; design and anything about taste or the look; the
OpenAPI contract; the briefs; `docker up`, Docker and the integration tests; playing the game
in headless Chrome; the steve-jobs review (it plays the game); data imports that need
judgement; the knowledge base; git and "push"; **the final review** (below). A change Claude
can finish in two or three edits stays with Claude: writing the brief would cost more.

## The context Codex gets: `AGENTS.md`

Codex reads no `CLAUDE.md` and has not read this knowledge base. It reads **`AGENTS.md`** at
the root of the repo it runs in, on every run: `geo-shafaq/AGENTS.md` and
`api-geo-shafaq/AGENTS.md` (in git; the repos are public, and they hold no keys). Each has:

- **a shared part**, the same in both: the project, the hard rules (no git writes, keys, Yandex
  only, `KADASTR:`, no Docker, stay in the brief, remove before adding, domains), who plays,
  the feel (Uzbek first with `‘`, one screen one job, place faces, one map one behaviour),
  and how to reply (what changed · checks · left or doubtful);
- **a repo part**: what to read first, the checks, the generated files, the sandbox quirks
  (the Go path, no sockets), the risky ground.

A third, short `AGENTS.md` in the parent folder `~/131/github.com/hakim-134/` (not in git, next
to the doorway `CLAUDE.md`) only points to the two, in case Codex is ever started there.

**Keep them true.** When a rule here changes and Codex would break it by accident, change the
shared part in both files in the same change (they say so at the top). Keep each under
~8 KB; Codex reads at most 32 KB of them. Checked 2026-11-24: Codex in `api-geo-shafaq` repeated
all eight hard rules and the Go path without opening a file.

## The brief

Because `AGENTS.md` carries the project, a brief carries only the task:

1. **The job and its intention**: what the player should see or get, and what the owner said.
2. **Where**: the repo (one run per repo; Codex writes only inside the repo it runs in), the
   files, the contract or the endpoint.
3. **Not to touch**: whatever another helper is editing at the same time.
4. **Done**: the command that must pass (`npm run check`, `npm test`, `go test ./...`) and what
   Claude will try on the phone.

Long briefs go in a file in the scratchpad: `--prompt-file <path>`.

## How

**Always run it in one code repo** (`cd` into it, or `--cwd`): Codex reads `AGENTS.md` from
the repo it starts in, and writes only there. Started in the parent folder
`~/131/github.com/hakim-134` it finds only a pointer and could write across repos.

```bash
S="$(ls -d ~/.claude/plugins/cache/openai-codex/codex/*/ | tail -1)scripts/codex-companion.mjs"
cd ~/131/github.com/hakim-134/geo-shafaq            # or api-geo-shafaq
node "$S" task --write --model gpt-6.2-astra --effort high --prompt-file /abs/brief.md  # builds
node "$S" task --model gpt-6.2-astra --effort medium "<question>"                     # read-only digging
node "$S" task --write --background --model gpt-6.2-astra --effort xhigh "<brief>"    # in parallel
node "$S" status; node "$S" result                                                    # background jobs
node "$S" review --wait --model gpt-6.2-astra                                         # the uncommitted changes
node "$S" adversarial-review --wait --model gpt-6.2-astra "doubt the Barg ledger: can a player earn twice?"
```

**As a subagent, the cheap way:** the same `task` command through `Bash` with
`run_in_background: true`. Codex works while Claude does something else, Claude is woken when
it ends, and no Claude agent sits in between. Several at once when their files don't overlap;
two writers never touch the same file ([P1111 §4](P1111.md#4-how-each-session-works)).

The plugin's `codex:codex-rescue` agent does the same through a Sonnet wrapper (Claude tokens).
If it is used: it starts Codex in Claude's working folder and sets no model or effort itself,
so its prompt starts with `--cwd <repo path> --model gpt-6.2-astra --effort <rung>`.

## After Codex

A Codex "done" is a claim, like any helper's. Claude reads the diff, runs the checks
(`direnv exec .. make test` for the integration tests), `docker up`, plays it. A review
finding is weighed, not obeyed: fix what a player or the data would hit.

**The final review is Claude's own, not Codex's** (the owner, 2026-11-24): after all the work
is done and just before the report, Claude goes over **everything** the task changed itself:
the whole diff in each repo against what the owner asked, the rules (`AGENTS.md`, this
knowledge base), leftovers from what was replaced, the texts in uz/ru/en, and the game as it
runs. What doesn't match what was intended is fixed (by Codex if it's code work, then checked
again) before the report.

## Limits

- Plus has its own 5-hour and weekly limits. If Codex answers that the limit is reached, Claude
  agents take the work, and the report says so in one line.
- Codex's sandbox has no network and can't open sockets (2026-11-23): package installs,
  `npm run gen`, Docker and `make test` against Postgres stay with Claude. Codex runs
  `go build`, `go vet`, the unit tests, `npm run check` and `npm test`. If a task fails at once
  with `bwrap: loopback: Failed RTM_NEWADDR`, the sandbox itself didn't start and nothing was
  done: see the AppArmor profile below.
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
Installed and checked 2026-11-23: a real Codex task ran. Inside the sandbox `go` is not on PATH
(`AGENTS.md` tells Codex to use `/snap/go/current/bin/go`). Check: `codex sandbox sh -c 'echo ok'`
prints `ok`. If it fails again after a Codex or Ubuntu update, check this profile first.
