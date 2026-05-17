'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  async function handleSignup() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div style={{ background: 'var(--flo-ink)', padding: '60px 64px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(255,69,0,.1),transparent 60%)', pointerEvents: 'none' }} />
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '60px', textDecoration: 'none' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--flo-orange)' }} />
          Flo<span style={{ color: 'var(--flo-orange)' }}>Hire</span>
        </a>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.05em', marginBottom: '16px' }}>
            Automate your<br />business in{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--flo-orange)', fontWeight: 400 }}>4 steps.</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.45)', lineHeight: 1.65, marginBottom: '32px' }}>From browsing to a live automation running in your business — most orders complete in under 2 weeks.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Browse 200+ automation services', 'Pay securely — held until you approve', 'Chat directly with your expert', 'Accept delivery and go live'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--flo-orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)' }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--flo-white)' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--flo-text)', marginBottom: '6px' }}>Create your account</h2>
          <p style={{ fontSize: '14px', color: 'var(--flo-text-3)', marginBottom: '28px' }}>Get your first automation in under 10 minutes</p>

          {error && <div style={{ background: 'var(--flo-red-bg)', border: '1px solid var(--flo-red-border)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: 'var(--flo-red)', marginBottom: '16px' }}>{error}</div>}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--flo-text)', marginBottom: '6px' }}>Full name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--flo-text)', marginBottom: '6px' }}>Email address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--flo-text)', marginBottom: '6px' }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 characters" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--flo-border)', borderRadius: '6px', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </div>

          <button onClick={handleSignup} disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#ccc' : 'var(--flo-orange)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-body)', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '16px' }}>
            {loading ? 'Creating account...' : 'Create account →'}
          </button>

          <p style={{ fontSize: '13px', color: 'var(--flo-text-2)', textAlign: 'center' }}>
            Already have an account?{' '}
            <a href="/auth/login" style={{ color: 'var(--flo-orange)', fontWeight: 700, textDecoration: 'none' }}>Log in</a>
          </p>
        </div>
      </div>
    </div>
  )
}