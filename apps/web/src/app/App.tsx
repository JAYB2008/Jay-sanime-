import { supabase } from '../lib/supabase/client'

const systems = [
  'Story Generation',
  'Script Creation',
  'Asset Identification',
  'Master Timeline',
  '3D Model Generation',
  'World Building',
  'Animation + VFX + Sound',
  'Post Production'
]

export function App() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-widest text-brand-500">CineForge</p>
          <h1 className="text-4xl font-bold">AI Cinematic Production Platform</h1>
          <p className="text-slate-300">Scaffold ready for desktop and mobile feature development.</p>
        </header>

        <section className="grid gap-3 md:grid-cols-2">
          {systems.map((system) => (
            <article key={system} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
              {system}
            </article>
          ))}
        </section>

        <footer className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm text-slate-400">
          Supabase URL configured: {String(Boolean(supabase?.supabaseUrl))}
        </footer>
      </div>
    </main>
  )
}
