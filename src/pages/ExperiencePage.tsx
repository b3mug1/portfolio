import { motion } from "framer-motion";
import { PageHeading } from "@/components/common/PageHeading";
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
    <div className="page-shell narrow">
      <PageHeading
        eyebrow={locale === "en" ? "Work journey" : "Практический опыт"}
        title={copy.title}
        intro={copy.intro}
      />

      <div className="experience-total" aria-label={locale === "en" ? "One year of work experience" : "Опыт работы: 1 год"}>
        <strong>01</strong>
        <span>{locale === "en" ? "YEAR OF EXPERIENCE" : "ГОД ОПЫТА"}</span>
      </div>

      <div className="timeline-line">
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            className="experience-card timeline-entry"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.period[locale]}</p>
            <h2 className="mt-2 text-2xl font-semibold text-text">{item.role[locale]}</h2>
            <p className="text-muted">{item.company}</p>
            <p className="mt-3 text-muted">{item.details[locale]}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {item.achievements.map((achievement) => (
                <li key={achievement[locale]}>{achievement[locale]}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
