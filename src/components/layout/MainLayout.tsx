import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { useTheme } from "@/hooks/useTheme";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function MainLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const progress = useScrollProgress();
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text">
      <CustomCursor />
      <AnimatePresence>{booting ? <LoadingScreen /> : null}</AnimatePresence>

      <motion.div className="fixed left-0 top-0 z-[55] h-1 bg-gradient-to-r from-primary to-accent" style={{ width: `${progress * 100}%` }} />

      <Navbar mode={theme} onToggleTheme={toggleTheme} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pb-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
