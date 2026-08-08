# Universal App Design Skill

A reusable design skill for app-building AI agents that need to create polished, modern, platform-aware UI instead of plain generated screens.

This skill is built for workflows where an AI agent is creating or improving:

- Mobile apps
- iOS-style apps
- Android apps
- Desktop apps
- Websites and landing pages
- SaaS dashboards
- Media/anime apps
- Boba, cafe, food, and ecommerce apps
- Light and dark mode design systems

## What this skill teaches the AI

The skill tells an app-building agent to behave like a senior product designer, UI designer, UX architect, and visual art director before implementing UI. It focuses on:

- Layout hierarchy
- Spacing rhythm
- Rounded corners and shape language
- Real icon systems instead of emojis
- Typography scale
- Color and contrast
- Modern Apple/iPhone-style mobile UI
- Dribbble-quality visual polish
- Light and dark mode adaptation
- Semantic design tokens
- Component states
- Accessibility
- Platform-specific UX conventions
- Empty, loading, error, and success states
- Final designer quality checks

## Repository structure

```text
universal-app-design/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── app-type-playbooks.md
    ├── design-system-playbook.md
    ├── designer-quality-gates.md
    ├── platform-patterns.md
    ├── theme-adaptation.md
    └── visual-inspiration.md
```

## How to use

Copy the `universal-app-design` folder into the skills directory used by your AI agent environment.

For Codex-style skill environments, this is commonly one of:

```bash
~/.codex/skills/universal-app-design
```

or:

```bash
$CODEX_HOME/skills/universal-app-design
```

Then invoke it in prompts like:

```text
Use $universal-app-design to redesign this app screen with modern iPhone-quality UI, clean spacing, real icons, light/dark mode support, and strong accessibility.
```

## Important design behavior

The skill is intentionally strict. It tells the AI not to ship common generated-UI mistakes such as:

- Cramped layouts
- Random spacing values
- Emoji icons used as production icons
- Weak visual hierarchy
- Generic card grids for every app
- Invisible text in light mode
- Black dark-mode panels left inside light mode
- White-on-white buttons
- Unreadable image captions
- Missing empty/loading/error states
- Poor mobile safe-area behavior

## Light and dark mode

The skill includes a dedicated theme adaptation guide. It teaches the AI to use semantic tokens for both light and dark mode instead of blindly inverting colors.

This is especially useful when an app was originally built only in dark mode and needs a clean light mode without broken contrast or mismatched surfaces.

## Notes

This repository contains documentation/configuration for the skill only. It does not include a runnable app.

---

# NexusForge AI Behavior Skill Set

This repository also includes a complete NexusForge skill pack for game-building AI behavior:

```text
nexusforge-ai-behavior/
├── SKILL.md
└── skills/
    ├── 01-conversational-memory-and-reasoning.md
    ├── 02-clarifying-question-behavior.md
    ├── 03-genre-specific-game-design-knowledge.md
    ├── 04-code-generation-and-output-discipline.md
    ├── 05-iterative-change-handling.md
    ├── 06-output-format-reliability.md
    └── 07-manual-builder-assistant-behavior.md
```

The NexusForge pack is written for an AI-first game creation platform where the assistant must behave like a real game developer: preserving conversation state, asking focused clarifying questions, applying genre-specific game design craft, writing code only into a structured Code Space payload, preserving existing games during iterative edits, returning reliable JSON, and supporting a lighter Manual Builder scene-editing mode.
