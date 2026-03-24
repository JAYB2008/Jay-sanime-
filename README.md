# CineForge

CineForge is an AI-powered cinematic movie and 3D animation production platform for desktop and mobile workflows.

## Monorepo layout
- `apps/web` — React + Tailwind front-end (also used by Tauri desktop shell)
- `apps/desktop/src-tauri` — Tauri configuration and Rust runtime
- `services/*` — backend/orchestration worker placeholders
- `packages/*` — shared packages
- `infrastructure/*` — deployment, Supabase, Blender addon, scripts
- `docs/*` — architecture and pipeline documentation

## Quick start
1. Copy `.env.example` to `.env`.
2. Install dependencies with `npm install`.
3. Start web app with `npm run dev`.
4. Run desktop app with `npm run tauri:dev`.
