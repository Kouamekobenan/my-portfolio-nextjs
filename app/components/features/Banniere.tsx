import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Music2,
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
  // Si le lien est interne (commence par # ou /), utiliser <a>
  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  // Sinon, utiliser <a> avec target="_blank" pour les liens externes
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
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/?trk=opento_sprofile_topcard",
      color: "hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://web.facebook.com/nelson.kouame.2025?locale=fr_FR",
      color: "hover:text-blue-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/2250506832678",
      color: "hover:text-green-500",
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://www.tiktok.com/@nelson23kouame?lang=fr",
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kouamenelson47@gmail.com",
      color: "hover:text-red-500",
    },
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
                <div className="absolute inset-2 bg-slate-900 rounded-full overflow-hidden border-2 border-white/10">
                  {/* Remplacement de Next.js Image par <img> standard */}
                  <Image
                    src="/images/nelson.png"
                    alt="Kouame Kobenan Noel - Développeur FullStack"
                    width={384} // Equivalent à lg:w-96
                    height={384} // Equivalent à lg:h-96
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="text-sm font-bold">
                  {banniere?.available ?? "Disponible"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="order-2 lg:order-2 text-center lg:text-left space-y-6">
            {/* Greeting */}
            <div className="inline-block">
              <span className="text-purple-400 font-semibold text-lg bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                {banniere?.greeting ?? "👋 Bonjour, je suis"}
              </span>
            </div>
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
              Kouame Kobenan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Noel
              </span>
            </h1>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
              Développeur
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}
                FullStack
              </span>
            </h2>

            {/* Education & Location */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-400">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Étudiant en 3ème année IDA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Abidjan, Côte d&apos;Ivoire</span>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                {banniere?.technologies ?? "Technologies"}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-4">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                {banniere?.socialMedia ?? "Réseaux Sociaux"}
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <CustomLink href="#projects">
                <button
                  id="projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {banniere?.viewProjects ?? "Voir mes projets"}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </button>
              </CustomLink>
              {/* Télécharger CV Button - MODIFICATION CORRIGÉE */}
              <a
                href="images/my-cv.pdf"
                download
                className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full backdrop-blur-sm border-2 border-purple-500/30 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                {banniere?.downloadCV ?? "Télécharger CV"}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
