import { useEffect, useState } from "react";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Navbar } from "@/components/navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { motion } from "framer-motion";
import appCss from "../styles.css?url";
import { LoadingScreen } from "@/components/loading-screen";

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
  const [loading, setLoading] = useState(process.env.NODE_ENV === "production");
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SmoothCursor />
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
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
