# CineForge

CineForge is an AI-powered cinematic movie and 3D animation production platform for desktop and mobile workflows.

## Monorepo layout
- `apps/web` — React + Tailwind front-end and desktop UI host
- `apps/mobile` — mobile browser experience scaffold (with Three.js runtime dependency)
- `apps/desktop/src-tauri` — Tauri runtime and desktop packaging config
- `services/*` — orchestration, render, audio, pipeline, collaboration worker placeholders
- `packages/*` — shared packages (`ui`, `shared-types`, `config`)
- `infrastructure/supabase` — local Supabase config, migrations, storage bucket SQL
- `vercel.json` — Vercel routing/build output configuration

## Quick start
1. Copy `.env.example` to `.env`
2. Install deps: `npm install`
3. Run web: `npm run dev:web`
4. Run mobile: `npm run dev:mobile`
5. Run desktop: `npm run tauri:dev`
