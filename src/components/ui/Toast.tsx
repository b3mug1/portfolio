import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ToastItem = {
  id: string;
  message: string;
  type: "success" | "error";
};

type ToastContextType = {
  pushToast: (message: string, type?: ToastItem["type"]) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback((message: string, type: ToastItem["type"] = "success") => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
    window.setTimeout(() => removeToast(id), 3200);
  }, [removeToast]);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-20 z-[70] flex w-full max-w-sm flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface/95 px-4 py-3 text-sm shadow-glow"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="text-emerald-400" size={18} />
              ) : (
                <XCircle className="text-rose-400" size={18} />
              )}
              <p className="text-slate-100">{toast.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
