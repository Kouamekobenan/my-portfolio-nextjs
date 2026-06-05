import { ReactNode } from "react";
import type { Metadata } from "next";
import NavBar from "../components/layout/NavBar";
import { getTranslation } from "../i18n";
import Footer from "../components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nelsonkouame.dev";

const SEO = {
  fr: {
    title:
      "Nelson Kouame — Développeur FullStack React & Node.js | Portfolio",
    description:
      "Nelson Kouame, Développeur FullStack basé à Abidjan, Côte d'Ivoire. Spécialisé en React, Next.js, TypeScript, Node.js et NestJS. Disponible pour freelance et projets web.",
    keywords: [
      "développeur fullstack",
      "développeur react",
      "développeur nextjs",
      "développeur nodejs",
      "développeur typescript",
      "développeur nestjs",
      "développeur web abidjan",
      "développeur côte d'ivoire",
      "freelance développeur web",
      "Nelson Kouame",
      "portfolio développeur",
    ],
    ogLocale: "fr_FR",
    altLocale: "en_US",
  },
  en: {
    title:
      "Nelson Kouame — FullStack Developer React & Node.js | Portfolio",
    description:
      "Nelson Kouame, FullStack Developer based in Abidjan, Ivory Coast. Specialized in React, Next.js, TypeScript, Node.js and NestJS. Available for freelance and web projects.",
    keywords: [
      "fullstack developer",
      "react developer",
      "nextjs developer",
      "nodejs developer",
      "typescript developer",
      "nestjs developer",
      "web developer abidjan",
      "ivory coast developer",
      "freelance web developer",
      "Nelson Kouame",
      "developer portfolio",
    ],
    ogLocale: "en_US",
    altLocale: "fr_FR",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "fr";
  const seo = SEO[lang];

  return {
    title: {
      default: seo.title,
      template: `%s | Nelson Kouame`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Nelson Kouame", url: SITE_URL }],
    creator: "Nelson Kouame",
    publisher: "Nelson Kouame",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: seo.ogLocale,
      alternateLocale: [seo.altLocale],
      url: `${SITE_URL}/${locale}`,
      siteName: "Nelson Kouame — Portfolio",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/images/nelson1.jpg",
          width: 1200,
          height: 630,
          alt:
            lang === "fr"
              ? "Nelson Kouame — Développeur FullStack"
              : "Nelson Kouame — FullStack Developer",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/images/nelson1.jpg"],
      creator: "@nelsonkouame",
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/fr`,
      },
    },
  };
}

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nelson Kouame",
    alternateName: "Kouamé Kobenan Noel",
    url: SITE_URL,
    email: "kouamenelson47@gmail.com",
    image: `${SITE_URL}/images/nelson1.jpg`,
    jobTitle:
      locale === "en" ? "FullStack Developer" : "Développeur FullStack",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abidjan",
      addressCountry: "CI",
    },
    sameAs: [
      "https://github.com/Kouamekobenan",
      "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Tailwind CSS",
    ],
    knowsLanguage: ["Français", "English"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar locale={locale} translations={translations?.nav} />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer locale={locale} translations={translations} />
    </>
  );
}
