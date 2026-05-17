export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

      {/* LEFT — dark panel */}
      <div style={{ background: 'var(--flo-ink)', padding: '60px 64px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(255,69,0,.1),transparent 60%)', pointerEvents: 'none' }} />
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '60px', textDecoration: 'none' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.05em', marginBottom: '16px' }}>
            The <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--flo-orange)', fontWeight: 400 }}>automation</em><br />marketplace for<br />modern businesses.
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.45)', lineHeight: 1.65, marginBottom: '32px' }}>
            Get any business process automated by a verified expert. Fixed price, guaranteed delivery, payment protected.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '🔒', title: 'Payment held in escrow', desc: 'Released only when you approve the delivery.' },
              { icon: '⚡', title: 'Delivery in 5–14 days', desc: 'Most automations are live within a week.' },
              { icon: '💬', title: 'Direct chat with your expert', desc: 'Ask questions before, during, and after.' },
            ].map(p => (
              <div key={p.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0 }}>{p.icon}</div>
                <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.55)', lineHeight: 1.5 }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>{p.title}</strong> — {p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — form */}
      <div style={{ padding: '60px 64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--flo-white)' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--flo-text)', marginBottom: '6px' }}>Welcome back</h2>
          <p style={{ fontSize: '14px', color: 'var(--flo-text-3)', marginBottom: '28px' }}>Log in to your FloHire account</p>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--flo-text)', marginBottom: '6px' }}>Email address</label>
            <input type="email" placeholder="you@company.com" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--flo-text)', marginBottom: '6px' }}>Password</label>
            <input type="password" placeholder="Your password" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </div>

          <button style={{ width: '100%', padding: '13px', background: 'var(--flo-orange)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-body)', cursor: 'pointer', marginBottom: '16px' }}>
            Log in →
          </button>

          <p style={{ fontSize: '13px', color: 'var(--flo-text-2)', textAlign: 'center' }}>
            Don't have an account?{' '}
            <a href="/auth/signup" style={{ color: 'var(--flo-orange)', fontWeight: 700, textDecoration: 'none' }}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}