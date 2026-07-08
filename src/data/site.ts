import type { BlogPost, ExperienceItem, Project, SkillCategory } from "@/types";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "Flask"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Redis", "MongoDB"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Linux", "Nginx", "GitHub Actions"]
  },
  {
    title: "Architecture",
    skills: ["REST API", "JWT", "RabbitMQ", "Clean Architecture", "Microservices"]
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "PyCharm", "Postman"]
  }
];

export const projects: Project[] = [
  {
    id: "neon-queue",
    title: "Neon Queue",
    summary: "High-throughput job orchestration platform for async workloads.",
    description:
      "Neon Queue is a backend-heavy platform for scheduling and processing millions of tasks with fault-tolerant workers, retry policies, dead-letter queues, and observability dashboards.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    features: ["Priority queues", "Retry engine", "Rate-limited workers", "Live metrics"],
    githubUrl: "https://github.com/bekzat/neon-queue",
    liveUrl: "https://neon-queue-demo.vercel.app"
  },
  {
    id: "ledger-guard",
    title: "Ledger Guard",
    summary: "Financial API platform with audit-safe architecture.",
    description:
      "Ledger Guard delivers secure accounting APIs with strict role-based access, event sourcing for traceability, and compliance-friendly exports for enterprise workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["Django", "PostgreSQL", "Redis", "JWT", "Nginx"],
    features: ["Event log", "Role policies", "Secure webhooks", "Reconciliation tooling"],
    githubUrl: "https://github.com/bekzat/ledger-guard",
    liveUrl: "https://ledger-guard.vercel.app"
  },
  {
    id: "trace-pulse",
    title: "Trace Pulse",
    summary: "Observability-first microservices tracing suite.",
    description:
      "Trace Pulse aggregates logs, traces, and service-level metrics to make root-cause detection faster across distributed Python services.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tech: ["FastAPI", "Flask", "MongoDB", "Docker", "GitHub Actions"],
    features: ["Trace timeline", "Error clustering", "Deployment markers", "SLA alerting"],
    githubUrl: "https://github.com/bekzat/trace-pulse",
    liveUrl: "https://trace-pulse.vercel.app"
  }
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Senior Backend Developer",
    company: "CloudScale Systems",
    details: "Led architecture and delivery of microservice APIs for fintech and SaaS clients.",
    achievements: [
      "Reduced average endpoint latency by 42% through caching and query optimization.",
      "Designed CI/CD pipelines with quality gates and zero-downtime deploys.",
      "Introduced event-driven workflows with RabbitMQ for better scalability."
    ]
  },
  {
    period: "2022 - 2024",
    role: "Backend Engineer",
    company: "Fluxline Labs",
    details: "Built robust Python services and internal tooling for product teams.",
    achievements: [
      "Implemented a unified authentication gateway using JWT and refresh rotation.",
      "Containerized platform workloads with Docker and Nginx ingress.",
      "Mentored junior developers on architecture and clean code practices."
    ]
  },
  {
    period: "2020 - 2022",
    role: "Python Developer",
    company: "ByteForge",
    details: "Developed APIs, background jobs, and integrations for startup products.",
    achievements: [
      "Created reusable service templates to accelerate delivery cycles.",
      "Built monitoring dashboards that reduced incident response time.",
      "Maintained high test coverage in critical billing services."
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "scalable-apis",
    title: "Designing Scalable Python APIs for Real-World Traffic",
    excerpt: "A practical guide to architecture trade-offs, caching, and reliability patterns.",
    date: "2026-05-16",
    readTime: "8 min",
    tags: ["FastAPI", "Architecture", "Performance"]
  },
  {
    id: "clean-architecture",
    title: "Clean Architecture in Backend Teams",
    excerpt: "What to keep, what to avoid, and how to make architecture practical.",
    date: "2026-03-09",
    readTime: "6 min",
    tags: ["Clean Architecture", "Python"]
  },
  {
    id: "observability-stack",
    title: "An Observability Stack That Engineers Actually Use",
    excerpt: "Metrics, traces, and alerts that improve signal-to-noise in production.",
    date: "2026-01-28",
    readTime: "7 min",
    tags: ["DevOps", "Monitoring"]
  }
];

export const journeyTimeline = [
  { year: "2018", title: "Started coding", text: "Discovered Python and backend engineering fundamentals." },
  { year: "2020", title: "First production API", text: "Shipped a public API with authentication and analytics." },
  { year: "2022", title: "Scaled systems", text: "Worked on distributed services and async processing." },
  { year: "2026", title: "Architecture leadership", text: "Driving backend strategy and mentoring engineering teams." }
];

export const education = [
  {
    school: "Astana IT University",
    degree: "BSc in Computer Science",
    period: "2016 - 2020"
  }
];
