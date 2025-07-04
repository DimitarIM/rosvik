import type { Metadata } from "next";
import { Labrada } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Inner from "@/components/Layout/Inner";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
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
  params: { locale: string };
}>) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error("Failed to load messages:", error);
    notFound();
  }

  return (
    <html lang={locale} className={`h-screen ${labrada.variable}`}>
      <body>
        <Inner>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Inner>
      </body>
    </html>
  );
}
