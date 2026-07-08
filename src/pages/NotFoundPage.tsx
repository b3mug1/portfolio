import { Link } from "react-router-dom";
import { useSeo } from "@/utils/seo";

export default function NotFoundPage() {
  useSeo("404 | Bekzat", "Page not found.");

  return (
    <div className="mx-auto grid min-h-[60vh] w-[min(800px,90%)] place-items-center py-20 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Error 404</p>
        <h1 className="mt-3 text-5xl font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="mt-8 inline-block rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white">
          Back Home
        </Link>
      </div>
    </div>
  );
}
