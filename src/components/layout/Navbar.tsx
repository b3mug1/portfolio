import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, t } from "@/data/site";
import { cn } from "@/lib/cn";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { ThemeMode } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

type NavbarProps = {
  mode: ThemeMode;
  onToggleTheme: () => void;
};

export function Navbar({ mode, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();

  const navClass = ({ isActive }: { isActive: boolean }) => cn("nav-link", isActive && "active");

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand-lockup" aria-label="Bekzat home">
          <span className="brand-mark">BK</span>
          <span className="brand-name">
            <strong>Murat Bekzat</strong>
            <span>Software engineer</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === "/"} className={navClass}>
              {t(link.label, locale)}
            </NavLink>
          ))}
          <div className="nav-controls">
            <ThemeToggle mode={mode} onToggle={onToggleTheme} />
            <LanguageToggle locale={locale} onToggle={toggleLocale} />
          </div>
        </nav>

        <div className="nav-controls mobile-controls">
          <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          <LanguageToggle locale={locale} onToggle={toggleLocale} />
          <button
            className="menu-toggle"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === "/"} className={navClass} onClick={() => setOpen(false)}>
                {t(link.label, locale)}
              </NavLink>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
