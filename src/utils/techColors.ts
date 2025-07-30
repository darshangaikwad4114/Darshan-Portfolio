import { useMemo } from "react";

// 🚀 OPTIMIZATION 1: Pre-computed color palette
const TECH_COLOR_PALETTE = [
  {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-300 dark:border-blue-700",
  },
  {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-300 dark:border-green-700",
  },
  {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-300 dark:border-purple-700",
  },
  {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-300 dark:border-amber-700",
  },
  {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-300 dark:border-pink-700",
  },
  {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-300 dark:border-indigo-700",
  },
  {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-300 dark:border-cyan-700",
  },
] as const;

// 🚀 OPTIMIZATION 2: Type definition and memoized color cache
type TechColor = {
  bg: string;
  text: string;
  border: string;
};

const colorCache = new Map<string, TechColor>();

// 🚀 OPTIMIZATION 3: Simple, fast hash function
const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

// 🚀 OPTIMIZATION 4: Cached color getter
export const getTechColor = (techName: string) => {
  // Check cache first
  if (colorCache.has(techName)) {
    return colorCache.get(techName)!;
  }

  // Calculate and cache
  const hash = simpleHash(techName);
  const color = TECH_COLOR_PALETTE[hash % TECH_COLOR_PALETTE.length];
  colorCache.set(techName, color);

  return color;
};

// 🚀 OPTIMIZATION 5: Hook for multiple tech stacks
export const useTechColors = (techStack: string[]) => {
  return useMemo(() => {
    return techStack.map((tech) => ({
      tech,
      colors: getTechColor(tech),
    }));
  }, [techStack]);
};

// 🚀 OPTIMIZATION 6: Pre-computed common tech colors
export const COMMON_TECH_COLORS = {
  React: getTechColor("React"),
  TypeScript: getTechColor("TypeScript"),
  JavaScript: getTechColor("JavaScript"),
  "Node.js": getTechColor("Node.js"),
  TailwindCSS: getTechColor("TailwindCSS"),
  Vite: getTechColor("Vite"),
  MongoDB: getTechColor("MongoDB"),
  Express: getTechColor("Express"),
} as const;
