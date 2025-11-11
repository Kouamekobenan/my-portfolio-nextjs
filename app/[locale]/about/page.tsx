import About from "@/app/components/features/About";
import { getTranslation } from "@/app/i18n";
import { LocaleCode } from "@/app/lib/global.type";
import React from "react";

interface AboutPageProps {
  params: Promise<{
    locale: LocaleCode;
  }>;
}
export default async function page({ params }: AboutPageProps) {
  const { locale } = await params;

  // Charger les traductions du namespace "common"
  const { i18n } = await getTranslation(locale, "common");

  // translations est maintenant de la forme : { about: { title: "...", ... }, skills: { ... } }
  const translations = i18n.getResourceBundle(locale, "common");
  // --- CORRECTION : Passer l'objet de traduction complet ---
  return (
    <div className="about">
      {/* On passe l'objet complet. La composant About fera l'extraction lui-même (translations.about) */}
      <About translations={translations} />
    </div>
  );
}
