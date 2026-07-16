import type { BlogPost, EducationItem, ExperienceItem, Locale, LocalizedText, Project, SkillCategory, TimelineEntry } from "@/types";

type LocalizedLink = {
  label: LocalizedText;
  path: string;
};

export function t(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export const navLinks = [
  { label: { en: "Home", ru: "Главная" }, path: "/" },
  { label: { en: "About", ru: "Обо мне" }, path: "/about" },
  { label: { en: "Projects", ru: "Проекты" }, path: "/projects" },
  { label: { en: "Experience", ru: "Опыт" }, path: "/experience" },
  { label: { en: "Skills", ru: "Навыки" }, path: "/skills" },
  { label: { en: "Blog", ru: "Сертификаты" }, path: "/blog" },
  { label: { en: "Contact", ru: "Контакты" }, path: "/contact" }
] satisfies LocalizedLink[];

export const skillCategories: SkillCategory[] = [
  {
    title: { en: "Backend", ru: "Backend" },
    skills: ["Python", "FastAPI", "Go", "Node.js"]
  },
  {
    title: { en: "Database", ru: "Базы данных" },
    skills: ["PostgreSQL", "MongoDB", "NoSQL"]
  },
  {
    title: { en: "DevOps", ru: "DevOps" },
    skills: ["Docker", "Docker Compose", "Linux", "GitHub"]
  },
  {
    title: { en: "Architecture", ru: "Архитектура" },
    skills: ["REST API", "Authentication", "RBAC", "Real-time Communication", "Data Analytics"]
  },
  {
    title: { en: "Tools", ru: "Инструменты" },
    skills: ["Git", "Postman", "Swagger", "RabbitMQ", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: { en: "Languages", ru: "Языки" },
    skills: ["Kazakh (Native)", "English (B1)", "Russian (B2)"]
  }
];

export const projects: Project[] = [
  {
    id: "locker-management-system",
    title: { en: "Locker Management System", ru: "Система управления шкафчиками" },
    summary: {
      en: "A full-stack system for locker assignment, student lookup, and live admin tracking.",
      ru: "Полноценная система для выдачи шкафчиков, поиска студентов и live-отслеживания для админов."
    },
    description: {
      en: "A full-stack, production-ready web application for managing student locker assignments. It supports role-based access control, real-time updates via WebSocket, barcode-based student lookup, inclusive-status tracking, and multi-language UI.",
      ru: "Полноценное production-ready веб-приложение для управления выдачей шкафчиков студентам. Поддерживает RBAC, обновления в реальном времени через WebSocket, поиск по barcode, учет льготного статуса и многоязычный интерфейс."
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdSgbNQ2Kortwt9DmlLg-4YDOjC1bNgldX-avgjqjgLOKYsLBe5q1meZn&s=10",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "WebSocket", "Docker", "React"],
    features: [
      { en: "Role-based access control", ru: "Ролевой доступ" },
      { en: "Real-time locker updates", ru: "Обновления шкафчиков в реальном времени" },
      { en: "Barcode student lookup", ru: "Поиск студента по штрихкоду" },
      { en: "Inclusive-status tracking", ru: "Учет льготного статуса" }
    ],
    githubUrl: "https://github.com/b3mug1",
    liveUrl: "https://b3mug1.dev/projects/locker-management-system"
  },
  {
    id: "csvision",
    title: { en: "CSVision", ru: "CSVision" },
    summary: {
      en: "A simplified Power BI-style data analytics MVP for file upload, summaries, and charts.",
      ru: "Упрощенный MVP аналитики данных в стиле Power BI: загрузка файлов, сводки и графики."
    },
    description: {
      en: "A simplified Power BI-style data analytics MVP built with FastAPI and React. It supports CSV / Excel upload, dataset summaries, automatic charts, and basic forecasting.",
      ru: "Упрощенный MVP аналитики данных в стиле Power BI, построенный на FastAPI и React. Поддерживает загрузку CSV / Excel, сводки по датасету, авто-графики и базовый прогноз.",
    },
    image: "https://cdn-icons-png.flaticon.com/512/9159/9159105.png",
    tech: ["FastAPI", "React", "Pandas", "NumPy", "scikit-learn", "PostgreSQL"],
    features: [
      { en: "CSV / Excel upload", ru: "Загрузка CSV / Excel" },
      { en: "Dataset summaries", ru: "Сводки по датасету" },
      { en: "Automatic charts", ru: "Автоматические графики" },
      { en: "Forecasting", ru: "Прогнозирование" }
    ],
    githubUrl: "https://github.com/b3mug1/CSVision",
    liveUrl: "https://github.com/b3mug1/CSVision"
  },
  {
    id: "link-tracker",
    title: { en: "Link Tracker", ru: "Link Tracker" },
    summary: {
      en: "A production-ready backend for tracking websites, feeds, and repositories with notifications.",
      ru: "Production-ready backend для отслеживания сайтов, лент и репозиториев с уведомлениями."
    },
    description: {
      en: "Production-ready FastAPI backend for tracking updates from resources like GitHub repositories, RSS feeds, blogs, docs pages, and generic websites. It includes authentication, role-based authorization, periodic checks, update history, and extensible notifications.",
      ru: "Production-ready FastAPI backend для отслеживания обновлений из GitHub-репозиториев, RSS-лент, блогов, документации и обычных сайтов. Поддерживает аутентификацию, RBAC, периодические проверки, историю изменений и расширяемые уведомления."
    },
    image: "https://www.linkapp.one/_next/image?url=https%3A%2F%2Fqiy.blob.core.windows.net%2Fblogs%2FLink-App.png&w=1920&q=75",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Alembic", "Docker"],
    features: [
      { en: "JWT access and refresh tokens", ru: "JWT access и refresh tokens" },
      { en: "Role-based authorization", ru: "Ролевая авторизация" },
      { en: "Update history and notifications", ru: "История обновлений и уведомления" },
      { en: "Search, filter, and pagination", ru: "Поиск, фильтрация и пагинация" }
    ],
    githubUrl: "https://github.com/b3mug1/link_tracker",
    liveUrl: "https://github.com/b3mug1/link_tracker"
  }
];

export const experience: ExperienceItem[] = [
  {
    period: "Mar 2026 - May 2026",
    role: { en: "Python Developer", ru: "Python-разработчик" },
    company: "DataArt",
    details: {
      en: "Developed and maintained backend microservices, ensuring seamless communication through REST APIs.",
      ru: "Разрабатывал и поддерживал бэкенд-микросервисы, обеспечивая бесперебойную связь через REST API."
    },
    achievements: [
      {
        en: "Optimized ORM performance using eager loading techniques, database indexing, and caching, improving REST API response times by an average of 25–30%.",
        ru: "Оптимизировал производительность ORM с помощью техник eager loading, индексирования баз данных и кэширования, улучшив время отклика REST API в среднем на 25–30%."
      },
      {
        en: "Implemented asynchronous services and background processing, reducing the execution time of resource-intensive requests by up to 40%.",
        ru: "Внедрил асинхронные сервисы и фоновую обработку, сократив время выполнения ресурсоемких запросов до 40%."
      },
      {
        en: "Developed REST APIs for core business domains, including users, contracts, contract records, complaints, discussions, and surveys.",
        ru: "Разработал REST API для ключевых бизнес-доменов, включая пользователей, контракты, записи контрактов, жалобы, обсуждения и опросы."
      },
      {
        en: "Implemented role-based access control (RBAC) and authentication mechanisms using JWT and session-based authentication, ensuring security and scalability.",
        ru: "Внедрил управление доступом на основе ролей (RBAC) и механизмы аутентификации с использованием JWT и сессий, обеспечив безопасность и масштабируемость."
      },
      {
        en: "Designed and optimized PostgreSQL database schemas to support high-load applications.",
        ru: "Спроектировал и оптимизировал схемы баз данных PostgreSQL для поддержки высоконагруженных приложений."
      },
      {
        en: "Created and executed custom database migrations for complex business logic changes.",
        ru: "Создавал и выполнял кастомные миграции баз данных для сложных изменений бизнес-логики."
      },
      {
        en: "Developed and maintained backend microservices, enabling seamless communication through REST APIs.",
        ru: "Разрабатывал и поддерживал бэкенд-микросервисы, обеспечивая бесперебойную связь через REST API."
      },
      {
        en: "Reduced technical debt by refactoring the codebase and applying SOLID and DRY principles.",
        ru: "Сократил технический долг путем рефакторинга кодовой базы и применения принципов SOLID и DRY."
      },
      {
        en: "Configured Docker-based development and testing environments, ensuring consistency, reproducibility, and reliable deployments.",
        ru: "Настроил Docker-окружения для разработки и тестирования, обеспечив согласованность, воспроизводимость и надежность развертываний."
      }
    ]
  },
  {
    period: "Jun 2026 - Jul 2026",
    role: { en: "Golang Developer Intern", ru: "Стажер Golang Developer" },
    company: "Alem.ai Foundation",
    details: {
      en: "Developed collaborative full-scale software solutions and improved algorithmic and system-level engineering skills.",
      ru: "Создавал совместные полнофункциональные решения и улучшал навыки алгоритмической и системной разработки."
    },
    achievements: [
      { en: "Implemented core data structures and optimized sorting and searching algorithms in Go.", ru: "Реализовал основные структуры данных и оптимизировал алгоритмы сортировки и поиска на Go." },
      { en: "Applied advanced Go features including pointers, memory semantics, and interfaces.", ru: "Применял продвинутые возможности Go: указатели, семантику памяти и интерфейсы." },
      { en: "Built automation scripts in Bash to speed up setup and repetitive development tasks.", ru: "Создавал Bash-скрипты для ускорения настройки и повторяющихся задач разработки." },
      { en: "Collaborated in team mini-projects and a final Go application delivery.", ru: "Участвовал в командных мини-проектах и финальной поставке Go-приложения." }
    ]
  },
  {
    period: "Jan 2026 - Mar 2026",
    role: { en: "Python Developer", ru: "Python-разработчик" },
    company: "Zimala",
    details: {
      en: "Developed and optimized backend services with Python and FastAPI for web products.",
      ru: "Разрабатывал и оптимизировал backend-сервисы на Python и FastAPI для веб-продуктов."
    },
    achievements: [
      { en: "Reduced data processing time by 20% through query and API optimization.", ru: "Сократил время обработки данных на 20% за счет оптимизации запросов и API." },
      { en: "Improved server-side performance by 30% using asynchronous processing and efficient database patterns.", ru: "Улучшил серверную производительность на 30% благодаря асинхронной обработке и эффективным паттернам работы с БД." },
      { en: "Designed and maintained RESTful APIs, improving reliability and scalability.", ru: "Проектировал и поддерживал RESTful API, повышая надежность и масштабируемость." },
      { en: "Containerized applications with Docker to simplify deployment and setup.", ru: "Контейнеризовал приложения с Docker, упростив деплой и настройку." }
    ]
  },
  {
    period: "Oct 2025 - Dec 2025",
    role: { en: "Tester", ru: "Тестировщик" },
    company: "Talap Academy",
    details: {
      en: "Performed QA processes for educational products and team feature releases.",
      ru: "Проводил QA-процессы для образовательных продуктов и командных релизов."
    },
    achievements: [
      { en: "Conducted testing based on developed test scenarios and test cases.", ru: "Проводил тестирование по подготовленным сценариям и тест-кейсам." },
      { en: "Performed regression and integration testing and fixed identified bugs.", ru: "Выполнял регрессионное и интеграционное тестирование, исправлял найденные баги." },
      { en: "Prepared test data and created templates and guidelines for documentation.", ru: "Готовил тестовые данные и создавал шаблоны и гайды для документации." },
      { en: "Contributed to delivery by reducing issue turnaround time with the team.", ru: "Помогал ускорить устранение проблем и доставку результата вместе с командой." }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "it-essentials-cisco",
    title: { en: "IT Essentials - Cisco Networking Academy", ru: "IT Essentials - Cisco Networking Academy" },
    excerpt: {
      en: "Core IT fundamentals including system basics, networking, and troubleshooting.",
      ru: "Базовые IT-знания: основы систем, сети и устранение неисправностей."
    },
    date: "2026",
    readTime: { en: "Certificate", ru: "Сертификат" },
    tags: ["Cisco", "IT Fundamentals"]
  },
  {
    id: "huawei-ai-applications",
    title: { en: "Artificial Intelligence and Applications - Huawei ICT Academy", ru: "Artificial Intelligence and Applications - Huawei ICT Academy" },
    excerpt: {
      en: "Introduction to practical AI concepts and applied machine learning contexts.",
      ru: "Введение в практические AI-концепции и прикладные сценарии машинного обучения."
    },
    date: "2025",
    readTime: { en: "Certificate", ru: "Сертификат" },
    tags: ["AI", "Huawei ICT"]
  },
  {
    id: "linux-essentials",
    title: { en: "Linux Essentials - Cisco Networking Academy", ru: "Linux Essentials - Cisco Networking Academy" },
    excerpt: {
      en: "Hands-on Linux fundamentals for development and infrastructure workflows.",
      ru: "Практические основы Linux для разработки и инфраструктурных процессов."
    },
    date: "2025",
    readTime: { en: "Certificate", ru: "Сертификат" },
    tags: ["Linux", "Cisco"]
  }
];

export const journeyTimeline: TimelineEntry[] = [
  {
    year: "2024",
    title: { en: "University journey started", ru: "Начало обучения в университете" },
    text: { en: "Joined Astana IT University in Software Engineering.", ru: "Поступил в Astana IT University на Software Engineering." }
  },
  {
    year: "2025",
    title: { en: "QA and testing practice", ru: "Практика QA и тестирования" },
    text: { en: "Completed testing role and improved product quality workflows.", ru: "Прошел практику в тестировании и улучшил процессы качества продукта." }
  },
  {
    year: "2026",
    title: { en: "Backend and Go internships", ru: "Backend и Go стажировки" },
    text: { en: "Worked as Python Developer and Golang Developer Intern.", ru: "Работал как Python Developer и Golang Developer Intern." }
  },
  {
    year: "2027",
    title: { en: "Expected graduation", ru: "Ожидаемый выпуск" },
    text: { en: "Completing 3rd-year path and preparing for full-time backend role.", ru: "Завершаю 3 курс и готовлюсь к полноценной backend-работе." }
  }
];

export const education: EducationItem[] = [
  {
    school: "Astana IT University",
    degree: {
      en: "Software Engineering, 3rd-year student (Expected graduation: 2027)",
      ru: "Software Engineering, 3 курс (выпуск в 2027 году)"
    },
    period: "2023 - 2027"
  },
  {
    school: "Secondary School",
    degree: { en: "General Education", ru: "Общее образование" },
    period: "Graduated in 2024"
  }
];
