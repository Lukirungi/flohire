export default function Home() {
  return (
    <div style={{ background: 'var(--flo-surface)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        height: '58px', background: 'var(--flo-white)',
        borderBottom: '1.5px solid var(--flo-border)',
        display: 'flex', alignItems: 'center',
        padding: '0 40px', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '20px',
          fontWeight: 800, letterSpacing: '-0.04em',
          display: 'flex', alignItems: 'center', gap: '7px', marginRight: '36px',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </div>
        <div style={{ display: 'flex', gap: '2px', flex: 1 }}>
          <a href="#" style={{ padding: '6px 12px', fontSize: '13.5px', fontWeight: 500, color: 'var(--flo-text-2)', textDecoration: 'none' }}>Explore</a>
          <a href="#" style={{ padding: '6px 12px', fontSize: '13.5px', fontWeight: 500, color: 'var(--flo-text-2)', textDecoration: 'none' }}>How it works</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="#" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--flo-text-2)', textDecoration: 'none', padding: '6px 10px' }}>Become a seller</a>
          <a href="#" style={{ padding: '8px 16px', borderRadius: '6px', border: '1.5px solid var(--flo-border-2)', fontSize: '13px', fontWeight: 700, color: 'var(--flo-text)', textDecoration: 'none' }}>Log in</a>
          <a href="#" style={{ padding: '8px 16px', borderRadius: '6px', background: 'var(--flo-orange)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Get started</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,69,0,.08)', border: '1px solid rgba(255,69,0,.2)', borderRadius: '100px', padding: '5px 14px 5px 8px', fontSize: '12px', fontWeight: 700, color: 'var(--flo-orange)', marginBottom: '22px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--flo-orange)' }} />
            The automation experts marketplace
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '52px', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.05, color: 'var(--flo-text)', marginBottom: '18px' }}>
            Hire an expert to<br />automate <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--flo-orange)', fontWeight: 400 }}>anything</em><br />in your business.
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--flo-text-2)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '460px' }}>
            Browse 200+ automation specialists. One fixed price, guaranteed delivery, your payment protected until you approve the work.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="/gigs" style={{ padding: '14px 28px', background: 'var(--flo-orange)', color: '#fff', borderRadius: '10px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}>Browse automations →</a>
            <a href="#" style={{ padding: '14px 24px', border: '1.5px solid var(--flo-border-2)', borderRadius: '10px', fontWeight: 700, fontSize: '15px', color: 'var(--flo-text)', textDecoration: 'none' }}>How it works</a>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--flo-text-3)', marginTop: '20px' }}>Trusted by <strong>2,400+</strong> businesses in Europe</p>
        </div>

        {/* Hero card */}
        <div style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,.12)' }}>
          <div style={{ background: 'var(--flo-ink)', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#ff4500,#ff8c5a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff' }}>M</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Marco R.</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.5)' }}>⭐ 4.9 · 128 orders</div>
              </div>
              <div style={{ marginLeft: 'auto', background: 'rgba(34,197,94,.15)', color: '#4ade80', padding: '3px 9px', borderRadius: '100px', fontSize: '11px', fontWeight: 700 }}>Online</div>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>I'll set up an automated Google review collection system for your business</div>
          </div>
          <div style={{ padding: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '14px' }}>
              {[
                { name: 'Basic', price: '€59', days: '10 days', sel: false },
                { name: 'Standard', price: '€99', days: '7 days', sel: true },
                { name: 'Premium', price: '€149', days: '5 days', sel: false },
              ].map(p => (
                <div key={p.name} style={{ border: `1.5px solid ${p.sel ? 'var(--flo-orange)' : 'var(--flo-border)'}`, borderRadius: '10px', padding: '11px', background: p.sel ? 'rgba(255,69,0,.05)' : 'transparent' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: p.sel ? 'var(--flo-orange)' : 'var(--flo-text-3)', textTransform: 'uppercase', marginBottom: '3px' }}>{p.name}</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: p.sel ? 'var(--flo-orange)' : 'var(--flo-text)' }}>{p.price}</div>
                  <div style={{ fontSize: '11px', color: 'var(--flo-text-3)' }}>{p.days}</div>
                </div>
              ))}
            </div>
            <a href="/gigs" style={{ display: 'block', padding: '12px', background: 'var(--flo-orange)', color: '#fff', borderRadius: '8px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', textAlign: 'center' }}>Order now · €99 →</a>
            <p style={{ fontSize: '11.5px', color: 'var(--flo-text-3)', textAlign: 'center', marginTop: '10px' }}>🔒 Payment held securely until you approve</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderTop: '1.5px solid var(--flo-border)', borderBottom: '1.5px solid var(--flo-border)', background: 'var(--flo-white)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { val: '2,400+', label: 'businesses automated' },
            { val: '€1.2M', label: 'in automations delivered' },
            { val: '200+', label: 'automation services' },
            { val: '4.9★', label: 'average seller rating' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--flo-border)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--flo-text)', marginBottom: '4px' }}>{s.val}</div>
              <div style={{ fontSize: '13px', color: 'var(--flo-text-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--flo-text)', marginBottom: '28px' }}>
          What do you want to <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--flo-orange)', fontWeight: 400 }}>automate?</em>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
          {[
            { icon: '⭐', name: 'Review Collection', count: '34 services' },
            { icon: '📅', name: 'No-Show Reduction', count: '28 services' },
            { icon: '💳', name: 'Invoice Chasing', count: '22 services' },
            { icon: '🔄', name: 'Lead Follow-Up', count: '41 services' },
            { icon: '🛒', name: 'Abandoned Cart', count: '19 services' },
            { icon: '🚀', name: 'Client Onboarding', count: '25 services' },
            { icon: '📩', name: 'Email Sequences', count: '38 services' },
            { icon: '🤖', name: 'Custom AI Workflows', count: '16 services' },
          ].map(cat => (
            <a key={cat.name} href="/gigs" style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '16px', padding: '22px 20px', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{cat.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '4px' }}>{cat.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--flo-text-3)' }}>{cat.count}</div>
            </a>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer style={{ background: 'var(--flo-ink)', marginTop: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 48px 24px', display: 'grid', gridTemplateColumns: '240px repeat(4,1fr)', gap: '32px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
            </div>
            <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.35)', lineHeight: 1.7 }}>The automation experts marketplace for small and medium businesses.</p>
          </div>
          {[
            { title: 'For Buyers', links: ['Browse automations', 'How it works', 'Buyer protection'] },
            { title: 'For Sellers', links: ['Become a seller', 'Seller dashboard', 'Guidelines'] },
            { title: 'Company', links: ['About FloHire', 'Blog', 'Contact us'] },
            { title: 'Support', links: ['Help centre', 'Privacy policy', 'Terms of service'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '14px' }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,.38)', marginBottom: '9px', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', padding: '16px 48px', maxWidth: '1100px', margin: '0 auto', fontSize: '12px', color: 'rgba(255,255,255,.25)', display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2026 FloHire. All rights reserved.</span>
          <span>Made with ☕ in Milan</span>
        </div>
      </footer>

    </div>
  )
}