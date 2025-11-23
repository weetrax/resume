import { TExperience } from "@/types";

export const experiences: TExperience[] = [
  {
    place: {
      title: "Septeo Hospitality (ex Sequoiasoft) - Valbonne, FR",
      href: "https://www.septeo.com/fr/metier/hospitality",
    },
    role: "Développeur Web Front-End",
    period: "déc. 2021 - aujourd'hui",
    description:
      "Refonte complète de l’application de réservation Resalys en ReactJS, optimisée pour l’expérience utilisateur et les performances. Développement des canaux de réservation et de l’espace client avec des solutions évolutives, intégration avancée de l’API GraphQL avec Apollo, et création d’un Storybook pour documenter les composants et faciliter la maintenance et la collaboration.",
    codeTags: [
      { id: "react", label: "React" },
      { id: "ts", label: "TypeScript" },
      { id: "graphql", label: "GraphQL" },
      { id: "node", label: "Node.js" },
      { id: "tailwind", label: "TailwindCSS" },
    ],
  },
  {
    place: {
      title: "bnetwork - Cannes, FR",
      href: "https://www.bnetwork.com/",
    },
    role: "Développeur Full-Stack",
    period: "sept. 2016 - oct. 2020",
    description:
      "Étude et optimisation du back-end, développement d’interfaces intuitives & responsive, intégration d’APIs tierces, solutions innovantes et collaboration directe avec les clients pour des services performants et adaptatifs.",
    codeTags: [
      { id: "c#", label: "C# / .NET" },
      { id: "sqlserver", label: "SQL Server" },
      { id: "js", label: "JavaScript" },
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "gmap_api", label: "API Google Maps" },
      { id: "ds_api", label: "API DocuSign" },
    ],
  },
  {
    place: { title: "Westi - Cannes, FR", href: "" },
    role: "(Stage) Développeur Full-Stack",
    period: "janv. 2016 - mars 2016",
    description:
      "Développement d’une plateforme de partage de frais en ASP.NET, avec conception MySQL, front- et back-end complet, et intégration d’APIs externes (FlightStats, QPX Express) pour enrichir les fonctionnalités.",
    codeTags: [
      { id: "c#", label: "C# / .NET" },
      { id: "mysql", label: "MySQL" },
      { id: "js", label: "JavaScript" },
      { id: "html", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "f_api", label: "API FlightStats" },
      { id: "qpx_api", label: "API QPX Express" },
    ],
  },
];
