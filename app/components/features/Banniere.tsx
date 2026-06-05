"use client";
import { useState, useEffect } from "react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface HeroProps {
  locale: "en" | "fr";
  translations: Record<string, Record<string, string>>;
}

const ROLES_FR = [
  "Développeur FullStack",
  "Expert React & Next.js",
  "Développeur Node.js & NestJS",
  "Créateur d'Apps Web",
];
const ROLES_EN = [
  "FullStack Developer",
  "React & Next.js Expert",
  "Node.js & NestJS Expert",
  "Web App Creator",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Banniere({ locale, translations }: HeroProps) {
  const banniere = translations.banniere;
  const roles = locale === "en" ? ROLES_EN : ROLES_FR;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 70;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setTimeout(() => setIsDeleting(true), 2400);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const socialLinks = [
    { name: "GitHub",   icon: Github,   url: "https://github.com/Kouamekobenan" },
    { name: "LinkedIn", icon: Linkedin,  url: "https://www.linkedin.com/in/no%C3%ABl-kouame-133339225/" },
    { name: "Email",    icon: Mail,      url: "mailto:kouamenelson47@gmail.com" },
  ];

  const bio =
    locale === "en"
      ? "I transform ideas into modern, high-performance web an mobile applications  — from frontend to backend."
      : "Je transforme les idées en applications web et mobiles modernes et performantes, du frontend au backend.";

  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right panel tint */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900/50 dark:to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-300/10 dark:bg-purple-500/8 blur-[120px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-12 lg:gap-16 xl:gap-24 items-center py-24 lg:py-0">

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="space-y-7 sm:space-y-8"
          >
            {/* Status */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                {banniere?.available ?? "Disponible pour opportunités"}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-1">
              <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                {banniere?.greeting ?? "Bonjour, je suis"}
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tighter text-slate-900 dark:text-white">
                Nelson
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400">
                  Kouame.
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} className="min-h-[2rem] sm:min-h-[2.5rem]">
              <span className="text-lg sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                {displayText}
                <span className="animate-pulse text-purple-500 dark:text-purple-400 ml-0.5 font-light">
                  |
                </span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                {banniere?.bio ?? bio}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white
                  bg-slate-900 dark:bg-white dark:text-slate-900
                  hover:bg-slate-800 dark:hover:bg-slate-100
                  shadow-lg shadow-slate-900/15 dark:shadow-white/10
                  transition-all duration-200 hover:scale-[1.02]"
              >
                {banniere?.viewProjects ?? "Voir mes projets"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/images/nelson-cv.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold
                  text-slate-700 dark:text-slate-300
                  border-2 border-slate-200 dark:border-slate-700
                  hover:border-purple-400 dark:hover:border-purple-500
                  hover:text-purple-600 dark:hover:text-purple-400
                  transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                {banniere?.downloadCV ?? "Télécharger CV"}
              </a>
            </motion.div>

            {/* Social + Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/80"
            >
              {/* Social links */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target={url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-9 h-9 flex items-center justify-center rounded-lg
                      text-slate-500 dark:text-slate-400
                      border border-slate-200 dark:border-slate-700
                      hover:text-slate-900 dark:hover:text-white
                      hover:border-slate-400 dark:hover:border-slate-500
                      hover:bg-slate-50 dark:hover:bg-slate-800
                      transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stats */}
              <div className="flex items-center gap-5 sm:gap-7">
                {[
                  { value: "10+", label: locale === "en" ? "Projects" : "Projets" },
                  { value: "3+",  label: locale === "en" ? "Years"    : "Ans Exp." },
                  { value: "12+", label: locale === "en" ? "Techs"    : "Technos" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-none">
                      {value}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 dark:from-purple-500/40 dark:to-blue-500/40" />
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-purple-200/60 dark:border-purple-500/20" />

              {/* Photo */}
              <div className="relative w-[300px] xl:w-[360px] h-[400px] xl:h-[460px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-slate-950/50">
                <Image
                  src="/images/nelson1.jpg"
                  alt="Nelson Kouame — Développeur FullStack"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>

              {/* Available pill on image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-5 left-6
                  inline-flex items-center gap-2 px-4 py-2.5
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-700
                  rounded-full shadow-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-white whitespace-nowrap">
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── MOBILE ONLY: Small avatar + stats ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex lg:hidden items-center gap-6"
          >
            {/* Small circular avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full p-[2.5px] bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/nelson1.jpg"
                    alt="Nelson Kouame"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950" />
            </div>
            {/* Stats beside avatar */}
            <div className="flex gap-5">
              {[
                { value: "10+", label: locale === "en" ? "Projects" : "Projets" },
                { value: "3+",  label: locale === "en" ? "Years"    : "Ans Exp." },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-black text-slate-900 dark:text-white leading-none">{value}</p>
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity duration-300">
        <div className="w-5 h-8 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-500 dark:bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
