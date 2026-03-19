"use client";
import React, { useState, useRef, useMemo } from "react";
import Image from "next/image"; // Importation pour les images optimisées
import {
  ExternalLink,
  Code,
  Database,
  Monitor,
  Server,
  Palette,
  X,
  Sparkles,
  Check,
} from "lucide-react";
import { getProjectData, Project } from "@/app/data/data";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { getLocaleFromParams, LocaleCode } from "@/app/lib/global.type";

// 1. Définir l'interface pour les Props du ProjectCard
interface ProjectCardProps {
  project: Project;
  getTypeColor: (type: string) => string;
  getTypeIcon: (type: string) => React.ReactElement;
  setSelectedProject: (project: Project | null) => void;
  delay?: number;
}

// Définition précise des traductions pour les projets
interface ProjectTranslations {
  header_tag?: string;
  header_title?: string;
  header_description?: string;
  filter_all?: string;
  filter_fullstack?: string;
  filter_frontend?: string;
  filter_backend?: string;
  filter_vitrine?: string;
  modal_client_title?: string;
  modal_technologies_title?: string;
  modal_features_title?: string;
  modal_deployment_button?: string;
  deployment_platform_label?: string;
}

// Interface globale pour les props du composant
interface projectProps {
  locale: "en" | "fr"; // Ajout de la propriété manquante
  translations: {
    projects: ProjectTranslations;
    // nav?: any;      // On peut garder any ici ou typer si besoin
    // banniere?: any; 
  };
}

type LocaleParams = {
  locale: LocaleCode;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  getTypeColor,
  getTypeIcon,
  setSelectedProject,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      onClick={() => setSelectedProject(project)}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden 
        border border-slate-200 dark:border-slate-800
        hover:border-purple-300 dark:hover:border-purple-900/50
        transition-all duration-300 cursor-pointer 
        hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5
        hover:-translate-y-2"
    >
      {/* Project Image Header */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={project.image || "/images/projects/placeholder.jpg"}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={project.id === "1"} // Priorité de chargement pour le premier projet
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Type Badge - Positioned over Image */}
        <div className="absolute top-4 right-4 z-10">
          <div
            className={`${getTypeColor(project.type)} 
            px-3 py-1.5 rounded-full flex items-center gap-2 
            shadow-lg backdrop-blur-md bg-opacity-90`}
          >
            {getTypeIcon(project.type)}
            <span className="text-xs font-bold text-white capitalize">
              {project.type}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3
          className="text-xl font-bold text-slate-900 dark:text-white 
          group-hover:text-purple-600 dark:group-hover:text-purple-400 
          transition-colors duration-300"
        >
          {project.name}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
          {project.description}
        </p>

        {/* Technologies - Affichage limité à 3 */}
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.values(project.technologies)
            .flat()
            .slice(0, 3)
            .map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800/50 
                  text-slate-600 dark:text-slate-300 
                  rounded-md text-[11px] font-semibold uppercase tracking-wider
                  border border-slate-100 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          {Object.values(project.technologies).flat().length > 3 && (
            <span className="px-2.5 py-1 text-slate-400 text-[11px] font-bold">
              +{Object.values(project.technologies).flat().length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500">
            <Database className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-tight">
              {project.deployment.platform}
            </span>
          </div>

          <div
            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase
            ${
              project.status === "deployed"
                ? "text-emerald-500 border border-emerald-500/20 bg-emerald-500/5"
                : "text-amber-500 border border-amber-500/20 bg-amber-500/5"
            }`}
          >
            {project.status === "deployed" ? (
              <Check className="w-3 h-3" />
            ) : (
              <Sparkles className="w-3 h-3" />
            )}
            <span>{project.status === "deployed" ? "Live" : "Dev"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Composant Principal Projects ---

export const Projects = ({ translations }: projectProps) => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const params = useParams() as LocaleParams;

  const currentLocale = useMemo<LocaleCode>(() => {
    return getLocaleFromParams(params);
  }, [params]);

  const projectsData = getProjectData(currentLocale);
  const t = translations?.projects;

  const getTypeIcon = (type: string) => {
    const iconClass = "w-3.5 h-3.5 text-white";
    switch (type) {
      case "fullstack":
        return <Monitor className={iconClass} />;
      case "frontend":
        return <Palette className={iconClass} />;
      case "backend":
        return <Server className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case "fullstack":
        return "bg-purple-600";
      case "frontend":
        return "bg-blue-600";
      case "backend":
        return "bg-emerald-600";
      case "vitrine":
        return "bg-amber-600";
      default:
        return "bg-slate-600";
    }
  };

  const filteredProjects =
    selectedType === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === selectedType);

  return (
    <div
      id="projects"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            {t?.header_title ?? "Mes Projets"}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t?.header_description ?? "Une sélection de mes travaux récents."}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["all", "fullstack", "frontend", "backend", "vitrine"].map(
            (type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                ${
                  selectedType === type
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-xl scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:border-purple-500"
                }`}
              >
                {type.toUpperCase()}
              </button>
            ),
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              getTypeColor={getTypeColor}
              getTypeIcon={getTypeIcon}
              setSelectedProject={setSelectedProject}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-[100]"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hero Image in Modal */}
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={
                      selectedProject.image ||
                      "/images/projects/placeholder.jpg"
                    }
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-colors text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-8 sm:p-12 -mt-12 relative z-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span
                      className={`${getTypeColor(selectedProject.type)} text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg`}
                    >
                      {selectedProject.type}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">
                      {selectedProject.startDate} —{" "}
                      {selectedProject.endDate || "Present"}
                    </span>
                  </div>

                  <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
                    {selectedProject.name}
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 mb-4">
                          Description
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 mb-4">
                          Fonctionnalités clés
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                            >
                              <Check className="w-4 h-4 text-emerald-500" />
                              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                                {f}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-purple-500 mb-4">
                          Stack Technique
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Object.values(selectedProject.technologies)
                            .flat()
                            .map((t, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                        </div>
                      </div>

                      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                        {selectedProject.deployment.url && (
                          <a
                            href={selectedProject.deployment.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-black transition-all shadow-xl shadow-purple-500/20 active:scale-95"
                          >
                            VOIR LE PROJET
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
