import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  CheckCircle,
  Shield,
  Clock,
  CreditCard,
  Users,
} from "lucide-react";
import { ReviewCarousel } from "@/components/global/ReviewCarousel";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteConfig } from "@/lib/site-config";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schema-markup";
import { getReviews } from "@/lib/get-reviews";

export const metadata: Metadata = {
  title: "Landscape Services & Pricing | Transparent Project Costs",
  description:
    "Transparent landscape service pricing from Outdoor Renovations. View typical costs for landscape design, hardscaping, carpentry, planting, irrigation, lighting, and property management across the Austin metro.",
};

const pricingCategories = [
  {
    category: "Design Services",
    services: [
      { name: "Initial Consultation & Site Assessment", priceRange: "Complimentary" },
      { name: "Conceptual Design Plan (2D)", priceRange: "$1,500 – $3,500" },
      { name: "Full Design Package (2D + 3D Renderings)", priceRange: "$3,500 – $7,500+" },
      { name: "Construction Documentation", priceRange: "Included with Build" },
    ],
  },
  {
    category: "Hardscaping & Construction",
    services: [
      { name: "Patio Installation (Natural Stone / Pavers)", priceRange: "$8,000 – $30,000+" },
      { name: "Retaining Wall Construction", priceRange: "$5,000 – $20,000+" },
      { name: "Outdoor Kitchen Build", priceRange: "$15,000 – $50,000+" },
      { name: "Fire Pit / Fireplace Feature", priceRange: "$3,000 – $15,000+" },
      { name: "Walkway & Path Installation", priceRange: "$3,000 – $12,000+" },
    ],
  },
  {
    category: "Custom Carpentry & Structures",
    services: [
      { name: "Pergola / Shade Structure", priceRange: "$8,000 – $25,000+" },
      { name: "Custom Deck Build", priceRange: "$10,000 – $35,000+" },
      { name: "Privacy Fence / Screen", priceRange: "$5,000 – $15,000+" },
      { name: "Gate & Entry Feature", priceRange: "$3,000 – $10,000+" },
    ],
  },
  {
    category: "Softscaping & Planting",
    services: [
      { name: "Full Landscape Planting Install", priceRange: "$5,000 – $20,000+" },
      { name: "Seasonal Color Rotation", priceRange: "$500 – $2,000 / season" },
      { name: "Tree Installation (per tree)", priceRange: "$500 – $3,000+" },
      { name: "Sod Installation", priceRange: "$2,000 – $8,000+" },
    ],
  },
  {
    category: "Irrigation, Lighting & Systems",
    services: [
      { name: "Smart Irrigation System Install", priceRange: "$3,000 – $10,000+" },
      { name: "Drainage Solution / French Drain", priceRange: "$2,000 – $8,000+" },
      { name: "Landscape Lighting Package", priceRange: "$3,000 – $15,000+" },
      { name: "Metal Fabrication (Custom Iron/Steel)", priceRange: "Custom Quote" },
    ],
  },
  {
    category: "Property Management",
    services: [
      { name: "Weekly Lawn Maintenance", priceRange: "$200 – $600 / month" },
      { name: "Full-Service Property Care", priceRange: "$500 – $1,500 / month" },
      { name: "Seasonal Cleanup (per visit)", priceRange: "$300 – $800" },
      { name: "All-Inclusive Outdoor Concierge", priceRange: "Custom Quote" },
    ],
  },
];

const pricingFAQs = [
  {
    question: "Are these prices exact or estimates?",
    answer:
      "The prices shown are typical ranges for the Austin metro area. Your actual cost depends on factors like property size, materials selected, site conditions, and project complexity. We provide exact pricing in a free, no-obligation consultation.",
  },
  {
    question: "Does Outdoor Renovations offer financing?",
    answer:
      "We understand that landscape renovations are a significant investment. Contact us to discuss available financing options and payment plans for qualifying projects.",
  },
  {
    question: "What is included in a design consultation?",
    answer:
      "Our initial consultation includes a site visit, property assessment, discussion of your goals and budget, and preliminary design concepts. Full design packages include to-scale 2D plans, 3D renderings, plant palettes, material selections, and construction documentation.",
  },
  {
    question: "Why do project prices vary so much?",
    answer:
      "Landscape project costs depend on property size, material quality (natural stone vs. manufactured pavers, for example), site conditions (slope, soil type, access), complexity of design, and scope of work. We provide detailed quotes after assessing your specific property.",
  },
  {
    question: "Does Outdoor Renovations provide free estimates?",
    answer:
      "Yes. We offer complimentary on-site consultations for all projects. Our team will assess your property, discuss your vision, and provide a detailed written proposal with transparent pricing.",
  },
  {
    question: "Are there additional fees I should know about?",
    answer:
      "We believe in transparent pricing. Our proposals include labor, materials, and standard permits. If any additional work is identified during a project, we discuss it with you and get approval before proceeding. There are no hidden fees.",
  },
  {
    question: "Do you offer maintenance plans?",
    answer:
      "Yes. We offer comprehensive property management plans ranging from weekly lawn maintenance to all-inclusive outdoor concierge service. Plans are customized based on your property size and needs. Contact us for a personalized maintenance proposal.",
  },
  {
    question: "Do you offer discounts for military or first responders?",
    answer:
      "Yes. We proudly offer discounted rates for military personnel, first responders, and nonprofit organizations. Contact us to learn more about our community discount programs.",
  },
];

export default async function ServicesPricingPage() {
  const reviews = await getReviews();

  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(pricingFAQs);

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

      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/project-stonework.jpg"
          alt="Premium stonework installation by Outdoor Renovations in Austin, Texas"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-4">
            Services &amp; Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 max-w-3xl">
            Transparent Landscape Services &amp; Pricing
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6 font-body">
            Outdoor Renovations believes you should know what to expect before
            your project begins. Below are typical price ranges for our most
            common services across the Austin metro area.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="bg-accent py-10">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, text: "No Hidden Fees" },
              { icon: CreditCard, text: "Financing Available" },
              { icon: Clock, text: "Flexible Scheduling" },
              { icon: Users, text: "Your Vision, Our Priority" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-2"
              >
                <item.icon className="w-7 h-7 text-primary" />
                <p className="font-heading font-bold text-dark text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewCarousel reviews={reviews} />

      {/* Pricing Tables */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              Landscape Service Pricing Guide
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-body">
              Prices reflect typical ranges for the Austin metro area. Actual
              costs vary based on property size, materials, and project
              complexity. Contact us for a personalized consultation.
            </p>
          </div>

          <div className="space-y-10">
            {pricingCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-heading font-bold text-dark mb-4 pb-2 border-b-2 border-primary/20">
                  {category.category}
                </h3>
                <div className="grid gap-3">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-center p-4 rounded-lg bg-light hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="font-body text-dark">
                          {service.name}
                        </span>
                      </div>
                      <span className="font-heading font-bold text-primary-dark whitespace-nowrap ml-4">
                        {service.priceRange}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20 text-center">
            <p className="font-heading font-bold text-dark text-lg mb-2">
              Prices are estimates. Your actual cost may vary.
            </p>
            <p className="text-muted font-body mb-4">
              Every property is different. Contact Outdoor Renovations for a
              free, no-obligation consultation tailored to your specific needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Bundle Banner */}
      <section className="bg-primary text-white py-10">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-3">
            Design + Build Package: Save on Your Full Project
          </h2>
          <p className="font-body text-white/90 max-w-2xl mx-auto mb-4">
            Bundle your design and construction phases with Outdoor Renovations
            and receive preferred pricing on your complete outdoor renovation
            project.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-primary font-heading font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark">
              Pricing Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {pricingFAQs.map((faq) => (
              <div
                key={faq.question}
                className="border border-gray-100 rounded-lg p-6"
              >
                <h3 className="font-heading font-bold text-dark text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready for Your Free Consultation?"
        subheadline="Contact Outdoor Renovations today. We will assess your property and provide honest, transparent pricing — no surprises."
        primaryCTAText="Get a Consultation"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Now"
        secondaryCTAUrl={siteConfig.phoneHref}
      />
    </>
  );
}
