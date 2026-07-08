import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { projects, skillCategories } from "@/data/site";
import { useParallax } from "@/hooks/useParallax";
import { useSeo } from "@/utils/seo";

const contributionCells = Array.from({ length: 140 }, (_, index) => (index * 17 + 3) % 5);

export default function HomePage() {
  useSeo(
    "Murat Bekzat Gizatuly | Python Developer",
    "Portfolio of Murat Bekzat Gizatuly, 3rd-year Software Engineering student focused on Python, FastAPI, and scalable web applications."
  );

  const offset = useParallax(24);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <ParticlesBackground />
        <div className="hero-mesh absolute inset-0" />
        <div className="mx-auto grid w-[min(1120px,90%)] gap-12 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div>
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Backend Developer Portfolio
            </motion.p>
            <motion.h1
              className="mt-4 text-5xl font-black leading-tight text-white sm:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Hi, I&apos;m Murat Bekzat.
            </motion.h1>
            <motion.p
              className="mt-4 text-2xl font-semibold text-slate-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Python Developer and Software Engineering Student
            </motion.p>
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I am a 3rd-year Software Engineering student at Astana IT University, graduating in 2027. I build scalable web applications and RESTful APIs with Python, FastAPI, PostgreSQL, MongoDB, Docker, and Git.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MagneticButton className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-glow">
                <Link to="/projects" className="inline-flex items-center gap-2">
                  View Projects <ArrowRight size={15} />
                </Link>
              </MagneticButton>
              <a href="/resume-bekzat.txt" download>
                <Button variant="secondary" className="inline-flex items-center gap-2">
                  Download Resume <Download size={15} />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="ghost">Contact Me</Button>
              </Link>
            </motion.div>
            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <a href="https://github.com/b3mug1" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:text-white">
                <Github size={16} />
              </a>
              <a href="mailto:intelect3235@gmail.com" className="rounded-full border border-white/10 p-2 hover:text-white">
                <Mail size={16} />
              </a>
              <a href="https://t.me/gizatuly_b" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:text-white">
                <Send size={16} />
              </a>
            </div>
          </div>

          <motion.div
            className="glass relative overflow-hidden rounded-3xl p-6"
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 60, damping: 16 }}
          >
            <div className="aurora-bg absolute inset-0 bg-aurora opacity-60" />
            <div className="relative z-10 space-y-4">
              <Card className="bg-black/35">
                <p className="text-sm text-slate-300">Current Focus</p>
                <p className="mt-2 text-xl font-semibold text-white">Backend Development and Applied AI Learning</p>
              </Card>
              <Card className="bg-black/35">
                <p className="text-sm text-slate-300">Core Stack</p>
                <p className="mt-2 text-white">Python, FastAPI, PostgreSQL, MongoDB, Docker, Go</p>
              </Card>
              <Card className="bg-black/35">
                <p className="text-sm text-slate-300">Availability</p>
                <p className="mt-2 font-medium text-emerald-300">Open to internships and junior backend roles</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,90%)] py-20">
        <SectionHeading title="Core Skills" subtitle="Capabilities" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-surface/70 p-5 backdrop-blur"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface/50 py-20">
        <div className="mx-auto w-[min(1120px,90%)]">
          <SectionHeading title="Featured Projects" subtitle="Portfolio" />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-bg/70"
                whileHover={{ y: -8 }}
              >
                <img src={project.image} alt={project.title} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                  <Link to={`/projects/${project.id}`} className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                    Open details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,90%)] py-20">
        <SectionHeading title="GitHub Snapshot" subtitle="Open Source" />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card>
            <p className="text-sm text-slate-400">Contribution Graph</p>
            <div className="mt-4 grid grid-cols-20 gap-1">
              {contributionCells.map((value, index) => (
                <span
                  key={index}
                  className="h-3 rounded-sm"
                  style={{
                    backgroundColor:
                      value === 0
                        ? "rgba(148,163,184,0.15)"
                        : value === 1
                          ? "rgba(59,130,246,0.35)"
                          : value === 2
                            ? "rgba(59,130,246,0.55)"
                            : value === 3
                              ? "rgba(139,92,246,0.65)"
                              : "rgba(139,92,246,0.9)"
                  }}
                />
              ))}
            </div>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card>
              <p className="text-sm text-slate-400">Repositories</p>
              <p className="mt-2 text-3xl font-bold text-white">47</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-400">Stars</p>
              <p className="mt-2 text-3xl font-bold text-white">312</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-400">Top Languages</p>
              <p className="mt-2 text-sm text-slate-200">Python, Go, JavaScript, SQL</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-400">Latest Commits</p>
              <p className="mt-2 text-sm text-slate-200">12 commits this week across APIs and infra repositories.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
