import { NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/lib/supabase/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const conversationId = searchParams.get('conversationId')
  if (!conversationId) return NextResponse.json({ error: 'conversationId required' }, { status: 400 })

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { conversationId, content } = await req.json()
  if (!conversationId || !content) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const { data, error } = await supabase
    .from('messages')
    .insert({ conversation_id: conversationId, sender_role: 'buyer', content, message_type: 'text' })
    .select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Increment admin unread
  const sb = createAdminClient()
  await sb.rpc('increment_admin_unread', { conv_id: conversationId })

  return NextResponse.json(data)
}

export async function PUT(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: profile } = await supabase
    .from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin' && profile?.role !== 'seller')
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { conversationId, content, messageType } = await req.json()
  const sb = createAdminClient()

  const { data, error } = await sb
    .from('messages')
    .insert({ conversation_id: conversationId, sender_role: 'seller', content, message_type: messageType ?? 'text' })
    .select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  await sb.from('conversations').update({
    admin_unread: 0,
    buyer_unread: 1,
    last_message_at: new Date().toISOString(),
  }).eq('id', conversationId)

  return NextResponse.json(data)
}