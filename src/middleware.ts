import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const nextIntlMiddleware = createMiddleware(routing);

export default async function middleware(req: any) {

  const response = nextIntlMiddleware(req);

  return response;
}

export const config = {

  matcher: [
    '/',
    '/en/:path*',
    '/sv/:path*',
    '/((?!api|_next|favicon.ico|.*\\..*).*)',
  ],
};
