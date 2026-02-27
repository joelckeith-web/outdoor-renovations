import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  CheckCircle,
  ChevronRight,
  Shield,
  Award,
  Clock,
  Star,
  MapPin,
} from "lucide-react";
import { ReviewCarousel } from "@/components/global/ReviewCarousel";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteConfig, services } from "@/lib/site-config";
import { servicePageData } from "@/lib/service-page-data";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema-markup";
import { getReviews } from "@/lib/get-reviews";
import { sanityFetch } from "@/lib/sanity-fetch";
import {
  serviceBySlugQuery,
  serviceSlugsQuery,
} from "@/lib/queries";
import type { SanityServicePage } from "@/lib/queries";

// ── Static params for build-time generation ─────────────────────
export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<{ slug: string }[]>(serviceSlugsQuery);
  if (sanitySlugs && sanitySlugs.length > 0) {
    return sanitySlugs.map((s) => ({ slug: s.slug }));
  }
  return services.map((service) => ({ slug: service.slug }));
}

// ── Metadata ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sanityData = await sanityFetch<SanityServicePage>(
    serviceBySlugQuery,
    { slug: params.slug }
  );

  if (sanityData?.metaTitle) {
    return {
      title: sanityData.metaTitle,
      description:
        sanityData.metaDescription ||
        `${sanityData.serviceName} services from Outdoor Renovations. Serving the Austin metro area.`,
    };
  }

  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.name} | Austin Landscape Services`,
    description: `${service.shortDescription} Outdoor Renovations serves the Austin metro area. Licensed General Contractor of Landscape. Call ${siteConfig.phone}.`,
  };
}

// ── Page Component ──────────────────────────────────────────────
export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [reviews, sanityData] = await Promise.all([
    getReviews(),
    sanityFetch<SanityServicePage>(serviceBySlugQuery, { slug: params.slug }),
  ]);

  const staticService = services.find((s) => s.slug === params.slug);
  const serviceName = sanityData?.serviceName || staticService?.name;
  const serviceSlug = sanityData?.slug || staticService?.slug;
  const serviceShortDesc =
    sanityData?.heroSubheadline || staticService?.shortDescription || "";

  if (!serviceName || !serviceSlug) notFound();

  const pageData = servicePageData[params.slug];
  const heroSubheadline =
    sanityData?.heroSubheadline || pageData?.heroSubheadline || serviceShortDesc;
  const heroBody = sanityData?.heroBody || pageData?.heroBody;
  const heroImage = pageData?.heroImage || "/images/hero-drone-estate.jpg";
  const processSteps = sanityData?.processSteps?.length
    ? sanityData.processSteps.map((s) => ({
        title: s.stepTitle,
        description: s.stepDescription,
      }))
    : pageData?.processSteps;
  const faqs = sanityData?.faqItems?.length
    ? sanityData.faqItems
    : pageData?.faqs || [];

  // JSON-LD schemas
  const serviceSchema = generateServiceSchema(
    sanityData?.schemaServiceName || serviceName,
    sanityData?.schemaServiceDescription || serviceShortDesc
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: serviceName, url: `/services/${serviceSlug}` },
  ]);
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ─── Hero with Contact Form ─── */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src={heroImage}
          alt={`${serviceName} services by Outdoor Renovations in Austin, TX`}
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left content */}
            <div className="md:col-span-3">
              <nav className="text-sm text-gray-400 mb-4 font-body">
                <Link href="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{serviceName}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-4 text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.6),_0_1px_3px_rgba(0,0,0,0.4)]">
                {sanityData?.heroHeadline || serviceName}
              </h1>
              <p className="text-lg text-white mb-4 font-body [text-shadow:_0_1px_8px_rgba(0,0,0,0.5)]">
                {heroSubheadline}
              </p>
              {heroBody && (
                <p className="text-gray-200 mb-6 font-body [text-shadow:_0_1px_6px_rgba(0,0,0,0.4)]">{heroBody}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href={sanityData?.heroPrimaryCTAUrl || "/contact"}
                  className="btn-primary text-lg"
                >
                  {sanityData?.heroPrimaryCTA || "Get a Consultation"}
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" /> Licensed Contractor
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" /> 200+ Projects
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> {siteConfig.yearsExperience} Years Experience
                </span>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-6 text-dark shadow-2xl">
                <h2 className="text-xl font-body font-extrabold text-dark mb-1 text-center">
                  Get Your FREE Consultation
                </h2>
                <p className="text-sm text-muted font-body mb-4 text-center">
                  Fast response from licensed landscape professionals
                </p>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-body focus:outline-none focus:border-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-body focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-body focus:outline-none focus:border-primary"
                  />
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-body text-muted focus:outline-none focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Service Needed</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-body focus:outline-none focus:border-primary resize-none"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full text-base py-3.5"
                  >
                    Get My Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <section className="bg-accent py-4 border-b border-primary/10">
        <div className="container-narrow flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm font-body text-dark">
          <span className="flex items-center gap-1.5 font-bold">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            Excellent
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary" /> Licensed Contractor
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-primary" /> 200+ Projects Completed
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" /> {siteConfig.yearsExperience} Years Experience
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-primary" /> 1-Year Guarantee
          </span>
        </div>
      </section>

      <ReviewCarousel reviews={reviews} />

      {/* ─── Section 1: Why [Service] — Text + Image Side by Side ─── */}
      {pageData && !sanityData?.serviceDescription && pageData.sections[0] && (
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                  Why Choose {serviceName}
                </p>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
                  {pageData.sections[0].heading}
                </h2>
                <p className="text-muted font-body mb-4">
                  {pageData.sections[0].body}
                </p>
                {pageData.sections[0].bullets && (
                  <ul className="space-y-3">
                    {pageData.sections[0].bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted font-body">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={pageData.sections[0].image || "/images/project-landscape.jpg"}
                  alt={pageData.sections[0].heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Section 2: Additional Content ─── */}
      {pageData && !sanityData?.serviceDescription && pageData.sections[1] && (
        <section className="section-padding bg-light">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {pageData.sections[1].image && (
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                  <Image
                    src={pageData.sections[1].image}
                    alt={pageData.sections[1].heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className={pageData.sections[1].image ? "order-1 md:order-2" : "md:col-span-2 max-w-3xl mx-auto"}>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
                  {pageData.sections[1].heading}
                </h2>
                <p className="text-muted font-body mb-4">
                  {pageData.sections[1].body}
                </p>
                {pageData.sections[1].bullets && (
                  <ul className="space-y-3">
                    {pageData.sections[1].bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted font-body">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Systems We Work With ─── */}
      {pageData?.systemsList && !sanityData?.serviceDescription && (
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-8 text-center">
              Materials &amp; Systems We Work With
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {pageData.systemsList.map((system, i) => (
                <div
                  key={i}
                  className="border-l-4 border-primary pl-5 py-3 bg-light rounded-r-lg shadow-sm"
                >
                  <p className="font-body font-bold text-dark">{system}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Advantages Grid ─── */}
      {pageData?.advantages && !sanityData?.serviceDescription && (
        <section className="section-padding bg-light">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-8 text-center">
              The Advantages of Professional {serviceName}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {pageData.advantages.map((adv, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-dark text-sm">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CMS Service Details (if CMS has data) ─── */}
      {sanityData?.serviceDetails && sanityData.serviceDetails.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="space-y-8">
              {sanityData.serviceDetails.map((detail, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-body font-bold text-dark mb-2">
                    {detail.detail}
                  </h3>
                  <p className="text-muted font-body">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Our Process — Dark Background ─── */}
      {processSteps && processSteps.length > 0 && (
        <section className="section-padding bg-dark text-white">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl font-body font-extrabold text-white mb-8 text-center">
              Our {serviceName} Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-body font-bold text-lg mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-body font-bold text-white text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 font-body text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Investment & Value ─── */}
      {pageData?.investmentSection && !sanityData?.serviceDescription && (
        <section className="section-padding bg-white">
          <div className="container-narrow max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
              {pageData.investmentSection.heading}
            </h2>
            <p className="text-muted font-body mb-6">
              {pageData.investmentSection.body}
            </p>
            {pageData.investmentSection.bullets && (
              <ul className="space-y-3">
                {pageData.investmentSection.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted font-body">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ─── Why Choose Outdoor Renovations ─── */}
      {pageData?.whyChooseBullets && !sanityData?.serviceDescription && (
        <section className="section-padding bg-light">
          <div className="container-narrow max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-6 text-center">
              Why Choose Outdoor Renovations for {serviceName}
            </h2>
            <ul className="space-y-3">
              {pageData.whyChooseBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-muted font-body">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── Service Area ─── */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
            Service Area
          </p>
          <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
            {serviceName} Across the Austin Metro
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-6 font-body">
            Outdoor Renovations provides {serviceName.toLowerCase()} services throughout
            the Austin metro and Central Texas region.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.serviceAreaCities.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 bg-accent text-primary-dark rounded-full text-sm font-body hover:bg-primary hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 inline mr-1" />
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Accordion ─── */}
      {faqs.length > 0 && (
        <FAQAccordion
          faqs={faqs}
          title={`${serviceName} — Frequently Asked Questions`}
        />
      )}

      {/* ─── Bottom CTA ─── */}
      <CTABlock
        headline={`Ready to Discuss ${serviceName}?`}
        subheadline="Outdoor Renovations provides honest assessments and transparent pricing. No pressure, no overselling — just expert guidance from licensed landscape professionals."
        primaryCTAText="Get a Consultation"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Now"
        secondaryCTAUrl={siteConfig.phoneHref}
        backgroundImage="/images/project-evening.jpg"
      />

      {/* ─── Related Services ─── */}
      <section className="section-padding bg-light">
        <div className="container-narrow">
          <h2 className="text-2xl font-body font-extrabold text-dark mb-6 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== params.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white p-5 rounded-lg border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <h3 className="font-body font-bold text-dark group-hover:text-primary transition-colors mb-1">
                    {s.name}
                  </h3>
                  <p className="text-muted text-sm font-body mb-2">
                    {s.shortDescription}
                  </p>
                  <span className="text-primary text-sm font-bold flex items-center gap-1">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
