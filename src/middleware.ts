import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect all non-LP traffic to the client's live site.
 * This Vercel project serves landing pages only.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow LP routes, the contact API (used by LP forms), and Next.js internals
  if (
    pathname.startsWith('/lp') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect('https://outdoorreno.com', 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
