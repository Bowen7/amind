import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from './lib/client'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const url = request.nextUrl.clone()

  const cookieStore = cookies()

  const { authStore } = createServerClient(cookieStore)

  if (authStore.isValid) {
    if (pathname === '/login' || pathname === '/') {
      url.pathname = '/minds'
      return NextResponse.redirect(url)
    }
  } else {
    if (pathname === '/minds') {
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: [
    '/',
    '/minds',
    '/login',
  ],
}
