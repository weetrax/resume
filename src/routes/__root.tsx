import { useEffect, useState } from "react";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Navbar } from "@/components/navbar";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { motion } from "framer-motion";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Stefano Martines - Développeur Full-Stack",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 9200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SmoothCursor />
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            initial={{ opacity: 0 }} // état au départ
            animate={{ opacity: 1 }} // état final
            transition={{ duration: 2 }} // durée de l'animation
          >
            <Navbar />
            {children}
          </motion.div>
        )}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

function LoadingScreen() {
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
