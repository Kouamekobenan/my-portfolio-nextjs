import type { Metadata } from "next";
import ContactForm from "../../components/features/ContactForm";
import { getTranslation } from "../../i18n";
import { LocaleCode } from "../../lib/global.type";

interface ContactPageProps {
  params: Promise<{ locale: LocaleCode }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nelsonkouame.dev";

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";

  const title = isFr
    ? "Contact — Démarrons un projet ensemble"
    : "Contact — Let's Start a Project Together";

  const description = isFr
    ? "Contactez Nelson Kouame pour votre prochain projet web. Développeur FullStack disponible en freelance ou CDI depuis Abidjan, Côte d'Ivoire. Réponse sous 24h."
    : "Contact Nelson Kouame for your next web project. FullStack Developer available for freelance or full-time from Abidjan, Ivory Coast. Reply within 24h.";

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Nelson Kouame`,
      description,
      url: `${SITE_URL}/${locale}/contact`,
      images: [{ url: "/images/nelson1.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: {
        fr: `${SITE_URL}/fr/contact`,
        en: `${SITE_URL}/en/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const { i18n } = await getTranslation(locale, "common");
  const translations = i18n.getResourceBundle(locale, "common");
  const contactTranslations = translations?.contact || {};

  return (
    <div>
      <ContactForm translations={contactTranslations} />
    </div>
  );
}
