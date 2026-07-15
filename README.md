# Bekzat Portfolio

> A premium, multi-page personal portfolio for **Murat Bekzat Gizatuly** — a Python backend developer and Software Engineering student. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router and Lucide icons.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0+-EF4F92?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Docker](https://img.shields.io/badge/Docker_ready-2496ED?logo=docker&logoColor=white)](./docker-compose.yml)

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Project structure](#project-structure)
- [Environment variables](#environment-variables)
- [Getting started](#getting-started)
  - [Local development](#local-development)
  - [Docker](#docker)
- [Build and deployment](#build-and-deployment)
- [Scripts](#scripts)
- [Customization](#customization)
- [License](#license)

## Overview

This is a fast, SEO-friendly single-page application (SPA) that presents projects, experience, skills, blog posts / certificates and a contact form. The UI defaults to a premium dark theme with an optional light mode, supports English and Russian locales, and ships with smooth Framer Motion page transitions and micro-interactions.

**Live demo:** [https://b3mug1.dev](https://b3mug1.dev)

## Tech stack

- **Framework:** [React 18](https://react.dev) with [TypeScript](https://www.typescriptlang.org)
- **Build tool:** [Vite 5](https://vitejs.dev)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com) + custom CSS variables
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **Routing:** [React Router 6](https://reactrouter.com)
- **Icons:** [Lucide React](https://lucide.dev)
- **Containerization:** Docker + Docker Compose + Nginx

## Features

- **Modern premium UI** — dark-first design with full light mode support and responsive layout
- **Smooth animations** — page transitions, hero reveal, scroll-driven effects, interactive cards and magnetic buttons
- **Multi-page routing** — Home, About, Projects, Experience, Skills, Blog/Certificates, Contact and 404 pages
- **Project showcase** — search and filter by technology, quick-view modal and dedicated detail pages
- **Live GitHub snapshot** — fetches public stats, top languages and recent repositories *(optional `VITE_GITHUB_TOKEN` for higher rate limits)*
- **Working contact form** — client-side validation, toast notifications and Telegram bot delivery
- **Accessibility & UX** — animated navbar, mobile sidebar, loading screen, scroll progress bar and back-to-top
- **SEO ready** — dynamic title/description updates, Open Graph tags, `robots.txt`, `sitemap.xml` and canonical metadata
- **Typed data layer** — centralized content in `src/data/` with reusable, strongly typed components

## Project structure

```text
src/
  animations/          # Shared Framer Motion variants
  assets/              # Static images, resume and other assets
  components/
    common/            # PageTransition, SectionHeading
    layout/            # Navbar, Footer, MainLayout, LoadingScreen
    ui/                # Buttons, Cards, ThemeToggle, LanguageToggle, ProjectModal, ...
  data/                # site.ts, content.ts — all copy and structured data
  hooks/               # useLocale, useTheme, useScrollProgress, useParallax
  lib/                 # Utility helpers (cn.ts)
  pages/               # Route-level page components
  services/            # GitHub API and Telegram bot integrations
  styles/              # Global styles and Tailwind entry
  types/               # Shared TypeScript interfaces
  utils/               # SEO and other utilities
public/                # Static files (favicon, robots.txt, sitemap.xml, resume)
```

## Environment variables

The app reads build-time variables through Vite. Create a `.env` file in the project root:

```env
# Required for Telegram contact form
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id

# Optional: raises GitHub API rate limits for the stats widget
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

> These values are injected at **build time**. If you build with Docker Compose, pass them as environment variables or define them in a `.env` file before running `docker compose build`.

## Getting started

### Local development

Requirements: **Node.js 20+** and **npm**.

```bash
# 1. Install dependencies
npm install

# 2. Create a local .env file (see Environment variables above)
cp .env.example .env   # or create it manually

# 3. Start the Vite dev server
npm run dev
```

The site will be available at `http://localhost:5173` by default.

### Docker

A production-ready Docker image is included. It builds the app with Vite and serves the static files with Nginx.

```bash
# Build and run with Docker Compose (make sure .env is present)
docker compose up -d --build

# Or use Docker directly
docker build \
  --build-arg VITE_TELEGRAM_BOT_TOKEN=$VITE_TELEGRAM_BOT_TOKEN \
  --build-arg VITE_TELEGRAM_CHAT_ID=$VITE_TELEGRAM_CHAT_ID \
  -t bekzat-portfolio .
```

The container exposes port `8080` mapped to Nginx port `80`.

## Build and deployment

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Lint TypeScript / TSX files
npm run lint
```

The production bundle is written to `dist/` and can be deployed to any static host (Vercel, Netlify, GitHub Pages, Nginx, CDN, etc.).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on `.ts` and `.tsx` files |

## Customization

- **Personal data:** edit `src/data/site.ts` and `src/data/content.ts`.
- **Social links & domain:** update `index.html` meta tags, `src/data/site.ts` and project `githubUrl` / `liveUrl` values.
- **Resume:** replace `public/resume-bekzat.txt` with your own resume or PDF.
- **Telegram contact form:** configure the bot variables in `.env` (see above).
- **SEO / OG image:** add a `public/og-cover.png` and update `index.html` Open Graph tags.

## License

[MIT](./LICENSE)

