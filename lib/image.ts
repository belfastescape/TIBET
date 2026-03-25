/**
 * Returns a Next.js Image Optimization API URL for use in non-Image contexts (e.g. video poster).
 * Reduces download size by serving a resized, compressed image.
 */
export function getOptimizedPosterUrl(
  path: string,
  width = 640,
  quality = 65
): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const prefix = base.endsWith("/") ? base : base ? `${base}/` : "/"
  return `${prefix}_next/image?url=${encodeURIComponent(path)}&w=${width}&q=${quality}`
}
