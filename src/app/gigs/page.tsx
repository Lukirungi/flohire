export default function BrowsePage() {
  const gigs = [
    { id: '1', title: 'Automated Google review collection after every payment', seller: 'Marco R.', rating: '4.9', reviews: 128, price: '€59', category: 'Review Collection', icon: '⭐', color: '#1a0800' },
    { id: '2', title: 'Appointment no-show reducer with WhatsApp reminders', seller: 'Sara M.', rating: '4.8', reviews: 96, price: '€69', category: 'No-Show Reduction', icon: '📅', color: '#0a1628' },
    { id: '3', title: 'Invoice chasing automation — get paid 15 days faster', seller: 'Alessandro F.', rating: '4.7', reviews: 74, price: '€79', category: 'Invoice Chasing', icon: '💳', color: '#0d2010' },
    { id: '4', title: '7-touch lead follow-up sequence that recovers cold leads', seller: 'Laura P.', rating: '5.0', reviews: 41, price: '€149', category: 'Lead Follow-Up', icon: '🔄', color: '#1a0a2e' },
    { id: '5', title: 'Shopify abandoned cart recovery — 3-message sequence', seller: 'Roberto C.', rating: '4.9', reviews: 63, price: '€129', category: 'Abandoned Cart', icon: '🛒', color: '#1a0500' },
    { id: '6', title: 'Full client onboarding autopilot — contract to kickoff in 10min', seller: 'Giulia T.', rating: '4.8', reviews: 52, price: '€199', category: 'Client Onboarding', icon: '🚀', color: '#052e16' },
  ]

  const categories = ['All', 'Review Collection', 'No-Show Reduction', 'Invoice Chasing', 'Lead Follow-Up', 'Abandoned Cart', 'Client Onboarding']

  return (
    <div style={{ background: 'var(--flo-surface)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ height: '58px', background: 'var(--flo-white)', borderBottom: '1.5px solid var(--flo-border)', display: 'flex', alignItems: 'center', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: '7px', marginRight: '36px', textDecoration: 'none', color: 'var(--flo-text)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <div style={{ flex: 1 }}>
          <input placeholder="What do you want to automate?" style={{ width: '100%', maxWidth: '480px', padding: '9px 16px', border: '1.5px solid var(--flo-border)', borderRadius: '100px', fontSize: '13.5px', outline: 'none', fontFamily: 'var(--font-body)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="#" style={{ padding: '8px 16px', borderRadius: '6px', border: '1.5px solid var(--flo-border-2)', fontSize: '13px', fontWeight: 700, color: 'var(--flo-text)', textDecoration: 'none' }}>Log in</a>
          <a href="#" style={{ padding: '8px 16px', borderRadius: '6px', background: 'var(--flo-orange)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Get started</a>
        </div>
      </nav>

      {/* CATEGORY PILLS */}
      <div style={{ background: 'var(--flo-white)', borderBottom: '1.5px solid var(--flo-border)', padding: '0 40px', display: 'flex', gap: '4px', overflowX: 'auto' }}>
        {categories.map((cat, i) => (
          <a key={cat} href="#" style={{
            padding: '14px 16px', fontSize: '13px', fontWeight: 600,
            color: i === 0 ? 'var(--flo-orange)' : 'var(--flo-text-3)',
            borderBottom: i === 0 ? '2.5px solid var(--flo-orange)' : '2.5px solid transparent',
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}>{cat}</a>
        ))}
      </div>

      {/* LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', maxWidth: '1200px', margin: '0 auto' }}>

        {/* FILTERS */}
        <div style={{ borderRight: '1.5px solid var(--flo-border)', padding: '28px 20px', background: 'var(--flo-white)' }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Category</div>
            {['Review Collection', 'No-Show Reduction', 'Invoice Chasing', 'Lead Follow-Up', 'Abandoned Cart', 'Client Onboarding'].map(c => (
              <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 0', fontSize: '13.5px', color: 'var(--flo-text-2)', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--flo-orange)' }} />
                {c}
              </label>
            ))}
          </div>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Delivery time</div>
            {['Up to 3 days', 'Up to 7 days', 'Up to 14 days', 'Any'].map(d => (
              <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 0', fontSize: '13.5px', color: 'var(--flo-text-2)', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--flo-orange)' }} />
                {d}
              </label>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Price range</div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input type="number" placeholder="€ Min" style={{ flex: 1, padding: '7px 10px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '13px', textAlign: 'center', fontFamily: 'var(--font-body)' }} />
              <span style={{ color: 'var(--flo-text-4)' }}>–</span>
              <input type="number" placeholder="€ Max" style={{ flex: 1, padding: '7px 10px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '13px', textAlign: 'center', fontFamily: 'var(--font-body)' }} />
            </div>
          </div>
        </div>

        {/* GIGS */}
        <div style={{ padding: '24px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '14px', color: 'var(--flo-text-2)' }}><strong style={{ color: 'var(--flo-text)' }}>143</strong> services found</span>
            <select style={{ border: '1.5px solid var(--flo-border)', borderRadius: '6px', padding: '6px 10px', fontSize: '13px', fontFamily: 'var(--font-body)', color: 'var(--flo-text)' }}>
              <option>Best match</option>
              <option>Price: Low to High</option>
              <option>Top rated</option>
              <option>Newest</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {gigs.map(gig => (
              <a key={gig.id} href={`/gigs/${gig.id}`} style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
                <div style={{ height: '160px', background: `linear-gradient(135deg, ${gig.color} 0%, #000 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                  {gig.icon}
                </div>
                <div style={{ padding: '14px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--flo-text-2)', marginBottom: '8px' }}>{gig.seller}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--flo-text)', lineHeight: 1.35, marginBottom: '10px' }}>{gig.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', marginBottom: '10px' }}>
                    <span style={{ color: '#fbbf24' }}>★</span>
                    <strong style={{ color: 'var(--flo-text)' }}>{gig.rating}</strong>
                    <span style={{ color: 'var(--flo-text-3)' }}>({gig.reviews})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--flo-border)' }}>
                    <span style={{ fontSize: '11px', color: 'var(--flo-text-3)' }}>From</span>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--flo-text)' }}>{gig.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}