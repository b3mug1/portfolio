import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projectsPageCopy } from "@/data/content";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects, t } from "@/data/site";
import type { Project } from "@/types";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

const allTech = ["All", ...Array.from(new Set(projects.flatMap((project) => project.tech)))];

export default function ProjectsPage() {
  const { locale } = useLocale();
  const copy = projectsPageCopy[locale];

  useSeo(
    locale === "en" ? "Projects | Murat Bekzat Gizatuly" : "Проекты | Мурат Бекзат Гизатулы",
    locale === "en"
      ? "Student and internship projects by Murat Bekzat Gizatuly with backend and full-stack focus."
      : "Учебные и стажировочные проекты Мурата Бекзата Гизатулы с акцентом на backend и full-stack разработку."
  );

  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const title = t(project.title, locale).toLowerCase();
      const description = t(project.description, locale).toLowerCase();
      const summary = t(project.summary, locale).toLowerCase();
      const queryMatch =
        title.includes(query.toLowerCase()) ||
        description.includes(query.toLowerCase()) ||
        summary.includes(query.toLowerCase()) ||
        project.tech.join(" ").toLowerCase().includes(query.toLowerCase());
      const techMatch = activeTech === "All" || project.tech.includes(activeTech);
      return queryMatch && techMatch;
    });
  }, [query, activeTech, locale]);

  return (
    <div className="mx-auto w-[min(1120px,90%)] py-20">
      <h1 className="text-4xl font-bold text-text md:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{copy.intro}</p>

      <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-surface/60 p-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block w-full md:max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            className="w-full rounded-full border border-white/10 bg-bg/70 py-2.5 pl-9 pr-3 text-sm text-text outline-none focus:border-primary"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {allTech.map((tech) => (
            <button
              key={tech}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                activeTech === tech
                  ? "border-primary bg-primary/20 text-white"
                  : "border-white/10 bg-white/5 text-muted hover:text-text"
              }`}
              onClick={() => setActiveTech(tech)}
            >
              {tech === "All" ? copy.allLabel : tech}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <motion.article
            key={project.id}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-surface/70 shadow-card"
          >
            <img src={project.image} alt={project.title[locale]} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-text">{project.title[locale]}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary[locale]}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-text">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <button onClick={() => setSelectedProject(project)} className="text-primary hover:text-accent">
                  {copy.quickView}
                </button>
                <Link to={`/projects/${project.id}`} className="text-text hover:text-white">
                  {copy.details}
                </Link>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-text">
                  <Github size={14} />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-text">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
