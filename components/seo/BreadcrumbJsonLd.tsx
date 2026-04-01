import { JsonLd } from "@/components/JsonLd"
import { SITE_URL } from "@/lib/seo/site"

export type Crumb = { name: string; path: string }

type Props = { items: Crumb[] }

export function BreadcrumbJsonLd({ items }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  }
  return <JsonLd data={data} />
}
