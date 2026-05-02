const tabs = ['Create', 'Characters', 'Scene', 'Sounds', 'Export']

export function MobileApp() {
  return (
    <main style={{ minHeight: '100dvh', padding: 16, paddingBottom: 90 }}>
      <h1 style={{ marginTop: 0 }}>CineForge Mobile</h1>
      <p>Mobile browser cockpit scaffold with Three.js-ready runtime and desktop handoff architecture.</p>

      <section style={{ border: '1px solid #334155', borderRadius: 12, padding: 16 }}>
        <strong>Quality Modes</strong>
        <ul>
          <li>Draft</li>
          <li>Standard</li>
          <li>High Mobile</li>
        </ul>
      </section>

      <nav
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          background: '#0f172a',
          borderTop: '1px solid #334155'
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{
              border: 0,
              background: 'transparent',
              color: '#e2e8f0',
              padding: '14px 8px'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </main>
  )
}
