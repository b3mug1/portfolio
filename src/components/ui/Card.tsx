import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type CardProps = PropsWithChildren<{ className?: string }>;

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-surface/70 p-5 shadow-card backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
