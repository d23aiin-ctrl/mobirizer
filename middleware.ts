import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isExcluded =
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    /.*\..*/.test(pathname);

  if (isExcluded) {
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const forwardedHost = request.headers.get('x-forwarded-host');
  const forwardedProto = request.headers.get('x-forwarded-proto');
  const host = forwardedHost ?? request.headers.get('host') ?? request.nextUrl.host;
  const proto = forwardedProto ?? request.nextUrl.protocol.replace(':', '');
  const newPath = pathname === '/' ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  const search = request.nextUrl.search;
  const redirectUrl = `${proto}://${host}${newPath}${search}`;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files with extensions
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
