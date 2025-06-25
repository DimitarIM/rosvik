import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';


export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    `/${routing.locales[0]}/:path*`,
    `/${routing.locales[1]}/:path*`,
    '/((?!api|_next|favicon.ico|.*\\..*).*)',
  ],
};
