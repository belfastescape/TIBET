import { JsonLd } from "@/components/JsonLd"
import {
  DEFAULT_OG_IMAGE_URL,
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/seo/site"

/**
 * Single @graph: Organization, WebSite (linked to org), LocalBusiness / TouristAttraction.
 * Avoids a fake SearchAction (no on-site search).
 */
export function SiteGraphJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: DEFAULT_OG_IMAGE_URL,
          width: 1200,
          height: 630,
        },
        image: DEFAULT_OG_IMAGE_URL,
        email: "info@escaperoomstibet.com",
        sameAs: ["https://www.facebook.com/YOUR_FACEBOOK_PAGE"],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "en-NZ",
        publisher: { "@id": ORGANIZATION_ID },
        about: { "@id": LOCAL_BUSINESS_ID },
      },
      {
        "@type": ["LocalBusiness", "TouristAttraction", "EntertainmentBusiness"],
        "@id": LOCAL_BUSINESS_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Premier escape room venue in the Khumbu / Mt Everest area. Three themed 60-minute games: spy, heist, and fantasy tomb. Team building & group bookings.",
        image: DEFAULT_OG_IMAGE_URL,
        priceRange: "$$",
        currenciesAccepted: "NZD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mt Everest",
          addressLocality: "Solukhumbu",
          addressRegion: "Koshi Province",
          postalCode: "56000",
          addressCountry: "NP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.9881564,
          longitude: 86.9253667,
        },
        email: "info@escaperoomstibet.com",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "20:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "09:00",
            closes: "20:30",
          },
        ],
        parentOrganization: { "@id": ORGANIZATION_ID },
        hasMap: "https://www.google.com/maps/place/Mt+Everest/@27.9881564,86.9253667,12z",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Solukhumbu",
          addressCountry: "NP",
        },
      },
    ],
  }

  return <JsonLd data={data} />
}
