import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sv"],
  defaultLocale: "en",
  localePrefix: 'never',
  localeCookie: true,
  localeDetection: true
});
