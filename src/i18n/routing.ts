import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sv"],
  defaultLocale: "en",
  localePrefix: 'as-needed',
  localeCookie: true,
  localeDetection: true
});
