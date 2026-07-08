import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Loading portfolio</p>
        <motion.div
          className="mx-auto mt-4 h-1 w-52 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            className="block h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
            initial={{ x: "-100%" }}
            animate={{ x: "220%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
