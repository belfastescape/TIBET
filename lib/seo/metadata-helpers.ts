import type { Metadata } from "next"
import { DEFAULT_OG_IMAGE_URL, SITE_NAME, SITE_URL } from "./site"

/** Public marketing pages — allow indexing and rich results */
export const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
}

/** Thank-you, utility routes — keep out of search results */
export const noIndexRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
}

type OgArgs = {
  title: string
  description: string
  path: string
  imagePath?: string
  imageAlt?: string
}

export function buildOpenGraph({
  title,
  description,
  path,
  imagePath = "/images/escape-room-portal-large.webp",
  imageAlt = SITE_NAME,
}: OgArgs): Metadata["openGraph"] {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${SITE_URL}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`
  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    locale: "en_NZ",
    type: "website",
    images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }],
  }
}

export function buildTwitter(title: string, description: string, imageUrl: string = DEFAULT_OG_IMAGE_URL): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  }
}
