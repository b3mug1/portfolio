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
      className="icon-toggle"
      aria-label={mode === "dark" ? uiCopy[locale].themeLight : uiCopy[locale].themeDark}
      title={mode === "dark" ? uiCopy[locale].themeLight : uiCopy[locale].themeDark}
    >
      {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}
