import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ThemeMode } from "@/hooks/useTheme";

type ThemeToggleProps = {
  mode: ThemeMode;
  onToggle: () => void;
};

export function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  return (
    <Button variant="ghost" onClick={onToggle} className="inline-flex h-10 w-10 items-center justify-center rounded-full p-0">
      {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}
