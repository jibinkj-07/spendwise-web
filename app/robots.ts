import type { MetadataRoute } from "next";
import { AppUtil } from "@/lib/app_util";

export default function robots(): MetadataRoute.Robots {
  return {
    // Invite links are private to the people they're sent to.
    rules: { userAgent: "*", allow: "/", disallow: "/invite/" },
    sitemap: `${AppUtil.baseUrl}/sitemap.xml`,
  };
}
