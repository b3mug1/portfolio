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
      className="mb-10"
    >
      <p className="text-sm uppercase tracking-[0.2em] text-primary">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
    </motion.div>
  );
}
