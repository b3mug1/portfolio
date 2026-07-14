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
      className="nav-item-shell inline-flex h-10 items-center gap-2 rounded-full px-3 py-0 text-xs font-semibold uppercase tracking-[0.18em] text-text"
    >
      <span className={locale === "en" ? "text-text" : "text-muted"}>EN</span>
      <span className="h-4 w-px bg-white/10 dark:bg-white/10" />
      <span className={locale === "ru" ? "text-text" : "text-muted"}>RU</span>
    </Button>
  );
}