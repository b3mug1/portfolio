import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { useSeo } from "@/utils/seo";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

export default function ContactPage() {
  useSeo("Contact | Bekzat", "Get in touch with Bekzat for backend engineering opportunities and collaboration.");
  const { pushToast } = useToast();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (form.message.trim().length < 12) {
      nextErrors.message = "Message should be at least 12 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      pushToast("Please correct the form errors.", "error");
      return;
    }
    pushToast("Message sent successfully. I will reply soon.", "success");
    setForm(initialState);
    setErrors({});
  };

  return (
    <div className="mx-auto w-[min(980px,90%)] py-20">
      <h1 className="text-4xl font-bold text-white md:text-5xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-slate-300">Let&apos;s discuss backend roles, consulting, or product architecture collaboration.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface/70 p-6">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Name</label>
            <input
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-bg/70 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-primary"
              placeholder="Your name"
            />
            {errors.name ? <p className="mt-1 text-xs text-rose-400">{errors.name}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-bg/70 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-primary"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="mt-1 text-xs text-rose-400">{errors.email}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Message</label>
            <textarea
              rows={6}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-bg/70 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-primary"
              placeholder="Tell me about your project or role"
            />
            {errors.message ? <p className="mt-1 text-xs text-rose-400">{errors.message}</p> : null}
          </div>

          <Button type="submit" className="inline-flex items-center gap-2">
            Send Message <Send size={15} />
          </Button>
        </form>

        <aside className="rounded-2xl border border-white/10 bg-surface/70 p-6">
          <h2 className="text-xl font-semibold text-white">Social Links</h2>
          <div className="mt-5 space-y-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-slate-200 hover:text-white">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-slate-200 hover:text-white">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-slate-200 hover:text-white">
              <Send size={18} /> Telegram
            </a>
            <a href="mailto:bekzat@example.com" className="inline-flex items-center gap-3 text-slate-200 hover:text-white">
              <Mail size={18} /> bekzat@example.com
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
