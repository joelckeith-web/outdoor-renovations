import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  PenTool,
  Layers,
  Hammer,
  Leaf,
  Droplets,
  Lightbulb,
  Cog,
  TreeDeciduous,
  Phone,
} from "lucide-react";
import { ReviewCarousel } from "@/components/global/ReviewCarousel";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteConfig, services } from "@/lib/site-config";
import { generateLocalBusinessSchema } from "@/lib/schema-markup";
import { getReviews } from "@/lib/get-reviews";
import { sanityFetch } from "@/lib/sanity-fetch";
import { allServicesQuery } from "@/lib/queries";
import type { SanityServiceListItem } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Our Services | Landscape Design, Build & Maintain",
  description:
    "Outdoor Renovations offers full-service landscape capabilities including design, hardscaping, custom carpentry, softscaping, irrigation, lighting, metal fabrication, and property management across the Austin metro.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool,
  Layers,
  Hammer,
  Leaf,
  Droplets,
  Lightbulb,
  Cog,
  TreeDeciduous,
};

const serviceImageMap: Record<string, string> = {
  "landscape-design": "/images/project-landscape.jpg",
  hardscaping: "/images/project-hardscape.jpg",
  "custom-carpentry": "/images/project-deck.jpg",
  "softscaping-planting": "/images/project-planting.jpg",
  "irrigation-drainage": "/images/project-garden.jpg",
  "landscape-lighting": "/images/project-evening.jpg",
  "metal-fabrication": "/images/project-walkway.jpg",
  "property-management": "/images/project-outdoor-living.jpg",
};

export default async function ServicesPage() {
  const [reviews, sanityServices] = await Promise.all([
    getReviews(),
    sanityFetch<SanityServiceListItem[]>(allServicesQuery),
  ]);

  const displayServices =
    sanityServices && sanityServices.length > 0
      ? sanityServices.map((s) => ({
          name: s.serviceName,
          slug: s.slug,
          shortDescription: s.shortDescription,
          icon: s.iconName || "Leaf",
        }))
      : services;

  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/hero-drone-estate.jpg"
          alt="Premium landscape renovation project in Austin, Texas"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 max-w-3xl">
            Design. Build. Maintain.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6 font-body">
            Outdoor Renovations provides comprehensive landscape services across
            the Austin metro. With {siteConfig.yearsExperience} years of
            experience and a Licensed General Contractor of Landscape
            credential, every project is executed to the highest standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-lg">
              Get a Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-body font-extrabold text-dark mb-4">
              Full-Service Outdoor Renovation
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-body">
              From initial concept and design through construction and ongoing
              care, Outdoor Renovations is your single point of contact for
              every aspect of your outdoor space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {displayServices.map((service) => {
              const Icon = iconMap[service.icon];
              const image =
                serviceImageMap[service.slug] || "/images/project-landscape.jpg";
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-xl bg-white shadow-xl shadow-gray-300/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100/50"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={image}
                      alt={`${service.name} by Outdoor Renovations`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Accent bar */}
                  <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        {Icon && <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />}
                      </div>
                      <h3 className="text-lg font-body font-bold text-dark group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-muted text-sm font-body mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="text-primary text-sm font-bold inline-flex items-center gap-1">
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ReviewCarousel reviews={reviews} />

      <CTABlock
        headline="Not Sure Where to Start?"
        subheadline="Our experienced team can assess your property and recommend the right approach. No pressure, no overselling — just honest guidance from licensed landscape professionals."
        primaryCTAText="Get a Consultation"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Us"
        secondaryCTAUrl={siteConfig.phoneHref}
        backgroundImage="/images/project-outdoor-living.jpg"
      />
    </>
  );
}
