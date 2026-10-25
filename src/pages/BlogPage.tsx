import { CalendarClock } from "lucide-react";
import { PageHeading } from "@/components/common/PageHeading";
import { blogCopy } from "@/data/content";
import { blogPosts } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

export default function BlogPage() {
  const { locale } = useLocale();
  const copy = blogCopy[locale];

  useSeo(
    locale === "en" ? "Certificates | Murat Bekzat Gizatuly" : "Сертификаты | Мурат Бекзат Гизатулы",
    locale === "en"
      ? "Professional certificates and continuous learning records of Murat Bekzat Gizatuly."
      : "Профессиональные сертификаты и записи о непрерывном обучении Мурата Бекзата Гизатулы."
  );

  return (
    <div className="page-shell narrow">
      <PageHeading
        eyebrow={locale === "en" ? "Learning log" : "Обучение и развитие"}
        title={copy.title}
        intro={copy.intro}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <article key={post.id} className="certificate-card">
            <p className="eyebrow">{locale === "en" ? `Certificate 0${index + 1}` : `Сертификат 0${index + 1}`}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
              <span className="inline-flex items-center gap-1"><CalendarClock size={14} /> {post.date}</span>
              <span>{post.readTime[locale]}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-text">{post.title[locale]}</h2>
            <p className="mt-2 text-muted">{post.excerpt[locale]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-text">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
