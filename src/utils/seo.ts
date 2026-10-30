import { useEffect } from "react";

const SITE_ORIGIN = "https://portfolio.b3mug1.dev";

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
    const canonicalUrl = `${SITE_ORIGIN}${pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let openGraphUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!openGraphUrl) {
      openGraphUrl = document.createElement("meta");
      openGraphUrl.setAttribute("property", "og:url");
      document.head.appendChild(openGraphUrl);
    }
    openGraphUrl.content = canonicalUrl;
  }, [title, description]);
}
