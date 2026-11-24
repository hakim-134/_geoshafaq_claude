# 0028 — Codex is the default subagent for code, on Astra; `AGENTS.md` gives it the context; Claude reviews it all at the end

- **Date:** 2026-11-24
- **Status:** accepted
- **Deciders:** the owner (Codex as subagent, Astra, the effort ladder, Claude's own final
  review), Claude (`AGENTS.md`, what stays with Claude)
- **Changes:** [0026](0026-codex-and-lean-sessions.md) point 1 (Codex did only the "bounded"
  work, on `gpt-6.2-sol` at `xhigh`)

## Context

The owner, 2026-11-24: *"I want you to use Codex as subagent, use Astro"*, with the effort by
the task: easy `medium`, typical `high`, a little harder or more `xhigh`. *"First main reason
is saving tokens from Claude; second main reason is saving time. We have a lot of tokens in
Codex, feel free to use it as much as needed."* And: *"Currently we have `CLAUDE.md` and
`.claude` for CC, but nothing for Codex … make something so Codex gets context and does the
task as we intended."* And: *"Just before finishing the task, review it all on your own (not
with Codex) to make sure everything is as we intended."*

"Astro" was read as **`gpt-6.2-astra`**: the Codex model list (2026-11-24) has no "astro",
and Astra is described as *"our most capable model for complex coding"*.

Until now each Codex brief had to repeat the project's rules, because Codex reads no
`CLAUDE.md`; a brief that forgot one (keys, Yandex only, `KADASTR:`, no commits) was the
usual risk.

## Decision

1. **Codex is the default subagent for all code work a brief can carry**: building, fixing,
   tests, digging, reviews. Slices that don't share files run in parallel in the background.
   Claude keeps leading, design and taste, the contract, Docker and the integration tests,
   playing the game, the steve-jobs review, the knowledge base and git. Opus agents only
   where Codex failed or the work needs taste. A two-edit change stays with Claude.
2. **Model `gpt-6.2-astra`, always**; the effort by the owner's ladder (`medium` / `high` /
   `xhigh`), higher when unsure. `~/.codex/config.toml` defaults to `gpt-6.2-astra` at `high`
   (it was `gpt-6.2-sol` at `medium`), so reviews, which take no effort flag, run at `high`.
3. **`AGENTS.md` at the root of `geo-shafaq` and `api-geo-shafaq`**, in git: Codex's
   `CLAUDE.md`. A shared part (the project, the hard rules, who plays, the feel, how to reply)
   and a repo part (what to read, the checks, the sandbox quirks). Briefs now carry only the
   task. The knowledge base stays Claude's; `AGENTS.md` is its short extract for Codex.
4. **Claude's own final review**, not Codex's, just before every report: the whole diff in
   each repo against what the owner asked and the rules, leftovers, the three languages, and
   the game as it runs. Anything off is fixed before the report.

## Why

- Codex runs on another subscription with room to spare; only its answer enters Claude's
  context. Parallel background runs make a session shorter.
- `AGENTS.md` is what Codex reads on every run by itself (checked: it repeated all eight
  rules without opening a file), so no brief can forget the rules.
- The owner judges by what was intended, which Codex hasn't seen; the one who heard the owner
  checks the whole at the end.

## Consequences

- The shared part of the two `AGENTS.md` files has to be kept the same, and true. When a rule
  in this knowledge base changes and Codex could break it, both files change with it
  ([codex.md](../codex.md#the-context-codex-gets-agentsmd)).
- The config change is global for the owner's Codex on this laptop, not only for this project.
- The week's check from 0026 (2026-11-30) now also says what Codex on Astra did well and badly.
