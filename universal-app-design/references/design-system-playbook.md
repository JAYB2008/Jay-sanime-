# Design System Playbook

Use this reference when creating a new visual system, redesigning multiple screens, or polishing a rough app UI.

## 1. Define the design direction

Pick a concrete product mood before styling:

- **Calm productivity:** soft neutrals, blue/indigo accent, spacious cards, subtle shadows.
- **Premium media:** dark surfaces, rich imagery, large type, high-contrast controls.
- **Friendly social:** rounded shapes, warm accents, expressive empty states, approachable copy.
- **Professional SaaS:** dense but readable layouts, crisp dividers, restrained color, clear data hierarchy.
- **Luxury commerce:** editorial spacing, refined typography, large imagery, minimal chrome.

Write one sentence describing the direction and use it to guide every visual decision.

## 2. Create tokens first

Define these tokens before building many components:

- **Color:** background, surface, surface-elevated, border, text, text-muted, primary, primary-hover, danger, warning, success, info.
- **Spacing:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80.
- **Radius:** sm 6, md 10, lg 14, xl 20, full 9999.
- **Shadow/elevation:** none, subtle, raised, overlay.
- **Typography:** display, h1, h2, h3, body, body-sm, caption, label.
- **Motion:** fast 120-160ms, normal 180-240ms, slow 280-360ms; use ease-out for entrances and ease-in-out for state changes.

## 3. Build component foundations

Prioritize reusable components in this order:

1. App shell/navigation.
2. Button variants: primary, secondary, ghost, destructive, icon.
3. Inputs: text field, search, select, checkbox, radio, switch.
4. Cards/panels with header, content, footer slots.
5. Lists/tables with empty/loading/error states.
6. Modal/sheet/drawer/toast.
7. Status badges, avatars, tabs, segmented controls.

## 4. Button standards

- Primary button: only 1 per view section; use for the main action.
- Secondary button: for alternative positive actions.
- Ghost button: for low-emphasis actions in toolbars and cards.
- Destructive button: reserve for delete/remove/cancel-risk actions.
- Icon-only button: must have accessible label and visible focus state.
- Touch buttons should be at least 44px tall; desktop compact buttons may be 32-40px if not touch-first.

## 5. Forms

- Place labels above fields for complex forms and mobile.
- Use inline validation after blur or submit; do not show errors before user interaction.
- Put helper text below the input when it prevents mistakes.
- Group related fields with section headings.
- Mark optional fields instead of overusing required asterisks.
- Disable submit only when validation is clear; otherwise allow submit and show helpful errors.

## 6. Navigation

- Use sidebar for 5+ destinations or productivity apps.
- Use bottom tabs for 3-5 top-level mobile destinations.
- Use top nav for websites and simple apps.
- Use breadcrumbs for deep hierarchies.
- Use command palette/search for power-user desktop experiences.
- Keep current location visually obvious.

## 7. Cards and surfaces

- Use cards to group related content, not as decoration around every element.
- Card padding should usually be 16-24px.
- Use borders for subtle structure and shadows for true elevation.
- Keep nested cards rare; use dividers or section headers instead.

## 8. Data-heavy screens

- Put filters close to the data they affect.
- Keep table headers sticky for long datasets when possible.
- Align numbers right and text left.
- Use monospace or tabular numbers for financial/statistical values.
- Provide density controls only for complex productivity tools.
- Include empty states for filtered-no-results and no-data-yet separately.

## 9. Empty, loading, and error states

Every major data region needs states:

- **Loading:** skeleton layout that resembles final content.
- **Empty first-use:** explain value and provide a primary action.
- **Empty filtered:** explain that filters removed results and offer reset.
- **Error:** plain-language cause, retry action, and fallback if possible.
- **Success:** confirmation that does not trap the user.

## 10. Accessibility minimums

- Text contrast should meet WCAG AA in normal usage.
- Every form input needs a programmatic label.
- Every icon-only action needs an accessible name.
- Focus states must be visible.
- Interactive elements must be reachable by keyboard on web/desktop.
- Touch targets should be at least 44x44px.
- Motion should respect reduced-motion preferences.


## 11. Light and dark mode tokens

- Define semantic color roles before choosing specific hex values.
- Keep separate light and dark values for backgrounds, surfaces, text, borders, shadows, overlays, and brand accents.
- Do not reuse dark-mode white text on light-mode buttons or cards.
- Do not reuse dark-mode black panels as default light-mode surfaces.
- Test high-risk components in both modes: primary buttons, white buttons, ghost buttons, upload zones, bottom nav, image captions, selected tabs, badges, and disabled states.
- Preserve brand identity across modes by adapting luminance and contrast rather than changing the entire palette.
- Prefer system appearance integration where the platform supports it, while allowing an in-app override when product requirements need it.
