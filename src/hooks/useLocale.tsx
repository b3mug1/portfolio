import { createContext, type PropsWithChildren, useContext, useEffect, useState } from "react";
import type { Locale } from "@/types";

const KEY = "murat-portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "en";
  }

  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem(KEY);

    if (saved === "en" || saved === "ru") {
      return saved;
    }

    return getBrowserLocale();
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    localStorage.setItem(KEY, locale);
  }, [locale]);

  const toggleLocale = () => setLocale((current) => (current === "en" ? "ru" : "en"));

  return <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}