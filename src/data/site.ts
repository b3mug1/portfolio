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
    skills: ["Python", "FastAPI", "Go", "Node.js"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "NoSQL"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Docker Compose", "Linux", "GitHub"]
  },
  {
    title: "Architecture",
    skills: ["REST API", "Authentication", "RBAC", "Real-time Communication", "Data Analytics"]
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "Swagger", "RabbitMQ", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Languages",
    skills: ["Kazakh (Native)", "English (B1)", "Russian (B2)"]
  }
];

export const projects: Project[] = [
  {
    id: "auth-analytics-platform",
    title: "Auth Analytics Platform",
    summary: "Full-stack web platform with secure authentication and user analytics.",
    description:
      "A production-style student project focused on secure authentication, role-based access control, and user activity analytics with scalable API architecture.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    features: ["JWT authentication", "Role-based access", "Dashboard metrics", "REST endpoints"],
    githubUrl: "https://github.com/b3mug1",
    liveUrl: "https://b3mug1.dev/projects/auth-analytics-platform"
  },
  {
    id: "realtime-collab-api",
    title: "Realtime Collaboration API",
    summary: "Realtime messaging and collaboration backend with event-driven flows.",
    description:
      "A backend-first project implementing realtime communication patterns and asynchronous processing with reliable API contracts and service integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["FastAPI", "RabbitMQ", "MongoDB", "Docker", "Postman"],
    features: ["Realtime channels", "Async workers", "Message events", "Integration tests"],
    githubUrl: "https://github.com/b3mug1",
    liveUrl: "https://b3mug1.dev/projects/realtime-collab-api"
  },
  {
    id: "go-learning-systems",
    title: "Go Learning Systems",
    summary: "Algorithmic and system-level Go projects from internship practice.",
    description:
      "A collection of Go projects that cover data structures, sorting/searching algorithms, interfaces, pointers, and command-line automation scripts.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tech: ["Go", "Git", "Linux", "Bash", "Docker"],
    features: ["Data structures", "Sorting and searching", "CLI tooling", "Code quality focus"],
    githubUrl: "https://github.com/b3mug1",
    liveUrl: "https://b3mug1.dev/projects/go-learning-systems"
  }
];

export const experience: ExperienceItem[] = [
  {
    period: "Jun 2026 - Jul 2026",
    role: "Golang Developer Intern",
    company: "Alem.ai Foundation",
    details: "Developed collaborative full-scale software solutions and improved algorithmic and system-level engineering skills.",
    achievements: [
      "Implemented core data structures and optimized sorting and searching algorithms in Go.",
      "Applied advanced Go features including pointers, memory semantics, and interfaces.",
      "Built automation scripts in Bash to speed up setup and repetitive development tasks.",
      "Collaborated in team mini-projects and a final Go application delivery."
    ]
  },
  {
    period: "Jan 2026 - Mar 2026",
    role: "Python Developer",
    company: "Zimala",
    details: "Developed and optimized backend services with Python and FastAPI for web products.",
    achievements: [
      "Reduced data processing time by 20% through query and API optimization.",
      "Improved server-side performance by 30% using asynchronous processing and efficient database patterns.",
      "Designed and maintained RESTful APIs, improving reliability and scalability.",
      "Containerized applications with Docker to simplify deployment and setup."
    ]
  },
  {
    period: "Oct 2025 - Dec 2025",
    role: "Tester",
    company: "Talap Academy",
    details: "Performed QA processes for educational products and team feature releases.",
    achievements: [
      "Conducted testing based on developed test scenarios and test cases.",
      "Performed regression and integration testing and fixed identified bugs.",
      "Prepared test data and created templates and guidelines for documentation.",
      "Contributed to delivery by reducing issue turnaround time with the team."
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "it-essentials-cisco",
    title: "IT Essentials - Cisco Networking Academy",
    excerpt: "Core IT fundamentals including system basics, networking, and troubleshooting.",
    date: "2026",
    readTime: "Certificate",
    tags: ["Cisco", "IT Fundamentals"]
  },
  {
    id: "huawei-ai-applications",
    title: "Artificial Intelligence and Applications - Huawei ICT Academy",
    excerpt: "Introduction to practical AI concepts and applied machine learning contexts.",
    date: "2025",
    readTime: "Certificate",
    tags: ["AI", "Huawei ICT"]
  },
  {
    id: "linux-essentials",
    title: "Linux Essentials - Cisco Networking Academy",
    excerpt: "Hands-on Linux fundamentals for development and infrastructure workflows.",
    date: "2025",
    readTime: "Certificate",
    tags: ["Linux", "Cisco"]
  }
];

export const journeyTimeline = [
  { year: "2023", title: "University journey started", text: "Joined Astana IT University in Software Engineering." },
  { year: "2025", title: "QA and testing practice", text: "Completed testing role and improved product quality workflows." },
  { year: "2026", title: "Backend and Go internships", text: "Worked as Python Developer and Golang Developer Intern." },
  { year: "2027", title: "Expected graduation", text: "Completing 3rd-year path and preparing for full-time backend role." }
];

export const education = [
  {
    school: "Astana IT University",
    degree: "Software Engineering, 3rd-year student (Expected graduation: 2027)",
    period: "2023 - 2027"
  },
  {
    school: "Secondary School",
    degree: "General Education",
    period: "Graduated in 2024"
  }
];
