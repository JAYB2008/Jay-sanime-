# Light and Dark Mode Adaptation

Use this reference whenever creating, auditing, or converting light mode, dark mode, theme toggles, or system-theme behavior. Do not treat light mode as an inverted dark theme. Build both modes from semantic tokens and test real screens.

## Core rule

A theme is not a color swap. A good light/dark system preserves hierarchy, readability, brand identity, and component meaning in both appearances.

When converting a dark-only app to light mode:

1. Audit the current screen visually before editing.
2. Find every hard-coded black, white, gray, and opacity value.
3. Replace hard-coded colors with semantic tokens.
4. Create separate token values for light and dark.
5. Test every button, tab, card, image overlay, icon, label, and bottom bar in both modes.
6. Fix contrast issues before adding new visual effects.

## Screenshot failure patterns to prevent

If a dark-mode app is converted poorly, these failures often appear:

- White text remains on light backgrounds, making labels and buttons invisible.
- Black upload panels or dark cards remain inside otherwise light screens.
- White buttons contain white text or low-contrast labels.
- Category tabs disappear because inactive text is too pale.
- Image-card captions become unreadable over bright images.
- Bottom navigation turns into a gray blob with unclear selected/unselected states.
- Shadows from dark mode become too heavy or dirty in light mode.
- Purple/accent buttons lose contrast or look neon on light backgrounds.
- Empty-state icons and upload icons have insufficient contrast.
- Dividers, borders, and surface edges vanish because they were tuned only for dark mode.

The AI must actively search for these problems after adding light mode.

## Semantic color tokens

Use semantic names, never direct color names in component code.

Minimum tokens:

- `bg`: app background.
- `surface`: main cards, panels, sheets.
- `surfaceElevated`: floating bars, modals, raised cards.
- `surfaceInset`: upload zones, input wells, image placeholders.
- `textPrimary`: main readable text.
- `textSecondary`: descriptions and metadata.
- `textTertiary`: disabled or very quiet labels.
- `border`: default separators and outlines.
- `borderStrong`: selected cards or strong outlines.
- `primary`: brand action color.
- `primaryText`: text/icon color placed on primary backgrounds.
- `secondary`: secondary tinted surfaces.
- `secondaryText`: text on secondary/tinted surfaces.
- `danger`, `warning`, `success`, `info`: semantic states.
- `scrim`: overlay behind modals or image gradients.
- `shadow`: mode-specific shadow color.

## Example token direction

Adapt exact values to the app, but keep the relationships.

### Light mode

- `bg`: near-white or very light cool/warm neutral, not pure white everywhere.
- `surface`: white or slightly tinted white.
- `surfaceElevated`: white with border and soft shadow.
- `surfaceInset`: light neutral with subtle border.
- `textPrimary`: near-black, not pure black if the palette is soft.
- `textSecondary`: medium gray with enough contrast.
- `textTertiary`: muted gray only for non-critical text.
- `border`: light neutral visible on white.
- `primary`: saturated brand accent.
- `primaryText`: white or near-white if contrast passes; otherwise very dark text.
- `shadow`: low-opacity black/neutral shadow, softer and smaller than dark mode glow.

### Dark mode

- `bg`: near-black, not absolute black for every surface.
- `surface`: elevated charcoal.
- `surfaceElevated`: lighter charcoal with subtle border/highlight.
- `surfaceInset`: deeper charcoal for upload wells and input zones.
- `textPrimary`: near-white.
- `textSecondary`: light gray.
- `textTertiary`: muted gray that still remains readable.
- `border`: translucent light border or dark-light edge.
- `primary`: brand accent adjusted to avoid bloom.
- `primaryText`: high-contrast text on primary.
- `shadow`: black shadow plus optional accent glow only where useful.

## Theme conversion workflow

### 1. Inventory hard-coded colors

Search for direct colors in CSS, Tailwind classes, style objects, theme files, native style files, and component props.

Flag risky values:

- `#000`, `#111`, `#fff`, `white`, `black`.
- Tailwind classes like `text-white`, `bg-black`, `bg-zinc-950`, `text-gray-50`, `border-white/10`.
- Inline rgba overlays such as `rgba(0,0,0,.7)` or `rgba(255,255,255,.1)`.
- Image gradient overlays that assume only dark mode.

### 2. Build the token layer

Create or update a single theme source:

- CSS variables for web.
- Tailwind theme variables/classes for Tailwind apps.
- SwiftUI `Color` assets or semantic colors for iOS.
- Android/Compose Material color schemes for Android.
- React Native theme object/provider for cross-platform mobile.

### 3. Replace component colors

Map component intent to tokens:

- Page backgrounds use `bg`.
- Cards use `surface` or `surfaceElevated`.
- Upload/drop zones use `surfaceInset`.
- Main labels use `textPrimary`.
- Secondary metadata uses `textSecondary`.
- Disabled labels use `textTertiary` and a disabled opacity.
- Primary buttons use `primary` + `primaryText`.
- Ghost buttons use transparent background + `textPrimary` + visible hover/pressed state.
- Image captions use a mode-independent gradient overlay or caption chip.

### 4. Fix image cards

Image cards need special handling because image brightness varies.

- Use a bottom gradient overlay for captions in both modes.
- Use text shadow or a dark translucent caption chip when needed.
- Keep badges on solid/tinted surfaces, not directly on unpredictable images.
- Do not put white text directly on bright images without an overlay.
- Ensure selected states are visible in both themes.

### 5. Fix bottom navigation

Bottom nav must have clear selected and unselected states.

- Light mode: elevated white/translucent surface, visible border, soft shadow, selected pill/accent fill, dark readable inactive icons.
- Dark mode: elevated charcoal/translucent surface, subtle border, selected accent fill/glow, light readable inactive icons.
- Icon and label colors must change together.
- The home indicator/safe area must not overlap nav content.

### 6. Fix upload and empty states

Upload panels and empty states are common theme failures.

- Light mode upload zones should not stay pure black unless the design intentionally uses a media preview well.
- Use `surfaceInset`, a visible border, readable icon, and clear primary action.
- In dark mode, avoid huge pure-black boxes inside already dark screens; create layered charcoal surfaces.
- Empty-state icons should use `textSecondary` or brand tint, not low-contrast gray.

### 7. Verify controls

For every button and tab:

- Text must contrast with its background.
- Selected state must be obvious without relying only on color.
- Disabled state must look disabled but remain readable enough to identify.
- Focus state must be visible in both themes.
- Pressed/hover states must be tuned separately for light and dark.

## Light/dark QA checklist

Before finalizing theme work, inspect these screens in both modes:

- Home/feed screen.
- Detail screen.
- Upload or creation screen.
- Profile/settings screen.
- Empty state.
- Loading state.
- Error state.
- Modal/sheet/drawer.
- Bottom nav/sidebar/topbar.
- Image-heavy card grid.

Ask:

- Is any text invisible or nearly invisible?
- Are all buttons readable, especially white/light buttons?
- Do dark panels still make sense in light mode?
- Are selected tabs obvious?
- Are unselected icons readable?
- Are image captions protected by overlays?
- Do shadows feel clean in light mode and not muddy?
- Does the app still feel like the same brand in both modes?

## Policy note

Do not claim that all Google Play apps universally require both light and dark mode unless project-specific policy evidence is provided. Android supports dark theme and many app categories benefit from supporting system appearance, but the implementation should be driven by user experience, platform expectations, accessibility, and any applicable product/category requirements.
