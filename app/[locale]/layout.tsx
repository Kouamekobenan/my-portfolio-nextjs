import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import NavBar from "../components/layout/NavBar";
import { getTranslation } from "../i18n";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nelson12.Dev - Porfolio",
    template: "%s | Porfolio",
  },
  description:
    "Découvre mon porfolio pour prendre connaissance de mon savoir faire",
  keywords: ["Porfolio", "Nelson"],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { i18n } = await getTranslation(locale, "common");
  const translations = i18n.getResourceBundle(locale, "common");

  // console.log("📚 Traductions disponibles:", translations); // Debug

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar locale={locale} translations={translations?.nav} />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer locale={locale} translations={translations} />
      </body>
    </html>
  );
}
