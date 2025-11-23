import { TProject } from "@/types";

export const projects: TProject[] = [
  {
    title: "Resalys Booking Engine",
    description:
      "Webapp de réservation d’hébergements avec espace client développée pour Septeo Hospitality.",
    imageUrl: "/resalys-booking-engine.png",
    projectUrl: "https://resalys-booking-engine.vercel.app/",
    codeTags: [
      { id: "react", label: "React" },
      { id: "ts", label: "TypeScript" },
      { id: "graphql", label: "GraphQL" },
      { id: "node", label: "Node.js" },
      { id: "tailwind", label: "TailwindCSS" },
      { id: "nextjs", label: "ShadCN" },
    ],
  },
  {
    title: "GraphQL Generator",
    description:
      "Outil CLI pour générer les fichiers types et requêtes GraphQL à partir d'un schéma existant.",
    imageUrl: "/gql.png",
    projectUrl: "https://github.com/weetrax/gql",
    codeTags: [{ id: "nextjs", label: "Codegen" }],
  },
  {
    title: "Tripsti",
    description:
      "Webapp de planification de voyages permettant aux utilisateurs de créer et gérer des itinéraires personnalisés.",
    imageUrl: "/tripsti.png",
    projectUrl: "https://next-tripsti-tawny.vercel.app/",
    codeTags: [
      { id: "nextjs", label: "NextJS" },
      { id: "react", label: "React" },
      { id: "ts", label: "TypeScript" },
      { id: "mongodb", label: "MongoDB" },
      { id: "tailwind", label: "TailwindCSS" },
    ],
  },
  {
    title: "AbsMedical (Projet universitaire)",
    description:
      "Application bureau à destination des médecins et établissements scolaire, permettant de justifier numériquement les absences d'un étudiant à travers une carte numérique avec puce RFID pour l'authentification de celui-ci.",
    imageUrl: "/absmedical.png",
    projectUrl: "https://github.com/weetrax/AbsMedicalWPF",
    codeTags: [
      { id: "c#", label: "C# / .NET" },
      { id: "c#", label: "WPF" },
      { id: "c#", label: "Entity Framework" },
      { id: "mysql", label: "MySQL" },
      { id: "css", label: "MahApps UI" },
    ],
  },
];
