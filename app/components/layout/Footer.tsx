import { LocaleCode } from "@/app/lib/global.type";
import {
  Facebook,
  Mail,
  Phone,
  MapPin,
  Heart,
  Music2, 
  Linkedin, 
  Github, 
} from "lucide-react";
const SITE_NAME = "Nelson12.Dev";
// Liens sociaux mis à jour avec des placeholders professionnels (Github, Linkedin)
const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@nelson23kouame?lang=fr",
  whatsapp: "https://web.facebook.com/nelson.kouame.2025?locale=fr_FR",
  github: "https://github.com/Kouamekobenan", // Lien GitHub fictif
  linkedin:
    "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/?trk=opento_sprofile_topcard", // Lien LinkedIn fictif
};

interface FooterProps {
  locale: LocaleCode;
  translations: Record<string, Record<string, string>>;
}
interface SocialIconLinkProps {
  href: string;
  children: React.ReactNode;
  label: string;
}
const SocialIconLink = ({ href, children, label }: SocialIconLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    // 💡 Style Neon pour les boutons sociaux
    className="w-10 h-10 bg-white/5 border border-transparent hover:border-purple-400/50 rounded-xl 
      flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg 
      hover:shadow-purple-500/50 group"
  >
    {children}
  </a>
);

export default function Footer({ locale, translations }: FooterProps) {
  const currentYear = new Date().getFullYear();
  // Utilise 'footer' comme clé dans la structure de traduction
  const t = translations.footer;

  const FOOTER_LINKS = {
    company: [
      { label: t?.about ?? "À propos", href: `/${locale}/about` },
      { label: t?.projects ?? "Projets", href: `/${locale}/#projects` },
      { label: t?.services ?? "Services", href: `/${locale}/#services` },
    ],
    explore: [
      { label: t?.blog ?? "Blog", href: `/${locale}/blog` },
      { label: t?.contact ?? "Contact", href: `/${locale}/contact` },
    ],
    support: [
      { label: t?.help ?? "Compétences", href: `/${locale}/#skills` },
      { label: t?.terms ?? "Mentions Légales", href: "#" },
    ],
  };

  return (
    // 💡 Background cohérent avec le thème sombre
    <footer className="bg-slate-950 text-gray-300 border-t border-purple-500/10">
      {/* Contenu principal du pied de page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Section Marque & Social */}
          <div className="lg:col-span-2 col-span-2 space-y-4">
            <a
              href={`/${locale}`}
              className="flex items-center space-x-2 group"
            >
              <span className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {SITE_NAME}
              </span>
            </a>

            {/* Description professionnelle adaptée */}
            <p className="text-gray-400 leading-relaxed max-w-md text-sm">
              {t?.description ??
                "Création de solutions web modernes et robustes. Développeur FullStack spécialisé en React, Node.js et architecture cloud."}
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {t?.socialTitle ?? "Connectons-nous"}
              </h3>

              {/* Conteneur d'Icônes Sociales */}
              <div className="flex gap-3">
                {/* 💡 GitHub */}
                <SocialIconLink href={SOCIAL_LINKS.github} label="GitHub">
                  <Github
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </SocialIconLink>

                {/* 💡 LinkedIn */}
                <SocialIconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                  <Linkedin
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </SocialIconLink>
                {/* TikTok (Utilisation de Music2 comme icône de fallback) */}
                <SocialIconLink href={SOCIAL_LINKS.tiktok} label="TikTok">
                  <Music2
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </SocialIconLink>

                {/* Facebook / WhatsApp (Gardé pour l'URL existante) */}
                <SocialIconLink href={SOCIAL_LINKS.whatsapp} label="Facebook">
                  <Facebook
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </SocialIconLink>
              </div>
            </div>
          </div>

          {/* Colonne 1: Liens de l'entreprise/Portfolio */}
          {Object.entries(FOOTER_LINKS).map(([key, links]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {t?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4 col-span-2 md:col-span-1 border-t md:border-t-0 border-gray-800 pt-4 md:pt-0">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              {t?.contactInfo ?? "Informations"}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:kouamenelson47@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <Mail
                  size={16}
                  className="group-hover:scale-110 transition-transform text-purple-400"
                />
                <span>kouamenelson47@gmail.com</span>
              </a>
              <a
                href="tel:+2250506832678"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm group"
              >
                <Phone
                  size={16}
                  className="group-hover:scale-110 transition-transform text-purple-400"
                />
                <span>+225 0506832678</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-purple-400"
                />
                <span>{t?.location ?? "Abidjan, Côte d'Ivoire"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span>
                © {currentYear} {SITE_NAME}.{" "}
                {t?.rights ?? "Tous droits réservés"}.
              </span>
            </div>
            {/* Fait avec amour... */}
            <div className="flex items-center gap-1">
              <span>{t?.madeWith ?? "Développé avec"}</span>
              <Heart
                size={14}
                className="text-red-500 fill-red-500 animate-pulse"
              />
              <span>{t?.passion ?? "et rigueur"}</span>
            </div>

            {/* Liens de confidentialité */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href={`/${locale}/privacy`}
                className="hover:text-purple-400 transition-colors"
              >
                {t?.privacy ?? "Confidentialité"}
              </a>
              <a
                href={`/${locale}/terms`}
                className="hover:text-purple-400 transition-colors"
              >
                {t?.terms ?? "Conditions"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
