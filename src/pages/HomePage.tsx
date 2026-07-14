import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Github, Mail, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { homeCopy } from "@/data/content";
import { projects, skillCategories } from "@/data/site";
import { useParallax } from "@/hooks/useParallax";
import { useLocale } from "@/hooks/useLocale";
import { fetchGithubStats } from "@/services/github";
import type { GithubStats } from "@/types";
import { useSeo } from "@/utils/seo";

export default function HomePage() {
  const { locale } = useLocale();
  const copy = homeCopy[locale];
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  useSeo(
    locale === "en" ? "Bekzat-Portfolio" : "Бекзат-Портфолио",
    locale === "en"
      ? "Portfolio of Murat Bekzat Gizatuly, 3rd-year Software Engineering student focused on Python, FastAPI, and scalable web applications."
      : "Портфолио Мурата Бекзата Гизатулы, студента 3 курса Software Engineering, который работает с Python, FastAPI и масштабируемыми веб-приложениями."
  );

  const offset = useParallax(24);

  useEffect(() => {
    let isActive = true;

    const refreshStats = async () => {
      const stats = await fetchGithubStats("b3mug1", import.meta.env.VITE_GITHUB_TOKEN);
      if (!isActive || !stats) {
        return;
      }

      setGithubStats(stats);
    };

    void refreshStats();
    const interval = window.setInterval(refreshStats, 60_000);

    return () => {
      isActive = false;
      window.clearInterval(interval);
    };
  }, []);

  const snapshot = useMemo<GithubStats>(() => {
    return (
      githubStats ?? {
        repos: 47,
        stars: 312,
        commits: 12,
        languages: ["Python", "Go", "JavaScript", "SQL"],
        followers: 120,
        following: 80,
        forks: 60,
        activeReposLast30Days: 9,
        recentRepos: [
          {
            name: "locker-management-system",
            url: "https://github.com/b3mug1/locker-management-system",
            language: "Python",
            stars: 12,
            updatedAt: new Date().toISOString()
          },
          {
            name: "csvision",
            url: "https://github.com/b3mug1/csvision",
            language: "Python",
            stars: 8,
            updatedAt: new Date().toISOString()
          },
          {
            name: "link-tracker",
            url: "https://github.com/b3mug1/link-tracker",
            language: "TypeScript",
            stars: 5,
            updatedAt: new Date().toISOString()
          }
        ],
        profileUrl: "https://github.com/b3mug1",
        lastSyncedAt: new Date().toISOString()
      }
    );
  }, [githubStats]);

  const lastSyncedLabel = useMemo(() => {
    const date = new Date(snapshot.lastSyncedAt);
    if (Number.isNaN(date.getTime())) {
      return locale === "en" ? "just now" : "только что";
    }

    return date.toLocaleTimeString(locale === "en" ? "en-US" : "ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }, [snapshot.lastSyncedAt, locale]);

  const formatRepoDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return locale === "en" ? "recently" : "недавно";
    }

    return date.toLocaleDateString(locale === "en" ? "en-US" : "ru-RU", {
      day: "2-digit",
      month: "short"
    });
  };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <ParticlesBackground />
        <div className="hero-mesh absolute inset-0" />
        <div className="mx-auto grid w-[min(1120px,90%)] gap-12 py-24 md:grid-cols-[1.08fr_0.92fr] md:py-32">
          <div className="relative z-10">
            <motion.p
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {copy.eyebrow}
            </motion.p>
            <motion.h1
              className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] text-text sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {copy.title}
            </motion.h1>
            <motion.p
              className="mt-5 text-2xl font-semibold text-muted"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {copy.subtitle}
            </motion.p>
            <motion.p
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {copy.description}
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MagneticButton className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-glow">
                <Link to="/projects" className="inline-flex items-center gap-2">
                  {copy.primaryCta} <ArrowRight size={15} />
                </Link>
              </MagneticButton>
              <a
                href="/resume-bekzat.pdf"
                download="Murat-Bekzat-Resume.pdf"
              >
                <Button variant="secondary" className="inline-flex items-center gap-2">
                  {copy.resumeCta} <Download size={15} />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="ghost">{copy.secondaryCta}</Button>
              </Link>
            </motion.div>
            <div className="mt-8 flex items-center gap-3 text-muted">
              <span className="mr-2 hidden text-xs uppercase tracking-[0.25em] text-muted md:inline">{copy.socialLabel}</span>
              <a href="https://github.com/b3mug1" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:text-white">
                <Github size={16} />
              </a>
              <a href="mailto:intelect3235@gmail.com" className="rounded-full border border-white/10 p-2 hover:text-white">
                <Mail size={16} />
              </a>
              <a href="https://t.me/b3mug1" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:text-white">
                <Send size={16} />
              </a>
            </div>
          </div>

          <motion.div
            className="glass hero-glow relative overflow-hidden rounded-[2rem] p-6"
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 60, damping: 16 }}
          >
            <div className="aurora-bg absolute inset-0 bg-aurora opacity-60" />
            <div className="relative z-10 space-y-4">
              <Card className="bg-black/25">
                <p className="text-sm text-muted">{locale === "en" ? "Current Focus" : "Текущий фокус"}</p>
                <p className="mt-2 text-xl font-semibold text-text">{copy.currentFocus}</p>
              </Card>
              <Card className="bg-black/25">
                <p className="text-sm text-muted">{locale === "en" ? "Core Stack" : "Основной стек"}</p>
                <p className="mt-2 text-text">{copy.coreStack}</p>
              </Card>
              <Card className="bg-black/25">
                <p className="text-sm text-muted">{locale === "en" ? "Availability" : "Доступность"}</p>
                <p className="mt-2 font-medium text-emerald-300">{copy.availability}</p>
              </Card>
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                  <Card className="bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">2027</p>
                    <p className="mt-2 text-sm font-medium text-text">{locale === "en" ? "Graduation target" : "Цель выпуска"}</p>
                </Card>
                  <Card className="bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">6+</p>
                    <p className="mt-2 text-sm font-medium text-text">{locale === "en" ? "Core backend tools" : "Основные backend-инструменты"}</p>
                </Card>
                  <Card className="bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">24/7</p>
                    <p className="mt-2 text-sm font-medium text-text">{locale === "en" ? "Learning mode" : "Режим обучения"}</p>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,90%)] py-20">
        <SectionHeading title={copy.skillsTitle} subtitle={copy.skillsSubtitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title[locale]}
              className="rounded-3xl border border-white/10 bg-surface/70 p-5 backdrop-blur"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <h3 className="text-lg font-semibold text-text">{category.title[locale]}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/15 px-3 py-1 text-xs text-text">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface/40 py-20">
        <div className="mx-auto w-[min(1120px,90%)]">
          <SectionHeading title={copy.projectsTitle} subtitle={copy.projectsSubtitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-surface/75"
                whileHover={{ y: -8 }}
              >
                <img src={project.image} alt={project.title[locale]} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-text">{project.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted">{project.summary[locale]}</p>
                  <Link to={`/projects/${project.id}`} className="mt-5 inline-flex items-center gap-2 text-sm text-primary transition hover:text-accent">
                    {locale === "en" ? "Open details" : "Открыть"} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,90%)] py-20">
        <SectionHeading title={copy.githubTitle} subtitle={copy.githubSubtitle} />
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <a
            href={snapshot.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted transition hover:text-text"
          >
            {locale === "en" ? "Open GitHub Profile" : "Открыть GitHub профиль"} <ExternalLink size={14} />
          </a>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {locale === "en" ? `Synced ${lastSyncedLabel}` : `Обновлено ${lastSyncedLabel}`}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Card className="overflow-hidden border-white/15 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_42%),rgba(255,255,255,0.03)]">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                {locale === "en" ? "GitHub Overview" : "Обзор GitHub"}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-4xl font-black text-text">{snapshot.repos}</p>
                  <p className="mt-2 text-sm text-muted">
                    {locale === "en" ? "public repositories in the profile" : "публичных репозиториев в профиле"}
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-text">{snapshot.activeReposLast30Days}</p>
                  <p className="mt-2 text-sm text-muted">
                    {locale === "en" ? "repositories active in the last 30 days" : "репозиториев с активностью за 30 дней"}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {snapshot.languages.length > 0 ? (
                  snapshot.languages.map((language) => (
                    <span key={language} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text">
                      {language}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text">
                    {locale === "en" ? "No language data" : "Нет данных по языкам"}
                  </span>
                )}
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <p className="text-sm text-muted">{locale === "en" ? "Stars" : "Звёзды"}</p>
                <p className="mt-2 text-3xl font-bold text-text">{snapshot.stars}</p>
              </Card>
              <Card>
                <p className="text-sm text-muted">{locale === "en" ? "Followers" : "Подписчики"}</p>
                <p className="mt-2 text-3xl font-bold text-text">{snapshot.followers}</p>
              </Card>
              <Card>
                <p className="text-sm text-muted">{locale === "en" ? "Forks" : "Форки"}</p>
                <p className="mt-2 text-3xl font-bold text-text">{snapshot.forks}</p>
              </Card>
              <Card>
                <p className="text-sm text-muted">{locale === "en" ? "Weekly Commits" : "Коммиты за неделю"}</p>
                <p className="mt-2 text-3xl font-bold text-text">{snapshot.commits}</p>
              </Card>
            </div>
          </div>

          <Card className="border-white/15 bg-white/[0.03]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  {locale === "en" ? "Recent Repositories" : "Последние репозитории"}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {locale === "en"
                    ? "Most recently updated repositories from the profile."
                    : "Репозитории, которые обновлялись последними."}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 px-3 py-2 text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {locale === "en" ? "Following" : "Подписок"}
                </p>
                <p className="mt-1 text-lg font-semibold text-text">{snapshot.following}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {snapshot.recentRepos.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-text">{repo.name}</p>
                      <p className="mt-1 text-xs text-muted">
                        {repo.language ?? (locale === "en" ? "Language not specified" : "Язык не указан")}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-xs text-muted">
                      ★ {repo.stars}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted">
                    <span>{locale === "en" ? "Updated" : "Обновлён"} {formatRepoDate(repo.updatedAt)}</span>
                    <span className="inline-flex items-center gap-1">
                      {locale === "en" ? "Open" : "Открыть"} <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
