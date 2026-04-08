import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Linux servers treat paths as case-sensitive; normalize /App → /app */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/App' || pathname.startsWith('/App/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/App/, '/app')
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/App', '/App/:path*'],
}
