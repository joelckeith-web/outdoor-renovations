import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Shield,
  Award,
  Clock,
  ThumbsUp,
  Star,
  CheckCircle,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { siteConfig } from "@/lib/site-config";
import { locations, getLocationBySlug } from "@/lib/location-data";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema-markup";

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const location = getLocationBySlug(params.city);
  if (!location) return {};

  return {
    title: `Landscape Services in ${location.city}, ${location.state} | Outdoor Renovations`,
    description: `Expert landscape design, build, and maintenance services in ${location.city}, ${location.state}. Outdoor Renovations is a Licensed General Contractor of Landscape with ${siteConfig.yearsExperience} years serving ${location.county} County. Call ${siteConfig.phone}.`,
  };
}

export default function LocationPage({
  params,
}: {
  params: { city: string };
}) {
  const location = getLocationBySlug(params.city);
  if (!location) notFound();

  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(location.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/locations" },
    { name: location.city, url: `/locations/${location.slug}` },
  ]);

  const sidebarLinks = [
    { label: "Why Trust Outdoor Renovations", id: "why-trust" },
    { label: "Residential Solutions", id: "residential" },
    { label: "Local Expertise", id: "expertise" },
    { label: "Premium Materials", id: "equipment" },
    { label: "Guarantees & Protection", id: "protection" },
    { label: "Commercial Solutions", id: "commercial" },
    { label: "FAQs", id: "faqs" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero with Quote Form */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/hero-drone-estate.jpg"
          alt={`Landscape renovation services in ${location.city}, Texas`}
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <nav className="text-sm text-gray-400 mb-4 font-body">
                <Link href="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/locations" className="hover:text-primary">Service Areas</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{location.city}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight mb-4">
                {location.heroHeadline}
              </h1>
              <p className="text-lg text-gray-300 mb-6 font-body">
                {location.heroDescription}
              </p>
              <div className="flex flex-wrap gap-6 text-base text-white mb-4">
                <span className="flex items-center gap-2 font-body font-semibold">
                  <Shield className="w-5 h-5 text-primary" /> Licensed Contractor
                </span>
                <span className="flex items-center gap-2 font-body font-semibold">
                  <Award className="w-5 h-5 text-primary" /> 200+ Projects
                </span>
                <span className="flex items-center gap-2 font-body font-semibold">
                  <Clock className="w-5 h-5 text-primary" /> {siteConfig.yearsExperience} Years
                </span>
                <span className="flex items-center gap-2 font-body font-semibold">
                  <ThumbsUp className="w-5 h-5 text-primary" /> 99% Satisfaction
                </span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-6 text-dark shadow-2xl">
                <h2 className="text-xl font-body font-extrabold text-dark mb-1 text-center">
                  Get Your FREE Consultation
                </h2>
                <p className="text-sm text-muted font-body mb-4 text-center">
                  Fast response for {location.city} homeowners
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
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-body text-muted focus:outline-none focus:border-primary">
                    <option value="">Select Service Needed</option>
                    <option>Landscape Design</option>
                    <option>Hardscaping</option>
                    <option>Custom Carpentry</option>
                    <option>Softscaping &amp; Planting</option>
                    <option>Irrigation &amp; Drainage</option>
                    <option>Landscape Lighting</option>
                    <option>Metal Fabrication</option>
                    <option>Property Management</option>
                    <option>Other</option>
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

      {/* Trust Bar */}
      <section className="bg-accent py-4 border-b border-primary/10">
        <div className="container-narrow flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-body font-bold text-dark">Excellent</span>
          </div>
          <span className="flex items-center gap-2 font-body text-muted">
            <Shield className="w-4 h-4 text-primary" /> Licensed Contractor
          </span>
          <span className="flex items-center gap-2 font-body text-muted">
            <Award className="w-4 h-4 text-primary" /> 200+ Projects Completed
          </span>
          <span className="flex items-center gap-2 font-body text-muted">
            <Clock className="w-4 h-4 text-primary" /> {siteConfig.yearsExperience} Years Experience
          </span>
          <span className="flex items-center gap-2 font-body text-muted">
            <ThumbsUp className="w-4 h-4 text-primary" /> 1-Year Guarantee
          </span>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section-padding bg-white" id="why-trust">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32">
                <p className="text-xs font-body font-bold text-primary uppercase tracking-widest mb-3">
                  Quick Navigation
                </p>
                <nav className="space-y-1">
                  {sidebarLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="block px-3 py-2 text-sm font-body text-dark hover:text-primary hover:bg-accent rounded transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 p-4 bg-dark rounded-lg">
                  <p className="text-white font-body font-bold text-sm mb-2">
                    Need Help Now?
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-primary font-body font-bold text-lg flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {/* Why Trust Section */}
              <div>
                <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                  {location.county} County
                </p>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-6">
                  {location.whyTrustHeading}
                </h2>
                <p className="text-muted font-body font-bold mb-4">
                  {location.whyTrustSubheading}
                </p>
                {location.whyTrustBody.map((paragraph, i) => (
                  <p key={i} className="text-muted font-body mb-4">
                    {paragraph}
                  </p>
                ))}
                <ul className="space-y-2.5 mt-6">
                  {location.whyTrustBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted font-body">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-primary">
                    Get a Consultation
                  </Link>
                  <a
                    href={siteConfig.phoneHref}
                    className="btn-secondary"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Residential Solutions */}
              <div id="residential">
                <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                  Residential
                </p>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
                  {location.residentialHeading}
                </h2>
                <p className="text-muted font-body mb-8">
                  {location.residentialBody}
                </p>
                <div className="space-y-6">
                  {location.residentialServices.map((service) => (
                    <div
                      key={service.name}
                      className="border-l-4 border-primary pl-5 py-1"
                    >
                      <h3 className="font-body font-bold text-dark text-lg mb-1">
                        {service.name}
                      </h3>
                      <p className="text-muted font-body text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-primary">
                    Schedule a Consultation
                  </Link>
                  <a
                    href={siteConfig.phoneHref}
                    className="btn-secondary"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Expertise Section */}
              <div id="expertise">
                <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                  Local Experts
                </p>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
                  {location.expertiseHeading}
                </h2>
                <p className="text-muted font-body font-bold mb-4">
                  {location.expertiseSubheading}
                </p>
                {location.expertiseBody.map((paragraph, i) => (
                  <p key={i} className="text-muted font-body mb-4">
                    {paragraph}
                  </p>
                ))}
                <ul className="space-y-2.5 mt-4">
                  {location.expertiseBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted font-body">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment / Materials Section */}
              <div id="equipment">
                <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                  Materials
                </p>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
                  {location.equipmentHeading}
                </h2>
                <p className="text-muted font-body mb-6">
                  {location.equipmentBody}
                </p>
                <div className="bg-accent rounded-xl p-6">
                  <h3 className="font-body font-bold text-dark mb-4">
                    Premium Materials &amp; Systems We Use
                  </h3>
                  <ul className="space-y-3">
                    {location.equipmentBullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-dark font-body text-sm">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Consultation
                  </Link>
                  <a
                    href={siteConfig.phoneHref}
                    className="btn-secondary"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Protection Section */}
              <div id="protection">
                <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                  Guarantees
                </p>
                <h2 className="text-2xl md:text-3xl font-body font-extrabold text-dark mb-4">
                  {location.protectionHeading}
                </h2>
                <p className="text-muted font-body font-bold mb-4">
                  {location.protectionSubheading}
                </p>
                <p className="text-muted font-body mb-6">
                  {location.protectionBody}
                </p>
                <ul className="space-y-2.5">
                  {location.protectionBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted font-body">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Review Trust Badge */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container-narrow flex items-center gap-4">
          <div>
            <p className="font-body font-extrabold text-dark text-sm">EXCELLENT</p>
            <div className="flex gap-0.5 my-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-muted font-body">Based on reviews</p>
          </div>
          <div className="text-sm text-muted font-body">
            <span className="font-body font-bold text-dark">Google</span> Reviews
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="section-padding bg-dark text-white" id="commercial">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
              Commercial
            </p>
            <h2 className="text-3xl md:text-4xl font-body font-extrabold text-white mb-4">
              Complete Commercial Landscape Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-body">
              Outdoor Renovations provides full-service commercial landscape
              services for businesses throughout {location.city} and{" "}
              {location.county} County. From office campuses and retail centers
              to HOA communities and public spaces.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {location.commercialServices.map((service) => (
              <div
                key={service}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
              >
                <p className="font-body font-bold text-white text-sm">
                  {service}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Request Commercial Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area / Nearby Cities */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
            Service Area
          </p>
          <h2 className="text-3xl md:text-4xl font-body font-extrabold text-dark mb-4">
            Proudly Serving {location.city} &amp; {location.county} County
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 font-body">
            In addition to {location.city}, Outdoor Renovations provides
            landscape services throughout {location.county} County and
            neighboring communities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-primary text-white rounded-lg p-3 shadow-sm">
              <p className="font-body font-bold flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {location.city}
              </p>
            </div>
            {location.nearbyCities.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-light rounded-lg p-3 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <p className="font-body font-bold text-dark">{city}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-primary font-body font-bold text-sm mt-6 hover:gap-2 transition-all"
          >
            View All Service Areas <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faqs">
        <FAQAccordion faqs={location.faqs} />
      </div>

      {/* Bottom CTA */}
      <CTABlock
        headline={`Ready to Transform Your ${location.city} Property?`}
        subheadline={`Outdoor Renovations is ${location.city}'s trusted landscape partner. Call today for a free consultation or schedule your project online.`}
        primaryCTAText="Get a Free Consultation"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Now"
        secondaryCTAUrl={siteConfig.phoneHref}
        backgroundImage="/images/project-evening.jpg"
      />
    </>
  );
}
