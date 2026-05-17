export default function GigPage() {
  return (
    <div style={{ background: 'var(--flo-surface)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ height: '58px', background: 'var(--flo-white)', borderBottom: '1.5px solid var(--flo-border)', display: 'flex', alignItems: 'center', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: '7px', marginRight: '36px', textDecoration: 'none', color: 'var(--flo-text)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <a href="/gigs" style={{ fontSize: '13.5px', color: 'var(--flo-text-2)', textDecoration: 'none' }}>← Back to results</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
          <a href="#" style={{ padding: '8px 16px', borderRadius: '6px', border: '1.5px solid var(--flo-border-2)', fontSize: '13px', fontWeight: 700, color: 'var(--flo-text)', textDecoration: 'none' }}>Log in</a>
          <a href="#" style={{ padding: '8px 16px', borderRadius: '6px', background: 'var(--flo-orange)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Get started</a>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 32px', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '40px' }}>

        {/* LEFT */}
        <div>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: 'var(--flo-text-3)', marginBottom: '20px' }}>
            <a href="/gigs" style={{ color: 'var(--flo-orange)', textDecoration: 'none', fontWeight: 600 }}>Browse</a>
            <span>›</span>
            <span>Review Collection</span>
            <span>›</span>
            <span>Google review automation</span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--flo-text)', lineHeight: 1.2, marginBottom: '16px' }}>
            Automated Google review collection after every customer interaction
          </h1>

          {/* Seller */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'var(--flo-surface)', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#ff4500,#ff8c5a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '16px', position: 'relative' }}>
              M
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#22c55e', border: '2px solid white' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--flo-text)' }}>Marco R.</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '3px' }}>
                <span style={{ color: '#fbbf24' }}>★★★★★</span>
                <span style={{ fontSize: '12px', color: 'var(--flo-text-3)' }}><strong>4.9</strong> (128 reviews)</span>
                <span style={{ fontSize: '12px', color: 'var(--flo-text-3)' }}>128 orders completed</span>
              </div>
            </div>
            <div style={{ background: 'var(--flo-green-bg)', color: 'var(--flo-green)', padding: '3px 9px', borderRadius: '100px', fontSize: '11px', fontWeight: 700 }}>Online now</div>
          </div>

          {/* Gallery */}
          <div style={{ height: '320px', background: 'linear-gradient(135deg,#1a0800,#3d1000)', borderRadius: '16px', border: '1.5px solid var(--flo-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '72px', marginBottom: '28px', position: 'relative' }}>
            ⭐
            <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(0,0,0,.6)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '100px' }}>Preview</div>
          </div>

          {/* How it works */}
          <div style={{ background: 'rgba(255,69,0,.05)', border: '1.5px solid rgba(255,69,0,.15)', borderRadius: '12px', padding: '16px 18px', marginBottom: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--flo-orange)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '6px' }}>🤖 How this automation works</div>
            <div style={{ fontSize: '14px', color: 'var(--flo-text)', lineHeight: 1.65 }}>When a customer pays, they automatically receive a personalised SMS or WhatsApp 2 hours later asking for a Google review. If they rate 4★ or 5★, they are directed to Google. If 1–3★, they are privately redirected to a feedback form — protecting your rating.</div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--flo-text)', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid var(--flo-border)', letterSpacing: '-0.02em' }}>About this service</div>
            <div style={{ fontSize: '14.5px', color: 'var(--flo-text-2)', lineHeight: 1.8 }}>
              Most businesses have happy customers who just never think to leave a review. This automation turns your existing payment flow into a review collection machine — completely silently, without you touching anything.<br /><br />
              I connect your POS or payment system to a messaging workflow. Every time a transaction is completed, a personalised message goes out automatically. The timing (2 hours post-purchase) is optimised for maximum response rate based on 10,000+ sends.
            </div>
          </div>

          {/* Reviews */}
          <div>
            <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--flo-text)', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid var(--flo-border)' }}>Reviews (128)</div>
            {[
              { name: 'Sofia B.', text: 'Went from 14 to 67 Google reviews in 6 weeks. Now #2 in Google Maps for our area. Marco set it up in 3 days and it has been running perfectly since.', bg: '#fde68a', color: '#92400e' },
              { name: 'Pietro E.', text: 'Our clinic had 8 reviews. Now we have 91. The private redirect for unhappy patients is clever. Highly recommend.', bg: '#dbeafe', color: '#1e40af' },
            ].map(r => (
              <div key={r.name} style={{ padding: '16px 0', borderBottom: '1px solid var(--flo-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: r.bg, color: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px' }}>{r.name[0]}</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--flo-text)' }}>{r.name}</div>
                  <span style={{ color: '#fbbf24', fontSize: '13px' }}>★★★★★</span>
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--flo-text-2)', lineHeight: 1.65 }}>{r.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — ORDER PANEL */}
        <div style={{ position: 'sticky', top: '80px', height: 'fit-content' }}>
          {/* Package tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '1.5px solid var(--flo-border)', borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
            {[
              { name: 'Basic', price: '€59', sel: false },
              { name: 'Standard', price: '€99', sel: true },
              { name: 'Premium', price: '€149', sel: false },
            ].map(p => (
              <div key={p.name} style={{ padding: '12px 8px', textAlign: 'center', background: p.sel ? 'var(--flo-ink)' : 'var(--flo-white)', borderRight: '1px solid var(--flo-border)', cursor: 'pointer' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: p.sel ? 'rgba(255,255,255,.6)' : 'var(--flo-text-3)', marginBottom: '4px' }}>{p.name}</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: p.sel ? '#fff' : 'var(--flo-text)' }}>{p.price}</div>
              </div>
            ))}
          </div>

          {/* Package details */}
          <div style={{ border: '1.5px solid var(--flo-border)', borderTop: 'none', borderRadius: '0 0 16px 16px', padding: '18px', background: 'var(--flo-white)', marginBottom: '12px' }}>
            <ul style={{ listStyle: 'none', marginBottom: '16px' }}>
              {['Google review automation setup', 'SMS + WhatsApp integration', 'Private redirect for low ratings', 'Custom message with your branding', '2 revisions included'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--flo-text-2)', padding: '6px 0' }}>
                  <span style={{ color: 'var(--flo-green)', fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '14px', marginBottom: '16px', fontSize: '12px', color: 'var(--flo-text-3)' }}>
              <span>⏱ Delivery: <strong style={{ color: 'var(--flo-text)' }}>7 days</strong></span>
              <span>🔄 Revisions: <strong style={{ color: 'var(--flo-text)' }}>2</strong></span>
            </div>
            <a href="/auth/signup" style={{ display: 'block', padding: '13px', background: 'var(--flo-orange)', color: '#fff', borderRadius: '8px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', textAlign: 'center', marginBottom: '8px' }}>
              Order now · €99 →
            </a>
            <a href="#" style={{ display: 'block', padding: '10px', background: 'var(--flo-surface)', color: 'var(--flo-text)', borderRadius: '8px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', textAlign: 'center' }}>
              💬 Contact seller
            </a>
            <p style={{ fontSize: '11.5px', color: 'var(--flo-text-3)', textAlign: 'center', marginTop: '12px' }}>
              🔒 Payment held securely until you approve delivery
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}