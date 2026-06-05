import type { Metadata } from "next";
import About from "@/app/components/features/About";
import { getTranslation } from "@/app/i18n";
import { LocaleCode } from "@/app/lib/global.type";

interface AboutPageProps {
  params: Promise<{ locale: LocaleCode }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nelsonkouame.dev";

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";

  const title = isFr
    ? "À Propos — Parcours & Compétences"
    : "About — Background & Skills";

  const description = isFr
    ? "Découvrez le parcours de Nelson Kouame, développeur FullStack passionné par React, Next.js et Node.js. 3+ ans d'expérience, 10+ projets livrés depuis Abidjan."
    : "Discover Nelson Kouame's journey as a FullStack developer passionate about React, Next.js and Node.js. 3+ years experience, 10+ projects delivered from Abidjan.";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Nelson Kouame`,
      description,
      url: `${SITE_URL}/${locale}/about`,
      images: [{ url: "/images/nelson1.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        fr: `${SITE_URL}/fr/about`,
        en: `${SITE_URL}/en/about`,
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const { i18n } = await getTranslation(locale, "common");
  const translations = i18n.getResourceBundle(locale, "common");

  return (
    <div className="about">
      <About translations={translations} />
    </div>
  );
}
