import { motion } from "framer-motion";
import { experienceCopy } from "@/data/content";
import { experience } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

export default function ExperiencePage() {
  const { locale } = useLocale();
  const copy = experienceCopy[locale];

  useSeo(
    locale === "en" ? "Experience | Murat Bekzat Gizatuly" : "Опыт | Мурат Бекзат Гизатулы",
    locale === "en"
      ? "Internship and practical backend experience of Murat Bekzat Gizatuly."
      : "Опыт стажировок и практической backend-разработки Мурата Бекзата Гизатулы."
  );

  return (
    <div className="mx-auto w-[min(980px,90%)] py-20">
      <h1 className="text-4xl font-bold text-text md:text-5xl">{copy.title}</h1>
      <p className="mt-4 text-muted">{copy.intro}</p>

      <div className="mt-12 border-l border-white/10 pl-6">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="relative mb-8 rounded-3xl border border-white/10 bg-surface/65 p-5"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.period}</p>
            <h2 className="mt-2 text-2xl font-semibold text-text">{item.role[locale]}</h2>
            <p className="text-muted">{item.company}</p>
            <p className="mt-3 text-muted">{item.details[locale]}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {item.achievements.map((achievement) => (
                <li key={achievement[locale]}>• {achievement[locale]}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
