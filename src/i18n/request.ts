import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = routing.defaultLocale;

  if (requestLocale && hasLocale(routing.locales, requestLocale)) {
    locale = requestLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
