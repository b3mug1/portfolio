import { motion } from "framer-motion";
import { skillsCopy } from "@/data/content";
import { skillCategories } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

export default function SkillsPage() {
  const { locale } = useLocale();
  const copy = skillsCopy[locale];

  useSeo(
    locale === "en" ? "Skills | Murat Bekzat Gizatuly" : "Навыки | Мурат Бекзат Гизатулы",
    locale === "en"
      ? "Technical skills of Murat Bekzat Gizatuly across backend, databases, DevOps, and QA workflows."
      : "Технические навыки Мурата Бекзата Гизатулы в backend, базах данных, DevOps и QA."
  );

  return (
    <div className="mx-auto w-[min(1120px,90%)] py-20">
      <h1 className="text-4xl font-bold text-text md:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{copy.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title[locale]}
            className="rounded-3xl border border-white/10 bg-surface/70 p-5 shadow-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <h2 className="text-xl font-semibold text-text">{category.title[locale]}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
