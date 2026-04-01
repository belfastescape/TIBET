import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/escape-rooms`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/escape-rooms/operation-pitt`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/escape-rooms/billion-dollar-heist`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/escape-rooms/ancient-tomb`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/booking`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/team-building`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/team-building-tibet`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/group-bookings`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/gift-vouchers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gift-ideas-tibet`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/location`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-returns`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  return routes
}
