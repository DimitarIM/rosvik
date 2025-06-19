import type { Metadata } from "next";
import { Labrada } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

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
