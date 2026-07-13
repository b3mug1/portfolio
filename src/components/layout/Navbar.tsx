import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, t } from "@/data/site";
import { uiCopy } from "@/data/content";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import type { ThemeMode } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

type NavbarProps = {
  mode: ThemeMode;
  onToggleTheme: () => void;
};

export function Navbar({ mode, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-[min(1120px,90%)] items-center justify-between py-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src="/favicon.png" alt={uiCopy[locale].brand} className="h-10 w-10 rounded-xl object-cover" />
          <span className="sr-only">{uiCopy[locale].brand}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-2 text-sm text-muted transition hover:text-text",
                  isActive && "bg-white/10 text-text"
                )
              }
            >
              {t(link.label, locale)}
            </NavLink>
          ))}
          <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          <LanguageToggle locale={locale} onToggle={toggleLocale} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          <LanguageToggle locale={locale} onToggle={toggleLocale} />
          <button
            className="rounded-full border border-white/10 p-2 text-text"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.aside
            className="border-t border-white/10 bg-surface/95 px-[5%] py-4 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-3 py-2 text-sm text-muted transition hover:text-text",
                      isActive && "bg-white/10 text-text"
                    )
                  }
                >
                  {t(link.label, locale)}
                </NavLink>
              ))}
              <div className="mt-3 flex flex-wrap gap-2">
                <ThemeToggle mode={mode} onToggle={onToggleTheme} />
                <LanguageToggle locale={locale} onToggle={toggleLocale} />
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
