export const teamBuildingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Team Building Escape Room Activities Tibet",
  "description": "Professional team building activities using escape rooms in Tibet. Perfect for corporate groups looking to improve communication, problem-solving, and collaboration skills. Three themed rooms available for groups up to 24 people.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Escape Rooms Tibet",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 Barkhor Street",
      "addressLocality": "Lhasa",
      "addressRegion": "Tibet",
      "postalCode": "850000",
      "addressCountry": "CN"
    },
    "telephone": "+64215550198",
    "url": "https://www.escaperoomstibet.com"
  },
  "serviceType": "Team Building Activities",
  "areaServed": {
    "@type": "City",
    "name": "Tibet",
    "addressCountry": "CN"
  },
  "offers": {
    "@type": "Offer",
    "description": "Team building escape room experiences for corporate groups",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "NZD",
    "price": "33",
    "priceValidUntil": "2026-12-31"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Team Building Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Operation Pitt",
          "description": "Navigate through political intrigue and government secrets in this Tibet-themed escape room adventure. 2-8 players."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Billion Dollar Heist",
          "description": "Plan the perfect heist to steal a priceless diamond in this multi-room escape challenge. 2-7 players."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quest for the Ancient Tomb",
          "description": "Embark on a magical journey to find the legendary wand in this enchanting adventure. 2-6 players."
        }
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Corporate Teams, Work Groups, Organisations"
  }
}
