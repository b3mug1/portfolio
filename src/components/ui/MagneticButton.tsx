import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PropsWithChildren } from "react";

type MagneticButtonProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 14 });
  const springY = useSpring(y, { stiffness: 220, damping: 14 });

  return (
    <motion.button
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const relX = event.clientX - rect.left - rect.width / 2;
        const relY = event.clientY - rect.top - rect.height / 2;
        x.set(relX * 0.22);
        y.set(relY * 0.22);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}
