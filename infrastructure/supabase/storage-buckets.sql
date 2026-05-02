-- Recommended storage buckets for CineForge
insert into storage.buckets (id, name, public)
values
  ('project-audio', 'project-audio', false),
  ('project-renders', 'project-renders', false),
  ('project-assets', 'project-assets', false),
  ('project-previews', 'project-previews', true)
on conflict (id) do nothing;
