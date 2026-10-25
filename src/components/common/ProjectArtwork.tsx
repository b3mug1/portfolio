import type { Locale, Project } from "@/types";

type ProjectArtworkProps = {
  project: Project;
  locale: Locale;
  index?: number;
};

export function ProjectArtwork({ project, locale, index = 0 }: ProjectArtworkProps) {
  return (
    <div className="project-art" data-project={project.id} aria-hidden="true">
      <div className="art-meta">
        <span>{locale === "en" ? "Selected system" : "Система / кейс"}</span>
        <b>0{index + 1} / 03</b>
      </div>
      <div className="art-display">
        <span className="art-title">{project.title[locale]}</span>
        <span className="art-glyph"><i /><i /><i /><i /></span>
      </div>
    </div>
  );
}
