import React from "react";
// Importation des icônes Lucide-React
import {
  Cake, // Pour la date de naissance (anniversaire)
  MapPin, // Pour la localisation
  Mail, // Pour l'email
  Phone, // Pour le téléphone
  FileText, // Pour le bouton CV
  Code, // Pour le titre de développeur
} from "lucide-react";

// Définition de l'interface pour le système de traduction
interface HeroProps {
  // Structure: { 'about': { 'key': 'value' } }
  translations: Record<string, Record<string, string>>;
}

export default function About({ translations }: HeroProps) {
  // Extraction des clés de traduction pour la section 'about'
  const t = translations.about;

  const userInfo = {
    name: t?.name ?? "Kouamé Kobenan Noel",
    // Utilise la valeur traduite pour la date et le lieu, avec fallback en FR
    dateOfBirth: t?.dateOfBirth ?? "06/11/2003",
    location: t?.location ?? "Bondoukou, Côte d'Ivoire",
    // Utilise le titre traduit, avec fallback
    title: t?.developer_title ?? "Développeur FullStack",

    // Utilise le texte de bio traduit, avec fallback long en FR
    bio:
      t?.bio ??
      "Passionné par la création de solutions web robustes et élégantes. Spécialisé en développement FullStack, j'excelle dans la construction d'applications performantes du front-end au back-end. Mon objectif est de transformer les idées complexes en expériences utilisateur fluides et intuitives, en utilisant les dernières technologies comme React, Node.js et les bases de données modernes.",
    email: t?.email ?? "kouamenelson47@gmail.com",
    phone: t?.phone ?? "+2250506832678",
  };
  // Les icônes Lucide peuvent recevoir des props (taille, couleur, etc.)
  const iconProps = {
    // 💡 Nouveau style d'icône : plus grande et gradient/néon
    className: "w-6 h-6 mr-4 text-purple-400 min-w-[1.5rem] flex-shrink-0",
  };

  return (
    // 💡 Nouveau background très sombre pour un effet moderne
    <div
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-gray-300 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Titre Principal (Accent gradient) */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center mb-12">
          <span className="inline-block mr-4 align-middle">
            <Code className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {t?.title ?? "À Propos de Moi"}
          </span>
        </h2>

        {/* Contenu principal: Utilisation de Flex/Grid pour le responsive */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Section Informations Clés (Glassmorphism Card) */}
          <div
            className="md:col-span-1 
            bg-white/5 backdrop-blur-md p-8 rounded-3xl 
            shadow-2xl border border-purple-500/20 
            hover:border-purple-400/50 transition-all duration-500 h-full 
            transform hover:scale-[1.01]"
          >
            <h3 className="text-xl font-bold uppercase tracking-wider text-purple-400 mb-6">
              {t?.developer_title_label ?? "Profil"}
            </h3>

            <p className="text-3xl font-extrabold text-white mb-6 leading-snug">
              {userInfo.title}
            </p>

            <div className="space-y-6 text-gray-300 mt-8">
              {/* Date de Naissance */}
              <div className="flex items-start">
                <Cake {...iconProps} />
                <div>
                  <span className="text-sm font-semibold block text-gray-400">
                    {t?.dob_label ?? "Né le"}
                  </span>
                  <span className="font-bold text-white">
                    {userInfo.dateOfBirth}
                  </span>
                </div>
              </div>

              {/* Lieu */}
              <div className="flex items-start">
                <MapPin {...iconProps} />
                <div>
                  <span className="text-sm font-semibold block text-gray-400">
                    {t?.location_label ?? "Lieu"}
                  </span>
                  <span className="font-bold text-white">
                    {userInfo.location}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail {...iconProps} />
                <div>
                  <span className="text-sm font-semibold block text-gray-400">
                    {t?.email_label ?? "Email"}
                  </span>
                  <a
                    href={`mailto:${userInfo.email}`}
                    className="hover:text-purple-400 transition-colors duration-300 text-white font-medium break-all"
                  >
                    {userInfo.email}
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start">
                <Phone {...iconProps} />
                <div>
                  <span className="text-sm font-semibold block text-gray-400">
                    {t?.phone_label ?? "Téléphone"}
                  </span>
                  <span className="text-white font-medium">
                    {userInfo.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Biographie (Glassmorphism Card) */}
          <div
            className="md:col-span-2 
            bg-white/5 backdrop-blur-md p-8 rounded-3xl 
            shadow-2xl border border-blue-500/20 
            hover:border-blue-400/50 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold text-white mb-6 border-b border-blue-500/50 pb-3 inline-block">
              {t?.subtitle ?? "Ma Présentation"}
            </h3>

            <p className="text-xl text-gray-300 leading-relaxed space-y-4">
              {/* Ici, on pourrait utiliser une fonction pour split le bio en paragraphes si nécessaire,
                  mais on respecte la structure du contenu actuel. */}
              {userInfo.bio}
            </p>

            {/* Bouton pour télécharger le CV (Style néon) */}
            <div className="mt-10">
                <a
                  href="images/my-cv.pdf"
                  download
                  className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full backdrop-blur-sm border-2 border-purple-500/30 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                >
                  {t?.downloadCV ?? "Télécharger CV"}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
