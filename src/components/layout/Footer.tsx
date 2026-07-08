import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg/70 py-10">
      <div className="mx-auto flex w-[min(1120px,90%)] flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Bekzat. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
