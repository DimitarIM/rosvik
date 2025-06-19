import type { Metadata } from "next";
import { Labrada } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Inner from "@/components/Layout/Inner";

const labrada = Labrada({
  variable: "--font-labrada",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Rosvik",
  description: "GP3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-screen ${labrada.variable}`}>
      <body>
        <Inner>
          <Header />
          {children}
        </Inner>
      </body>

    </html>
  );
}