import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sv"],
  defaultLocale: "sv",
  localeDetection: false,
  localePrefix: 'always'
});
