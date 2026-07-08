import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { education, journeyTimeline } from "@/data/site";
import { useSeo } from "@/utils/seo";

export default function AboutPage() {
  useSeo("About | Bekzat", "Professional summary, education, and backend engineering journey of Bekzat.");

  return (
    <div className="mx-auto w-[min(1120px,90%)] py-20">
      <h1 className="text-4xl font-bold text-white md:text-5xl">About Me</h1>
      <p className="mt-6 max-w-3xl text-slate-300">
        I am a backend developer passionate about building dependable software systems that scale with product growth. My focus is writing clear, testable Python services that combine performance with long-term maintainability.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-white">Professional Summary</h2>
          <p className="mt-3 text-slate-300">
            I work across API design, database modeling, and deployment automation. I collaborate closely with product teams to translate business requirements into resilient backend architecture.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-white">Interests</h2>
          <p className="mt-3 text-slate-300">
            Distributed systems, observability, infrastructure reliability, and performance optimization in real production workloads.
          </p>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-4 grid gap-4">
          {education.map((item) => (
            <Card key={item.school}>
              <p className="font-medium text-white">{item.school}</p>
              <p className="text-slate-300">{item.degree}</p>
              <p className="text-sm text-slate-400">{item.period}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-white">Journey Timeline</h2>
        <div className="mt-6 space-y-4 border-l border-white/10 pl-5">
          {journeyTimeline.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[29px] top-2 h-3 w-3 rounded-full bg-primary" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{entry.year}</p>
              <p className="mt-1 text-lg font-semibold text-white">{entry.title}</p>
              <p className="mt-1 text-slate-300">{entry.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
