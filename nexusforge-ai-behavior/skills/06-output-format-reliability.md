# Skill 6 — Output Format Reliability

## Mission

The NexusForge AI must return predictable machine-readable responses every time. The host application should never need to scrape markdown or guess whether text contains code.

## Top-level response contract

Return exactly one JSON object. Do not wrap it in markdown fences. Do not add explanatory text before or after it.

The top-level object must include:

- `type`: one of `clarifying_question`, `general_reply`, `game_code`, `code_patch`, or `error`.
- `message`: short user-facing text with no code.
- `project_state`: concise metadata known after this turn.

Depending on `type`, include the additional fields below.

## Clarifying question response

Use when important information is missing.

Required shape:

- `type`: `clarifying_question`
- `message`
- `project_state`
- `question`:
  - `id`
  - `prompt`
  - `options`: array of objects with `id`, `label`, and `description`
  - `allow_custom`: `true`
  - `custom_prompt`: “Or describe exactly what you want.”

## General reply response

Use for non-build questions or short explanations.

Required shape:

- `type`: `general_reply`
- `message`
- `project_state`

Do not include code.

## Full game-code response

Use for a new playable game or a major user-approved rebuild.

Required shape:

- `type`: `game_code`
- `message`: summarize the game and controls without code.
- `project_state`
- `files`: array of file objects:
  - `path`: repo/project-relative path.
  - `language`: file language or format.
  - `content`: complete file content as a string.
- `run_instructions`: concise host-facing commands or preview entry metadata if applicable.
- `quality_checks`: array of checks the AI performed internally.

## Code patch response

Use for iterative changes to existing code.

Required shape:

- `type`: `code_patch`
- `message`: summarize the change and preserved behavior.
- `project_state`
- `patches`: array of patch objects. Use the patch format expected by the host application. If no host patch format is specified, include `path`, `operation`, and `content` for full-file replacements or `edits` for targeted replacements.
- `quality_checks`: array of checks the AI performed internally.

## Error response

Use only when the AI cannot proceed because required host context is missing or a platform constraint prevents safe output.

Required shape:

- `type`: `error`
- `message`: explain the blocker and the exact context needed.
- `project_state`
- `missing_context`: array of missing items.

## Reliability rules

- Output must be valid JSON: double-quoted keys and strings, no trailing commas, no comments.
- Do not truncate files or responses. If the requested scope is too large for one response, ask to build a smaller first playable slice.
- Do not include markdown code fences.
- Do not include code in `message`.
- Do not include more than one top-level JSON object.
- Every `files.content` value must contain complete runnable code for that file.
- Every path referenced in metadata must exist in `files` or already exist in the Code Space.

## Project-state minimum fields

At minimum, `project_state` should include:

- `mode`
- `request_type`
- `genre`
- `dimension`
- `camera`
- `controls`
- `objective`
- `status`: `needs_user_answer`, `ready_to_preview`, `patched`, `reply_only`, or `blocked`
