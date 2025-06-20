import type { Metadata } from "next";
import { Labrada } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

const labrada = Labrada({
  variable: "--font-labrada",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Rosvik",
  description: "GP3",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`h-screen ${labrada.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
