import { Experience } from "@/components/experience";
import { Project } from "@/components/project";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Separator } from "@/components/ui/separator";
import { projects, experiences } from "@/data";
import { createFileRoute } from "@tanstack/react-router";
import { LinkedinIcon, MailIcon } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

const icons = [
  {
    id: 1,
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 5,
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 6,
    name: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 7,
    name: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 9,
    name: "C#",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    id: 10,
    name: ".NET",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
  },
  {
    id: 11,
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 12,
    name: "GraphQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
];

function App() {
  return (
    <div className="min-h-screen px-8 py-36">
      <ScrollProgress />
      <section className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
        <div className="border py-1.5 px-3 rounded-md flex items-center gap-x-2 max-w-fit">
          <span className="block bg-green-400 h-2.5 w-2.5 rounded-full animate-pulse"></span>
          <span className="text-sm">Ouvert aux opportunités !</span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Développeur <AuroraText>Front-End</AuroraText>
          <br />
          Créateur d’apps web modernes
        </h1>
        <h2 className="text-muted-foreground">
          Développeur web basé dans le sud de la France. Je suis passionné par
          la création d'application web modernes et performantes en utilisant
          les dernières technologies comme React, Node.js & Tailwind CSS.
        </h2>
      </section>
      <div className="flex justify-center h-20 my-12">
        <Separator orientation="vertical" />
      </div>
      <section
        id="about"
        className="text-center max-w-3xl mx-auto grid gap-4 scroll-mt-24"
      >
        <h3 className="text-4xl font-bold tracking-tight mb-6">
          À propos de moi
        </h3>
        <p className="text-base leading-relaxed">
          Hello, moi c’est <span className="font-bold">Stefano Martines</span>,
          développeur <span className="font-bold">Full-Stack</span> avec un fort
          attrait pour le <span className="font-bold">Front-End</span>.
          J’apprends et pratique la programmation depuis plus de{" "}
          <span className="font-bold">7 ans</span>. Au fil de mon parcours, j’ai
          eu l’opportunité de travailler sur de nombreux projets passionnants,
          allant de projets personnels à des collaborations plus ambitieuses. Ma
          stack principale est composée de{" "}
          <span className="font-bold">
            React, Next.js, TypeScript et Tailwind CSS
          </span>
          . J’ai également de bonnes bases en{" "}
          <span className="font-bold">Back-End</span>, notamment avec{" "}
          <span className="font-bold">Node.js</span> et{" "}
          <span className="font-bold">C# / .NET</span>, et je reste toujours
          curieux d’apprendre de nouvelles technologies.
        </p>
        <p>
          Je suis ouvert aux opportunités professionnelles où je peux
          contribuer, apprendre et évoluer. <br /> Si vous avez une opportunité
          qui correspond à mes compétences et mon expérience, n’hésitez pas à me
          contacter.
        </p>
      </section>
      <div className="relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] pt-20!">
          <AnimatedTooltip items={icons} />
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
      <div className="flex justify-center h-20 mt-20 mb-12">
        <Separator orientation="vertical" />
      </div>
      <section
        id="experiences"
        className="text-center max-w-3xl mx-auto grid gap-4 scroll-mt-24"
      >
        <h3 className="text-4xl font-bold tracking-tight">
          Expériences professionnelles
        </h3>
        <p className="text-muted-foreground mb-6">
          Expériences professionnelles acquises au cours de ces dernières
          années.
        </p>
        <div className="relative text-left">
          {experiences.map((experience) => (
            <Experience
              key={`exp_${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </section>
      <div className="flex justify-center h-20 my-12">
        <Separator orientation="vertical" />
      </div>
      <section
        id="projects"
        className="text-center max-w-5xl mx-auto grid gap-4 scroll-mt-24"
      >
        <h3 className="text-4xl font-bold tracking-tight">Projets</h3>
        <p className="text-muted-foreground mb-6">
          Quelques projets personnels réalisés pour apprendre et expérimenter.
        </p>
        <div className="grid grid-cols-2 gap-7">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </section>
      <div className="flex justify-center h-20 my-12">
        <Separator orientation="vertical" />
      </div>
      <section
        id="contact"
        className="text-center max-w-5xl mx-auto grid gap-4 scroll-mt-24"
      >
        <h3 className="text-4xl font-bold tracking-tight">Contact</h3>
        <p className="text-muted-foreground mb-6">
          Vous avez un projet en tête ou souhaitez simplement échanger ?
          N’hésitez pas à me contacter par Email ou LinkedIn !
        </p>
        <div>
          <Button asChild variant="outline" className="mx-2">
            <a
              href="mailto:stefano.martines@hotmail.com
              ?subject=On%20doit%20parler%20de%20votre%20futur%20poste%E2%80%A6
              &body=Bonjour%20!%0A%0AJe%20viens%20de%20d%C3%A9couvrir%20votre%20profil%20et%20%E2%80%94%20pour%20%C3%AAtre%20tout%20%C3%A0%20fait%20honn%C3%AAte%20%E2%80%94%20j%E2%80%99ai%20eu%20tr%C3%A8s%20envie%20de%20vous%20embaucher%20d%C3%A8s%20les%20premi%C3%A8res%20secondes.%0A%0ASi%20vous%20%C3%AAtes%20ouvert(e)%20%C3%A0%20une%20discussion%2C%20je%20serais%20ravi(e)%20d%E2%80%99%C3%A9changer%20avec%20vous.%0A%0A%C3%80%20bient%C3%B4t%20!"
            >
              {" "}
              <MailIcon /> Me contacter
            </a>
          </Button>
          <Button asChild variant="outline" className="mx-2">
            <a
              href="https://www.linkedin.com/in/stefano-martines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon /> Voir mon LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
