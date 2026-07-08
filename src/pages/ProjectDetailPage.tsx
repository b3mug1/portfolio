import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/site";
import { useSeo } from "@/utils/seo";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((entry) => entry.id === id);

  useSeo(
    project ? `${project.title} | Project` : "Project Not Found",
    project?.summary ?? "The requested project could not be found."
  );

  if (!project) {
    return (
      <div className="mx-auto w-[min(1120px,90%)] py-24">
        <p className="text-slate-300">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto w-[min(980px,90%)] py-20">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <h1 className="mt-6 text-4xl font-bold text-white">{project.title}</h1>
      <p className="mt-3 text-slate-300">{project.description}</p>

      <img src={project.image} alt={project.title} className="mt-8 h-[360px] w-full rounded-2xl object-cover" />

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">Features</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            {project.features.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-slate-200 hover:bg-white/5">
          <Github size={16} /> GitHub
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-white">
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </article>
  );
}
