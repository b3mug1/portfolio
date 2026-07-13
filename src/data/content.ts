import type { Locale } from "@/types";

export const uiCopy = {
  en: {
    brand: "Bekzat",
    loading: "Loading portfolio",
    backToTop: "Back to top",
    language: "Language",
    themeLight: "Light",
    themeDark: "Dark"
  },
  ru: {
    brand: "Бекзат",
    loading: "Загрузка портфолио",
    backToTop: "Наверх",
    language: "Язык",
    themeLight: "Светлая",
    themeDark: "Тёмная"
  }
} satisfies Record<Locale, { brand: string; loading: string; backToTop: string; language: string; themeLight: string; themeDark: string }>;

export const homeCopy = {
  en: {
    eyebrow: "Backend Developer Portfolio",
    title: "Hi, I\'m Murat Bekzat.",
    subtitle: "Python Developer and Software Engineering Student",
    description:
      "I am a 3rd-year Software Engineering student at Astana IT University, graduating in 2027. I build scalable web applications and RESTful APIs with Python, FastAPI, PostgreSQL, MongoDB, Docker, and Git.",
    primaryCta: "View Projects",
    resumeCta: "Download Resume",
    secondaryCta: "Contact Me",
    socialLabel: "Find me online",
    currentFocus: "Backend Development and Applied AI Learning",
    coreStack: "Python, FastAPI, PostgreSQL, MongoDB, Docker, Go",
    availability: "Open to internships and junior backend roles",
    skillsSubtitle: "Capabilities",
    skillsTitle: "Core Skills",
    projectsSubtitle: "Portfolio",
    projectsTitle: "Featured Projects",
    githubSubtitle: "Open Source",
    githubTitle: "GitHub Snapshot"
  },
  ru: {
    eyebrow: "Портфолио backend-разработчика",
    title: "Привет, я Мурат Бекзат.",
    subtitle: "Python-разработчик и студент Software Engineering",
    description:
      "Я студент 3 курса Software Engineering в Astana IT University, выпуск в 2027 году. Создаю масштабируемые веб-приложения и REST API на Python, FastAPI, PostgreSQL, MongoDB, Docker и Git.",
    primaryCta: "Проекты",
    resumeCta: "Скачать резюме",
    secondaryCta: "Связаться",
    socialLabel: "Соцсети",
    currentFocus: "Backend-разработка и прикладной AI",
    coreStack: "Python, FastAPI, PostgreSQL, MongoDB, Docker, Go",
    availability: "Открыт к стажировкам и junior backend-ролям",
    skillsSubtitle: "Навыки",
    skillsTitle: "Ключевые навыки",
    projectsSubtitle: "Портфолио",
    projectsTitle: "Избранные проекты",
    githubSubtitle: "Open Source",
    githubTitle: "GitHub snapshot"
  }
} satisfies Record<Locale, Record<string, string>>;

export const aboutCopy = {
  en: {
    title: "About Me",
    intro:
      "I am Murat Bekzat Gizatuly, a motivated Python Developer and 3rd-year Software Engineering student at Astana IT University. I focus on scalable backend systems, practical API design, and clean engineering workflows.",
    professionalTitle: "Professional Summary",
    professionalBody:
      "I have hands-on internship experience in Python and Go development. I build web applications and REST APIs, optimize backend performance, and collaborate in team environments to ship reliable features.",
    interestsTitle: "Interests",
    interestsBody:
      "Backend architecture, authentication systems, role-based access control, realtime communication, and practical AI applications.",
    educationTitle: "Education",
    journeyTitle: "Journey Timeline"
  },
  ru: {
    title: "Обо мне",
    intro:
      "Меня зовут Мурат Бекзат Гизатулы, я Python-разработчик и студент 3 курса Software Engineering в Astana IT University. Я фокусируюсь на масштабируемых backend-системах, практичном проектировании API и чистых инженерных процессах.",
    professionalTitle: "Профессиональное резюме",
    professionalBody:
      "У меня есть практический опыт стажировок в Python и Go. Я создаю веб-приложения и REST API, оптимизирую backend-производительность и работаю в команде над надежными фичами.",
    interestsTitle: "Интересы",
    interestsBody:
      "Backend-архитектура, системы аутентификации, RBAC, realtime-коммуникации и прикладные AI-решения.",
    educationTitle: "Образование",
    journeyTitle: "Этапы пути"
  }
} satisfies Record<Locale, Record<string, string>>;

export const projectsPageCopy = {
  en: {
    title: "Projects",
    intro: "A curated collection of backend engineering projects with architecture focus and production thinking.",
    searchPlaceholder: "Search projects",
    allLabel: "All",
    quickView: "Quick View",
    details: "Details"
  },
  ru: {
    title: "Проекты",
    intro: "Подборка backend-проектов с акцентом на архитектуру, надежность и production-подход.",
    searchPlaceholder: "Поиск проектов",
    allLabel: "Все",
    quickView: "Быстрый просмотр",
    details: "Подробнее"
  }
} satisfies Record<Locale, Record<string, string>>;

export const experienceCopy = {
  en: {
    title: "Experience",
    intro: "A timeline of internships, QA work, and backend development impact."
  },
  ru: {
    title: "Опыт",
    intro: "Хронология стажировок, QA-работы и backend-результатов."
  }
} satisfies Record<Locale, Record<string, string>>;

export const skillsCopy = {
  en: {
    title: "Skills",
    intro: "A practical toolkit built through internship experience, academic projects, and backend-focused development."
  },
  ru: {
    title: "Навыки",
    intro: "Практический набор технологий, сформированный стажировками, учебными проектами и backend-разработкой."
  }
} satisfies Record<Locale, Record<string, string>>;

export const blogCopy = {
  en: {
    title: "Certificates",
    intro: "Learning milestones from Cisco Networking Academy and Huawei ICT Academy."
  },
  ru: {
    title: "Сертификаты",
    intro: "Образовательные достижения Cisco Networking Academy и Huawei ICT Academy."
  }
} satisfies Record<Locale, Record<string, string>>;

export const contactCopy = {
  en: {
    title: "Contact",
    intro: "Let\'s discuss internship opportunities, junior backend roles, or student project collaboration.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    sending: "Sending...",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell me about your project or role",
    socialTitle: "Social Links"
  },
  ru: {
    title: "Контакты",
    intro: "Давайте обсудим стажировки, junior backend-роль или совместный учебный проект.",
    name: "Имя",
    email: "Email",
    message: "Сообщение",
    submit: "Отправить",
    sending: "Отправка...",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Расскажите о проекте или вакансии",
    socialTitle: "Социальные ссылки"
  }
} satisfies Record<Locale, Record<string, string>>;

export const notFoundCopy = {
  en: {
    title: "Page Not Found",
    intro: "The page you are looking for does not exist or has been moved.",
    back: "Back Home"
  },
  ru: {
    title: "Страница не найдена",
    intro: "Страница, которую вы ищете, не существует или была перемещена.",
    back: "На главную"
  }
} satisfies Record<Locale, Record<string, string>>;

export const projectDetailCopy = {
  en: {
    back: "Back to projects",
    features: "Features",
    stack: "Tech Stack",
    github: "GitHub",
    live: "Live Demo",
    notFound: "Project not found."
  },
  ru: {
    back: "К проектам",
    features: "Функции",
    stack: "Стек технологий",
    github: "GitHub",
    live: "Демо",
    notFound: "Проект не найден."
  }
} satisfies Record<Locale, Record<string, string>>;
