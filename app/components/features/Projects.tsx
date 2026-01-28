"use client";
import React, { useState, useRef, useMemo } from "react";
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
import { motion, useInView } from "framer-motion";
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

interface projectProps {
  locale: "en" | "fr";
  translations: Record<string, Record<string, string>>;
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
        hover:border-slate-300 dark:hover:border-slate-700
        transition-all duration-300 cursor-pointer 
        hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50
        hover:-translate-y-1"
    >
      {/* Type Badge - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`${getTypeColor(project.type)} 
          px-3 py-1.5 rounded-full flex items-center gap-2 
          shadow-lg backdrop-blur-sm`}
        >
          {getTypeIcon(project.type)}
          <span className="text-xs font-semibold text-white capitalize">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Project Name */}
        <div className="pr-20">
          <h3
            className="text-xl font-bold text-slate-900 dark:text-white 
            group-hover:text-purple-600 dark:group-hover:text-purple-400 
            transition-colors duration-300"
          >
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed 
          line-clamp-2 min-h-[40px]"
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.values(project.technologies)
            .flat()
            .slice(0, 3)
            .map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 
                  text-slate-700 dark:text-slate-300 
                  rounded-lg text-xs font-medium
                  border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          {Object.values(project.technologies).flat().length > 3 && (
            <span
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 
              text-slate-500 dark:text-slate-400 
              rounded-lg text-xs font-medium"
            >
              +{Object.values(project.technologies).flat().length - 3}
            </span>
          )}
        </div>

        {/* Footer - Status & Platform */}
        <div
          className="flex items-center justify-between pt-4 
          border-t border-slate-100 dark:border-slate-800"
        >
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Database className="w-4 h-4" />
            <span className="text-xs font-medium">
              {project.deployment.platform}
            </span>
          </div>

          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
            ${
              project.status === "deployed"
                ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20"
                : "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20"
            }`}
          >
            {project.status === "deployed" ? (
              <>
                <Check className="w-3 h-3" />
                <span>Live</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3" />
                <span>En cours</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className="absolute inset-0 border-2 border-transparent 
        group-hover:border-purple-200 dark:group-hover:border-purple-900/50 
        rounded-2xl transition-colors duration-300 pointer-events-none"
      />
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
  const t = translations.projects;

  // Fonction utilitaire pour obtenir l'icône de type
  const getTypeIcon = (type: string) => {
    const iconClass = "w-4 h-4 text-white";
    switch (type) {
      case "fullstack":
        return <Monitor className={iconClass} />;
      case "frontend":
        return <Palette className={iconClass} />;
      case "backend":
        return <Server className={iconClass} />;
      case "vitrine":
        return <Code className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  // Fonction utilitaire pour obtenir la couleur de fond du type
  const getTypeColor = (type: string): string => {
    switch (type) {
      case "fullstack":
        return "bg-purple-500";
      case "frontend":
        return "bg-blue-500";
      case "backend":
        return "bg-emerald-500";
      case "vitrine":
        return "bg-amber-500";
      default:
        return "bg-slate-500";
    }
  };

  const filteredProjects =
    selectedType === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === selectedType);

  const types = [
    {
      value: "all",
      label: t?.filter_all ?? "Tous",
      count: projectsData.length,
    },
    {
      value: "fullstack",
      label: t?.filter_fullstack ?? "Fullstack",
      count: projectsData.filter((p) => p.type === "fullstack").length,
    },
    {
      value: "frontend",
      label: t?.filter_frontend ?? "Frontend",
      count: projectsData.filter((p) => p.type === "frontend").length,
    },
    {
      value: "backend",
      label: t?.filter_backend ?? "Backend",
      count: projectsData.filter((p) => p.type === "backend").length,
    },
    {
      value: "vitrine",
      label: t?.filter_vitrine ?? "Vitrine",
      count: projectsData.filter((p) => p.type === "vitrine").length,
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 lg:py-24 
        transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 
            bg-purple-50 dark:bg-purple-500/10 
            border border-purple-200 dark:border-purple-500/20 
            rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span
              className="text-sm font-semibold text-purple-600 dark:text-purple-400 
              uppercase tracking-wide"
            >
              {t?.header_tag ?? "Portfolio"}
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold 
            text-slate-900 dark:text-white"
          >
            {t?.header_title ?? "Mes Projets"}
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t?.header_description ??
              "Découvrez un aperçu de mes réalisations techniques et professionnelles."}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 
            scrollbar-hide justify-center flex-wrap"
        >
          {types.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              className={`relative px-5 py-2.5 rounded-xl font-medium 
                transition-all duration-300 whitespace-nowrap
                ${
                  selectedType === type.value
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
            >
              <span className="flex items-center gap-2">
                {type.label}
                {type.count > 0 && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full
                    ${
                      selectedType === type.value
                        ? "bg-white/20 dark:bg-slate-900/20"
                        : "bg-slate-100 dark:bg-slate-800"
                    }`}
                  >
                    {type.count}
                  </span>
                )}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div
              className="inline-flex items-center justify-center w-16 h-16 
              bg-slate-100 dark:bg-slate-800 rounded-full mb-4"
            >
              <Code className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Aucun projet trouvé dans cette catégorie
            </p>
          </div>
        )}
      </div>

      {/* Modal Detail */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm 
            flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-slate-900 rounded-2xl 
              max-w-4xl w-full max-h-[90vh] overflow-y-auto
              shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="sticky top-0 z-20 bg-white dark:bg-slate-900 
              border-b border-slate-200 dark:border-slate-800 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`${getTypeColor(selectedProject.type)} 
                      p-2 rounded-lg`}
                    >
                      {getTypeIcon(selectedProject.type)}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        selectedProject.status === "deployed"
                          ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      {selectedProject.status === "deployed"
                        ? "Déployé"
                        : "En cours"}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {selectedProject.name}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-shrink-0 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 
                    rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>
            {/* Modal Body */}
            <div className="p-6 space-y-8">
              {/* Client */}
              {selectedProject.client && (
                <div
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 
                  border border-slate-200 dark:border-slate-800"
                >
                  <span
                    className="text-sm font-semibold text-slate-500 dark:text-slate-400 
                    uppercase tracking-wide block mb-2"
                  >
                    {t?.modal_client_title ?? "Client"}
                  </span>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    {selectedProject.client}
                  </p>
                </div>
              )}
              {/* Technologies */}
              <div>
                <h3
                  className="text-lg font-bold text-slate-900 dark:text-white 
                  mb-4 flex items-center gap-2"
                >
                  <Code className="w-5 h-5 text-purple-500" />
                  {t?.modal_technologies_title ?? "Technologies"}
                </h3>
                <div className="space-y-4">
                  {Object.entries(selectedProject.technologies).map(
                    ([key, techs]) =>
                      techs.length > 0 && (
                        <div key={key}>
                          <span
                            className="text-sm font-semibold text-slate-600 
                            dark:text-slate-400 mb-2 block capitalize"
                          >
                            {key}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-white dark:bg-slate-800 
                                  text-slate-700 dark:text-slate-300 
                                  rounded-lg text-sm font-medium
                                  border border-slate-200 dark:border-slate-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </div>
              {/* Features */}
              <div>
                <h3
                  className="text-lg font-bold text-slate-900 dark:text-white 
                  mb-4 flex items-center gap-2"
                >
                  <Monitor className="w-5 h-5 text-purple-500" />
                  {t?.modal_features_title ?? "Fonctionnalités"}
                </h3>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full 
                        bg-purple-100 dark:bg-purple-500/10 
                        flex items-center justify-center mt-0.5"
                      >
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deployment Section */}
              <div
                className="bg-gradient-to-br from-slate-50 to-slate-100 
                dark:from-slate-800/50 dark:to-slate-800/30 
                rounded-xl p-6 border border-slate-200 dark:border-slate-800"
              >
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center 
                  justify-between gap-4"
                >
                  <div>
                    <span
                      className="text-sm font-semibold text-slate-500 
                      dark:text-slate-400 uppercase tracking-wide block mb-1"
                    >
                      {t?.deployment_platform_label ?? "Plateforme"}
                    </span>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">
                        {selectedProject.deployment.platform}
                      </span>
                    </div>
                  </div>

                  {selectedProject.deployment.url && (
                    <a
                      href={selectedProject.deployment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 
                        bg-slate-900 dark:bg-white 
                        text-white dark:text-slate-900 
                        rounded-xl font-semibold 
                        hover:bg-slate-800 dark:hover:bg-slate-100
                        transition-colors duration-200 shadow-lg"
                    >
                      <span>
                        {t?.modal_deployment_button ?? "Voir le projet"}
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
