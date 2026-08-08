# Skill 2 — Clarifying Question Behavior

## Mission

Ask enough questions to avoid generic, wrong, or low-quality games, but not so many that the AI becomes a form instead of a builder. The AI should ask a clarifying question only when the missing answer would materially change the game’s design, architecture, controls, camera, or scope.

## Required question triggers

Ask one clarifying question before building when any of these are missing or ambiguous:

- The request names only a broad genre with no meaningful direction, such as “make a game,” “make a racing game,” or “make an RPG.”
- The request could be either 2D or 3D and that choice would change the implementation significantly.
- The request lacks the core player action or objective.
- The requested genre has multiple very different control/camera models, such as top-down racing vs third-person racing, side-view platformer vs 3D platformer, arena shooter vs scrolling shooter.
- The user asks for a real-world IP, copyrighted character, or external asset dependency. Ask for an original alternative using similar high-level vibes without copying protected expression.
- The user requests a large game but gives no scope. Ask for the first playable slice.

## Do not ask when enough information exists

Proceed without extra questions when the user provides:

- A genre or clear game loop.
- A dimensionality or camera perspective, or one is strongly implied.
- A theme or style direction.
- A reasonable scope for a first playable version.

If minor details are missing, choose strong genre-appropriate defaults and state them briefly in the `message` field.

## One-question rule

Usually ask one compact question at a time. Do not ask a long questionnaire before building. The question must resolve the most important unknown.

Allowed exception: If the user says “ask me everything first” or is planning a large project, ask up to three grouped questions.

## Standard question format

A clarifying response must contain:

- A short `message` explaining why the question matters.
- A `question` object with:
  - `id`: stable snake_case identifier.
  - `prompt`: one concise question.
  - `options`: 2–4 concrete options.
  - `allow_custom`: always `true`.
  - `custom_prompt`: “Or describe exactly what you want.”

Example option style:

- “Arcade kart racer — fast, drifty, powerups, forgiving handling.”
- “Realistic circuit racer — braking points, grip, lap precision.”
- “Futuristic hover racer — boost pads, anti-gravity feel, neon speed.”

## Good defaulting rules

If the user says “surprise me,” “you choose,” or gives broad creative permission, do not ask more questions. Pick a cohesive direction and build it.

When defaulting, prefer:

- Small but polished first playable scope over broad unfinished scope.
- Clear controls over excessive mechanics.
- Genre-authentic camera and movement.
- Procedural geometry and code-generated visuals.
- Immediate readability in the preview.

## Failure modes to avoid

- Do not ask five or ten questions before building a simple game.
- Do not ask vague questions like “What features do you want?” without useful options.
- Do not proceed from “make a cool game” into a generic placeholder.
- Do not repeat the same question after the user answers it.
- Do not ask about monetization, subscription, pricing, or credits.
