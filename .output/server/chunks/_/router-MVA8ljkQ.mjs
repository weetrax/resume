import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Scripts } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, createElement, useState, useRef, useEffect, useMemo, Children, createContext, useContext } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useSpring, motion as motion$1, useInView } from "motion/react";
import { motion } from "framer-motion";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$3 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Navbar() {
  const menuItems = [
    { icon: Users, label: "À propos", href: "#" },
    { icon: Building2, label: "Expériences", href: "#experiences" },
    { icon: FlaskConical, label: "Projets", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-8 left-1/2 transform -translate-x-1/2 z-50", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 backdrop-blur-md border border-border shadow-lg rounded-full px-2 py-2", children: menuItems.map((item) => /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "sm",
      asChild: true,
      className: "rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300",
      children: /* @__PURE__ */ jsxs("a", { href: item.href, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-sm font-medium", children: item.label })
      ] })
    },
    item.label
  )) }) });
}
const DefaultCursorSVG = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 50,
      height: 54,
      viewBox: "0 0 50 54",
      fill: "none",
      style: { scale: 0.5 },
      children: [
        /* @__PURE__ */ jsxs("g", { filter: "url(#filter0_d_91_7928)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z",
              fill: "black"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z",
              stroke: "white",
              strokeWidth: 2.25825
            }
          )
        ] }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          "filter",
          {
            id: "filter0_d_91_7928",
            x: 0.602397,
            y: 0.952444,
            width: 49.0584,
            height: 52.428,
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ jsx("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
              /* @__PURE__ */ jsx(
                "feColorMatrix",
                {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }
              ),
              /* @__PURE__ */ jsx("feOffset", { dy: 2.25825 }),
              /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: 2.25825 }),
              /* @__PURE__ */ jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ jsx(
                "feColorMatrix",
                {
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                }
              ),
              /* @__PURE__ */ jsx(
                "feBlend",
                {
                  mode: "normal",
                  in2: "BackgroundImageFix",
                  result: "effect1_dropShadow_91_7928"
                }
              ),
              /* @__PURE__ */ jsx(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "effect1_dropShadow_91_7928",
                  result: "shape"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
function SmoothCursor({
  cursor = /* @__PURE__ */ jsx(DefaultCursorSVG, {}),
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 1e-3
  }
}) {
  const [isMoving, setIsMoving] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35
  });
  useEffect(() => {
    const updateVelocity = (currentPos) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;
      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime
        };
      }
      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };
    const smoothMouseMove = (e) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);
      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      );
      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);
      if (speed > 0.1) {
        const currentAngle = Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90;
        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;
        scale.set(0.95);
        setIsMoving(true);
        const timeout = setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 150);
        return () => clearTimeout(timeout);
      }
    };
    let rafId;
    const throttledMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e);
        rafId = 0;
      });
    };
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", throttledMouseMove);
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, rotation, scale]);
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      style: {
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform"
      },
      initial: { scale: 0 },
      animate: { scale: 1 },
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      },
      children: cursor
    }
  );
}
const appCss = "/assets/styles-o_OADm8d.css";
const SequenceContext = createContext(null);
const useSequence = () => useContext(SequenceContext);
const ItemIndexContext = createContext(null);
const useItemIndex = () => useContext(ItemIndexContext);
const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true
  });
  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (!sequence.sequenceStarted) return;
    if (hasStarted) return;
    if (sequence.activeIndex === itemIndex) {
      setHasStarted(true);
    }
  }, [sequence?.activeIndex, sequence?.sequenceStarted, hasStarted, itemIndex]);
  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true;
  return /* @__PURE__ */ jsx(
    motion$1.div,
    {
      ref: elementRef,
      initial: { opacity: 0, y: -5 },
      animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 },
      transition: { duration: 0.3, delay: sequence ? 0 : delay / 1e3 },
      className: cn("grid text-sm font-normal tracking-tight", className),
      onAnimationComplete: () => {
        if (!sequence) return;
        if (itemIndex === null) return;
        sequence.completeItem(itemIndex);
      },
      ...props,
      children
    }
  );
};
const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }
  const MotionComponent = useMemo(
    () => motion$1.create(Component, {
      forwardMotionProps: true
    }),
    [Component]
  );
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true
  });
  const sequence = useSequence();
  const itemIndex = useItemIndex();
  useEffect(() => {
    if (sequence && itemIndex !== null) {
      if (!sequence.sequenceStarted) return;
      if (started) return;
      if (sequence.activeIndex === itemIndex) {
        setStarted(true);
      }
      return;
    }
    if (!startOnView) {
      const t2 = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(t2);
    }
    if (!isInView) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [
    delay,
    startOnView,
    isInView,
    started,
    sequence?.activeIndex,
    sequence?.sequenceStarted,
    itemIndex
  ]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typing = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex);
        }
      }
    }, duration);
    return () => clearInterval(typing);
  }, [children, duration, started]);
  return /* @__PURE__ */ jsx(
    MotionComponent,
    {
      ref: elementRef,
      className: cn("text-sm font-normal tracking-tight", className),
      ...props,
      children: displayedText
    }
  );
};
const Terminal = ({
  children,
  className,
  sequence = true,
  startOnView = true,
  onCompleted
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: 0.3,
    once: true
  });
  const childrenArray = useMemo(() => Children.toArray(children), [children]);
  const totalItems = childrenArray.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const sequenceHasStarted = sequence ? !startOnView || isInView : false;
  useEffect(() => {
    if (!sequence) return;
    if (!sequenceHasStarted) return;
    if (activeIndex >= totalItems) {
      onCompleted?.();
    }
  }, [activeIndex, totalItems, sequence, sequenceHasStarted, onCompleted]);
  const contextValue = useMemo(() => {
    if (!sequence) return null;
    return {
      completeItem: (index) => {
        setActiveIndex(
          (current) => index === current ? current + 1 : current
        );
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted
    };
  }, [sequence, activeIndex, sequenceHasStarted]);
  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    return childrenArray.map((child, index) => /* @__PURE__ */ jsx(ItemIndexContext.Provider, { value: index, children: child }, index));
  }, [sequence, childrenArray]);
  const content = /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: cn(
        "border-border bg-background z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "border-border flex flex-col gap-y-2 border-b p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-red-500" }),
          /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-green-500" })
        ] }) }),
        /* @__PURE__ */ jsx("pre", { className: "p-4", children: /* @__PURE__ */ jsx("code", { className: "grid gap-y-1 overflow-auto", children: wrappedChildren }) })
      ]
    }
  );
  if (!sequence) return content;
  return /* @__PURE__ */ jsx(SequenceContext.Provider, { value: contextValue, children: content });
};
function LoadingScreen({ onComplete }) {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen justify-center items-center", children: /* @__PURE__ */ jsxs(Terminal, { onCompleted: onComplete, children: [
    /* @__PURE__ */ jsx(TypingAnimation, { children: "> npx install stefanomartines@portfolio --latest" }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ Installation du portfolio ████████████ 100%" }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ Installation de React, TypeScript, Tailwind CSS…" }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ Configuration de Tailwind CSS…" }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ Configuration du registre…" }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ Installation des dépendances…" }),
    /* @__PURE__ */ jsxs(AnimatedSpan, { className: "text-blue-500", children: [
      /* @__PURE__ */ jsx("span", { children: "ℹ 3 fichiers mis à jour:" }),
      /* @__PURE__ */ jsx("span", { className: "pl-2", children: "- lib/competences.ts" }),
      /* @__PURE__ */ jsx("span", { className: "pl-2", children: "- data/experiences.ts" }),
      /* @__PURE__ */ jsx("span", { className: "pl-2", children: "- data/projects.ts" })
    ] }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ Compilation du projet en cours…" }),
    /* @__PURE__ */ jsx(AnimatedSpan, { className: "text-green-500", children: "✔ 0 erreur et 0 avertissement" }),
    /* @__PURE__ */ jsx(TypingAnimation, { className: "text-muted-foreground", children: "✓ Portfolio prêt ! Lancement en cours…" })
  ] }) });
}
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Stefano Martines - Développeur Full-Stack"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  const [loading, setLoading] = useState(process.env.NODE_ENV === "production");
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(SmoothCursor, {}),
      loading ? /* @__PURE__ */ jsx(LoadingScreen, { onComplete: () => setLoading(false) }) : /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 2 },
          children: [
            /* @__PURE__ */ jsx(Navbar, {}),
            children
          ]
        }
      ),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-C0e1c4cA.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
const routerMVA8ljkQ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  B: Button,
  c: cn,
  r: router
});
export {
  Button as B,
  Mail as M,
  cn as a,
  Building2 as b,
  createLucideIcon as c,
  routerMVA8ljkQ as r
};
