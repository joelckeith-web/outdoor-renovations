import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect all non-LP traffic to the client's live site.
 * This Vercel project serves landing pages only.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow LP routes, the contact API, static assets, and Next.js internals
  if (
    pathname.startsWith('/lp') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    pathname.startsWith('/fonts/') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect('https://outdoorreno.com', 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
