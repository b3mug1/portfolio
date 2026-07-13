import { ArrowUp } from "lucide-react";
import { uiCopy } from "@/data/content";
import { useLocale } from "@/hooks/useLocale";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-white/10 bg-bg/70 py-10">
      <div className="mx-auto flex w-[min(1120px,90%)] flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Murat Bekzat Gizatuly. {locale === "en" ? "All rights reserved." : "Все права защищены."}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-text hover:bg-white/10"
        >
          {uiCopy[locale].backToTop} <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
