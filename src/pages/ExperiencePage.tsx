import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { useSeo } from "@/utils/seo";

export default function ExperiencePage() {
  useSeo("Experience | Murat Bekzat Gizatuly", "Internship and practical backend experience of Murat Bekzat Gizatuly.");

  return (
    <div className="mx-auto w-[min(980px,90%)] py-20">
      <h1 className="text-4xl font-bold text-white md:text-5xl">Experience</h1>
      <p className="mt-4 text-slate-300">A timeline of internships, QA work, and backend development impact.</p>

      <div className="mt-12 border-l border-white/10 pl-6">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="relative mb-8 rounded-2xl border border-white/10 bg-surface/65 p-5"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{item.role}</h2>
            <p className="text-slate-300">{item.company}</p>
            <p className="mt-3 text-slate-300">{item.details}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement}>• {achievement}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
