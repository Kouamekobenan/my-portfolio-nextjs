import { ReactNode } from "react";
import type { Metadata } from "next";
import NavBar from "../components/layout/NavBar";
import { getTranslation } from "../i18n";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nelson12.Dev - Portfolio",
    template: "%s | Portfolio",
  },
  description: "Découvre mon portfolio pour prendre connaissance de mon savoir faire",
  keywords: ["Portfolio", "Nelson"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { i18n } = await getTranslation(locale, "common");
  const translations = i18n.getResourceBundle(locale, "common");

  return (
    <>
      <NavBar locale={locale} translations={translations?.nav} />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer locale={locale} translations={translations} />
    </>
  );
}
