/** Canonical public site URL — must match `metadataBase` in app/layout.tsx */
export const SITE_URL = "https://www.escaperoomstibet.com" as const

export const SITE_NAME = "Escape Rooms Tibet"

/** Default OG / schema image (1200×630–style hero) */
export const DEFAULT_OG_PATH = "/images/escape-room-portal-large.webp"

export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}${DEFAULT_OG_PATH}`

/** Stable @ids for JSON-LD graph linking */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#place`

export const defaultDescription =
  "Live escape rooms in the Everest region: Operation Pitt, The Billion Dollar Heist & Quest for the Ancient Tomb. Book online—great for groups, families & team building."
