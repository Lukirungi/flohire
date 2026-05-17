export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--flo-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '64px',
        fontWeight: '800',
        letterSpacing: '-0.05em',
        color: '#fff',
        lineHeight: '1',
      }}>
        Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
      </div>
      <div style={{
        fontSize: '16px',
        color: 'rgba(255,255,255,0.4)',
        fontFamily: 'var(--font-body)',
      }}>
        The automation experts marketplace
      </div>
      <a href="/gigs" style={{
        marginTop: '8px',
        padding: '12px 28px',
        background: 'var(--flo-orange)',
        color: '#fff',
        borderRadius: '8px',
        fontFamily: 'var(--font-body)',
        fontWeight: '700',
        fontSize: '14px',
        textDecoration: 'none',
      }}>
        Browse automations →
      </a>
    </main>
  )
}