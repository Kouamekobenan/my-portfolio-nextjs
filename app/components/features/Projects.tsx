"use client";
import React, { useState, useRef, useMemo } from "react";
import {
  ExternalLink,
  Code,
  Database,
  Monitor,
  Server,
  Palette,
  Filter,
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
  delay = 0, // Délai pour l'effet de cascade
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.6, delay: delay }}
      onClick={() => setSelectedProject(project)}
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 group relative transform hover:-translate-y-1"
    >
      {/* Project Header - L'accent coloré reste au top */}
      <div
        className={`${getTypeColor(
          project.type
        )} p-4 flex items-center gap-3 bg-opacity-90 backdrop-blur-sm`}
      >
        {getTypeIcon(project.type)}
        <div className="flex-1">
          <h3 className="text-white font-extrabold text-xl">{project.name}</h3>
          <span className="text-white/80 text-sm capitalize">
            {project.type}
          </span>
        </div>
      </div>

      {/* Project Body */}
      <div className="p-5">
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies - Style de tag plus moderne et cohérent */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.values(project.technologies)
            .flat()
            .slice(0, 3)
            .map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-xs font-semibold hover:bg-slate-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          {Object.values(project.technologies).flat().length > 3 && (
            <span className="px-3 py-1 bg-slate-700 text-slate-400 rounded-full text-xs font-semibold">
              +{Object.values(project.technologies).flat().length - 3}
            </span>
          )}
        </div>

        {/* Deployment & Status */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400 font-light">
              {project.deployment.platform}
            </span>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === "deployed"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}
          >
            {project.status === "deployed" ? "Deployed" : "En cours"}
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

  const t = translations.projects;
  // Fonction utilitaire pour obtenir l'icône de type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "fullstack":
        return <Monitor className="w-5 h-5 text-white" />;
      case "frontend":
        return <Palette className="w-5 h-5 text-white" />;
      case "backend":
        return <Server className="w-5 h-5 text-white" />;
      case "vitrine":
        return <Code className="w-5 h-5 text-white" />;
      default:
        return <Code className="w-5 h-5 text-white" />;
    }
  };

  // Fonction utilitaire pour obtenir la couleur de fond du type
  const getTypeColor = (type: string): string => {
    switch (type) {
      case "fullstack":
        return "bg-purple-600";
      case "frontend":
        return "bg-blue-600";
      case "backend":
        return "bg-green-600";
      case "vitrine":
        return "bg-orange-600";
      default:
        return "bg-gray-600";
    }
  };

  const filteredProjects =
    selectedType === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === selectedType);

  const types = [
    { value: "all", label: t?.filter_all ?? "Tous les projets" },
    { value: "fullstack", label: t?.filter_fullstack ?? "Fullstack" },
    { value: "frontend", label: t?.filter_frontend ?? "Frontend" },
    { value: "backend", label: t?.filter_backend ?? "Backend" },
    { value: "vitrine", label: t?.filter_vitrine ?? "Sites Vitrine" },
  ];

  // Variations pour l'animation des filtres
  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="min-h-screen bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centré et audacieux */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold uppercase text-blue-400 tracking-wider mb-2">
            {t?.header_tag ?? "Réalisations"}
          </h2>
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight">
            {t?.header_title ?? "Mes Projets"}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t?.header_description ??
              "Découvrez un aperçu de mes réalisations techniques et professionnelles."}
          </p>
        </motion.div>
        <motion.div
          variants={filterVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-12 flex-wrap justify-center"
        >
          <Filter className="w-5 h-5 text-blue-400" />
          {types.map((type) => (
            <motion.button
              key={type.value}
              variants={itemVariants}
              onClick={() => setSelectedType(type.value)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
                selectedType === type.value
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-[1.05]"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700/70 hover:text-white"
              }`}
            >
              {type.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid avec animation de cascade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              // Les fonctions sont maintenant correctement typées
              getTypeColor={getTypeColor}
              getTypeIcon={getTypeIcon}
              setSelectedProject={setSelectedProject}
              delay={index * 0.15} // Animation en cascade (staggering)
            />
          ))}
        </div>

        {/* Modal Detail - Légèrement revu pour plus de clarté */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30 shadow-2xl shadow-blue-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`${getTypeColor(
                  selectedProject.type
                )} p-6 sticky top-0 bg-opacity-90 backdrop-blur-sm rounded-t-2xl border-b border-white/10`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">
                      {selectedProject.name}
                    </h2>
                    <p className="text-white/90 font-light">
                      {selectedProject.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white ml-4 hover:bg-white/20 rounded-full p-2 transition-colors flex-shrink-0"
                  >
                    <Code className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Modal Body */}
              <div className="p-6 space-y-8">
                {/* Client */}
                {selectedProject.client && (
                  <div>
                    <h3 className="text-lg text-white font-bold mb-2 flex items-center gap-2">
                      {t?.modal_client_title ?? " Client"}
                    </h3>
                    <p className="text-blue-400 font-medium bg-slate-700/50 p-3 rounded-lg">
                      {selectedProject.client}
                    </p>
                  </div>
                )}
                {/* Technologies */}
                <div>
                  <h3 className="text-lg text-white font-bold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    {t?.modal_technologies_title ?? "Technologies Utilisées"}
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(selectedProject.technologies).map(
                      ([key, techs]) =>
                        techs.length > 0 && (
                          <div key={key}>
                            <span className="text-sm text-blue-400 font-semibold mb-2 block capitalize">
                              {key}:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-4 py-1 bg-slate-700 text-slate-300 rounded-full text-sm shadow-inner"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg text-white font-bold mb-4 flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-blue-400" />{" "}
                    {t?.modal_features_title ?? "Fonctionnalités Clés"}
                  </h3>
                  <ul className="space-y-3 pl-5 list-disc text-slate-300">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-base">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deployment */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700/50">
                  <div>
                    <span className="text-sm text-slate-400 block mb-1">
                      {t?.deployment_platform_label ?? " Déployé sur"}
                    </span>
                    <span className="text-white font-medium text-lg">
                      {selectedProject.deployment.platform}
                    </span>
                  </div>
                  {selectedProject.deployment.url && (
                    <a
                      href={selectedProject.deployment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 sm:mt-0 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-semibold shadow-lg shadow-blue-500/40"
                    >
                      <span>
                        {t?.modal_deployment_button ?? "Voir le projet"}
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Projects;
