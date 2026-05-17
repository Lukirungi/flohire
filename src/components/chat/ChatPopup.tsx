'use client'
import { useState, useEffect, useRef } from 'react'
import { useMessages } from '@/hooks/useMessages'

interface Props {
  conversationId: string | null
  sellerName: string
}

export default function ChatPopup({ conversationId, sellerName }: Props) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const { messages, loading, sendMessage } = useMessages(open ? conversationId : null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    if (!text.trim()) return
    const t = text
    setText('')
    await sendMessage(t)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '24px', right: '24px',
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'var(--flo-ink)', border: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,.25)',
          cursor: 'pointer', fontSize: '22px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
        }}
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: '96px', right: '24px',
          width: '320px', height: '420px',
          background: 'var(--flo-white)',
          border: '1.5px solid var(--flo-border)',
          borderRadius: '20px',
          boxShadow: '0 16px 48px rgba(0,0,0,.15)',
          zIndex: 999, display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}>
          <div style={{ background: 'var(--flo-ink)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#ff4500,#ff8c5a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '13px' }}>
              {sellerName[0]}
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#fff' }}>{sellerName}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.45)' }}>Usually replies in a few hours</div>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {loading && <p style={{ textAlign: 'center', color: 'var(--flo-text-3)', fontSize: '13px', marginTop: '20px' }}>Loading...</p>}
            {!loading && messages.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--flo-text-3)', fontSize: '13px', marginTop: '20px' }}>Say hi to {sellerName}! 👋</p>
            )}
            {messages.map(msg => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender_role === 'buyer' ? 'flex-end' : 'flex-start' }}>
                {msg.sender_role === 'system' ? (
                  <div style={{ background: 'var(--flo-surface)', borderRadius: '100px', padding: '4px 12px', fontSize: '11.5px', color: 'var(--flo-text-3)', margin: '0 auto' }}>
                    {msg.content}
                  </div>
                ) : (
                  <div style={{
                    maxWidth: '80%', padding: '9px 13px', borderRadius: '16px',
                    fontSize: '13.5px', lineHeight: 1.5,
                    background: msg.sender_role === 'buyer' ? 'var(--flo-orange)' : 'var(--flo-surface)',
                    color: msg.sender_role === 'buyer' ? '#fff' : 'var(--flo-text)',
                    borderBottomRightRadius: msg.sender_role === 'buyer' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.sender_role === 'seller' ? '4px' : '16px',
                  }}>
                    {msg.content}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div style={{ borderTop: '1.5px solid var(--flo-border)', padding: '10px 12px', display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              style={{ flex: 1, border: '1.5px solid var(--flo-border)', borderRadius: '20px', padding: '8px 14px', fontSize: '13px', fontFamily: 'var(--font-body)', outline: 'none' }}
            />
            <button
              onClick={handleSend}
              disabled={!text.trim()}
              style={{ width: '36px', height: '36px', borderRadius: '50%', background: text.trim() ? 'var(--flo-orange)' : 'var(--flo-border)', border: 'none', color: '#fff', fontSize: '15px', cursor: text.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}