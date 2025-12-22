"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Create the Theme Context
const ThemeContext = createContext();

// 2️⃣ Provider component to wrap the app
export function ThemeProvider({ children }) {
    // 2a. State: theme (light/dark) with lazy initialization
    const [theme, setTheme] = useState(() => {
        try {
            const saved = localStorage.getItem("theme"); // check localStorage
            if (saved) return saved;
            // fallback to OS preference
            return window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        } catch {
             return "light"; // default
        }
    });

    // 3️⃣ Apply theme to <html> and save to localStorage
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        try {
            localStorage.setItem("theme", theme)
        } catch {}
    },[theme]);

    // 4️⃣ Keep in sync if OS preference changes
    useEffect(() => {
        const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
        const handler = (e) => {
            // only change if user hasn't explicitly chosen (i.e. no saved localStorage)
            if (!localStorage.getItem("theme"))
                setTheme(e.matches ? "dark" : "light");
        };
        mq?.addEventListener?.("change", handler);
        return () => mq?.removeEventListener?.("change", handler);
    },[]);

    // 5️⃣ Toggle function to switch theme
    const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    // 6️⃣ Provide theme, setter, and toggle to children
    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 7️⃣ Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);