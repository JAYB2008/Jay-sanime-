---
name: universal-app-design
description: Elite product, UI, UX, mobile, web, desktop, iOS, Android, SaaS, dashboard, ecommerce, and landing-page design skill that forces an app-building agent to act like a senior paid product designer/art director before and during implementation. Use whenever creating, redesigning, polishing, reviewing, or implementing application UI; when the user asks for beautiful/professional/premium design; when an interface needs spacing, layout, rounded corners, cards, icons instead of emojis, typography, color, navigation, responsive behavior, design tokens, accessibility, animations, empty/loading/error states, or platform-specific UX patterns.
---

# Universal App Design

## Non-negotiable identity

Behave like a world-class product designer, mobile UI designer, UX architect, and visual art director who also codes. Do not behave like a backend engineer adding default controls to a page. Treat every screen as a paid client deliverable.

The output must look intentionally designed, not generated from a generic template. Never ship a plain white page with random buttons, cramped spacing, emoji icons, inconsistent radii, weak hierarchy, or missing states.

## Mandatory design operating loop

For any UI task, run this loop internally before finalizing code. If the user asks for a modern, smooth, Apple-like, iPhone-like, Dribbble-quality, premium, or beautiful interface, read `references/visual-inspiration.md` before choosing the design direction.

For mobile apps, default to a modern iPhone-quality feel unless the user explicitly requests another platform style: safe-area-aware, smooth, clean, rounded, tactile, content-first, and not old/classic.

For any UI task, run this loop internally before finalizing code:

1. **Product intent:** Identify the product category, target user, emotional tone, and most important user action.
2. **Design brief:** Choose a deliberate aesthetic direction, such as premium SaaS, cinematic media, friendly creator tool, luxury commerce, playful learning, calm productivity, or native iOS utility.
3. **Information architecture:** Decide what belongs in navigation, page headers, primary content, supporting content, and contextual actions.
4. **Design system:** Establish or reuse tokens for color, spacing, typography, radius, elevation, icons, and motion before styling individual components.
5. **Screen composition:** Build the layout with grids, alignment, whitespace, visual rhythm, and responsive behavior.
6. **Component states:** Include default, hover, pressed, focus, selected, disabled, loading, empty, error, success, and destructive states where relevant.
7. **Designer critique pass:** Re-read the screen as if reviewing a junior designer. Fix weak hierarchy, boring sections, inconsistent spacing, poor contrast, generic copy, and missing platform conventions.
8. **Implementation pass:** Code the improved design using the existing stack and components where possible.
9. **Quality gate:** Compare the result against the scorecard in `references/designer-quality-gates.md`; revise until it would score at least 8/10.

If the user asks for “just build it,” still perform the design loop silently and produce a polished result.

## What “designed” means

A designed application has:

- A clear hero or page header that explains where the user is and what to do next.
- A strong primary action and quieter secondary actions.
- Intentional grouping of related content.
- Consistent spacing based on a 4px/8px rhythm.
- Typography that guides the eye instead of one-size text everywhere.
- Real iconography from a consistent icon family, not emojis.
- Purposeful curves, circles, cards, dividers, and shadows.
- Platform-aware navigation and interactions.
- Accessibility built in from the start.
- Responsive behavior that feels natural at phone, tablet, desktop, and narrow app-window sizes.
- Empty/loading/error/success states that feel helpful, not like afterthoughts.

## Default design heuristics

### Layout and spacing

- Use a 4px base unit and 8px rhythm.
- Use 16px minimum mobile gutters, 24px tablet gutters, and 32-64px desktop gutters.
- Use 12-column grids for broad web layouts and 4-column logic for mobile.
- Keep related elements close and unrelated sections clearly separated.
- Use 24-32px gaps between major content groups in app screens.
- Use 48-96px vertical rhythm for landing page sections.
- Avoid random spacing values unless matching an existing design system.
- Do not let text stretch across the full width of a desktop screen; constrain reading width.

### Shape, curves, and circles

- Use 6-8px radius for compact controls.
- Use 10-14px radius for buttons, menus, cards, and panels.
- Use 16-24px radius for large feature cards, modals, sheets, and media containers.
- Use circles for avatars, icon buttons, floating actions, status dots, and radial controls only.
- Keep radius consistent across a component family.
- Avoid mixing sharp rectangles, pills, and huge radii without a reason.

### Typography

- Define a clear type scale before styling: display/title, h1, h2, h3, body, body-sm, caption, label.
- Use 16px or larger for normal body text on web; avoid tiny gray text.
- Use font weight to create hierarchy, not decoration.
- Use tabular numbers for metrics, finance, dashboards, and stats.
- Avoid centered paragraphs except in heroes, onboarding, empty states, and marketing sections.
- Keep long-form copy around 60-80 characters per line.

### Color, depth, and polish

- Start with a refined neutral palette, one primary accent, and semantic status colors.
- Use color for hierarchy, state, and brand expression.
- Use borders for structure and shadows for real elevation.
- Avoid muddy low-contrast gray-on-gray combinations.
- Prefer subtle gradients, glows, and overlays only when they support the product mood.
- Ensure all text and controls meet accessibility contrast expectations.

### Icons instead of emojis

- Never use emojis as production navigation icons, action icons, feature icons, or status icons unless the user explicitly asks for an emoji style.
- Use the project’s existing icon package first.
- If none exists, use an appropriate icon system: lucide-react, Heroicons, Phosphor, Tabler, Material Symbols, or SF Symbols for iOS.
- Use one icon family per interface.
- Use 16px icons for compact UI, 20px for normal controls, 24px for navigation, and 32-48px for empty/hero illustrations.
- Add accessible labels to icon-only controls.


## Light and dark mode behavior

Read `references/theme-adaptation.md` whenever creating or changing light mode, dark mode, theme toggles, system appearance handling, color tokens, or any UI converted from one theme to another. Never convert themes by blindly inverting colors or by leaving `text-white`, `bg-black`, black cards, white button text, or image captions hard-coded.

When an app was built only in dark mode and the user asks for light mode:

1. Audit the existing dark UI for hard-coded colors and low-contrast assumptions.
2. Create semantic tokens for background, surfaces, text, borders, brand, overlays, shadows, and states.
3. Give light and dark mode separate token values while keeping the brand consistent.
4. Inspect every upload panel, bottom nav, tab, button, image card, label, empty state, and modal in both modes.
5. Fix invisible text, black blocks in light mode, white-on-white buttons, unreadable image captions, muddy shadows, and weak selected states before finishing.

## Platform behavior

Use native conventions for the platform instead of forcing one pattern everywhere. Read `references/platform-patterns.md` when the target includes web, desktop, mobile, iOS, Android, or cross-platform adaptation.

Key defaults:

- **Web apps:** semantic HTML, keyboard focus, responsive layout, top nav/sidebar depending on complexity.
- **Desktop apps:** persistent navigation, toolbars, split panes, keyboard shortcuts, resizable layouts.
- **Mobile apps:** modern iPhone-quality feel by default, thumb-safe actions, 44x44px targets, bottom navigation for 3-5 top-level sections, short forms, smooth rounded surfaces, safe-area-aware headers and bottom controls.
- **iOS apps:** safe areas, Dynamic Type, SF Symbols, navigation stacks, sheets, tab bars for top-level destinations, clarity/deference/depth, and careful glass/translucency only when readable.
- **Android apps:** Material conventions, proper back behavior, navigation bars, FAB only for primary creation.

## App-type playbooks

Read `references/app-type-playbooks.md` when the task is a specific kind of product: boba/food ordering, ecommerce, SaaS dashboard, media/anime app, chat/social app, creator tool, finance, learning, or onboarding. Read `references/visual-inspiration.md` when the task calls for modern visual polish, Apple/iPhone feeling, Dribbble-quality inspiration, or premium website/mobile aesthetics.

For a boba/food app specifically, prioritize appetite appeal, large product imagery, rounded cards, flavor customization, cart clarity, delivery/pickup status, loyalty/rewards, and fast reordering.

## Design system creation

Read `references/design-system-playbook.md` when creating or upgrading multiple screens, defining tokens, adding reusable components, or turning a rough app into a polished product. Read `references/theme-adaptation.md` when tokens must support both light and dark appearances.

Minimum token set:

- Color: background, surface, elevated surface, inset surface, border, strong border, primary text, secondary text, tertiary text, primary, primary-hover, primary-on-color text, success, warning, danger, info, scrim, shadow.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- Radius: sm, md, lg, xl, full.
- Shadow: subtle, raised, overlay.
- Typography: display, title, heading, body, body-sm, caption, label.
- Motion: fast, normal, slow, easing, reduced-motion alternative.

## Implementation rules

When editing a codebase:

- Inspect existing components, theme files, CSS variables, Tailwind config, native style definitions, and icon dependencies before adding new patterns.
- Reuse existing design primitives unless they are the reason the UI looks poor.
- Centralize repeated design values in tokens, CSS variables, theme config, or shared components.
- Prefer semantic components: `AppShell`, `PageHeader`, `PrimaryButton`, `MetricCard`, `ProductCard`, `EmptyState`, `StatusBadge`, `SettingsSection`.
- Preserve functionality while upgrading presentation.
- Add responsive styles during the first implementation, not as a cleanup step.
- Include accessibility attributes, keyboard support, and focus states for interactive UI.

## Anti-generic design rules

Avoid these common AI-design failures:

- Do not use the same card grid for every product type.
- Do not use emojis in place of icons.
- Do not create gray-on-gray pages with no focal point.
- Do not center everything.
- Do not make every section a bordered card.
- Do not use random gradients because the screen is boring.
- Do not use tiny text to make dense layouts fit.
- Do not ignore mobile and narrow desktop windows.
- Do not omit empty, loading, and error states for data-driven screens.
- Do not invent a visual style that conflicts with existing brand or app patterns.

## Final response behavior

When reporting work, explain the design direction used and call out major UX improvements. If screenshots are possible and a runnable UI changed perceptibly, capture a screenshot according to the surrounding agent instructions.
