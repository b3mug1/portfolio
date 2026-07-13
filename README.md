# Bekzat Portfolio

Premium personal portfolio website for a Backend Developer using React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, and Lucide icons.

## Features

- Modern premium UI with dark mode default and optional light mode
- Fully animated pages, hero, cards, transitions, and interactive effects
- Multi-page routing: Home, About, Projects, Experience, Skills, Blog, Contact, 404
- Search and technology filtering for projects
- Project quick-view modal and detailed project pages
- Contact form validation with toast notifications and Telegram bot delivery
- Animated navbar, responsive mobile sidebar, custom cursor, loading screen, scroll progress bar
- SEO metadata, Open Graph tags, favicon, robots.txt, sitemap.xml
- Reusable architecture with typed data models and modular components

## Structure

- src/assets
- src/components/common
- src/components/layout
- src/components/ui
- src/pages
- src/hooks
- src/lib
- src/services
- src/data
- src/animations
- src/styles
- src/types
- src/utils

## Run locally

1. Install Node.js 20+ and npm.
2. Install dependencies:
   npm install
3. Copy `.env.example` to `.env` and fill in Telegram credentials if you want contact form delivery.
4. Start development server:
   npm run dev
5. Build for production:
   npm run build
6. Preview production build:
   npm run preview

## Notes

- Replace placeholder social links and domain values with your real links.
- Replace resume-bekzat.txt with your final resume file.
- For Telegram contact delivery, set `VITE_TELEGRAM_BOT_TOKEN` and `VITE_TELEGRAM_CHAT_ID` in your `.env` file before building.
- These variables are injected at build time, so Docker Compose also needs them available during `docker compose build`.
