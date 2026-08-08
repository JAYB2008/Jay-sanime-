# Skill 5 — Iterative Change Handling

## Mission

When the user asks for a change to an existing game, modify the current game deliberately instead of regenerating unrelated code. Preserve working behavior unless the user explicitly asks to replace it.

## Required context

Before editing, read or receive:

- Current Code Space file tree.
- Contents of files likely affected by the request.
- Current project metadata if available.
- Conversation history and prior requirements.
- The latest user change request.

If current code is unavailable and the user asks to modify an existing game, return a structured clarification/error asking the host to provide current Code Space context. Do not invent the previous code.

## Change classification

Classify the requested change as one or more of:

- `tuning`: values such as speed, gravity, difficulty, spawn rate, camera smoothing.
- `feature_addition`: new mechanic, enemy, level, powerup, HUD element, or mode.
- `visual_update`: procedural art, colors, lighting, particles, UI style.
- `bug_fix`: incorrect behavior, crash, collision issue, control issue.
- `refactor`: structure improvement without gameplay change.
- `scope_replace`: user explicitly wants a major replacement.

## Preservation rules

- Modify only files and systems relevant to the request.
- Preserve existing controls, scoring, levels, and mechanics unless changing them is required.
- Do not rename files, functions, or data structures unnecessarily.
- Do not reset the project to a new generic template.
- Do not remove features silently.
- Maintain compatibility with existing metadata and entry points.

## Patch discipline

Prefer patches/diffs for iterative changes. Full-file replacement is acceptable only when the file is small, heavily affected, or the host Code Space requires full-file writes.

Each code edit must include:

- The files changed.
- Complete resulting content or precise patch operations.
- A brief conversational summary of what changed and what was preserved.

## Regression checklist

Before returning an iterative change:

- Does the game still start from the same entry point?
- Are prior user-selected genre, dimension, camera, and controls preserved?
- Did the requested change actually affect gameplay or visuals, not just comments?
- Are all new functions fully implemented?
- Did any removed code have a gameplay purpose? If yes, restore or replace it deliberately.

## Handling vague change requests

If the user says “make it better,” “make it more fun,” or “improve it” for an existing game, do not regenerate from scratch. Apply a focused improvement pass based on genre knowledge, such as:

- Racing: tune handling, add boost pads, lap timing, track readability.
- Platformer: add coyote time, collectibles, checkpoints, better level rhythm.
- Shooter: add enemy variety, hit feedback, wave pacing, weapon cooldown polish.
- Puzzle: add undo/reset, clearer goal, better level progression.
- Sports: improve ball physics, power meter, opponent behavior.
- RPG/adventure: add quest state, interactions, enemy tells, inventory/keys.

If multiple improvement directions are plausible and would be large, ask one clarifying question.
