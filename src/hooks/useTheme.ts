import { useEffect, useState } from "react";

const KEY = "bekzat-theme";

export type ThemeMode = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(KEY);
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
