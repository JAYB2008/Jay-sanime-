# Platform Patterns

Use this reference when designing for a specific platform or translating one interface across platforms.

## Responsive web apps

- Use mobile-first CSS, then expand at tablet and desktop breakpoints.
- Keep primary navigation visible on desktop and collapse thoughtfully on mobile.
- Use semantic HTML for buttons, links, forms, headings, landmarks, and dialogs.
- Prefer real buttons for actions and links for navigation.
- Provide hover states, focus-visible states, and keyboard navigation.
- Avoid fixed heights for content that may localize or wrap.

## Marketing websites

- Above the fold should communicate what the product is, who it is for, why it matters, and the primary CTA.
- Use real product UI screenshots or high-fidelity mockups when possible.
- Keep sections scannable with strong headings and concise body copy.
- Repeat CTA after major persuasion sections.
- Design footer with navigation, legal links, and contact/social links if relevant.

## Desktop apps

- Use persistent navigation and resizable content areas when users manage complex work.
- Support keyboard shortcuts for frequent actions.
- Prefer toolbars, split panes, inspector panels, and contextual menus for advanced workflows.
- Avoid oversized mobile-style controls unless the app is touch-first.
- Preserve state across window resizing.
- Account for empty windows, small windows, and multi-monitor usage.

## Mobile apps

- Default to a modern iPhone-like feel when the user asks for clean, smooth, premium, or current mobile UI.
- Prioritize thumb reach: primary actions near the bottom when appropriate.
- Keep touch targets at least 44x44px.
- Use bottom navigation for 3-5 top-level sections.
- Avoid dense tables; use cards, lists, or drill-down details.
- Keep forms short; split long tasks into steps.
- Use native pickers where possible.
- Make the first screen feel device-native: safe top spacing, rounded cards, floating/bottom controls when useful, and no cramped desktop patterns.

## iOS apps

- Follow Apple-style clarity, deference, and depth: content first, subtle chrome, and layered hierarchy.
- Respect safe areas and Dynamic Type.
- Use SF Symbols-style icon metaphors and consistent symbol weights.
- Use navigation stacks for drill-down flows.
- Use sheets for focused creation/editing tasks.
- Use large titles for top-level views when they improve orientation.
- Use tab bars for primary app sections, not miscellaneous actions.
- Keep destructive actions visually distinct and confirm high-risk destructive actions.
- Use modern glass/translucent materials only when contrast remains excellent; avoid unreadable frosted panels.

## Android apps

- Follow Material navigation conventions when building native Android.
- Use navigation bar/bottom navigation for top-level destinations.
- Use FABs only for the most important creation action on a screen.
- Use Material motion and elevation sparingly.
- Account for system back behavior.

## Cross-platform products

- Keep brand tokens shared, but adapt navigation and interactions to each platform.
- Do not copy desktop density directly to mobile.
- Do not force mobile bottom tabs into desktop layouts.
- Keep terminology, icon metaphors, colors, and core flows consistent.
- Document platform-specific differences where implementation diverges.
