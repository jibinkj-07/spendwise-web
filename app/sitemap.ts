import type { MetadataRoute } from "next";
import { AppUtil } from "@/lib/app_util";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/support", "/privacy", "/terms"].map((path) => ({
    url: `${AppUtil.baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.5,
  }));
}
