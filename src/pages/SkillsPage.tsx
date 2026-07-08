import { motion } from "framer-motion";
import { skillCategories } from "@/data/site";
import { useSeo } from "@/utils/seo";

export default function SkillsPage() {
  useSeo("Skills | Bekzat", "Technical skillset of Bekzat across backend, databases, DevOps, and architecture.");

  return (
    <div className="mx-auto w-[min(1120px,90%)] py-20">
      <h1 className="text-4xl font-bold text-white md:text-5xl">Skills</h1>
      <p className="mt-4 max-w-2xl text-slate-300">A toolkit built around Python services, cloud-native delivery, and scalable architecture patterns.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            className="rounded-2xl border border-white/10 bg-surface/70 p-5 shadow-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <h2 className="text-xl font-semibold text-white">{category.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
