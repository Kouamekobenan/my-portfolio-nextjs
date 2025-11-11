export interface ProductImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}
export interface BlogtImage {
  url: string;
  alt: string;
}

export interface ProductEntity {
  id: string;
  name: string;
  category: string;
  desc: string;
  img: ProductImage;
}
export interface BlogEntity {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export type LocaleConfig = {
  code: string;
  label: string;
  isRtl?: boolean;
  flag?: string;
};

/**
 * Liste des locales supportées
 */
export const LOCALES: readonly LocaleConfig[] = [
  {
    code: "en",
    label: "English",
    flag: "🇬🇧",
  },
  {
    code: "fr",
    label: "Français",
    flag: "🇫🇷",
  },
  {
    code: "ar",
    label: "العربية",
    isRtl: true,
    flag: "🇸🇦",
  },
] as const;

/**
 * Type union des codes de locale
 */
export type LocaleCode = (typeof LOCALES)[number]["code"];

/**
 * Locale par défaut
 */
export const DEFAULT_LOCALE: LocaleCode = "en";

/**
 * Vérifier si une locale est valide
 */
export function isValidLocale(locale: string): locale is LocaleCode {
  return LOCALES.some((l) => l.code === locale);
}

/**
 * Obtenir la configuration d'une locale
 */
export function getLocaleConfig(locale: string): LocaleConfig | undefined {
  return LOCALES.find((l) => l.code === locale);
}

/**
 * Vérifier si une locale est RTL
 */
export function isRtlLocale(locale: string): boolean {
  return getLocaleConfig(locale)?.isRtl === true;
}

/**
 * Obtenir la locale depuis les params Next.js
 */
export function getLocaleFromParams(params: { locale: string }): LocaleCode {
  const locale = params.locale;
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE;
}
