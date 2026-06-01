"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Music2,
  ArrowRight,
  Download,
  Sparkles,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface HeroProps {
  locale: "en" | "fr";
  translations: Record<string, Record<string, string>>;
}

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

const ROLES_FR = [
  "Développeur FullStack",
  "Expert React & Next.js",
  "Développeur Node.js",
  "Créateur d'Apps Web",
];
const ROLES_EN = [
  "FullStack Developer",
  "React & Next.js Expert",
  "Node.js Developer",
  "Web App Creator",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Banniere({ locale, translations }: HeroProps) {
  const banniere = translations.banniere;
  const roles = locale === "en" ? ROLES_EN : ROLES_FR;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const skills = [
    "JavaScript",
    "NestJS",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Kouamekobenan",
      hoverClass:
        "hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-white dark:hover:text-slate-900 dark:hover:border-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/?trk=opento_sprofile_topcard",
      hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://web.facebook.com/nelson.kouame.2025?locale=fr_FR",
      hoverClass: "hover:bg-blue-700 hover:text-white hover:border-blue-700",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/2250506832678",
      hoverClass: "hover:bg-green-500 hover:text-white hover:border-green-500",
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://www.tiktok.com/@nelson23kouame?lang=fr",
      hoverClass: "hover:bg-pink-600 hover:text-white hover:border-pink-600",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kouamenelson47@gmail.com",
      hoverClass: "hover:bg-red-500 hover:text-white hover:border-red-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-100 via-violet-100 to-blue-100 dark:from-purple-900/20 dark:via-violet-900/15 dark:to-blue-900/20 blur-3xl opacity-70 dark:opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-100 to-cyan-100 dark:from-indigo-900/20 dark:to-cyan-900/20 blur-3xl opacity-60 dark:opacity-40" />
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.018] dark:opacity-[0.04]">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Main layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-24 items-center py-16 sm:py-24 lg:py-32">

          {/* ── Left: text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="space-y-5 sm:space-y-7"
          >
            {/* Status pill */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {banniere?.available ?? "Disponible pour opportunités"}
                </span>
              </span>
            </motion.div>
            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium tracking-wide">
                {banniere?.greeting ?? "Bonjour, je suis"}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                Kouame
                <span className="block text-transparent uppercase bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400">
                  Kobeenan Noel
                </span>
              </h1>
            </motion.div>

            {/* Animated role — typewriter */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 min-h-[2.5rem]"
            >
              <Code2 className="w-5 h-5 text-purple-500 dark:text-purple-400 flex-shrink-0" />
              <span className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
                {displayText}
                <span className="animate-pulse text-purple-500 dark:text-purple-400 ml-0.5">
                  |
                </span>
              </span>
            </motion.div>

            {/* Info tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                Freelance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                Abidjan, Côte d&apos;Ivoire
              </span>
            </motion.div>

            {/* Stack */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.18em]">
                {banniere?.technologies ?? "Stack technique"}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 text-sm font-semibold rounded-lg cursor-default
                      bg-white dark:bg-slate-900
                      text-slate-700 dark:text-slate-300
                      border border-slate-200 dark:border-slate-700
                      hover:border-purple-400 dark:hover:border-purple-500
                      hover:text-purple-600 dark:hover:text-purple-400
                      hover:shadow-sm transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
              <CustomLink href="#projects">
                <span className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white
                  bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600
                  hover:from-purple-700 hover:via-violet-700 hover:to-blue-700
                  shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
                  transition-all duration-300 hover:scale-[1.03]">
                  {banniere?.viewProjects ?? "Voir mes projets"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </CustomLink>

              <a
                href="/images/nelson-cv.pdf"
                download
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold
                  bg-white dark:bg-slate-900
                  text-slate-900 dark:text-white
                  border-2 border-slate-200 dark:border-slate-700
                  hover:border-purple-400 dark:hover:border-purple-500
                  hover:shadow-md transition-all duration-300 hover:scale-[1.03]"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                {banniere?.downloadCV ?? "Télécharger CV"}
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-2.5 rounded-lg border
                    bg-slate-50 dark:bg-slate-800/50
                    border-slate-200 dark:border-slate-700
                    text-slate-500 dark:text-slate-400
                    ${social.hoverClass}
                    transition-all duration-200`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>
          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={mounted ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-purple-400/20 via-violet-400/20 to-blue-400/20 dark:from-purple-500/25 dark:via-violet-500/25 dark:to-blue-500/25 blur-3xl" />

              {/* Image frame */}
              <div className="relative w-75 h-75 sm:w-164 sm:h-104 lg:w-[380px] lg:h-[380px]">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/30">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-950" />
                </div>

                {/* Photo */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <Image
                    src="/images/nelson1.jpg"
                    alt="Kouame Kobenan Noel — Développeur FullStack"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>

                {/* Floating badge — Disponible */}
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.85 }}
                  animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.9, duration: 0.45, ease: "easeOut" }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2
                    inline-flex items-center gap-2 px-5 py-2.5
                    bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-slate-700
                    rounded-full shadow-xl shadow-slate-300/40 dark:shadow-slate-900/60"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white whitespace-nowrap">
                    Disponible
                  </span>
                </motion.div>

                {/* Floating badge — Expérience */}
                <motion.div
                  initial={{ opacity: 0, x: 12, scale: 0.85 }}
                  animate={mounted ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ delay: 1.1, duration: 0.45, ease: "easeOut" }}
                  className="absolute hidden sm:flex -right-6 top-1/3
                    flex-col items-center px-4 py-3
                    bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-slate-700
                    rounded-2xl shadow-xl shadow-slate-300/40 dark:shadow-slate-900/60"
                >
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                    3+
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-tight">
                    Ans<br />Exp.
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity duration-300">
        <div className="w-5 h-8 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-500 dark:bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
