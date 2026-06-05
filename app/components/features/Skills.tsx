"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ROW_1 = [
  { name: "React",        color: "blue"    },
  { name: "Next.js",      color: "slate"   },
  { name: "TypeScript",   color: "blue"    },
  { name: "Node.js",      color: "emerald" },
  { name: "NestJS",       color: "red"     },
  { name: "Tailwind CSS", color: "cyan"    },
  { name: "PostgreSQL",   color: "indigo"  },
  { name: "MongoDB",      color: "emerald" },
  { name: "Docker",       color: "sky"     },
  { name: "Git",          color: "orange"  },
];

const ROW_2 = [
  { name: "JavaScript",   color: "yellow"  },
  { name: "Express",      color: "slate"   },
  { name: "Prisma",       color: "violet"  },
  { name: "MySQL",        color: "blue"    },
  { name: "REST API",     color: "purple"  },
  { name: "HTML / CSS",   color: "orange"  },
  { name: "Redux",        color: "purple"  },
  { name: "Figma",        color: "pink"    },
  { name: "Postman",      color: "orange"  },
  { name: "VS Code",      color: "blue"    },
];

const COLORS: Record<string, string> = {
  blue:    "bg-blue-50   dark:bg-blue-500/10   border-blue-200   dark:border-blue-500/25   text-blue-700   dark:text-blue-300",
  slate:   "bg-slate-100 dark:bg-slate-700/40  border-slate-200  dark:border-slate-600/40  text-slate-700  dark:text-slate-300",
  emerald: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-300",
  red:     "bg-red-50    dark:bg-red-500/10    border-red-200    dark:border-red-500/25    text-red-700    dark:text-red-300",
  cyan:    "bg-cyan-50   dark:bg-cyan-500/10   border-cyan-200   dark:border-cyan-500/25   text-cyan-700   dark:text-cyan-300",
  indigo:  "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/25 text-indigo-700 dark:text-indigo-300",
  sky:     "bg-sky-50    dark:bg-sky-500/10    border-sky-200    dark:border-sky-500/25    text-sky-700    dark:text-sky-300",
  orange:  "bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/25 text-orange-700 dark:text-orange-300",
  yellow:  "bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/25 text-yellow-700 dark:text-yellow-300",
  violet:  "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/25 text-violet-700 dark:text-violet-300",
  purple:  "bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/25 text-purple-700 dark:text-purple-300",
  pink:    "bg-pink-50   dark:bg-pink-500/10   border-pink-200   dark:border-pink-500/25   text-pink-700   dark:text-pink-300",
};

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div
      className={`
        flex-shrink-0 px-5 py-2.5 rounded-full border font-semibold text-sm
        whitespace-nowrap select-none
        ${COLORS[color] ?? COLORS.slate}
      `}
    >
      {name}
    </div>
  );
}

function Marquee({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof ROW_1;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];
  const sign = direction === "left" ? "-50%" : "50%";
  const from = direction === "left" ? "0%" : "-50%";

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10
        bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10
        bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

      <motion.div
        className="flex gap-3"
        animate={{ x: [from, sign] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((tech, i) => (
          <TechBadge key={`${tech.name}-${i}`} name={tech.name} color={tech.color} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[300px] bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.22em] mb-3">
            Stack technique
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 dark:from-purple-400 dark:via-violet-400 dark:to-blue-400">
              Compétences
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Les technologies que j&apos;utilise au quotidien pour concevoir des applications modernes.
          </p>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400" />
          </div>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Marquee items={ROW_1} direction="left"  speed={35} />
          <Marquee items={ROW_2} direction="right" speed={28} />
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "2+",  label: "Frontend",  sub: "React · Next.js · TS"     },
            { value: "3+",  label: "Backend",   sub: "Node · NestJS · Express"  },
            { value: "4+",  label: "Databases", sub: "SQL · NoSQL · Prisma"     },
            { value: "10+", label: "Outils",    sub: "Git · Docker · Postman"   },
          ].map(({ value, label, sub }) => (
            <div
              key={label}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">{value}</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">{label}</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
