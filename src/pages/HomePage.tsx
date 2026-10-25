import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, ExternalLink, Github, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectArtwork } from "@/components/common/ProjectArtwork";
import { SectionHeading } from "@/components/common/SectionHeading";
import { homeCopy } from "@/data/content";
import { projects, skillCategories } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";
import { fetchGithubStats } from "@/services/github";
import type { GithubStats } from "@/types";
import { useSeo } from "@/utils/seo";

const stackTicker = ["Python", "FastAPI", "PostgreSQL", "Docker", "Go", "REST APIs", "MongoDB", "System design"];

export default function HomePage() {
  const { locale } = useLocale();
  const copy = homeCopy[locale];
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  useSeo(
    locale === "en" ? "Bekzat — Backend Developer" : "Бекзат — Backend-разработчик",
    locale === "en"
      ? "Portfolio of Murat Bekzat Gizatuly, a Software Engineering student building backend systems and APIs."
      : "Портфолио Мурата Бекзата Гизатулы: backend-системы, API и инженерные проекты."
  );

  useEffect(() => {
    let isActive = true;
    const refreshStats = async () => {
      const stats = await fetchGithubStats("b3mug1", import.meta.env.VITE_GITHUB_TOKEN);
      if (isActive && stats) setGithubStats(stats);
    };

    void refreshStats();
    const interval = window.setInterval(refreshStats, 60_000);
    return () => {
      isActive = false;
      window.clearInterval(interval);
    };
  }, []);

  const title = locale === "en" ? <>Hi, I’m<br /><em>Murat Bekzat.</em></> : <>Привет, я<br /><em>Мурат Бекзат.</em></>;
  const stack = copy.coreStack.split(/,\s*/);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="eyebrow">{copy.eyebrow}</p>
            <div className="availability-pill"><i className="availability-dot" />{copy.availability}</div>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{copy.subtitle}</p>
            <p className="hero-description">{copy.description}</p>
            <div className="stack-row" aria-label={locale === "en" ? "Core technology stack" : "Основной стек технологий"}>
              {stack.map((skill) => <span key={skill} className="stack-chip">{skill}</span>)}
            </div>
            <div className="hero-actions">
              <Link to="/projects" className="button-primary">{copy.primaryCta}<ArrowRight size={15} /></Link>
              <a href="/resume-bekzat.pdf" download="Murat-Bekzat-Resume.pdf" className="button-secondary">{copy.resumeCta}<Download size={14} /></a>
              <Link to="/contact" className="button-secondary">{copy.secondaryCta}<ArrowDown size={14} /></Link>
            </div>
            <div className="hero-socials">
              <span>{copy.socialLabel}</span>
              <a href="https://github.com/b3mug1" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
              <a href="mailto:intelect3235@gmail.com" aria-label="Email"><Mail size={15} /></a>
              <a href="https://t.me/b3mug1" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={15} /></a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            aria-label={locale === "en" ? "Backend engineering profile illustration" : "Иллюстрация backend-разработки"}
          >
            <div className="visual-topline"><span>Independent engineer</span><span className="visual-index">KZ / 2026</span></div>
            <div className="orbital-mark"><i className="orbit-point one" /><i className="orbit-point two" /><span>BK</span></div>
            <div className="visual-caption">{locale === "en" ? <>Build with clarity<br />Ship with care</> : <>Создавать ясно<br />Доставлять точно</>}</div>
            <div className="terminal-card">
              <div className="terminal-top"><i /><i /><i /><span>systems.py</span></div>
              <div className="terminal-code">
                <div><b>01</b><span>design(reliable_systems)</span></div>
                <div><b>02</b><span>build(useful_software)</span></div>
                <div><b>03</b><span>deploy_with_confidence()</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          {[...stackTicker, ...stackTicker].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>

      <section className="home-section">
        <SectionHeading title={copy.skillsTitle} subtitle={copy.skillsSubtitle} />
        <div className="capability-grid">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title[locale]}
              className="capability-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="capability-number">0{index + 1} / 0{skillCategories.length}</span>
              <h3>{category.title[locale]}</h3>
              <div className="capability-tags">
                {category.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home-section divided">
        <div className="section-inner">
          <SectionHeading title={copy.projectsTitle} subtitle={copy.projectsSubtitle} />
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
              >
                <ProjectArtwork project={project} locale={locale} index={index} />
                <div className="project-card-body">
                  <h3>{project.title[locale]}</h3>
                  <p>{project.summary[locale]}</p>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    {locale === "en" ? "Explore project" : "Смотреть проект"}<ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <SectionHeading title={copy.githubTitle} subtitle={copy.githubSubtitle} />
        <div className="github-panel">
          <div>
            <span className="eyebrow">{locale === "en" ? "Building in public" : "Открытая разработка"}</span>
            <h3>{locale === "en" ? "Code, experiments & open source." : "Код, эксперименты и open source."}</h3>
            <p>{locale === "en"
              ? "Follow my latest repositories, backend experiments and projects on GitHub."
              : "Новые репозитории, backend-эксперименты и проекты — в моём GitHub."}</p>
            {githubStats ? (
              <div className="github-stats">
                <div className="github-stat"><strong>{githubStats.repos}</strong><span>{locale === "en" ? "repositories" : "репозитория"}</span></div>
                <div className="github-stat"><strong>{githubStats.stars}</strong><span>{locale === "en" ? "stars" : "звёзд"}</span></div>
                <div className="github-stat"><strong>{githubStats.followers}</strong><span>{locale === "en" ? "followers" : "подписчиков"}</span></div>
              </div>
            ) : null}
          </div>
          <a className="github-button" href="https://github.com/b3mug1" target="_blank" rel="noreferrer">
            <Github size={16} />{locale === "en" ? "Visit GitHub" : "Открыть GitHub"}<ExternalLink size={13} />
          </a>
        </div>
        {githubStats?.recentRepos?.length ? (
          <div className="repo-list">
            {githubStats.recentRepos.slice(0, 3).map((repo) => (
              <a className="repo-item" href={repo.url} target="_blank" rel="noreferrer" key={repo.url}>{repo.name} ↗</a>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
