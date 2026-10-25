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
    <div className="mx-auto grid min-h-[60vh] w-[min(800px,calc(100%_-_48px))] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="page-title mt-4">{copy.title}</h1>
        <p className="mt-4 text-muted">{copy.intro}</p>
        <Link to="/" className="button-primary mt-8">
          {copy.back}
        </Link>
      </div>
    </div>
  );
}
