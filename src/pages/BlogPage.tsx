import { CalendarClock } from "lucide-react";
import { blogPosts } from "@/data/site";
import { useSeo } from "@/utils/seo";

export default function BlogPage() {
  useSeo("Certificates | Murat Bekzat Gizatuly", "Professional certificates and continuous learning records of Murat Bekzat Gizatuly.");

  return (
    <div className="mx-auto w-[min(980px,90%)] py-20">
      <h1 className="text-4xl font-bold text-white md:text-5xl">Certificates</h1>
      <p className="mt-4 max-w-2xl text-slate-300">Learning milestones from Cisco Networking Academy and Huawei ICT Academy.</p>

      <div className="mt-10 space-y-4">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-2xl border border-white/10 bg-surface/65 p-5">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
              <span className="inline-flex items-center gap-1"><CalendarClock size={14} /> {post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-slate-300">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
