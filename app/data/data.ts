// Types pour la structure des données
export interface Project {
  id: string;
  name: string;
  description: string;
  type: "fullstack" | "frontend" | "backend" | "vitrine";
  technologies: {
    frontend?: string[];
    backend?: string[];
    desktop?: string[];
    database?: string[];
    other?: string[];
  };
  deployment: {
    platform: string;
    url?: string;
  };
  client?: string;
  features: string[];
  status: "deployed" | "in-progress" | "completed";
  startDate?: string;
  endDate?: string;
}

// Base de données des projets
export const projectsFr: Project[] = [
  {
    id: "1",
    name: "12Depot - Gestion d'Inventaire",
    description:
      "Plateforme complète de gestion des inventaires de stocks multi-tenant avec interface desktop",
    type: "fullstack",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["NestJS", "TypeScript", "PostgreSQL"],
      desktop: ["Electron"],
      database: ["PostgreSQL"],
      other: ["Railway"],
    },
    deployment: {
      platform: "Railway",
      url: "https://depot-website-production.up.railway.app/",
    },
    features: [
      "Gestion multi-tenant",
      "Suivi en temps réel des stocks",
      "Application desktop (Electron)",
      "Rapports et statistiques",
      "Gestion des utilisateurs et permissions",
      "Alertes de stock faible",
    ],
    status: "deployed",
    startDate: "2024-01",
    endDate: "2024-06",
  },
  {
    id: "2",
    name: "Afrikamazing - Site Vitrine",
    description:
      "Site vitrine professionnel présentant l'entreprise Afrikamazing et ses services",
    type: "vitrine",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      other: ["Vercel"],
    },
    deployment: {
      platform: "Vercel",
      url: "https://afrikamazing-hxbb.vercel.app/",
    },
    client: "Afrikamazing",
    features: [
      "Présentation de l'entreprise",
      "Catalogue de services",
      "Formulaire de contact",
      "Design responsive",
      "Optimisation SEO",
      "Performance optimale",
    ],
    status: "deployed",
    startDate: "2024-03",
    endDate: "2024-04",
  },
  {
    id: "3",
    name: "Salon de Coiffure - Site Vitrine",
    description:
      "Site vitrine moderne pour un salon de coiffure présentant les services et faciliter les réservations",
    type: "vitrine",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      other: ["Vercel"],
    },
    deployment: {
      platform: "Vercel",
      url: "https://site-coiffure-mvoc.vercel.app/",
    },
    client: "Salon de Coiffure",
    features: [
      "Présentation du salon",
      "Catalogue des services et tarifs",
      "Galerie photos des réalisations",
      "Système de prise de rendez-vous",
      "Informations de contact et localisation",
      "Design élégant et moderne",
    ],
    status: "deployed",
    startDate: "2024-04",
    endDate: "2024-05",
  },
  {
    id: "4",
    name: "Plateforme E-commerce Multi-vendeurs",
    description:
      "Backend robuste pour une plateforme e-commerce supportant plusieurs vendeurs",
    type: "backend",
    technologies: {
      backend: ["NestJS", "TypeScript", "PostgreSQL", "Redis"],
      database: ["PostgreSQL", "Redis"],
      other: ["Railway", "Stripe API", "AWS S3"],
    },
    deployment: {
      platform: "Railway",
      url: "https://api-ecommerce.example.com",
    },
    features: [
      "Gestion multi-vendeurs",
      "Système d'authentification JWT",
      "Gestion des produits et catégories",
      "Système de commandes",
      "Intégration paiement en ligne",
      "Gestion des stocks par vendeur",
      "API RESTful complète",
      "Notifications en temps réel",
    ],
    status: "deployed",
    startDate: "2024-02",
    endDate: "2024-07",
  },
  {
    id: "5",
    name: "12Depot Backend API",
    description:
      "API backend pour la plateforme de gestion d'inventaire multi-tenant 12Depot",
    type: "backend",
    technologies: {
      backend: ["NestJS", "TypeScript", "Prisma"],
      database: ["PostgreSQL"],
      other: ["Railway", "JWT", "WebSockets"],
    },
    deployment: {
      platform: "Railway",
      url: "https://api-boisson-production-bd26.up.railway.app/api/docs",
    },
    features: [
      "Architecture multi-tenant",
      "API REST complète",
      "Authentification et autorisation",
      "Gestion des stocks en temps réel",
      "WebSockets pour les mises à jour live",
      "Génération de rapports",
      "Gestion des rôles et permissions",
      "Audit logs et traçabilité",
    ],
    status: "deployed",
    startDate: "2024-01",
    endDate: "2024-05",
  },
];

export const projectsEn: Project[] = [
  {
    id: "1",
    name: "12Depot - Inventory Management",
    description:
      "Complete multi-tenant stock inventory management platform with a desktop interface.",
    type: "fullstack",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["NestJS", "TypeScript", "PostgreSQL"],
      desktop: ["Electron"],
      database: ["PostgreSQL"],
      other: ["Railway"],
    },
    deployment: {
      platform: "Railway",
      url: "https://depot-website-production.up.railway.app/",
    },
    features: [
      "Multi-tenant management",
      "Real-time stock tracking",
      "Desktop application (Electron)",
      "Reports and statistics",
      "User and permission management",
      "Low stock alerts",
    ],
    status: "deployed",
    startDate: "2024-01",
    endDate: "2024-06",
  },
  {
    id: "2",
    name: "Afrikamazing - Showcase Website",
    description:
      "Professional showcase website presenting the Afrikamazing company and its services.",
    type: "vitrine", // (vitrine often translates to "showcase" or "portfolio" website)
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      other: ["Vercel"],
    },
    deployment: {
      platform: "Vercel",
      url: "https://afrikamazing-hxbb.vercel.app/",
    },
    client: "Afrikamazing",
    features: [
      "Company presentation",
      "Service catalog",
      "Contact form",
      "Responsive design",
      "SEO optimization",
      "Optimal performance",
    ],
    status: "deployed",
    startDate: "2024-03",
    endDate: "2024-04",
  },
  {
    id: "3",
    name: "Hair Salon - Showcase Website",
    description:
      "Modern showcase website for a hair salon presenting services and facilitating bookings.",
    type: "vitrine",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      other: ["Vercel"],
    },
    deployment: {
      platform: "Vercel",
      url: "https://site-coiffure-mvoc.vercel.app/",
    },
    client: "Hair Salon",
    features: [
      "Salon presentation",
      "Service and price catalog",
      "Photo gallery of work",
      "Appointment booking system",
      "Contact and location information",
      "Elegant and modern design",
    ],
    status: "deployed",
    startDate: "2024-04",
    endDate: "2024-05",
  },
  {
    id: "4",
    name: "Multi-Vendor E-commerce Platform",
    description:
      "Robust backend for an e-commerce platform supporting multiple sellers.",
    type: "backend",
    technologies: {
      backend: ["NestJS", "TypeScript", "PostgreSQL", "Redis"],
      database: ["PostgreSQL", "Redis"],
      other: ["Railway", "Stripe API", "AWS S3"],
    },
    deployment: {
      platform: "Railway",
      url: "https://api-boisson-production-bd26.up.railway.app/api/docs",
    },
    features: [
      "Multi-vendor management",
      "JWT authentication system",
      "Product and category management",
      "Order system",
      "Online payment integration",
      "Stock management per vendor",
      "Complete RESTful API",
      "Real-time notifications",
    ],
    status: "deployed",
    startDate: "2024-02",
    endDate: "2024-07",
  },
  {
    id: "5",
    name: "12Depot Backend API",
    description:
      "Backend API for the 12Depot multi-tenant inventory management platform.",
    type: "backend",
    technologies: {
      backend: ["NestJS", "TypeScript", "Prisma"],
      database: ["PostgreSQL"],
      other: ["Railway", "JWT", "WebSockets"],
    },
    deployment: {
      platform: "Railway",
      url: "https://api-boisson-production-bd26.up.railway.app/api/docs",
    },
    features: [
      "Multi-tenant architecture",
      "Complete REST API",
      "Authentication and authorization",
      "Real-time inventory management",
      "WebSockets for live updates",
      "Report generation",
      "Role and permission management",
      "Audit logs and traceability",
    ],
    status: "deployed",
    startDate: "2024-01",
    endDate: "2024-05",
  },
];

export const getProjectData = (locale: string): Project[] => {
  switch (locale) {
    case "fr":
      return projectsFr;
    default:
      return projectsEn;
  }
};
