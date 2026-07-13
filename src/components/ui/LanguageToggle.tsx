import { Button } from "@/components/ui/Button";
import type { Locale } from "@/types";

type LanguageToggleProps = {
  locale: Locale;
  onToggle: () => void;
};

export function LanguageToggle({ locale, onToggle }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      onClick={onToggle}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200"
    >
      <span className={locale === "en" ? "text-white" : "text-slate-400"}>EN</span>
      <span className="h-4 w-px bg-white/10" />
      <span className={locale === "ru" ? "text-white" : "text-slate-400"}>RU</span>
    </Button>
  );
}