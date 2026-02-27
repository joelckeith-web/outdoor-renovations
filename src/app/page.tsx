import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Clock,
  Award,
  ThumbsUp,
  Phone,
  ChevronRight,
  Leaf,
  Heart,
} from "lucide-react";
import { ReviewCarousel } from "@/components/global/ReviewCarousel";
import { CTABlock } from "@/components/ui/CTABlock";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { siteConfig, services } from "@/lib/site-config";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schema-markup";
import { getReviews } from "@/lib/get-reviews";
import { sanityFetch } from "@/lib/sanity-fetch";
import { allServicesQuery } from "@/lib/queries";
import type { SanityServiceListItem } from "@/lib/queries";

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

const homeFAQs = [
  {
    question: "What areas does Outdoor Renovations serve?",
    answer:
      "Outdoor Renovations serves homeowners and commercial properties across the Austin metro area, including Westlake Hills, Lakeway, Bee Cave, Dripping Springs, Tarrytown, Barton Creek, Rollingwood, Steiner Ranch, Circle C Ranch, and Travis Heights.",
  },
  {
    question: "Is Outdoor Renovations licensed and insured?",
    answer:
      "Yes. Outdoor Renovations is a licensed General Contractor of Landscape, fully bonded and insured. All work is backed by our 1-year service guarantee plus applicable manufacturer warranties on materials.",
  },
  {
    question: "Do you offer design services or only installation?",
    answer:
      "We offer both. Our design services include to-scale 2D plans, 3D renderings, and full construction documentation. We also provide build-only services for clients who already have plans from their own designer or landscape architect.",
  },
  {
    question: "What types of properties do you work on?",
    answer:
      "We work on residential homes, multi-unit developments, commercial buildings, and public spaces. Our specialty is high-end residential properties, but our capabilities extend to any scale of outdoor renovation project.",
  },
  {
    question: "How long has Outdoor Renovations been in business?",
    answer:
      "Outdoor Renovations has over 16 years of experience in the Austin landscape industry. We have completed more than 200 projects with a 99% customer satisfaction rate across the Central Texas region.",
  },
  {
    question: "Do you offer discounted rates for military or first responders?",
    answer:
      "Yes. We proudly offer discounted rates for military personnel, first responders, and nonprofit organizations. Contact us to learn more about our community discount programs.",
  },
];

export default async function HomePage() {
  const [reviews, sanityServices] = await Promise.all([
    getReviews(),
    sanityFetch<SanityServiceListItem[]>(allServicesQuery),
  ]);

  const baseServices =
    sanityServices && sanityServices.length > 0
      ? sanityServices.map((s) => ({
          name: s.serviceName,
          slug: s.slug,
          shortDescription: s.shortDescription,
          icon: s.iconName || "Wrench",
        }))
      : services;

  const displayServices = baseServices.map((s) => ({
    ...s,
    image: serviceImageMap[s.slug] || "/images/project-landscape.jpg",
  }));

  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(homeFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section — Looping video with image fallback */}
      <section className="relative bg-dark text-white overflow-hidden">
        {/* Fallback image — behind the video */}
        <Image
          src="/images/hero-drone-estate.jpg"
          alt="Stunning aerial view of a premium landscape renovation in Austin, Texas"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        {/* Video background — sits on top of the fallback image */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-drone-estate.jpg"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source src="/videos/master_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/75 to-dark/60 z-[2]" />
        <div className="relative z-[3] container-narrow section-padding pt-28 md:pt-32 lg:pt-36">
          <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-4">
            Design &bull; Landscape &bull; Maintain
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 max-w-3xl">
            Renovating Outdoor Dreams to Reality
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 font-body">
            Is it time to renovate yours?
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-8 font-body">
            Outdoor Renovations transforms residential and commercial properties
            across the Austin metro with expert landscape design, precision
            craftsmanship, and white-glove property care.{" "}
            {siteConfig.yearsExperience} years of experience. 200+ completed
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-base text-white">
            <span className="flex items-center gap-2.5 font-body font-semibold">
              <Shield className="w-5 h-5 text-primary-light" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-2.5 font-body font-semibold">
              <Award className="w-5 h-5 text-primary-light" /> 200+ Projects Completed
            </span>
            <span className="flex items-center gap-2.5 font-body font-semibold">
              <Clock className="w-5 h-5 text-primary-light" /> {siteConfig.yearsExperience} Years Experience
            </span>
          </div>
        </div>
      </section>

      {/* Trust / Differentiator Bar */}
      <section className="bg-accent py-12">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, stat: "Licensed & Insured", label: "Bonded General Contractor" },
              { icon: Award, stat: "200+ Projects", label: "Completed Across Austin" },
              { icon: Clock, stat: `${siteConfig.yearsExperience} Years`, label: "Austin Landscape Experience" },
              { icon: ThumbsUp, stat: "99% Satisfaction", label: "Client Approval Rating" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center">
                <item.icon className="w-8 h-8 text-primary mb-2" />
                <p className="font-body font-extrabold text-dark text-lg">{item.stat}</p>
                <p className="text-muted text-sm font-body">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServiceCarousel services={displayServices} />

      {/* Customer Reviews */}
      <ReviewCarousel reviews={reviews} />

      {/* Ready to Get Started CTA */}
      <CTABlock
        headline="Ready to Transform Your Outdoor Space?"
        subheadline="Whether you need a complete landscape design, a patio renovation, or ongoing property care — Outdoor Renovations is your single point of contact from concept to completion."
        primaryCTAText="Get a Consultation"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Now"
        secondaryCTAUrl={siteConfig.phoneHref}
        backgroundImage="/images/project-evening.jpg"
      />

      {/* About / Qualifications Callout */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                About Outdoor Renovations
              </p>
              <h2 className="text-3xl md:text-4xl font-body font-extrabold text-dark mb-6">
                Built on Craftsmanship. Driven by Vision.
              </h2>
              <p className="text-muted font-body mb-4">
                Founded by Kyle Stoutenger, Outdoor Renovations delivers refined
                outdoor spaces built with intention, precision, and long-term
                vision. With deep roots in the Austin landscape industry, our
                team approaches every property with respect for both the land and
                the homeowner.
              </p>
              <p className="text-muted font-body mb-6">
                From thoughtful, to-scale designs and 3D modeling to expert
                installation and ongoing landscape care — we handle every aspect
                of your outdoor project as a single point of contact.
              </p>
              <Link href="/about" className="btn-primary">
                Our Story
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-accent rounded-xl p-8 overflow-hidden">
              <div className="relative w-full h-48 -mt-8 -mx-8 mb-6" style={{ width: "calc(100% + 4rem)" }}>
                <Image
                  src="/images/project-patio.jpg"
                  alt="Premium landscape renovation by Outdoor Renovations in Austin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-body font-bold text-dark text-xl mb-4">
                Why Outdoor Renovations
              </h3>
              <ul className="space-y-3 font-body">
                {siteConfig.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-dark">{cert}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-dark">{siteConfig.yearsExperience} years in the Austin landscape industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-dark">Full-service: Design, Build &amp; Maintain</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-dark">Discounted rates for Military, First Responders &amp; Nonprofits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
            Service Area
          </p>
          <h2 className="text-3xl md:text-4xl font-body font-extrabold text-dark mb-4">
            Serving Austin&apos;s Finest Communities
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 font-body">
            Outdoor Renovations serves residential and commercial properties
            across the Austin metro, with a focus on the region&apos;s premier
            neighborhoods and communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {siteConfig.serviceAreaCities.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-accent text-primary-dark rounded-full text-sm font-body font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion faqs={homeFAQs} />
    </>
  );
}
