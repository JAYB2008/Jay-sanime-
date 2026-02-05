# Product Requirements Document (PRD)

## 1. Overview

**Product name:** AI Creator Autopilot  
**Purpose:** Help creators scale content output by automating creation, optimization, scheduling, and publishing while preserving each creator's style.

## 2. Goals

- Reduce manual effort required to publish consistently.
- Maintain creator-specific style consistency.
- Increase engagement and reach over time via trend + performance feedback loops.
- Support both assisted and full-autopilot workflows.

## 3. Target users

### Primary
- Faceless creators across short-form platforms.
- Common niches: motivational, facts, storytelling, educational, news-style.

### Secondary
- On-camera creators who want AI-assisted post-production.

> MVP prioritizes primary users only.

## 4. User journeys

### A) Autopilot mode (MVP)
1. User connects TikTok/YouTube Shorts.
2. User sets niche, frequency, and automation level.
3. AI learns style from historical content.
4. AI generates new faceless videos with trend-aligned audio.
5. AI schedules and posts at predicted best times.
6. AI uses outcome data to improve the next batch.

### B) Assisted mode (MVP)
1. Same setup as autopilot mode.
2. AI drafts content and schedule.
3. User reviews/approves or edits.
4. AI publishes approved content.

## 5. Functional requirements

### 5.1 Onboarding & platform connection (MVP)
- Account creation and authentication.
- OAuth/API connection for:
  - TikTok
  - YouTube (Shorts)
- User-configurable profile:
  - Niche
  - Platforms
  - Posting frequency
  - Automation level (autopilot vs assisted)

### 5.2 Style learning engine (MVP)
The system should analyze historical creator content and produce a reusable style profile including:
- Preferred duration ranges
- Script pacing and structure
- Hook style
- Voiceover characteristics (if applicable)
- Background music tendencies
- Caption/title conventions
- Historical posting windows
- Performance by content pattern

### 5.3 Faceless content creation engine (MVP)
Given niche + style profile + trend signals, the system should:
- Generate scripts aligned to the creator style.
- Select/generate visual assets.
- Generate voiceover.
- Mix background music and trending sound with safe default levels.
- Render platform-ready short-form videos.

### 5.4 Trend intelligence (MVP)
- Continuously ingest trend/sound signals.
- Score trends for relevance by niche + style fit.
- Prioritize early-stage trends over saturated ones.
- Suggest or auto-apply trend-aligned sounds in generated videos.

### 5.5 Scheduling & auto-posting (MVP)
- Schedule or auto-publish based on user preference.
- Learn best posting times by creator and platform.
- Allow pause/reschedule/cancel before post time.
- Maintain publishing status logs.

### 5.6 Performance loop (MVP-lite)
- Capture core metrics: views, watch time proxy, engagement.
- Attribute performance to content attributes (length, hook, audio choice, posting slot).
- Feed these signals into subsequent generation decisions.

## 6. Non-functional requirements

- **Reliability:** posting pipeline retries and dead-letter logging.
- **Observability:** job status, failures, and external API responses logged.
- **Compliance:** use official platform APIs and user-granted scopes.
- **Extensibility:** architecture should support future Instagram and long-form workflows.

## 7. Out of scope for MVP

- Advanced creator-facing analytics dashboarding.
- Full on-camera video editing workflows.
- Revenue attribution and monetization optimization.
- Multi-language localization at scale.

## 8. Success metrics (MVP)

- Time-to-first-auto-post.
- % of scheduled posts successfully published.
- Weekly content output increase per user.
- Engagement lift vs baseline (pre-onboarding median).
- User retention after first 14/30 days.

## 9. Risks and mitigations

- **Platform API limits/changes:** add provider abstraction and fallback queues.
- **Style mismatch quality:** include assisted review mode and style confidence scoring.
- **Trend misuse/noise:** gate by niche-fit score and minimum signal quality.
- **Rendering cost/latency:** pre-generate batches and prioritize highest-confidence concepts.
