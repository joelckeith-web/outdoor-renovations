import { groq } from "next-sanity";

// ── Site Settings ────────────────────────────────────────────────
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  businessName,
  phone,
  email,
  address,
  city,
  state,
  zip,
  serviceArea,
  businessHours,
  socialLinks,
  reviews[]{
    reviewerName,
    reviewText,
    rating,
    source,
    technicianName
  }
}`;

// ── Service Pages ────────────────────────────────────────────────
export const allServicesQuery = groq`*[_type == "servicePage"] | order(orderRank asc){
  serviceName,
  "slug": slug.current,
  shortDescription,
  heroImage,
  iconName
}`;

export const serviceBySlugQuery = groq`*[_type == "servicePage" && slug.current == $slug][0]{
  serviceName,
  "slug": slug.current,
  metaTitle,
  metaDescription,
  heroHeadline,
  heroSubheadline,
  heroBody,
  heroImage,
  heroPrimaryCTA,
  heroPrimaryCTAUrl,
  serviceDescription,
  serviceDetails[]{
    detail,
    description
  },
  processSteps[]{
    stepTitle,
    stepDescription
  },
  faqItems[]{
    question,
    answer
  },
  primaryKeyword,
  secondaryKeywords,
  schemaServiceName,
  schemaServiceDescription,
  schemaAreaServed
}`;

export const serviceSlugsQuery = groq`*[_type == "servicePage"]{ "slug": slug.current }`;

// ── TypeScript Interfaces ────────────────────────────────────────
export interface SanityReview {
  reviewerName: string;
  reviewText: string;
  rating: number;
  source?: string;
  technicianName?: string;
}

export interface SanitySiteSettings {
  businessName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  serviceArea?: string;
  businessHours?: string;
  socialLinks?: {
    facebook?: string;
    google?: string;
    yelp?: string;
    instagram?: string;
    linkedin?: string;
  };
  reviews?: SanityReview[];
}

export interface SanityServiceListItem {
  serviceName: string;
  slug: string;
  shortDescription: string;
  heroImage?: unknown;
  iconName?: string;
}

export interface SanityServicePage {
  serviceName: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroBody?: string;
  heroImage?: unknown;
  heroPrimaryCTA?: string;
  heroPrimaryCTAUrl?: string;
  serviceDescription?: unknown[];
  serviceDetails?: { detail: string; description: string }[];
  processSteps?: { stepTitle: string; stepDescription: string }[];
  faqItems?: { question: string; answer: string }[];
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  schemaServiceName?: string;
  schemaServiceDescription?: string;
  schemaAreaServed?: string;
}
