import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { MouseEvent } from "react";
import type { Project } from "@/types";
import { Button } from "@/components/ui/Button";
import { projectDetailCopy } from "@/data/content";
import { useLocale } from "@/hooks/useLocale";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { locale } = useLocale();

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-3xl rounded-2xl border border-white/10 bg-surface p-6 shadow-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(event: MouseEvent) => event.stopPropagation()}
          >
            <img src={project.image} alt={project.title[locale]} className="h-56 w-full rounded-xl object-cover" />
            <h3 className="mt-5 text-2xl font-bold text-text">{project.title[locale]}</h3>
            <p className="mt-2 text-muted">{project.description[locale]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="inline-flex items-center gap-2">
                  <Github size={16} /> {projectDetailCopy[locale].github}
                </Button>
              </a>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button className="inline-flex items-center gap-2">
                  <ExternalLink size={16} /> {projectDetailCopy[locale].live}
                </Button>
              </a>
              <Button variant="ghost" onClick={onClose}>{locale === "en" ? "Close" : "Закрыть"}</Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
