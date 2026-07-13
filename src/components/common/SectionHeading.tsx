import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-10 flex items-end justify-between gap-4"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-primary">{subtitle}</p>
        <h2 className="mt-3 text-3xl font-bold text-text md:text-4xl">{title}</h2>
      </div>
      <span className="hidden h-px flex-1 bg-gradient-to-r from-primary/70 to-transparent md:block" />
    </motion.div>
  );
}
