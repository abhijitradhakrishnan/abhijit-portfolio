"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Theme context for light/dark mode
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Theme state (default light to avoid hydration mismatch)
  const [theme, setTheme] = useState("light");

  // Ensures code runs only on client
  const [mounted, setMounted] = useState(false);

  // Read theme or OS preference after client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    setMounted(true);
  }, []);

  // Apply theme to <html> class and persist preference
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Toggle theme manually
  const toggle = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Prevent rendering until mounted (avoids hydration errors)
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook
export const useTheme = () => useContext(ThemeContext);