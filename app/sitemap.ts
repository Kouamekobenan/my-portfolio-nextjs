import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nelsonkouame.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const locales = ["fr", "en"];

  const routes = ["", "/about", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/about" ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
