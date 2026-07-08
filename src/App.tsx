import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetailPage"));
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const SkillsPage = lazy(() => import("@/pages/SkillsPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function Fallback() {
  return (
    <div className="grid min-h-[50vh] place-items-center text-slate-400">
      <p>Loading page...</p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
