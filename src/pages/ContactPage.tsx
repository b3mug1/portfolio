import { Github, Mail, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { contactCopy } from "@/data/content";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";
import { sendTelegramContactMessage } from "@/services/telegram";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

export default function ContactPage() {
  const { locale } = useLocale();
  const copy = contactCopy[locale];
  useSeo(
    locale === "en" ? "Contact | Murat Bekzat Gizatuly" : "Контакты | Мурат Бекзат Гизатулы",
    locale === "en"
      ? "Contact Murat Bekzat Gizatuly for internship and junior backend opportunities."
      : "Свяжитесь с Муратом Бекзатом Гизатулы по вопросам стажировки и junior backend-ролей."
  );
  const { pushToast } = useToast();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = locale === "en" ? "Name must be at least 2 characters." : "Имя должно содержать минимум 2 символа.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = locale === "en" ? "Enter a valid email address." : "Введите корректный email.";
    }
    if (form.message.trim().length < 12) {
      nextErrors.message = locale === "en" ? "Message should be at least 12 characters." : "Сообщение должно содержать минимум 12 символов.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      pushToast(locale === "en" ? "Please correct the form errors." : "Проверьте ошибки в форме.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendTelegramContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        locale
      });
      pushToast(locale === "en" ? "Message sent to Telegram. I will reply soon." : "Сообщение отправлено в Telegram. Я скоро отвечу.", "success");
      setForm(initialState);
      setErrors({});
    } catch {
      pushToast(
        locale === "en"
          ? "Telegram is not configured yet. Add bot credentials to enable sending."
          : "Telegram еще не настроен. Добавьте данные бота, чтобы включить отправку.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-[min(980px,90%)] py-20">
      <h1 className="text-4xl font-bold text-text md:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{copy.intro}</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-surface/70 p-6">
          <div>
            <label className="mb-2 block text-sm text-muted">{copy.name}</label>
            <input
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-full border border-white/10 bg-bg/70 px-3 py-2.5 text-sm text-text outline-none focus:border-primary"
              placeholder={copy.namePlaceholder}
            />
            {errors.name ? <p className="mt-1 text-xs text-rose-400">{errors.name}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm text-muted">{copy.email}</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-full border border-white/10 bg-bg/70 px-3 py-2.5 text-sm text-text outline-none focus:border-primary"
              placeholder={copy.emailPlaceholder}
            />
            {errors.email ? <p className="mt-1 text-xs text-rose-400">{errors.email}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm text-muted">{copy.message}</label>
            <textarea
              rows={6}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full rounded-3xl border border-white/10 bg-bg/70 px-3 py-2.5 text-sm text-text outline-none focus:border-primary"
              placeholder={copy.messagePlaceholder}
            />
            {errors.message ? <p className="mt-1 text-xs text-rose-400">{errors.message}</p> : null}
          </div>

          <Button type="submit" className="inline-flex items-center gap-2" disabled={isSubmitting}>
            {isSubmitting ? copy.sending : copy.submit} <Send size={15} />
          </Button>
        </form>

        <aside className="rounded-3xl border border-white/10 bg-surface/70 p-6">
          <h2 className="text-xl font-semibold text-text">{copy.socialTitle}</h2>
          <div className="mt-5 space-y-3">
            <a href="https://github.com/b3mug1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-muted transition hover:text-text">
              <Github size={18} /> GitHub
            </a>
            <a href="https://t.me/b3mug1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-muted transition hover:text-text">
              <Send size={18} /> Telegram
            </a>
            <a href="mailto:intelect3235@gmail.com" className="inline-flex items-center gap-3 text-muted transition hover:text-text">
              <Mail size={18} /> intelect3235@gmail.com
            </a>
            <a href="tel:+77772830923" className="inline-flex items-center gap-3 text-muted transition hover:text-text">
              <Mail size={18} /> +7 777 283 0923
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
