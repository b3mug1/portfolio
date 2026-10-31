import { CalendarClock, ExternalLink } from "lucide-react";
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
            {post.image ? (
              <img
                src={post.image}
                alt={post.title[locale]}
                loading="lazy"
                className="mb-4 h-20 w-20 rounded-xl bg-white/5 object-contain p-2"
              />
            ) : null}
            <p className="eyebrow">{locale === "en" ? `Certificate 0${index + 1}` : `Сертификат 0${index + 1}`}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
              <span className="inline-flex items-center gap-1"><CalendarClock size={14} /> {post.date[locale]}</span>
              <span>{post.readTime[locale]}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-text">{post.title[locale]}</h2>
            <p className="mt-2 text-muted">{post.excerpt[locale]}</p>
            {post.credentialId || post.expiration ? (
              <p className="mt-3 text-xs text-muted">
                {post.credentialId ? <>{locale === "en" ? "Credential ID" : "ID сертификата"}: {post.credentialId}</> : null}
                {post.credentialId && post.expiration ? " · " : null}
                {post.expiration?.[locale]}
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-text">
                  {tag}
                </span>
              ))}
            </div>
            {post.credentialUrl ? (
              <a
                href={post.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link mt-5 inline-flex items-center gap-2"
              >
                <ExternalLink size={14} />
                {locale === "en" ? "View badge on Credly" : "Открыть бейдж в Credly"}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
