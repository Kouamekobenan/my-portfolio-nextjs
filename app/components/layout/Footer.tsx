"use client";
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
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const SITE_NAME = "Nelson12.Dev";

const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@nelson23kouame?lang=fr",
  whatsapp: "https://web.facebook.com/nelson.kouame.2025?locale=fr_FR",
  github: "https://github.com/Kouamekobenan",
  linkedin:
    "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/?trk=opento_sprofile_topcard",
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
    className="group relative w-11 h-11 bg-gradient-to-br from-slate-100/50 to-slate-200/50
      dark:from-slate-800/50 dark:to-slate-900/50
      border border-slate-300/50 dark:border-slate-700/50
      rounded-2xl flex items-center justify-center
      transition-all duration-300 hover:scale-110
      hover:border-purple-400/50 dark:hover:border-purple-500/50
      hover:shadow-lg hover:shadow-purple-400/20 dark:hover:shadow-purple-500/20
      overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 
      group-hover:from-purple-500/10 group-hover:to-blue-500/10 
      transition-all duration-300"
    />
    <div className="relative z-10">{children}</div>
  </a>
);

export default function Footer({ locale, translations }: FooterProps) {
  const currentYear = new Date().getFullYear();
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      text-slate-600 dark:text-slate-300
      border-t border-slate-200/50 dark:border-slate-800/50
      overflow-hidden transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand section - spans 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href={`/${locale}`}
              className="inline-flex items-center space-x-3 group"
            >
              <div
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 
                rounded-xl flex items-center justify-center 
                group-hover:scale-110 transition-transform duration-300"
              >
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span
                className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600
                dark:from-purple-400 dark:via-purple-300 dark:to-blue-400"
              >
                {SITE_NAME}
              </span>
            </a>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base max-w-sm">
              {t?.description ??
                "Création de solutions web modernes et robustes. Développeur FullStack spécialisé en React, Node.js et architecture cloud."}
            </p>

            {/* Social links */}
            <div className="space-y-4 pt-2">
              <h3
                className="text-gray-900 dark:text-white font-semibold text-sm uppercase tracking-wider
                flex items-center gap-2"
              >
                {t?.socialTitle ?? "Connectons-nous"}
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
              </h3>

              <div className="flex gap-3 flex-wrap">
                <SocialIconLink href={SOCIAL_LINKS.github} label="GitHub">
                  <Github
                    size={20}
                    className="text-slate-600 dark:text-slate-400
                      group-hover:text-purple-600 dark:group-hover:text-purple-400
                      transition-colors"
                  />
                </SocialIconLink>

                <SocialIconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                  <Linkedin
                    size={20}
                    className="text-slate-600 dark:text-slate-400
                      group-hover:text-purple-600 dark:group-hover:text-purple-400
                      transition-colors"
                  />
                </SocialIconLink>

                <SocialIconLink href={SOCIAL_LINKS.tiktok} label="TikTok">
                  <Music2
                    size={20}
                    className="text-slate-600 dark:text-slate-400
                      group-hover:text-purple-600 dark:group-hover:text-purple-400
                      transition-colors"
                  />
                </SocialIconLink>

                <SocialIconLink href={SOCIAL_LINKS.whatsapp} label="Facebook">
                  <Facebook
                    size={20}
                    className="text-slate-600 dark:text-slate-400
                      group-hover:text-purple-600 dark:group-hover:text-purple-400
                      transition-colors"
                  />
                </SocialIconLink>
              </div>
            </div>
          </div>

          {/* Navigation columns - span 6 columns on large screens */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {Object.entries(FOOTER_LINKS).map(([key, links]) => (
              <div key={key} className="space-y-4">
                <h3
                  className="text-gray-900 dark:text-white font-semibold text-sm uppercase tracking-wider
                  flex items-center gap-2"
                >
                  {t?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1)}
                  <div className="h-px w-6 bg-gradient-to-r from-purple-500/50 to-transparent" />
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group text-slate-600 dark:text-slate-400
                          hover:text-purple-600 dark:hover:text-purple-400
                          transition-all duration-200 text-sm
                          flex items-center gap-2"
                      >
                        <span
                          className="w-0 group-hover:w-1.5 h-1.5
                          bg-purple-600 dark:bg-purple-400 rounded-full
                          transition-all duration-200"
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact info - spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-4">
            <h3
              className="text-gray-900 dark:text-white font-semibold text-sm uppercase tracking-wider
              flex items-center gap-2"
            >
              {t?.contactInfo ?? "Contact"}
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:kouamenelson47@gmail.com"
                className="group flex items-start gap-3 text-slate-600 dark:text-slate-400
                  hover:text-purple-600 dark:hover:text-purple-400
                  transition-colors text-sm p-3 rounded-xl
                  hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
              >
                <div
                  className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                  rounded-lg flex items-center justify-center flex-shrink-0 
                  group-hover:scale-110 transition-transform"
                >
                  <Mail
                    size={16}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
                <span className="break-all">kouamenelson47@gmail.com</span>
              </a>

              <a
                href="tel:+2250506832678"
                className="group flex items-center gap-3 text-slate-600 dark:text-slate-400
                  hover:text-purple-600 dark:hover:text-purple-400
                  transition-colors text-sm p-3 rounded-xl
                  hover:bg-slate-100/50 dark:hover:bg-slate-800/30"
              >
                <div
                  className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                  rounded-lg flex items-center justify-center flex-shrink-0 
                  group-hover:scale-110 transition-transform"
                >
                  <Phone
                    size={16}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
                <span>+225 0506832678</span>
              </a>

              <div
                className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm
                p-3 rounded-xl"
              >
                <div
                  className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                  rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <MapPin
                    size={16}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
                <span>{t?.location ?? "Abidjan, Côte d'Ivoire"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 border-t border-slate-200/50 dark:border-slate-800/50
        backdrop-blur-sm bg-slate-100/50 dark:bg-slate-950/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs
            text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">
                © {currentYear} {SITE_NAME}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                {t?.rights ?? "Tous droits réservés"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span>{t?.madeWith ?? "Développé avec"}</span>
              <Heart
                size={14}
                className="text-red-500 fill-red-500 animate-pulse"
              />
              <span>{t?.passion ?? "et rigueur"}</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`/${locale}/privacy`}
                className="hover:text-purple-600 dark:hover:text-purple-400
                  transition-colors flex items-center gap-1 group"
              >
                {t?.privacy ?? "Confidentialité"}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 
                  transition-opacity"
                />
              </a>
              <a
                href={`/${locale}/terms`}
                className="hover:text-purple-600 dark:hover:text-purple-400
                  transition-colors flex items-center gap-1 group"
              >
                {t?.terms ?? "Conditions"}
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 
                  transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
