import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { uiCopy } from "@/data/content";
import { useLocale } from "@/hooks/useLocale";
import type { ThemeMode } from "@/hooks/useTheme";

type ThemeToggleProps = {
  mode: ThemeMode;
  onToggle: () => void;
};

export function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  const { locale } = useLocale();

  return (
    <Button
      variant="ghost"
      onClick={onToggle}
      className="nav-item-shell inline-flex h-10 items-center gap-2 rounded-full px-3 py-0 text-xs font-semibold text-text"
    >
      {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span>{mode === "dark" ? uiCopy[locale].themeLight : uiCopy[locale].themeDark}</span>
    </Button>
  );
}
