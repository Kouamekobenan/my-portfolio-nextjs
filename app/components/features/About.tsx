"use client";
import React from "react";
import {
  Cake,
  MapPin,
  Mail,
  Phone,
  Download,
  Code2,
  Layers,
  Briefcase,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  translations: Record<string, Record<string, string>>;
}

const STATS = [
  { label: "Projets", value: "10+", icon: Briefcase },
  { label: "Ans Exp.", value: "2+", icon: Calendar },
  { label: "Technos", value: "12+", icon: Layers },
];

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    color: "blue" as const,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "purple" as const,
    skills: ["Node.js", "NestJS", "Express", "REST API"],
  },
  {
    label: "Base de données",
    color: "emerald" as const,
    skills: ["PostgreSQL", "MySQL", "Prisma", "MongoDB"],
  },
  {
    label: "Outils",
    color: "amber" as const,
    skills: ["Git", "Docker", "VS Code", "Postman"],
  },
];

const BADGE_COLORS = {
  blue:   "bg-blue-50   dark:bg-blue-500/10   border-blue-200   dark:border-blue-500/20   text-blue-700   dark:text-blue-400",
  purple: "bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400",
  emerald:"bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
  amber:  "bg-amber-50  dark:bg-amber-500/10  border-amber-200  dark:border-amber-500/20  text-amber-700  dark:text-amber-400",
};

const TAG_COLORS = {
  blue:   "bg-blue-100   dark:bg-blue-500/20   text-blue-800   dark:text-blue-300",
  purple: "bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300",
  emerald:"bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300",
  amber:  "bg-amber-100  dark:bg-amber-500/20  text-amber-800  dark:text-amber-300",
};

export default function About({ translations }: HeroProps) {
  const t = translations.about;

  const userInfo = {
    dateOfBirth: t?.dateOfBirth ?? "06/11/2003",
    location:    t?.location    ?? "Abidjan, Côte d'Ivoire",
    title:       t?.developer_title ?? "Développeur FullStack",
    bio:         t?.bio         ?? "Passionné par la création de solutions web robustes et élégantes. Spécialisé en développement FullStack, j'excelle dans la construction d'applications performantes du front-end au back-end. Mon objectif est de transformer les idées complexes en expériences utilisateur fluides et intuitives.",
    email:       t?.email       ?? "kouamenelson47@gmail.com",
    phone:       t?.phone       ?? "+2250506832678",
  };

  const infoItems = [
    { icon: Cake,   label: t?.dob_label      ?? "Né le",        value: userInfo.dateOfBirth, href: null },
    { icon: MapPin, label: t?.location_label ?? "Localisation", value: userInfo.location,    href: null },
    { icon: Mail,   label: t?.email_label    ?? "Email",        value: userInfo.email,       href: `mailto:${userInfo.email}` },
    { icon: Phone,  label: t?.phone_label    ?? "Téléphone",    value: userInfo.phone,       href: `tel:${userInfo.phone}` },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-100 dark:bg-purple-900/10 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-100 dark:bg-blue-900/10 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.22em] mb-3">
            {t?.sectionTag ?? "Qui suis-je"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            {t?.titleFirst ?? "À Propos"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400">
              {t?.titleAccent ?? "de Moi"}
            </span>
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400" />
          </div>
        </motion.div>

        {/* ── Main grid: 2 / 3 columns ── */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* ── LEFT — Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Profile card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              {/* Gradient top bar */}
              <div className="h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500" />

              <div className="p-7">
                {/* Name + role badge */}
                <div className="mb-7">
                  <h3 className="text-2xl font-black leading-tight text-slate-900 dark:text-white">
                    Kouamé Kobenan
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                      Noel
                    </span>
                  </h3>
                  <span className="inline-block mt-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400">
                    {userInfo.title}
                  </span>
                </div>

                {/* Info list */}
                <div className="space-y-5">
                  {infoItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-semibold text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-800 dark:text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-7 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      {t?.available ?? "Disponible pour de nouveaux projets"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 text-center"
                >
                  <Icon className="w-4 h-4 text-purple-500 dark:text-purple-400 mx-auto mb-1.5" />
                  <p className="text-xl font-black text-slate-900 dark:text-white">{value}</p>
                  <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-tight mt-0.5">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Bio + skills ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Bio card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  {t?.subtitle ?? "Ma Présentation"}
                </h3>
              </div>

              <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {userInfo.bio}
              </p>

              <div className="mt-8">
                <a
                  href="/images/nelson-cv.pdf"
                  download
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white
                    bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600
                    hover:from-purple-700 hover:via-violet-700 hover:to-blue-700
                    shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35
                    transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  {t?.downloadCV ?? "Télécharger mon CV"}
                </a>
              </div>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map(({ label, skills, color }, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + idx * 0.07 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5"
                >
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border mb-4 ${BADGE_COLORS[color]}`}>
                    {label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${TAG_COLORS[color]}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
