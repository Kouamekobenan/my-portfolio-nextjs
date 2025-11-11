import Banniere from "../components/features/Banniere";
import Projects from "../components/features/Projects";
import { getTranslation } from "../i18n";
import { LocaleCode } from "../lib/global.type";

interface HomePageProps {
  params: Promise<{
    locale: LocaleCode;
  }>;
}
export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const { i18n } = await getTranslation(locale, "common");
  const translations = i18n.getResourceBundle(locale, "common");
  const allTranslations = {
    nav: translations?.nav || {},
    banniere: translations?.banniere || {},
    projects: translations?.projects || {},
  };
  return (
    <div className="">
      <Banniere locale={locale as "en" | "fr"} translations={allTranslations} />
      <Projects  locale={locale as "en" | "fr"} translations={allTranslations} />
    </div>
  );
}
