import { useEffect, useRef, useState } from "react";

const KEY = "murat-portfolio-theme";

export type ThemeMode = "dark" | "light";

export function useTheme() {
  const mountedRef = useRef(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(KEY);

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(KEY, theme);

    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    document.documentElement.classList.add("theme-switching");
    const timeout = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-switching");
    }, 380);

    return () => window.clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
