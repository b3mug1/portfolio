import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ProjectArtwork } from "@/components/common/ProjectArtwork";
import { projectDetailCopy } from "@/data/content";
import { projects } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";
import { useSeo } from "@/utils/seo";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((entry) => entry.id === id);
  const { locale } = useLocale();
  const copy = projectDetailCopy[locale];

  useSeo(
    project ? `${project.title[locale]} | Project` : locale === "en" ? "Project Not Found" : "Проект не найден",
    project?.summary[locale] ?? (locale === "en" ? "The requested project could not be found." : "Запрошенный проект не найден.")
  );

  if (!project) {
    return (
      <div className="page-shell narrow">
        <p className="text-muted">{copy.notFound}</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={14} /> {copy.back}
        </Link>
      </div>
    );
  }

  return (
    <article className="page-shell narrow">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text">
        <ArrowLeft size={14} /> {copy.back}
      </Link>

      <header className="page-heading mt-7">
        <p className="eyebrow">{locale === "en" ? "Project / Case study" : "Проект / Кейс"}</p>
        <h1 className="page-title">{project.title[locale]}</h1>
        <p className="page-intro">{project.description[locale]}</p>
      </header>

      <div className="project-detail-art overflow-hidden">
        <ProjectArtwork project={project} locale={locale} index={projects.findIndex((item) => item.id === project.id)} />
      </div>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-text">{copy.features}</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {project.features.map((item) => (
              <li key={item[locale]} className="flex gap-3"><span className="text-primary">↗</span><span>{item[locale]}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-text">{copy.stack}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
            <span key={tech} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
          <Github size={16} /> {copy.github}
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-primary">
          <ExternalLink size={16} /> {copy.live}
        </a>
      </div>
    </article>
  );
}
