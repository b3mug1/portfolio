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
    liveUrl: "https://portfolio.b3mug1.dev/projects/locker-management-system"
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
  },
  {
    id: "cyberoom",
    title: { en: "Cyberoom", ru: "Cyberoom" },
    summary: {
      en: "A gaming club booking platform with computer availability, time-based pricing, and staff workflows.",
      ru: "Платформа бронирования компьютерных клубов с расписанием, тарифами и рабочими кабинетами персонала."
    },
    description: {
      en: "A full-stack booking platform built with FastAPI and Next.js. It includes club discovery, computer selection, conflict-safe reservations, role-based owner and staff dashboards, reviews, memberships, and booking notifications.",
      ru: "Full-stack платформа бронирования на FastAPI и Next.js. В проекте есть поиск клубов, выбор компьютера, защита от пересечения бронирований, кабинеты владельца и персонала, отзывы, абонементы и уведомления."
    },
    image: "",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "SQLAlchemy", "Redis", "Docker"],
    features: [
      { en: "Conflict-safe computer reservations", ru: "Бронирование компьютеров без пересечений" },
      { en: "Owner and staff dashboards", ru: "Кабинеты владельца и персонала" },
      { en: "Time-based tariffs and memberships", ru: "Тарифы по времени и абонементы" },
      { en: "Reviews, waitlists, and notifications", ru: "Отзывы, лист ожидания и уведомления" }
    ],
    githubUrl: "https://github.com/b3mug1/cyberoom",
    liveUrl: "https://github.com/b3mug1/cyberoom"
  },
  {
    id: "universal-ai-quiz-solver",
    title: { en: "Universal AI Quiz Solver", ru: "Universal AI Quiz Solver" },
    summary: {
      en: "A Chrome extension and FastAPI service that explain suggested answers for authorized practice quizzes.",
      ru: "Расширение Chrome и FastAPI-сервис с подсказками и объяснениями для учебных тестов."
    },
    description: {
      en: "A Manifest V3 browser extension backed by FastAPI and Gemini. It reads supported question controls, requests structured suggestions, and shows explanations with a model confidence estimate. It is designed for authorized practice and does not submit quizzes.",
      ru: "Расширение Chrome Manifest V3 с backend на FastAPI и Gemini. Оно распознаёт поддерживаемые поля вопросов, получает структурированные подсказки и показывает объяснения с оценкой уверенности модели. Предназначено для разрешённых тренировочных тестов и не отправляет ответы."
    },
    image: "",
    tech: ["Python", "FastAPI", "Chrome Extension", "Gemini", "SQLite", "PostgreSQL"],
    features: [
      { en: "Structured answer suggestions with explanations", ru: "Структурированные подсказки с объяснениями" },
      { en: "Dynamic page and open Shadow DOM scanning", ru: "Поиск вопросов на динамических страницах и в открытом Shadow DOM" },
      { en: "Optional local answer cache", ru: "Опциональный локальный кэш ответов" },
      { en: "Does not submit quizzes", ru: "Не отправляет ответы в тест" }
    ],
    githubUrl: "https://github.com/b3mug1/quiz-solver/tree/main/universal-ai-quiz-solver",
    liveUrl: "https://github.com/b3mug1/quiz-solver/tree/main/universal-ai-quiz-solver"
  },
  {
    id: "study-buddy",
    title: { en: "Study Buddy", ru: "Study Buddy" },
    summary: {
      en: "A university collaboration app for finding study partners, organizing groups, and tracking study goals.",
      ru: "Приложение для поиска партнёров по учёбе, учебных групп и совместных занятий."
    },
    description: {
      en: "A student collaboration platform with a React and Vite frontend, FastAPI backend, and PostgreSQL database. Students can manage profiles, discover compatible study partners, organize groups and sessions, chat, share materials, and track weekly goals.",
      ru: "Платформа для студентов на React и Vite, FastAPI и PostgreSQL. Пользователи могут вести профили, находить партнёров по интересам и расписанию, создавать группы и занятия, общаться, делиться материалами и отслеживать учебные цели."
    },
    image: "",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "Docker"],
    features: [
      { en: "Study partner discovery and groups", ru: "Поиск партнёров и учебные группы" },
      { en: "Messaging and study sessions", ru: "Переписка и совместные занятия" },
      { en: "Shared materials and focus timers", ru: "Общие материалы и таймеры фокусировки" },
      { en: "Weekly goals and progress tracking", ru: "Еженедельные цели и отслеживание прогресса" }
    ],
    githubUrl: "https://github.com/b3mug1/study-buddy",
    liveUrl: "https://study.b3mug1.dev/"
  }
];

export const experience: ExperienceItem[] = [
  {
    period: { en: "Oct 2026 — Oct 2026 · 1 month", ru: "Октябрь 2026 — октябрь 2026 · 1 месяц" },
    role: { en: "Telegram Bot Developer", ru: "Разработчик Telegram-ботов" },
    company: "Stratton",
    details: {
      en: "Developed and maintained Python Telegram bots with Aiogram 3, from application architecture and user flows to production deployment.",
      ru: "Разрабатывал и сопровождал Telegram-ботов на Python с Aiogram 3 — от архитектуры приложений и пользовательских сценариев до production-развертывания."
    },
    achievements: [
      {
        en: "Integrated PostgreSQL and external APIs, and built asynchronous processes for reliable data handling.",
        ru: "Интегрировал PostgreSQL и внешние API, настраивал асинхронные процессы для надежной обработки данных."
      },
      {
        en: "Implemented FSM-based conversation flows, analytics and logging, error handling, and performance improvements.",
        ru: "Реализовывал FSM-сценарии, аналитику и логирование, обработку ошибок и оптимизацию производительности."
      },
      {
        en: "Contributed to testing, debugging, and production releases.",
        ru: "Участвовал в тестировании, отладке и развертывании в production-среде."
      }
    ]
  },
  {
    period: { en: "Sep 2026 — Present · 2 months", ru: "Сентябрь 2026 — настоящее время · 2 месяца" },
    role: { en: "Backend Developer", ru: "Backend-разработчик" },
    company: "WONK",
    details: {
      en: "Develop and maintain RESTful APIs for an EdTech SaaS platform covering school monitoring, analytics, administration, and curriculum planning.",
      ru: "Разрабатываю и поддерживаю RESTful API для EdTech SaaS-платформы: мониторинг школ, аналитика, административное управление и планирование учебных программ."
    },
    achievements: [
      {
        en: "Implement a Router → Service → Repository architecture to separate business logic from database and HTTP layers.",
        ru: "Внедряю архитектуру Router → Service → Repository, отделяя бизнес-логику от слоя базы данных и HTTP-контроллеров."
      },
      {
        en: "Design and optimize PostgreSQL queries with SQLAlchemy, including filtering, pagination, secure search, and escaping special LIKE / ILIKE characters.",
        ru: "Проектирую и оптимизирую запросы PostgreSQL через SQLAlchemy: фильтрация, пагинация, безопасный поиск и экранирование специальных символов LIKE / ILIKE."
      },
      {
        en: "Write unit, API, and end-to-end integration tests with Pytest using an isolated PostgreSQL test database.",
        ru: "Пишу unit-, API- и end-to-end интеграционные тесты на Pytest с отдельной тестовой базой PostgreSQL."
      },
      {
        en: "Audit code and profile queries to remove N+1 patterns and redundant fetches, refactor legacy code, and improve maintainability.",
        ru: "Провожу аудит кода и профилирование запросов, устраняю N+1 и повторные выборки, рефакторю legacy-код и улучшаю его поддерживаемость."
      },
      {
        en: "Configure Ruff linting and formatting and enforce checks through pre-commit hooks.",
        ru: "Настраиваю линтинг и форматирование Ruff, подключаю проверки через pre-commit hooks."
      },
      {
        en: "Collaborate through Git Flow, feature branches, code reviews, and structured pull requests.",
        ru: "Работаю по Git Flow: веду feature-ветки, участвую в code review и оформляю структурированные pull request."
      }
    ]
  },
  {
    period: { en: "Jul 2026", ru: "Июль 2026" },
    role: { en: "Tester", ru: "Тестировщик" },
    company: "xVenture",
    details: {
      en: "Conducted functional QA for a Telegram Mini App across mobile and desktop platforms.",
      ru: "Проводил функциональное QA Telegram Mini App на мобильных и десктопных платформах."
    },
    achievements: [
      {
        en: "Tested core user flows, including onboarding, battle sessions, profile, garage, journey, and other application features.",
        ru: "Тестировал ключевые пользовательские сценарии: onboarding, battle sessions, profile, garage, journey и другие функции приложения."
      },
      {
        en: "Performed regression testing after each release to ensure existing functionality remained stable.",
        ru: "Проводил регрессионное тестирование после каждого обновления, чтобы сохранить стабильность существующего функционала."
      },
      {
        en: "Identified, reproduced, and documented defects with clear reproduction steps, expected and actual results, and screenshots or videos.",
        ru: "Выявлял, воспроизводил и документировал дефекты с четкими шагами воспроизведения, ожидаемым и фактическим результатом, а также скриншотами или видео."
      },
      {
        en: "Tested edge cases such as unstable network connections, rapid repeated taps, app backgrounding and restoring, and empty states.",
        ru: "Проверял edge cases: нестабильное интернет-соединение, частые повторные нажатия, сворачивание и восстановление приложения, а также пустые состояния."
      },
      {
        en: "Verified newly implemented features before release and coordinated with developers to resolve reported issues on time.",
        ru: "Проверял новые функции перед релизом и взаимодействовал с разработчиками для своевременного устранения найденных проблем."
      }
    ]
  },
  {
    period: { en: "Jun 2026 — Jul 2026", ru: "Июнь 2026 — июль 2026" },
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
    period: { en: "Mar 2026 — May 2026", ru: "Март 2026 — май 2026" },
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
    period: { en: "Jan 2026 — Mar 2026", ru: "Январь 2026 — март 2026" },
    role: { en: "Python Developer", ru: "Python-разработчик" },
    company: "Zimalab",
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
    period: { en: "Oct 2025 — Dec 2025", ru: "Октябрь 2025 — декабрь 2025" },
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
    id: "aws-academy-cloud-developing",
    title: { en: "AWS Academy Graduate - Cloud Developing - Training Badge", ru: "AWS Academy Graduate - Cloud Developing - Training Badge" },
    excerpt: {
      en: "Earners of this badge have completed the AWS Academy Cloud Developing course.",
      ru: "Обладатель бейджа завершил курс AWS Academy Cloud Developing."
    },
    date: { en: "31 Oct 2026", ru: "31 октября 2026" },
    readTime: { en: "Training Badge", ru: "Учебный бейдж" },
    tags: ["Amazon Web Services Training and Certification", "AWS", "AWS Cloud Computing", "Developing On AWS"],
    image: "https://images.credly.com/size/160x160/images/bb3211c0-a562-44ec-a8b5-df54deb0e5e9/blob",
    credentialId: "f57f5ae4-8074-4907-b140-347c6a2edf3f",
    credentialUrl: "https://www.credly.com/earner/earned/badge/f57f5ae4-8074-4907-b140-347c6a2edf3f",
    expiration: { en: "Does not expire", ru: "Без срока действия" }
  },
  {
    id: "aws-academy-cloud-foundations",
    title: { en: "AWS Academy Graduate - Cloud Foundations - Training Badge", ru: "AWS Academy Graduate - Cloud Foundations - Training Badge" },
    excerpt: {
      en: "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
      ru: "Обладатель бейджа прошёл курс AWS Academy Cloud Foundations."
    },
    date: { en: "5 Oct 2026", ru: "5 октября 2026" },
    readTime: { en: "Training Badge", ru: "Учебный бейдж" },
    tags: ["Amazon Web Services Training and Certification", "AWS Architecture", "AWS Cloud", "AWS Core Services", "AWS Pricing", "AWS Support"],
    credentialId: "5920a85a-48b6-4b8b-998d-2738f860efcf",
    credentialUrl: "https://www.credly.com/earner/earned/badge/5920a85a-48b6-4b8b-998d-2738f860efcf",
    expiration: { en: "Does not expire", ru: "Без срока действия" }
  },
  {
    id: "ccna-introduction-to-networks",
    title: { en: "CCNA: Introduction to Networks", ru: "CCNA: Introduction to Networks" },
    excerpt: {
      en: "Completed through the Cisco Networking Academy program at Astana IT University. Instructor: Laura Aldasheva.",
      ru: "Курс Cisco Networking Academy успешно завершён в Astana IT University. Преподаватель: Laura Aldasheva."
    },
    date: { en: "30 Oct 2026", ru: "30 октября 2026" },
    readTime: { en: "Certificate", ru: "Сертификат" },
    tags: ["Cisco Networking Academy", "CCNA", "Networking", "Astana IT University"]
  },
  {
    id: "it-essentials-cisco",
    title: { en: "IT Essentials - Cisco Networking Academy", ru: "IT Essentials - Cisco Networking Academy" },
    excerpt: {
      en: "Core IT fundamentals including system basics, networking, and troubleshooting.",
      ru: "Базовые IT-знания: основы систем, сети и устранение неисправностей."
    },
    date: { en: "2026", ru: "2026" },
    readTime: { en: "Certificate", ru: "Сертификат" },
    tags: ["Cisco", "IT Fundamentals"]
  },
  {
    id: "huawei-ai-applications",
    title: { en: "Artificial Intelligence Technology and Applications", ru: "Artificial Intelligence Technology and Applications" },
    excerpt: {
      en: "Huawei confirms successful completion of the Artificial Intelligence Technology and Applications course.",
      ru: "Huawei подтверждает успешное завершение курса Artificial Intelligence Technology and Applications."
    },
    date: { en: "9 Jun 2025", ru: "9 июня 2025" },
    readTime: { en: "Training Badge", ru: "Учебный бейдж" },
    tags: ["Huawei", "Deep Learning", "Python", "Quantum Computing", "Reinforcement Learning", "AI", "Algorithm", "Artificial Intelligence", "Ascend", "Huawei Cloud", "Huawei ICT Academy", "Machine Learning", "Mindspore"],
    image: "https://images.credly.com/size/160x160/images/f12fdc7a-0631-4939-8859-8dec15e2616a/image.png",
    credentialId: "abc845cb-e8ba-42e1-9d7b-594ba8f93eb0",
    credentialUrl: "https://www.credly.com/earner/earned/badge/abc845cb-e8ba-42e1-9d7b-594ba8f93eb0",
    expiration: { en: "Does not expire", ru: "Без срока действия" }
  },
  {
    id: "huawei-overview-of-ai",
    title: { en: "Overview of AI", ru: "Overview of AI" },
    excerpt: {
      en: "Huawei confirms successful completion of the Overview of AI course.",
      ru: "Huawei подтверждает успешное завершение курса Overview of AI."
    },
    date: { en: "8 Jun 2025", ru: "8 июня 2025" },
    readTime: { en: "Training Badge", ru: "Учебный бейдж" },
    tags: ["AI", "Artificial Intelligence", "Huawei ICT Academy", "Machine Learning", "Strong AI"],
    image: "https://images.credly.com/size/160x160/images/08aeec7e-bcc9-4ef8-a84e-1f3cf27ff5e8/image.png",
    credentialId: "daef47b6-8c6e-4aeb-a22c-84abc5697848",
    credentialUrl: "https://www.credly.com/earner/earned/badge/daef47b6-8c6e-4aeb-a22c-84abc5697848",
    expiration: { en: "Does not expire", ru: "Без срока действия" }
  },
  {
    id: "huawei-search-and-ai",
    title: { en: "Search and AI", ru: "Search and AI" },
    excerpt: {
      en: "Huawei confirms successful completion of the Search and AI course.",
      ru: "Huawei подтверждает успешное завершение курса Search and AI."
    },
    date: { en: "7 Jun 2025", ru: "7 июня 2025" },
    readTime: { en: "Training Badge", ru: "Учебный бейдж" },
    tags: ["AI", "Artificial Intelligence", "Huawei ICT Academy", "Neural Network", "Tree Search"],
    image: "https://images.credly.com/size/160x160/images/42c51b42-7299-4d35-bd1f-44a3433aacad/image.png",
    credentialId: "3bcc28cd-da3c-4f50-bf06-54f83db14a15",
    credentialUrl: "https://www.credly.com/earner/earned/badge/3bcc28cd-da3c-4f50-bf06-54f83db14a15",
    expiration: { en: "Does not expire", ru: "Без срока действия" }
  },
  {
    id: "linux-essentials",
    title: { en: "Linux Essentials", ru: "Linux Essentials" },
    excerpt: {
      en: "Cisco, in collaboration with NDG, verifies the learner's knowledge of Linux fundamentals, command-line tools, system security, permissions, and file management.",
      ru: "Cisco совместно с NDG подтверждает знания основ Linux: командной строки, безопасности системы, прав доступа и управления файлами."
    },
    date: { en: "15 Feb 2026", ru: "15 февраля 2026" },
    readTime: { en: "Training Badge", ru: "Учебный бейдж" },
    tags: ["Cisco", "NDG", "Linux", "File Management", "Basic Hardware Concepts", "Basic Scripting", "Closed Source Applications", "Command Line", "Creating/Restoring Backups", "Linux OS Components", "Open Source Applications", "System Security", "User/Group Permissions"],
    credentialId: "6f889a82-4c5e-4e07-bab3-8e7e89211775",
    credentialUrl: "https://www.credly.com/earner/earned/badge/6f889a82-4c5e-4e07-bab3-8e7e89211775",
    expiration: { en: "Does not expire", ru: "Без срока действия" }
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
