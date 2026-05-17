'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [sellers, setSellers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: '', slug: '', bio: '', level: 'New Seller',
    response_time: '2 hours', specialty_tags: ''
  })
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push('/auth/login'); return }
      loadSellers()
    })
  }, [])

  async function loadSellers() {
    const { data } = await supabase.from('sellers').select('*').order('created_at')
    setSellers(data ?? [])
    setLoading(false)
  }

  async function handleCreate() {
    setSaving(true)
    const tags = form.specialty_tags.split(',').map(t => t.trim()).filter(Boolean)
    const slug = form.slug || form.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    const { error } = await supabase.from('sellers').insert({
      name: form.name, slug, bio: form.bio,
      level: form.level, response_time: form.response_time,
      specialty_tags: tags, online: true, avg_rating: 5.0
    })
    if (error) { alert(error.message); setSaving(false); return }
    setShowForm(false)
    setForm({ name: '', slug: '', bio: '', level: 'New Seller', response_time: '2 hours', specialty_tags: '' })
    loadSellers()
    setSaving(false)
  }

  async function toggleOnline(id: string, current: boolean) {
    await supabase.from('sellers').update({ online: !current }).eq('id', id)
    loadSellers()
  }

  if (loading) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--flo-surface)' }}>Loading...</div>

  return (
    <div style={{ background: 'var(--flo-surface)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ height: '58px', background: 'var(--flo-ink)', display: 'flex', alignItems: 'center', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: '7px', marginRight: '36px', textDecoration: 'none', color: '#fff' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <span style={{ fontSize: '12px', fontWeight: 700, background: 'var(--flo-orange)', color: '#fff', padding: '3px 10px', borderRadius: '5px', letterSpacing: '.05em' }}>ADMIN</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <a href="/admin/inbox" style={{ padding: '7px 14px', borderRadius: '6px', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.7)', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>💬 Inbox</a>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--flo-text)' }}>Seller Profiles</h1>
          <button onClick={() => setShowForm(true)} style={{ marginLeft: 'auto', padding: '10px 20px', background: 'var(--flo-orange)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            + Create seller persona
          </button>
        </div>

        {/* Create form */}
        {showForm && (
          <div style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-orange)', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 800, color: 'var(--flo-text)', marginBottom: '20px' }}>New seller persona</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Full name *</label>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Marco R." style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em' }}>URL slug</label>
                <input value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} placeholder="e.g. marco-r (auto-generated)" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Bio *</label>
              <textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} placeholder="Short bio shown on seller profile..." rows={3} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Level</label>
                <select value={form.level} onChange={e => setForm({...form, level: e.target.value})} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }}>
                  <option>New Seller</option>
                  <option>Level 1</option>
                  <option>Level 2</option>
                  <option>Top Rated</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Response time</label>
                <select value={form.response_time} onChange={e => setForm({...form, response_time: e.target.value})} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }}>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>a few hours</option>
                  <option>within a day</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em' }}>Skills (comma separated)</label>
                <input value={form.specialty_tags} onChange={e => setForm({...form, specialty_tags: e.target.value})} placeholder="e.g. Zapier, Make.com, WhatsApp" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleCreate} disabled={saving || !form.name} style={{ padding: '11px 24px', background: saving ? '#ccc' : 'var(--flo-orange)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '14px', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-body)' }}>
                {saving ? 'Creating...' : 'Create seller →'}
              </button>
              <button onClick={() => setShowForm(false)} style={{ padding: '11px 20px', background: 'transparent', color: 'var(--flo-text-3)', border: '1.5px solid var(--flo-border)', borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Sellers list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {sellers.length === 0 && !showForm && (
            <div style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '14px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>👤</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--flo-text)', marginBottom: '6px' }}>No seller personas yet</div>
              <div style={{ fontSize: '13px', color: 'var(--flo-text-3)' }}>Create your first seller persona to start listing gigs.</div>
            </div>
          )}
          {sellers.map(seller => (
            <div key={seller.id} style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#ff4500,#ff8c5a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '16px', flexShrink: 0 }}>
                {seller.name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--flo-text)', marginBottom: '3px' }}>{seller.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--flo-text-3)', marginBottom: '6px' }}>{seller.level} · /{seller.slug} · ⭐ {seller.avg_rating} ({seller.total_reviews} reviews)</div>
                {seller.specialty_tags?.length > 0 && (
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {seller.specialty_tags.map((tag: string) => (
                      <span key={tag} style={{ background: 'var(--flo-surface)', border: '1px solid var(--flo-border)', borderRadius: '4px', padding: '2px 8px', fontSize: '11px', color: 'var(--flo-text-3)' }}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ background: seller.online ? 'var(--flo-green-bg)' : 'var(--flo-surface)', color: seller.online ? 'var(--flo-green)' : 'var(--flo-text-3)', border: `1px solid ${seller.online ? 'var(--flo-green-border)' : 'var(--flo-border)'}`, padding: '3px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 700 }}>
                  {seller.online ? 'Online' : 'Offline'}
                </span>
                <button onClick={() => toggleOnline(seller.id, seller.online)} style={{ padding: '7px 12px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text-2)', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                  Toggle
                </button>
                <a href={`/sellers/${seller.slug}`} style={{ padding: '7px 12px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--flo-text-2)', textDecoration: 'none' }}>
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}