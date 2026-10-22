# 0003 — The knowledge base lives on GitHub, next to the code

- **Date:** 2026-10-22
- **Status:** accepted
- **Deciders:** the owner

## Context

On 2026-10-21 Claude created the knowledge base as `abdullayevsh/_shafaq_claude` on
git.sriss.uz, following the pattern of `_ufa_claude` and `_mehnat_claude`. It was never
committed or pushed. The owner did not ask for it there: Shafaq Geo is the owner's own
project and its code is on GitHub under `hakim-134`, not on the work GitLab.

## Options

1. Keep `abdullayevsh/_shafaq_claude` on git.sriss.uz, like the work projects.
2. **`hakim-134/_geoshafaq_claude` on GitHub**, checked out inside the project folder
   `~/131/github.com/hakim-134/`.

## Decision

Option 2. The owner created the repo and asked to move the knowledge base there and to keep
developing it "like pro". The contents of `_shafaq_claude` were copied over and expanded.

## Why

The owner's own project stays in the owner's own account, separate from work. The
knowledge base sits in the same folder as the code, so the doorway imports it by a relative
path inside the working directory.

## Consequences

- Doorway `~/131/github.com/hakim-134/CLAUDE.md` imports `_geoshafaq_claude/CLAUDE.md`.
- `_claude` (§2.5, §4, `me/claude-setup.md`, `me/git-rules.md`) names this repo as a
  knowledge base too, not only `abdullayevsh/_*claude`.
- `~/131/git.sriss.uz/abdullayevsh/_shafaq_claude/` is superseded. It is the owner's to
  delete; nothing reads it any more.
- Started inside `geo-shafaq/` or `api-geo-shafaq/`, the import points outside the working
  directory, so Claude Code may ask once to approve external imports
  (`_claude/me/claude-setup.md` §2). Starting in `~/131/github.com/hakim-134/` avoids that.
