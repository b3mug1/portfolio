import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
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
      <div className="mx-auto w-[min(1120px,90%)] py-24">
        <p className="text-muted">{copy.notFound}</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={14} /> {copy.back}
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto w-[min(980px,90%)] py-20">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text">
        <ArrowLeft size={14} /> {copy.back}
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-text">{project.title[locale]}</h1>
      <p className="mt-3 text-muted">{project.description[locale]}</p>

      <img src={project.image} alt={project.title[locale]} className="mt-8 h-[360px] w-full rounded-3xl object-cover" />

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-text">{copy.features}</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {project.features.map((item) => (
              <li key={item[locale]}>• {item[locale]}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-text">{copy.stack}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-text hover:bg-white/5">
          <Github size={16} /> {copy.github}
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-white">
          <ExternalLink size={16} /> {copy.live}
        </a>
      </div>
    </article>
  );
}
