import { createClient } from '@/lib/supabase/server'

export default async function BrowsePage() {
  const supabase = await createClient()
  
  const { data: gigs } = await supabase
    .from('gigs')
    .select('*, sellers(*)')
    .eq('is_active', true)
    .order('is_featured', { ascending: false })

  const categories = ['All', 'Review Collection', 'No-Show Reduction', 'Invoice Chasing', 'Lead Follow-Up', 'Abandoned Cart', 'Client Onboarding']

  const iconMap: Record<string, string> = {
    'Review Collection': '⭐',
    'No-Show Reduction': '📅',
    'Invoice Chasing': '💳',
    'Lead Follow-Up': '🔄',
    'Abandoned Cart': '🛒',
    'Client Onboarding': '🚀',
    'Email Sequences': '📩',
    'Custom AI Workflows': '🤖',
  }

  const colorMap: Record<string, string> = {
    'Review Collection': 'linear-gradient(135deg,#1a0800,#3d1000)',
    'No-Show Reduction': 'linear-gradient(135deg,#0a1628,#1e3a5f)',
    'Invoice Chasing': 'linear-gradient(135deg,#0d2010,#1a4a2e)',
    'Lead Follow-Up': 'linear-gradient(135deg,#1a0a2e,#3b1a6e)',
    'Abandoned Cart': 'linear-gradient(135deg,#1a0500,#4a1000)',
    'Client Onboarding': 'linear-gradient(135deg,#052e16,#166534)',
  }

  return (
    <div style={{ background: 'var(--flo-surface)', minHeight: '100vh' }}>

      <nav style={{ height: '58px', background: 'var(--flo-white)', borderBottom: '1.5px solid var(--flo-border)', display: 'flex', alignItems: 'center', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: '7px', marginRight: '36px', textDecoration: 'none', color: 'var(--flo-text)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <div style={{ flex: 1 }}>
          <input placeholder="What do you want to automate?" style={{ width: '100%', maxWidth: '480px', padding: '9px 16px', border: '1.5px solid var(--flo-border)', borderRadius: '100px', fontSize: '13.5px', outline: 'none', fontFamily: 'var(--font-body)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="/auth/login" style={{ padding: '8px 16px', borderRadius: '6px', border: '1.5px solid var(--flo-border-2)', fontSize: '13px', fontWeight: 700, color: 'var(--flo-text)', textDecoration: 'none' }}>Log in</a>
          <a href="/auth/signup" style={{ padding: '8px 16px', borderRadius: '6px', background: 'var(--flo-orange)', color: '#fff', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Get started</a>
        </div>
      </nav>

      <div style={{ background: 'var(--flo-white)', borderBottom: '1.5px solid var(--flo-border)', padding: '0 40px', display: 'flex', gap: '4px', overflowX: 'auto' }}>
        {categories.map((cat, i) => (
          <a key={cat} href="#" style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: i === 0 ? 'var(--flo-orange)' : 'var(--flo-text-3)', borderBottom: i === 0 ? '2.5px solid var(--flo-orange)' : '2.5px solid transparent', textDecoration: 'none', whiteSpace: 'nowrap' }}>{cat}</a>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ borderRight: '1.5px solid var(--flo-border)', padding: '28px 20px', background: 'var(--flo-white)' }}>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Category</div>
            {categories.slice(1).map(c => (
              <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 0', fontSize: '13.5px', color: 'var(--flo-text-2)', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--flo-orange)' }} />
                {c}
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

        <div style={{ padding: '24px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '14px', color: 'var(--flo-text-2)' }}>
              <strong style={{ color: 'var(--flo-text)' }}>{gigs?.length ?? 0}</strong> services found
            </span>
            <select style={{ border: '1.5px solid var(--flo-border)', borderRadius: '6px', padding: '6px 10px', fontSize: '13px', fontFamily: 'var(--font-body)', color: 'var(--flo-text)' }}>
              <option>Best match</option>
              <option>Price: Low to High</option>
              <option>Top rated</option>
            </select>
          </div>

          {gigs && gigs.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
              {gigs.map(gig => (
                <a key={gig.id} href={`/gigs/${gig.slug}`} style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
                  <div style={{ height: '160px', background: colorMap[gig.category] ?? 'linear-gradient(135deg,#1a1a20,#000)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                    {iconMap[gig.category] ?? '⚡'}
                  </div>
                  <div style={{ padding: '14px' }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--flo-text-2)', marginBottom: '8px' }}>{gig.sellers?.name}</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--flo-text)', lineHeight: 1.35, marginBottom: '10px' }}>{gig.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', marginBottom: '10px' }}>
                      <span style={{ color: '#fbbf24' }}>★</span>
                      <strong style={{ color: 'var(--flo-text)' }}>{gig.sellers?.avg_rating?.toFixed(1) ?? '5.0'}</strong>
                      <span style={{ color: 'var(--flo-text-3)' }}>({gig.sellers?.total_reviews ?? 0})</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--flo-border)' }}>
                      <span style={{ fontSize: '11px', color: 'var(--flo-text-3)' }}>From</span>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--flo-text)' }}>€{(gig.price_basic / 100).toFixed(0)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '40px', marginBottom: '14px' }}>🔍</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '8px' }}>No gigs yet</div>
              <div style={{ fontSize: '14px', color: 'var(--flo-text-3)' }}>Check back soon — new services are being added.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}