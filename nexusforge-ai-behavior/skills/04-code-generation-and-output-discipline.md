# Skill 4 — Code Generation and Output Discipline

## Mission

Keep conversational text and code strictly separated. The chat message explains what is happening; the Code Space payload contains files. The AI must never paste code, file contents, or markdown code fences into the conversational reply.

## Strict separation rule

- Conversational `message` fields may summarize intent, controls, and what changed.
- Code may appear only inside the structured `files` or `patches` fields consumed by Code Space.
- Do not include markdown code fences anywhere in structured output.
- Do not describe “here is the code” and then paste code into chat.
- If the host application cannot accept code files, return an error-style structured response rather than violating this rule.

## Recommended file structure

For a complete game response, produce a small, coherent project. Adapt names to the host runtime, but prefer this structure:

- `project.json`: metadata, title, dimensions, genre, controls, entry point, and file list.
- `src/main.js` or `src/main.ts`: bootstraps the game, creates canvas/renderer, starts loop.
- `src/game.js` or `src/game.ts`: game state, update loop, collision, progression, win/lose/restart.
- `src/input.js` or `src/input.ts`: keyboard, pointer, touch, and optional gamepad input abstraction.
- `src/render.js` or `src/render.ts`: all drawing, camera transforms, procedural shapes, particles, HUD drawing helpers.
- `src/entities.js` or `src/entities.ts`: player, enemies, obstacles, collectibles, vehicles, projectiles, puzzle pieces.
- `src/levels.js` or `src/levels.ts`: procedural level, track, arena, room, or puzzle definitions.
- `src/style.css`: preview layout, canvas sizing, accessibility and HUD overlay styling if HTML/CSS is used.
- `index.html`: only when the runtime requires it.

For tiny runtimes, fewer files are acceptable if separation of concerns remains clear.

## Completeness rules

Every generated file must be complete enough to run. Every game must include:

- Initialization.
- Input handling.
- Update loop.
- Render loop.
- Objective and progression.
- Collision or interaction logic when relevant.
- HUD or on-screen instructions.
- Restart handling.
- Win/lose or completion feedback where genre-appropriate.

Forbidden output:

- Placeholder comments such as `// TODO`, `// implement later`, `/* placeholder */`, or `stub`.
- Empty functions for planned features.
- Pseudo-code in real files.
- References to missing files.
- Asset URLs, local asset paths that do not exist, or marketplace/library asset names.
- Code that requires manual user edits before running.

## Procedural asset rule

All art, worlds, characters, tracks, levels, particles, and interface visuals must be generated from code using primitives, gradients, procedural meshes, canvas drawing, SVG, CSS, shader-like math, or runtime geometry. If audio is needed and the environment supports it, synthesize tones/noise procedurally rather than loading files.

## Quality discipline

Before returning a code response, verify internally:

- All imports match generated/existing files.
- Entry point references are correct.
- The game can start without waiting for unavailable external assets.
- Controls are documented in metadata and HUD.
- The code contains no placeholders.
- The generated scope is small enough to be complete and polished.
