import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Music2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

interface HeroProps {
  locale: "en" | "fr";
  translations: Record<string, Record<string, string>>;
}

// Fonction utilitaire pour créer un lien interne ou externe sécurisé
const CustomLink: React.FC<
  React.PropsWithChildren<{ href: string; className?: string }>
> = ({ href, children, className }) => {
  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default function Banniere({ translations }: HeroProps) {
  const banniere = translations.banniere;
  const skills = [
    "JavaScript",
    "NestJS",
    "NextJS",
    "React",
    "TypeScript",
    "Node.js",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Kouamekobenan",
      color: "hover:bg-slate-800 dark:hover:bg-slate-200",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/?trk=opento_sprofile_topcard",
      color: "hover:bg-blue-500/10 dark:hover:bg-blue-500/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://web.facebook.com/nelson.kouame.2025?locale=fr_FR",
      color: "hover:bg-blue-500/10 dark:hover:bg-blue-500/20",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/2250506832678",
      color: "hover:bg-green-500/10 dark:hover:bg-green-500/20",
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://www.tiktok.com/@nelson23kouame?lang=fr",
      color: "hover:bg-pink-500/10 dark:hover:bg-pink-500/20",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kouamenelson47@gmail.com",
      color: "hover:bg-red-500/10 dark:hover:bg-red-500/20",
    },
  ];

  return (
    <div
      className="relative min-h-[85vh] bg-gradient-to-b from-slate-50 via-white to-slate-50 
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 
      transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Soft Gradient Orbs - More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 
          rounded-full blur-3xl"
        ></div>
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 
          rounded-full blur-3xl"
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 
              bg-emerald-50 dark:bg-emerald-500/10 
              border border-emerald-200 dark:border-emerald-500/20 
              rounded-full"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full 
                  bg-emerald-400 opacity-75"
                ></span>
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5 
                  bg-emerald-500"
                ></span>
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                {banniere?.available ?? "Disponible pour opportunités"}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
                {banniere?.greeting ?? "Bonjour, je suis"}
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 
                dark:text-white leading-tight tracking-tight"
              >
                Kouame Kobenan
                <span
                  className="block bg-gradient-to-r from-purple-600 to-blue-600 
                  dark:from-purple-400 dark:to-blue-400 
                  bg-clip-text text-transparent"
                >
                  Noel
                </span>
              </h1>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 
                dark:text-slate-300"
              >
                Développeur{" "}
                <span className="text-purple-600 dark:text-purple-400 font-bold">
                  FullStack
                </span>
              </h2>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-3 text-sm">
              <div
                className="flex items-center gap-2 px-4 py-2 
                bg-slate-100 dark:bg-slate-800/50 
                rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-slate-700 dark:text-slate-300">
                  Étudiant 3ème année IDA
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 
                bg-slate-100 dark:bg-slate-800/50 
                rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-slate-700 dark:text-slate-300">
                  Abidjan, Côte d&apos;Ivoire
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p
                className="text-sm font-semibold text-slate-600 dark:text-slate-400 
                uppercase tracking-wide"
              >
                {banniere?.technologies ?? "Stack Technique"}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium
                      bg-white dark:bg-slate-800 
                      text-slate-700 dark:text-slate-300
                      border border-slate-200 dark:border-slate-700
                      rounded-lg
                      hover:border-purple-300 dark:hover:border-purple-600
                      hover:shadow-sm
                      transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <CustomLink href="#projects">
                <button
                  className="group inline-flex items-center gap-2 px-6 py-3 
                  bg-slate-900 dark:bg-white 
                  text-white dark:text-slate-900
                  font-semibold rounded-xl
                  hover:bg-slate-800 dark:hover:bg-slate-100
                  transition-all duration-200
                  shadow-lg shadow-slate-900/10 dark:shadow-white/10"
                >
                  {banniere?.viewProjects ?? "Voir mes projets"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CustomLink>

              <a
                href="/images/my-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 
                  bg-white dark:bg-slate-800 
                  text-slate-900 dark:text-white 
                  font-semibold rounded-xl
                  border-2 border-slate-200 dark:border-slate-700
                  hover:border-slate-300 dark:hover:border-slate-600
                  transition-all duration-200"
              >
                {banniere?.downloadCV ?? "Télécharger CV"}
              </a>
            </div>
            {/* Social Links - Compact */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-2.5 rounded-lg 
                    bg-slate-100 dark:bg-slate-800 
                    border border-slate-200 dark:border-slate-700
                    text-slate-600 dark:text-slate-400
                    hover:text-slate-900 dark:hover:text-white
                    ${social.color}
                    transition-all duration-200`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle Glow Effect */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-blue-300 
                dark:from-purple-600 dark:to-blue-600 
                rounded-full opacity-20 blur-2xl group-hover:opacity-30 
                transition-opacity duration-500"
              ></div>

              {/* Image Container - More Refined */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                {/* Border Ring */}
                <div
                  className="absolute inset-0 rounded-full 
                  bg-gradient-to-br from-purple-500 to-blue-500 
                  dark:from-purple-400 dark:to-blue-400 
                  p-[3px]"
                >
                  <div
                    className="w-full h-full rounded-full 
                    bg-white dark:bg-slate-900"
                  ></div>
                </div>

                {/* Image */}
                <div
                  className="absolute inset-[3px] rounded-full overflow-hidden 
                  bg-gradient-to-br from-slate-100 to-slate-200 
                  dark:from-slate-800 dark:to-slate-900"
                >
                  <Image
                    src="/images/nelson.png"
                    alt="Kouame Kobenan Noel - Développeur FullStack"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover 
                      scale-110 group-hover:scale-100
                      transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Floating Badge - More Subtle */}
                <div
                  className="absolute -bottom-2 -right-2 
                  bg-white dark:bg-slate-800 
                  border-2 border-slate-200 dark:border-slate-700
                  px-4 py-2 rounded-full shadow-lg
                  group-hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full 
                        rounded-full bg-emerald-400 opacity-75"
                      ></span>
                      <span
                        className="relative inline-flex rounded-full h-2 w-2 
                        bg-emerald-500"
                      ></span>
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        flex flex-col items-center gap-2 opacity-40 hover:opacity-100 
        transition-opacity cursor-pointer"
      >
        <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          Scroll
        </span>
        <div
          className="w-5 h-8 border-2 border-slate-300 dark:border-slate-700 
          rounded-full flex justify-center p-1"
        >
          <div
            className="w-1 h-2 bg-slate-400 dark:bg-slate-300 rounded-full 
            animate-bounce"
          >.</div>
        </div>
      </div>
    </div>
  );
}
