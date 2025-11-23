import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Terminal onCompleted={onComplete}>
        <TypingAnimation>
          &gt; npx install stefanomartines@portfolio --latest
        </TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Installation du portfolio ████████████ 100%
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Installation de React, TypeScript, Tailwind CSS…
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Configuration de Tailwind CSS…
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Configuration du registre…
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Installation des dépendances…
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-500">
          <span>ℹ 3 fichiers mis à jour:</span>
          <span className="pl-2">- lib/competences.ts</span>
          <span className="pl-2">- data/experiences.ts</span>
          <span className="pl-2">- data/projects.ts</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Compilation du projet en cours…
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ 0 erreur et 0 avertissement
        </AnimatedSpan>
        <TypingAnimation className="text-muted-foreground">
          ✓ Portfolio prêt ! Lancement en cours…
        </TypingAnimation>
      </Terminal>
    </div>
  );
}

function LoadingScreenOLD() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Terminal>
        <TypingAnimation>
          &gt; npm install stefanomartines@portfolio --latest
        </TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Preflight checks.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Verifying framework.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Validating Tailwind CSS.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Validating import alias.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Writing components.json.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Checking registry.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Updating tailwind.config.ts
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Updating app/globals.css
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Installing dependencies.
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/skills.ts</span>
        </AnimatedSpan>
        <TypingAnimation className="text-muted-foreground">
          Success! Project initialization completed.
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
