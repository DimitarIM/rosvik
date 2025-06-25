import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sv"],
  defaultLocale: "en",
  localeCookie: false,
  localePrefix: 'as-needed',
  localeDetection: true,
});
