# 0002 — One branch, `main`, for now

- **Date:** 2026-10-21
- **Status:** accepted (for now)
- **Deciders:** the owner

## Context

Both repos were created on GitHub with an empty `main`. The owner's usual pair is `dev` +
`prod`, with Claude never touching prod. There is one VPS and no dev server, and the
project is still "just an idea".

## Options

1. `dev` + `prod`, as in Mehnat (Claude's proposal).
2. **`main` only**, which is what the VPS runs.

## Decision

Option 2. Everything goes to `main`; the first commits were pushed there on 2026-10-21.

## Why

The owner: it is just an idea for now, keep it simple.

## Consequences

- `main` is the only branch and what the VPS checks out. A push to `main` reaches users
  only after the server pulls it.
- Revisit (`dev` + `prod`, maybe a `dev.geo.shafaq.uz`) once real players use it. Then
  update `CLAUDE.md` and `_claude/CLAUDE.md` §4.
