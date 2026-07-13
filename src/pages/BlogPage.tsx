import { CalendarClock } from "lucide-react";
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
    <div className="mx-auto w-[min(980px,90%)] py-20">
      <h1 className="text-4xl font-bold text-text md:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{copy.intro}</p>

      <div className="mt-10 space-y-4">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-3xl border border-white/10 bg-surface/65 p-5">
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
