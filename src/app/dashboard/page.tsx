'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push('/auth/login'); return }
      setUser(user)
      setLoading(false)
    })
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: 'var(--flo-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '14px', color: 'var(--flo-text-3)' }}>Loading...</div>
    </div>
  )

  return (
    <div style={{ background: 'var(--flo-surface)', minHeight: '100vh' }}>
      <nav style={{ height: '58px', background: 'var(--flo-white)', borderBottom: '1.5px solid var(--flo-border)', display: 'flex', alignItems: 'center', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: '7px', marginRight: '36px', textDecoration: 'none', color: 'var(--flo-text)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <div style={{ display: 'flex', gap: '2px', flex: 1 }}>
          <a href="/gigs" style={{ padding: '6px 12px', fontSize: '13.5px', fontWeight: 500, color: 'var(--flo-text-2)', textDecoration: 'none' }}>Browse</a>
          <a href="/dashboard" style={{ padding: '6px 12px', fontSize: '13.5px', fontWeight: 600, color: 'var(--flo-text)', textDecoration: 'none' }}>My orders</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: 'var(--flo-text-3)' }}>{user?.email}</span>
          <button onClick={handleLogout} style={{ padding: '7px 14px', borderRadius: '6px', border: '1.5px solid var(--flo-border-2)', fontSize: '13px', fontWeight: 700, color: 'var(--flo-text)', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Log out</button>
        </div>
      </nav>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--flo-text)', marginBottom: '6px' }}>Welcome back 👋</h1>
        <p style={{ fontSize: '14px', color: 'var(--flo-text-3)', marginBottom: '28px' }}>{user?.email}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '32px' }}>
          {[{ val: '0', label: 'Active orders' }, { val: '0', label: 'Complete' }, { val: '€0', label: 'Total spent' }, { val: '0', label: 'Awaiting review' }].map(s => (
            <div key={s.label} style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '14px', padding: '18px 20px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'var(--flo-orange)', lineHeight: 1, marginBottom: '4px' }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: 'var(--flo-text-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--flo-white)', border: '1.5px solid var(--flo-border)', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: 'var(--flo-text)', marginBottom: '8px', letterSpacing: '-0.02em' }}>No orders yet</h2>
          <p style={{ fontSize: '14px', color: 'var(--flo-text-3)', marginBottom: '20px' }}>Browse automation services and place your first order.</p>
          <a href="/gigs" style={{ display: 'inline-block', padding: '12px 24px', background: 'var(--flo-orange)', color: '#fff', borderRadius: '8px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>Browse automations →</a>
        </div>
      </div>
    </div>
  )
}