# MVP Architecture Proposal

## 1. High-level components

1. **Web App + API**
   - User onboarding, settings, and workflow controls.
2. **Style Profiler Service**
   - Builds and updates creator style profiles from historical content.
3. **Content Generator Service**
   - Scripting, asset selection, voiceover, soundtrack mixing, render orchestration.
4. **Trend Intelligence Service**
   - Collects trend signals, scores fit by niche/style.
5. **Scheduler + Publisher Service**
   - Manages post queues and platform publishing.
6. **Feedback Loop Service**
   - Ingests post-performance metrics, updates optimization signals.
7. **Data Layer**
   - Relational DB for users/jobs, object storage for media, queue for async jobs.

## 2. Core data entities

- `User`
- `PlatformConnection`
- `StyleProfile`
- `ContentIdea`
- `GeneratedAsset`
- `RenderJob`
- `ScheduleJob`
- `PublishJob`
- `PerformanceSnapshot`
- `OptimizationSignal`

## 3. Key asynchronous workflows

### A) Style profile build
`Connect account` -> `Import metadata` -> `Extract features` -> `Compute style profile` -> `Store profile`

### B) Content batch generation
`Planner selects content ideas` -> `Script generation` -> `Asset assembly` -> `Audio trend matching` -> `Render` -> `Quality checks` -> `Ready for review/scheduling`

### C) Scheduling + publishing
`Create schedule jobs` -> `Time-window optimizer` -> `Publish via platform API` -> `Persist status + retries`

### D) Continuous learning
`Ingest performance` -> `Attribute outcomes` -> `Update optimization signals` -> `Influence next planner run`

## 4. Suggested MVP stack (example)

- **Frontend:** Next.js
- **Backend API:** Node.js (NestJS or Express)
- **Jobs/Queues:** BullMQ + Redis
- **Database:** PostgreSQL
- **Storage:** S3-compatible object storage
- **Observability:** OpenTelemetry + centralized logs

## 5. Operational requirements

- Idempotent job handlers for publish/render workflows.
- Retry policies with exponential backoff.
- Dead-letter queues for irrecoverable failures.
- Audit trails for generated content and publish actions.

## 6. Future extensions

- Add Instagram/Reels connector.
- Add on-camera editing pipeline.
- Add monetization/ROI analytics.
- Add multilingual content pipelines.
