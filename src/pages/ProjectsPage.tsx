import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeading } from "@/components/common/PageHeading";
import { ProjectArtwork } from "@/components/common/ProjectArtwork";
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
    <div className="page-shell">
      <PageHeading
        eyebrow={locale === "en" ? "Selected work" : "Избранные работы"}
        title={copy.title}
        intro={copy.intro}
      />

      <div className="project-toolbar mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-surface/60 p-4 md:flex-row md:items-center md:justify-between">
        <label className="relative block w-full md:max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            className="search-input w-full rounded-full py-2.5 pl-9 pr-3 text-sm outline-none transition"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {allTech.map((tech) => (
            <button
              key={tech}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                activeTech === tech
                  ? "project-filter selected"
                  : "project-filter"
              }`}
              onClick={() => setActiveTech(tech)}
            >
              {tech === "All" ? copy.allLabel : tech}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.06 }}
          >
            <ProjectArtwork project={project} locale={locale} index={index} />
            <div className="project-card-body">
              <h3>{project.title[locale]}</h3>
              <p>{project.summary[locale]}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <button onClick={() => setSelectedProject(project)} className="project-link">
                  {copy.quickView}
                </button>
                <Link to={`/projects/${project.id}`} className="project-link">
                  {copy.details}
                </Link>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub: ${project.title[locale]}`} className="project-link">
                  <Github size={14} />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open: ${project.title[locale]}`} className="project-link">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted">{locale === "en" ? "No projects match this search." : "По вашему запросу ничего не найдено."}</p>
      ) : null}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
