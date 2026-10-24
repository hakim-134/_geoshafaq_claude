# How the owner works on Shafaq Geo

## The owner here

- By day a Go backend developer. Shafaq Geo is the owner's own project, built front and
  back through Claude.
- Here the owner is the **CEO, the designer and the tester**, not a coder: *"I don't want to
  read code … My primary main goal is to see the main product and check, is it what I
  want?"*
- Messages are often dictated: long and conversational. Read them for intent; the main points
  are usually clear. When one isn't, ask one short question about the product.

## What the owner wants from it

- Now: a pet project. Fewer than 10 people play, all friends.
- The hope: a real product that thousands use (*"10,000 people"*). Build with that in mind
  (`PLAN.md`), without building for it before it's needed.
- Every task should leave the game *"beautiful"* and *"done"*: finished, not half-way.
- Why it exists and how it should feel: [CLAUDE.md](CLAUDE.md#why-it-exists),
  [design.md](design.md). Who plays: [players.md](players.md).

## How a task goes

1. The owner says what they want, often as a feeling or an example, not a spec. If it's clear
   enough, decide the details yourself and say in the report what you assumed.
2. Build it, in both repos if needed. Run the usual checks (`make test`, `npm run check`,
   `npm test`).
3. **Bring it up** with `docker up` ([local.md §3](local.md#3-docker-up)) and play it yourself
   in Chrome: phone size and laptop width, light and dark, on `demo` panoramas.
4. **Report** (below). Nothing is committed yet.
5. The owner plays it and answers with changes, or with **"push"** ([access.md §2](access.md#2-git)).

## The report

The owner reads it as a player would. Short, plain words:

```text
Ready to try: http://localhost:8130   (phone on the laptop's Wi-Fi: http://10.42.0.1:8130)

What changed
- <what a player sees, one line each>

Try this
- <one or two things to do, e.g. "start a Tashkent game and wait for the last 10 seconds">

Not done / known issues
- <only if there are any>
```

No file lists, code or diffs unless the owner asks. If something could not be done, say so
first, in one line.

## What the owner does not want

- Permission questions about anything in [access.md](access.md).
- Long reports, code tours, lists of options. One recommendation.
- A session that stops half-way because one action was blocked. Do the rest, then say what
  was blocked and why ([access.md §7](access.md#7-if-claude-code-blocks-an-action)).
