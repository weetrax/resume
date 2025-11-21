import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c as createLucideIcon, B as Button, M as Mail, a as cn, b as Building2 } from "./router-BZQW_lao.mjs";
import { memo, useState, useRef } from "react";
import { useScroll, motion as motion$1, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./server.mjs";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "node:http";
import "node:stream";
import "node:https";
import "node:http2";
import "node:fs";
import "node:url";
import "node:path";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode);
function CodeTag({ tag }) {
  function tagColor() {
    switch (tag.id) {
      case "c#":
        return "hover:bg-[#68217A]";
      case "js":
        return "hover:bg-[#F0DB4F]";
      case "sqlserver":
        return "hover:bg-[#ee352c]";
      case "mysql":
        return "hover:bg-[#ee352c]";
      case "html":
        return "hover:bg-[#E44D26]";
      case "css":
        return "hover:bg-[#1572B6]";
      case "gmap_api":
        return "hover:bg-[#0F9D58]";
      case "ds_api":
        return "hover:bg-[#4c00ff]";
      case "react":
        return "hover:bg-[#61DAFB]";
      case "ts":
        return "hover:bg-[#007acc]";
      case "node":
        return "hover:bg-[#4e9d45]";
      case "graphql":
        return "hover:bg-[#E434AA]";
      case "mongodb":
        return "hover:bg-[#47A248]";
      case "tailwind":
        return "hover:bg-[#38bdf8]";
      case "f_api":
        return "hover:bg-[#071C35]";
      case "qpx_api":
        return "hover:bg-[#4285F4]";
      case "nextjs":
        return "hover:bg-black hover:text-white";
      default:
        return "hover:bg-accent hover:text-accent-foreground";
    }
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "rounded-full border px-3 py-1 text-sm transition hover:text-white",
        tagColor()
      ),
      children: tag.label
    }
  );
}
function Experience({
  experience: { place, role, period, description, codeTags }
}) {
  return /* @__PURE__ */ jsxs("div", { className: "not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]", children: /* @__PURE__ */ jsx("div", { className: "border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 opacity-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex size-9 shrink-0 items-center justify-center rounded-full border", children: /* @__PURE__ */ jsx(Building2, {}) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: place.href,
            target: "_blank",
            className: "text-lg font-semibold hover:underline flex items-center gap-2 group",
            children: [
              place.title,
              /* @__PURE__ */ jsx(Link, { className: "inline size-4 opacity-0 text-black group-hover:opacity-100 transition" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl font-medium", children: role }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "size-4" }),
          /* @__PURE__ */ jsx("span", { children: period })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: codeTags.map((tag) => /* @__PURE__ */ jsx(CodeTag, { tag }, tag.id)) })
    ] })
  ] });
}
function Project({
  project: { title, description, imageUrl, projectUrl, codeTags }
}) {
  return /* @__PURE__ */ jsxs("div", { className: "col-span-2 lg:col-span-1 rounded border p-5 text-left", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        "aria-label": `Lien vers le projet ${title}`,
        target: "_blank",
        className: "overflow-hidden rounded",
        href: projectUrl,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            alt: title,
            loading: "lazy",
            decoding: "async",
            "data-nimg": "1",
            className: "rounded transition-transform hover:scale-105 h-[290px] w-full object-contain",
            style: { color: "transparent" },
            src: imageUrl
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: projectUrl,
        className: "mt-3 text-xl font-medium hover:underline flex items-center gap-2 group",
        children: [
          title,
          /* @__PURE__ */ jsx(Link, { className: "inline size-4 opacity-0 text-black group-hover:opacity-100 transition" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8 mt-1", children: description }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: codeTags.map((tag) => /* @__PURE__ */ jsx(CodeTag, { tag }, tag.id)) })
  ] });
}
const AnimatedTooltip = ({
  items
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: items.map((item, idx) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group relative -mr-4",
      onMouseEnter: () => setHoveredIndex(item.id),
      onMouseLeave: () => setHoveredIndex(null),
      children: [
        /* @__PURE__ */ jsx(AnimatePresence, { children: hoveredIndex === item.id && /* @__PURE__ */ jsx(
          motion$1.div,
          {
            initial: { opacity: 0, y: 20, scale: 0.6 },
            animate: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10
              }
            },
            exit: { opacity: 0, y: 20, scale: 0.6 },
            style: {
              translateX,
              rotate,
              whiteSpace: "nowrap"
            },
            className: "absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl",
            children: /* @__PURE__ */ jsx("div", { className: "relative z-30 text-base font-bold text-white", children: item.name })
          }
        ) }),
        /* @__PURE__ */ jsx(
          "img",
          {
            onMouseMove: handleMouseMove,
            height: 100,
            width: 100,
            src: item.image,
            alt: item.name,
            className: "relative mx-8 h-16 w-16 border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30"
          }
        )
      ]
    },
    item.name
  )) });
};
const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#A97CF8", "#F38CB8", "#FDCC92"],
    speed = 1
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`
    };
    return /* @__PURE__ */ jsxs("span", { className: `relative inline-block ${className}`, children: [
      /* @__PURE__ */ jsx("span", { className: "sr-only", children }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent",
          style: gradientStyle,
          "aria-hidden": "true",
          children
        }
      )
    ] });
  }
);
AuroraText.displayName = "AuroraText";
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical
        },
        className
      ),
      children: Array(repeat).fill(0).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse
          }),
          children
        },
        i
      ))
    }
  );
}
function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      ref,
      className: cn(
        "fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      ),
      style: {
        scaleX: scrollYProgress
      },
      ...props
    }
  );
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const icons = [{
  id: 1,
  name: "React",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
}, {
  id: 2,
  name: "Next.js",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
}, {
  id: 3,
  name: "TypeScript",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
}, {
  id: 4,
  name: "JavaScript",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
}, {
  id: 5,
  name: "Node.js",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
}, {
  id: 6,
  name: "HTML5",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
}, {
  id: 7,
  name: "CSS3",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
}, {
  id: 8,
  name: "Tailwind CSS",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
}, {
  id: 9,
  name: "C#",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
}, {
  id: 10,
  name: ".NET",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
}, {
  id: 11,
  name: "Git",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
}, {
  id: 12,
  name: "GraphQL",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
}];
const experiences = [{
  place: {
    title: "Septeo Hospitality (ex Sequoiasoft) - Valbonne, FR",
    href: "https://www.septeo.com/fr/metier/hospitality"
  },
  role: "Développeur Web Front-End",
  period: "déc. 2021 - aujourd'hui",
  description: "Refonte complète de l’application de réservation Resalys en ReactJS, optimisée pour l’expérience utilisateur et les performances. Développement des canaux de réservation et de l’espace client avec des solutions évolutives, intégration avancée de l’API GraphQL avec Apollo, et création d’un Storybook pour documenter les composants et faciliter la maintenance et la collaboration.",
  codeTags: [{
    id: "react",
    label: "React"
  }, {
    id: "ts",
    label: "TypeScript"
  }, {
    id: "graphql",
    label: "GraphQL"
  }, {
    id: "node",
    label: "Node.js"
  }, {
    id: "tailwind",
    label: "TailwindCSS"
  }]
}, {
  place: {
    title: "bnetwork - Cannes, FR",
    href: "https://www.bnetwork.com/"
  },
  role: "Développeur Full-Stack",
  period: "sept. 2016 - oct. 2020",
  description: "Étude et optimisation du back-end, développement d’interfaces intuitives & responsive, intégration d’APIs tierces, solutions innovantes et collaboration directe avec les clients pour des services performants et adaptatifs.",
  codeTags: [{
    id: "c#",
    label: "C# / .NET"
  }, {
    id: "sqlserver",
    label: "SQL Server"
  }, {
    id: "js",
    label: "JavaScript"
  }, {
    id: "html",
    label: "HTML"
  }, {
    id: "css",
    label: "CSS"
  }, {
    id: "gmap_api",
    label: "API Google Maps"
  }, {
    id: "ds_api",
    label: "API DocuSign"
  }]
}, {
  place: {
    title: "Westi - Cannes, FR",
    href: ""
  },
  role: "(Stage) Développeur Full-Stack",
  period: "janv. 2016 - mars 2016",
  description: "Développement d’une plateforme de partage de frais en ASP.NET, avec conception MySQL, front- et back-end complet, et intégration d’APIs externes (FlightStats, QPX Express) pour enrichir les fonctionnalités.",
  codeTags: [{
    id: "c#",
    label: "C# / .NET"
  }, {
    id: "mysql",
    label: "MySQL"
  }, {
    id: "js",
    label: "JavaScript"
  }, {
    id: "html",
    label: "HTML"
  }, {
    id: "css",
    label: "CSS"
  }, {
    id: "f_api",
    label: "API FlightStats"
  }, {
    id: "qpx_api",
    label: "API QPX Express"
  }]
}];
const projects = [{
  title: "Resalys Booking Engine",
  description: "Webapp de réservation d’hébergements avec espace client développée pour Septeo Hospitality.",
  imageUrl: "/resalys-booking-engine.png",
  projectUrl: "https://resalys-booking-engine.vercel.app/",
  codeTags: [{
    id: "react",
    label: "React"
  }, {
    id: "ts",
    label: "TypeScript"
  }, {
    id: "graphql",
    label: "GraphQL"
  }, {
    id: "node",
    label: "Node.js"
  }, {
    id: "tailwind",
    label: "TailwindCSS"
  }, {
    id: "nextjs",
    label: "ShadCN"
  }]
}, {
  title: "Tripsti",
  description: "Webapp de planification de voyages permettant aux utilisateurs de créer et gérer des itinéraires personnalisés.",
  imageUrl: "/tripsti.png",
  projectUrl: "https://next-tripsti-tawny.vercel.app/",
  codeTags: [{
    id: "nextjs",
    label: "NextJS"
  }, {
    id: "react",
    label: "React"
  }, {
    id: "ts",
    label: "TypeScript"
  }, {
    id: "mongodb",
    label: "MongoDB"
  }, {
    id: "tailwind",
    label: "TailwindCSS"
  }]
}, {
  title: "AbsMedical (Projet universitaire)",
  description: "Application bureau à destination des médecins et établissements scolaire, permettant de justifier numériquement les absences d'un étudiant à travers une carte numérique avec puce RFID pour l'authentification de celui-ci.",
  imageUrl: "/absmedical.png",
  projectUrl: "https://github.com/weetrax/AbsMedicalWPF",
  codeTags: [{
    id: "c#",
    label: "C# / .NET"
  }, {
    id: "c#",
    label: "WPF"
  }, {
    id: "c#",
    label: "Entity Framework"
  }, {
    id: "mysql",
    label: "MySQL"
  }, {
    id: "css",
    label: "MahApps UI"
  }]
}];
function App() {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 2
      },
      children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-8 py-36", children: [
        /* @__PURE__ */ jsx(ScrollProgress, {}),
        /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center text-center gap-4 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "border py-1.5 px-3 rounded-md flex items-center gap-x-2 max-w-fit", children: [
            /* @__PURE__ */ jsx("span", { className: "block bg-green-400 h-2.5 w-2.5 rounded-full animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Ouvert aux opportunités !" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-extrabold tracking-tight", children: [
            "Développeur ",
            /* @__PURE__ */ jsx(AuroraText, { children: "Front-End" }),
            /* @__PURE__ */ jsx("br", {}),
            "Créateur d’apps web modernes"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-muted-foreground", children: "Développeur web basé dans le sud de la France. Je suis passionné par la création d'application web modernes et performantes en utilisant les dernières technologies comme React, Node.js & Tailwind CSS." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center h-20 my-12", children: /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }) }),
        /* @__PURE__ */ jsxs("section", { id: "about", className: "text-center max-w-3xl mx-auto grid gap-4 scroll-mt-24", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold tracking-tight mb-6", children: "À propos de moi" }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", children: [
            "Hello, moi c’est ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Stefano Martines" }),
            ", développeur ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Full-Stack" }),
            " avec un fort attrait pour le ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Front-End" }),
            ". J’apprends et pratique la programmation depuis plus de",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "7 ans" }),
            ". Au fil de mon parcours, j’ai eu l’opportunité de travailler sur de nombreux projets passionnants, allant de projets personnels à des collaborations plus ambitieuses. Ma stack principale est composée de",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "React, Next.js, TypeScript et Tailwind CSS" }),
            ". J’ai également de bonnes bases en",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Back-End" }),
            ", notamment avec",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Node.js" }),
            " et",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "C# / .NET" }),
            ", et je reste toujours curieux d’apprendre de nouvelles technologies."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Je suis ouvert aux opportunités professionnelles où je peux contribuer, apprendre et évoluer. ",
            /* @__PURE__ */ jsx("br", {}),
            " Si vous avez une opportunité qui correspond à mes compétences et mon expérience, n’hésitez pas à me contacter."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(Marquee, { pauseOnHover: true, className: "[--duration:20s] pt-20!", children: /* @__PURE__ */ jsx(AnimatedTooltip, { items: icons }) }),
          /* @__PURE__ */ jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" }),
          /* @__PURE__ */ jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center h-20 mt-20 mb-12", children: /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }) }),
        /* @__PURE__ */ jsxs("section", { id: "experiences", className: "text-center max-w-3xl mx-auto grid gap-4 scroll-mt-24", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold tracking-tight", children: "Expériences professionnelles" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Expériences professionnelles acquises au cours de ces dernières années." }),
          /* @__PURE__ */ jsx("div", { className: "relative text-left", children: experiences.map((experience) => /* @__PURE__ */ jsx(Experience, { experience })) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center h-20 my-12", children: /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }) }),
        /* @__PURE__ */ jsxs("section", { id: "projects", className: "text-center max-w-5xl mx-auto grid gap-4 scroll-mt-24", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold tracking-tight", children: "Projets" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Quelques projets personnels réalisés pour apprendre et expérimenter." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-7", children: projects.map((project) => /* @__PURE__ */ jsx(Project, { project }, project.title)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center h-20 my-12", children: /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }) }),
        /* @__PURE__ */ jsxs("section", { id: "contact", className: "text-center max-w-5xl mx-auto grid gap-4 scroll-mt-24", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold tracking-tight", children: "Contact" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Vous avez un projet en tête ou souhaitez simplement échanger ? N’hésitez pas à me contacter par Email ou LinkedIn !" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "mx-2", children: /* @__PURE__ */ jsxs("a", { href: "mailto:stefano.martines@hotmail.com\n              ?subject=On%20doit%20parler%20de%20votre%20futur%20poste%E2%80%A6\n              &body=Bonjour%20!%0A%0AJe%20viens%20de%20d%C3%A9couvrir%20votre%20profil%20et%20%E2%80%94%20pour%20%C3%AAtre%20tout%20%C3%A0%20fait%20honn%C3%AAte%20%E2%80%94%20j%E2%80%99ai%20eu%20tr%C3%A8s%20envie%20de%20vous%20embaucher%20d%C3%A8s%20les%20premi%C3%A8res%20secondes.%0A%0ASi%20vous%20%C3%AAtes%20ouvert(e)%20%C3%A0%20une%20discussion%2C%20je%20serais%20ravi(e)%20d%E2%80%99%C3%A9changer%20avec%20vous.%0A%0A%C3%80%20bient%C3%B4t%20!", children: [
              " ",
              /* @__PURE__ */ jsx(Mail, {}),
              " Me contacter"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "mx-2", children: /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/stefano-martines/", target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(Linkedin, {}),
              " Voir mon LinkedIn"
            ] }) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  App as component
};
