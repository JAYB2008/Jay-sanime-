-- CineForge core schema bootstrap
create extension if not exists "uuid-ossp";

create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null,
  title text not null,
  synopsis text,
  tone text,
  target_duration_seconds integer not null default 300,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.scenes (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references public.projects(id) on delete cascade,
  scene_order integer not null,
  heading text not null,
  location text,
  script_content text,
  timeline_json jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.assets (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references public.projects(id) on delete cascade,
  asset_type text not null,
  name text not null,
  source text,
  metadata jsonb,
  created_at timestamptz not null default now()
);
