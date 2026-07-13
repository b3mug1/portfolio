import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60",
        variant === "primary" &&
          "bg-gradient-to-r from-primary to-accent text-white shadow-glow hover:brightness-110",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-text hover:bg-white/10",
        variant === "ghost" && "text-muted hover:bg-white/5 hover:text-text",
        className
      )}
      {...props}
    />
  );
}
