import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const x = useSpring(point.x, { stiffness: 380, damping: 30 });
  const y = useSpring(point.y, { stiffness: 380, damping: 30 });

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia("(pointer:fine)").matches;
    setEnabled(canUseCustomCursor);
    if (!canUseCustomCursor) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-6 w-6 rounded-full border border-white/40 bg-primary/20 backdrop-blur md:block"
      style={{ x: x.get() - 12, y: y.get() - 12 }}
      animate={{ x: point.x - 12, y: point.y - 12 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}
