import { siteConfig, services } from "./site-config";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LandscapeArchitect",
    name: siteConfig.businessName,
    description:
      "Outdoor Renovations delivers premium landscape design, hardscaping, custom carpentry, and white-glove property management across the Austin metro. 16+ years of experience. Licensed, bonded, and insured.",
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscape Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.google,
    ].filter((url) => url !== "[PLACEHOLDER]"),
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  areaServed: readonly string[] = siteConfig.serviceAreaCities
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LandscapeArchitect",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    areaServed: areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description: serviceDescription,
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}
