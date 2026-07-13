import { Link } from "react-router-dom";
import { notFoundCopy } from "@/data/content";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

export default function NotFoundPage() {
  const { locale } = useLocale();
  const copy = notFoundCopy[locale];

  useSeo(
    locale === "en" ? "404 | Murat Bekzat Gizatuly" : "404 | Мурат Бекзат Гизатулы",
    locale === "en" ? "Page not found." : "Страница не найдена."
  );

  return (
    <div className="mx-auto grid min-h-[60vh] w-[min(800px,90%)] place-items-center py-20 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted">Error 404</p>
        <h1 className="mt-3 text-5xl font-bold text-text">{copy.title}</h1>
        <p className="mt-4 text-muted">{copy.intro}</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white">
          {copy.back}
        </Link>
      </div>
    </div>
  );
}
