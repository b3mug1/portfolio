import { ArrowUp } from "lucide-react";
import { uiCopy } from "@/data/content";
import { useLocale } from "@/hooks/useLocale";

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} MURAT BEKZAT GIZATULY · {locale === "en" ? "BUILT WITH INTENTION." : "СОЗДАНО С ЗАМЫСЛОМ."}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-top"
        >
          {uiCopy[locale].backToTop} <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
