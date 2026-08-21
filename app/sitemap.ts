import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/academy", "/about", "/contact"];
  return routes.map((route, index) => ({
    url: `https://meal-bridge.com${route}`,
    lastModified: new Date("2026-08-21"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/contact" ? 0.7 : 0.85,
  }));
}
