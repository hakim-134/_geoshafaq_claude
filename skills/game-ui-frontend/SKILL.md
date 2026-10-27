---
name: game-ui-frontend
description: Design the in-game UI of Shafaq Geo — the HUD over the panorama, the guess map, timers, round results, menus and overlays — so it protects the playfield and feels like a game, not a form. Use when building or reviewing any screen a player sees during or around a round.
---

# Game UI Frontend

From OpenAI's `game-studio` plugin (MIT,
github.com/openai/plugins/tree/main/plugins/game-studio/skills/game-ui-frontend), adapted
for Shafaq Geo on 2026-10-26. Where this file and [design.md](../../design.md) disagree,
**design.md wins**: it holds the colours, fonts, signs and the owner's own taste.

## In Shafaq Geo

- **The playfield is the panorama.** It is drag-to-look, like a 3D camera, so every 3D rule
  below applies to it. The player must read street signs, shop names and buildings in it.
- **The guess map is the one secondary surface.** Small and out of the way while looking,
  big when the player opens it to guess. Never both big at once on a phone.
- **The persistent HUD is one edge cluster:** round, score, timer. The timer warns by colour
  and the red edge glow, not by a bigger box.
- **Phone first, portrait, one thumb.** The Guess button sits under the thumb.
- Check every screen in light and dark, and in Uzbek, Russian and English.

## Overview

Use this skill whenever the game needs a visible interface layer. The job is not to produce
generic dashboard UI. The job is to produce a readable, thematic browser-game interface that
supports the play experience.

Default assumption: the game world (panorama, map) is its own render layer, and text-heavy
UI is DOM.

## Frontend Standards

1. Establish visual direction before coding (for us: [design.md](../../design.md)).
   - Genre and fantasy
   - Material language
   - Typography
   - Palette
   - Motion tone
2. Use CSS variables for the UI theme.
3. Build clear hierarchy.
   - Critical round information first (time, round, score)
   - Secondary tools second
   - Rarely used settings behind menus or drawers
4. Protect the playfield first.
   - The initial screen should feel playable within a few seconds.
   - Default to one primary persistent HUD cluster and at most one small secondary cluster.
   - Keep the center of the playfield clear during normal play.
   - Keep the lower-middle playfield mostly clear during normal play.
   - Put rules, details and long control lists behind drawers, toggles, or pause surfaces.
   - Prefer contextual prompts and transient hints over permanent boxed panels.
5. Keep overlays readable over motion.
   - Use backing panels, edge treatment, contrast, and restrained blur where needed.
6. Design for both desktop and mobile from the start.
7. Design around camera and input control boundaries.
   - Pause or gate panorama dragging when menus, dialogs, or the open map are active.
   - Keep drag-to-look and menu interaction states explicit.

## UI Budget

- one compact status strip at the edge (round, score, timer)
- one transient hint or interaction prompt
- one collapsible secondary surface: the guess map

Do not open every informational surface on first load. The scene should be readable before
the player opens any deeper UI.

As a default implementation constraint:

- no always-on full-width header plus multi-card body plus full-width footer layout
- no large center-screen or lower-middle overlays while looking around
- no more than roughly 20–25% of the viewport covered by persistent HUD on desktop unless
  the owner explicitly asks for a denser layout
- on mobile, collapse to a narrow stack or contextual chips before covering the playfield
  with larger panels

## Motion Rules

- Prefer a few meaningful transitions over constant micro-animation.
- Reserve strong motion for state change, reward, danger, and onboarding.
- Respect reduced-motion settings for non-essential animation.
- Keep HUD motion from competing with panorama motion.

## What Good Looks Like

- HUD elements are legible without flattening the scene.
- Menus feel native to the game world, not like a SaaS admin panel.
- Layout adapts cleanly across breakpoints.
- Pointer, touch, keyboard, and game-state feedback are obvious.
- Menu and HUD states do not fight panorama dragging.
- The first playable view keeps most of the viewport available for looking around.
- Persistent information density is low enough that screenshots still read as game scenes,
  not UI comps.

## Anti-Patterns

- Generic app dashboard layouts
- Flat placeholder styling with no theme
- Default font stacks without intent
- Dense overlays that obscure the playfield
- Large title cards or multi-paragraph notes sitting over a live panorama
- Equal-weight boxed panels distributed around every edge of the viewport
- Controls, rules, notes and the map all expanded at once on first load
- Full-width top-and-bottom chrome with large always-on center or body panels
- Excessive motion on every element
- Canvas-only UI when DOM would be clearer and cheaper
- Letting panorama dragging stay active under modals or the open map

## References

From the same `game-studio` plugin, unchanged:

- Prompt recipes for HUD and menus: [references/frontend-prompts.md](references/frontend-prompts.md)
- Low-chrome HUD layout patterns: [references/three-hud-layout-patterns.md](references/three-hud-layout-patterns.md)
- Playtest review: [references/playtest-checklist.md](references/playtest-checklist.md)

Related skills here: [game-ui-design](../game-ui-design/SKILL.md) (HUD clarity),
[game-designer](../game-designer/SKILL.md) and [playfulness-fun](../playfulness-fun/SKILL.md)
(game feel), [frontend-design](../frontend-design/SKILL.md) (aesthetic direction).

## Before calling it done

Play it in the browser the way [owner.md](../../owner.md) and [local.md](../../local.md)
say: phone size and laptop, light and dark, on the `demo` panoramas. Look at the
screenshots and ask: does this still read as a street in Tashkent with a game on top?
