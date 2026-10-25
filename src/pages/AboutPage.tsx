import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { PageHeading } from "@/components/common/PageHeading";
import { aboutCopy } from "@/data/content";
import { education, journeyTimeline } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

export default function AboutPage() {
  const { locale } = useLocale();
  const copy = aboutCopy[locale];

  useSeo(
    locale === "en" ? "About | Murat Bekzat Gizatuly" : "Обо мне | Мурат Бекзат Гизатулы",
    locale === "en"
      ? "Profile, education, and engineering journey of Murat Bekzat Gizatuly."
      : "Профиль, образование и инженерный путь Мурата Бекзата Гизатулы."
  );

  return (
    <div className="page-shell">
      <PageHeading
        eyebrow={locale === "en" ? "The story" : "Знакомство"}
        title={copy.title}
        intro={copy.intro}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-text">{copy.professionalTitle}</h2>
          <p className="mt-3 text-muted">
            {copy.professionalBody}
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-text">{copy.interestsTitle}</h2>
          <p className="mt-3 text-muted">
            {copy.interestsBody}
          </p>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-text">{copy.educationTitle}</h2>
        <div className="mt-4 grid gap-4">
          {education.map((item) => (
            <Card key={item.school}>
              <p className="font-medium text-text">{item.school}</p>
              <p className="text-muted">{item.degree[locale]}</p>
              <p className="text-sm text-muted">{item.period}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-text">{copy.journeyTitle}</h2>
        <div className="timeline-line mt-6">
          {journeyTimeline.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="timeline-entry"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{entry.year}</p>
              <p className="mt-1 text-lg font-semibold text-text">{entry.title[locale]}</p>
              <p className="mt-1 text-muted">{entry.text[locale]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
