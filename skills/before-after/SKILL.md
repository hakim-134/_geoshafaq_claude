---
name: before-after
description: Before and after screenshots of everything a task changed in Shafaq Geo, on one page the owner can judge at a glance. Use when the owner's message has the word +w/b&as (also w/b&as, +w/b&a), or asks for before and after pictures of a change. The before pictures must be taken before the first edit, so read this at the start of the task.
---

# `+w/b&as`: with before & after screenshots

The owner adds `+w/b&as` to a task. Tasks take long, and by the end the owner may have forgotten
what they asked (*"sometimes I forgot what I have wrote"*). So the task ends with one page: what
they asked, then a picture of every change, before next to after. They look and say "that's
good" or "not that one", without playing through the whole game first.

The word is `+` an add-on, `w/` with, `b&a` before and after, `s` screenshots. It adds to the
usual flow ([owner.md](../../owner.md#how-a-task-goes)) and replaces no step of it.

## 1. Before the first edit: the before pictures

This comes first, because the old game can't simply be photographed later.

```bash
BA=~/131/github.com/hakim-134/tmp/ba/$(date +%y%m%d-%H%M)-<short-name>
mkdir -p "$BA"
find ~/131/github.com/hakim-134/tmp/ba -mindepth 1 -maxdepth 1 -mtime +14 -exec rm -rf {} +
cd ~/131/github.com/hakim-134/geo-shafaq
npm run playtest -- --views phone-light --only solo --out "$BA/before"
```

- `tmp/` is outside all three repos, so the pictures never reach the public git. The disk is
  short, so folders older than two weeks go.
- Choose the journeys from the pages the task will touch: `solo`, `room`, `places`
  ([what each plays](../steve-jobs/SKILL.md#2-play-it)). One journey on one view takes about a
  minute. When unsure, take the journey anyway; an unused picture costs nothing, a missing one
  can't be taken later.
- **Which views.** `phone-light` always: the game is mostly played on phones. Add `phone-dark`,
  `laptop` or `laptop-dark` only when the task is about that view or will look different there.
  The task is still tested in all four, as always; only the page stays short.
- **What the playtest doesn't walk** (the profile, a menu, a settings sheet, another language, a
  timer's last seconds): write `$BA/capture.mjs` and run the same script before and after, so
  both pictures show the same moment. Headless Chrome only, with `--disable-gpu` and
  `localStorage.sg_test_providers = 'demo'`, as in
  [local.md §1](../../local.md#1-what-runs). Load puppeteer from the game's folder:
  `createRequire('<geo-shafaq>/x.js')('puppeteer-core')`. **Never in the owner's Chrome.**
- If the game isn't up, `docker up` first ([local.md §3](../../local.md#3-docker-up)).
- It may run in the background while you start editing. Nothing changes on :8130 until the next
  `npm run lcl`, so don't `docker up` until it has finished.

Save the owner's words now, without the `+w/b&as`, for the page. Keep them word for word; if a
long dictated message runs past about ten lines, keep the parts that ask for something.

## 2. The task

Build it, `docker up`, test, and run the [steve-jobs](../steve-jobs/SKILL.md) review as usual.
The review's fresh agent gets none of this: no before pictures, no list of changes.

## 3. The after pictures, last

After the last fix and the last `docker up`, run the same commands with `--out "$BA/after"`. A
new page gets a new step in the playtest (it needs one anyway) or in `capture.mjs`. If the
review's last playtest ran after the last code change, copy its pictures instead of playing
again.

## 4. Look at every pair

**Open the pictures and compare them yourself.** A file comparison is no use: each game is
random, so the streets, scores, guest names and avatars differ on every run.

- **Every change gets a picture.** Go through what the task asked and `git diff`, and tick off
  each thing a player would see. One pair may show several changes on one page; a change that
  doesn't fit in that frame gets its own pair.
- **Drop pairs where only chance differs.** The home with another guest name is not a change.
- **Show only this task.** Other sessions may have work in the same folders. Their changes
  don't go on the page.
- **Same moment on both sides.** If a pair doesn't match (a menu open on one side, a map still
  loading), take it again. The change must be easy to see, so for anything small, capture the
  page scrolled to it. Don't crop or mark up the pictures.
- A new page has no before (`"before": null`); a removed page has no after. If a new page opens
  from an old one, also show the old page with the new button on it.
- Motion: a frame at the moment that shows it, and one line on how it moves. Sound and anything
  on the server go under `noPicture`, in a player's words.
- Real Yandex panoramas only if the task is about them (about 100 views a day); then set
  `"demo": false`, which removes the page's note about drawn streets.

## 5. The page

Write `$BA/changes.json`, in plain English with the game's own words as they appear on screen:

```json
{
  "task": "The home's Play button",
  "date": "2026-11-02",
  "asked": "the owner's words",
  "changes": [
    {
      "page": "Round result",
      "view": "phone, light",
      "what": ["what a player sees now, one line each", "another change on this page"],
      "before": "before/phone-light/05-solo-result-1.png",
      "after": "after/phone-light/05-solo-result-1.png"
    }
  ],
  "noPicture": ["a change that can't be shown, in a player's words"]
}
```

Order the changes the way a player meets them. Build the page and open it in a headless Chrome
to check it:

```bash
node ~/131/github.com/hakim-134/_geoshafaq_claude/skills/before-after/make-page.mjs "$BA"
```

It writes `$BA/before-after.html`: one file with every picture inside, side by side, numbered.
Tapping a picture shows it big and flips between before and after.

## 6. Hand it over

Send the page with `SendUserFile` (`display: "render"`, `status: "proactive"`), so it reaches
the laptop and the phone. Without that tool, open it with `xdg-open`. Then the usual
[report](../../owner.md#the-report), with these differences:

- the first line is the page's full path;
- "What changed" uses the page's numbers, so the owner can answer "2 is good, 3 is not".

If some picture couldn't be taken, say which one in the report's first lines. Never make a
picture up or pass off another moment as the before.

When the owner answers with fixes: fix, take the affected after pictures again, keep the before
pictures and the numbers, and send the page again.

## If the word comes late

If the before pictures weren't taken (the word came at the end, or the game had already been
rebuilt), build the old game from git and photograph that. Use `HEAD` if the task isn't
committed, otherwise the commit before it:

```bash
OLD="$BA/old"; mkdir -p "$OLD"
cd ~/131/github.com/hakim-134/geo-shafaq
git archive <commit> | tar -x -C "$OLD"
ln -s "$PWD/node_modules" "$OLD/node_modules"
cp .env.local "$OLD/"                    # the keys: without them the map draws nothing
(cd "$OLD" && npm run build)             # a few seconds
docker run -d --rm --name shafaq-before -p 8132:80 -v "$OLD:/srv/geo-shafaq:ro" \
  -v "$OLD/nginx.lcl.conf:/etc/nginx/conf.d/default.conf:ro" nginx:stable-alpine
npm run playtest -- --url http://localhost:8132 --views phone-light --only solo --out "$BA/before"
docker rm -f shafaq-before; rm -rf "$OLD"
```

This is the old game on today's server. If the task changed the server and a page depends on
that, the picture may not match what used to run: say so in that pair's `what`, or move the
change to `noPicture`.
