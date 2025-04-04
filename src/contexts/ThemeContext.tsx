import React, { useState, useEffect, ReactNode } from "react";
import { ThemeContext } from "./ThemeContextDefinition";
import type { Theme } from "./ThemeContextDefinition";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark"); // Initialize with dark theme

  // Initialize theme based on saved preference or default to dark
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark mode instead of checking system preference
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // Update HTML class and localStorage when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle system preference change
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        setTheme("dark"); // Always default to dark mode
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
