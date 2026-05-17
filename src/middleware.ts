import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const path = request.nextUrl.pathname

  if (path.startsWith('/orders') || path.startsWith('/dashboard')) {
    if (!user) return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (path.startsWith('/admin')) {
    if (!user) return NextResponse.redirect(new URL('/auth/login', request.url))
    const { data: profile } = await supabase
      .from('profiles').select('role').eq('id', user.id).single()
    if (profile?.role !== 'admin')
      return NextResponse.redirect(new URL('/', request.url))
  }

  if (path.startsWith('/seller')) {
    if (!user) return NextResponse.redirect(new URL('/auth/login', request.url))
    const { data: profile } = await supabase
      .from('profiles').select('role').eq('id', user.id).single()
    if (!['seller', 'admin'].includes(profile?.role))
      return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

export const config = {
  matcher: ['/orders/:path*', '/dashboard/:path*', '/admin/:path*', '/seller/:path*']
}