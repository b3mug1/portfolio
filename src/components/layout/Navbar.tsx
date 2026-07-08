import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { ThemeMode } from "@/hooks/useTheme";

type NavbarProps = {
  mode: ThemeMode;
  onToggleTheme: () => void;
};

export function Navbar({ mode, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/60 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,90%)] items-center justify-between py-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-white">
          Bekzat<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:text-white",
                  isActive && "bg-white/10 text-white"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle mode={mode} onToggle={onToggleTheme} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle mode={mode} onToggle={onToggleTheme} />
          <button
            className="rounded-lg border border-white/10 p-2 text-slate-200"
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
                      "rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:text-white",
                      isActive && "bg-white/10 text-white"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
