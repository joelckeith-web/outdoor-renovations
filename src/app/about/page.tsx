import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Clock,
  Users,
  CheckCircle,
  Leaf,
  Heart,
  PenTool,
  Hammer,
  TreeDeciduous,
} from "lucide-react";
import { ReviewCarousel } from "@/components/global/ReviewCarousel";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteConfig } from "@/lib/site-config";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schema-markup";
import { getReviews } from "@/lib/get-reviews";

export const metadata: Metadata = {
  title: "About Us | Licensed Landscape Contractor — Austin, TX",
  description:
    "Learn about Outdoor Renovations — 16+ years of landscape design and build experience serving Austin's premier communities. Licensed General Contractor of Landscape, fully bonded and insured.",
};

const aboutFAQs = [
  {
    question: "What qualifications does Outdoor Renovations hold?",
    answer:
      "Outdoor Renovations is a Licensed General Contractor of Landscape, fully bonded and insured. All work is backed by our 1-year service guarantee plus applicable manufacturer warranties on materials. Our team has over 16 years of experience in the Austin landscape industry.",
  },
  {
    question: "How long has Outdoor Renovations been in business?",
    answer:
      "Outdoor Renovations has over 16 years of experience providing landscape design, build, and maintenance services across the Austin metro area. We have completed more than 200 projects with a 99% customer satisfaction rate.",
  },
  {
    question: "What types of projects does Outdoor Renovations handle?",
    answer:
      "We handle everything from complete landscape redesigns and hardscape installations to custom carpentry, irrigation systems, landscape lighting, metal fabrication, and ongoing property management. Our specialty is high-end residential properties, but we serve commercial properties as well.",
  },
  {
    question:
      "Does Outdoor Renovations serve both residential and commercial clients?",
    answer:
      "Yes. We provide comprehensive landscape services for both residential and commercial properties, including multi-unit developments, office campuses, and public spaces across the Austin metro area.",
  },
  {
    question: "What areas does Outdoor Renovations serve?",
    answer:
      "We serve the Austin metro area including Westlake Hills, Lakeway, Bee Cave, Dripping Springs, Tarrytown, Barton Creek, Rollingwood, Steiner Ranch, Circle C Ranch, and Travis Heights.",
  },
  {
    question: "Does Outdoor Renovations offer design services?",
    answer:
      "Yes. Our design services include to-scale 2D plans, 3D renderings, and full construction documentation. We also provide build-only services for clients who already have plans from their own designer or landscape architect.",
  },
  {
    question: "Do you offer discounts for military or first responders?",
    answer:
      "Yes. We proudly offer discounted rates for military personnel, first responders, and nonprofit organizations. Contact us to learn more about our community discount programs.",
  },
];

export default async function AboutPage() {
  const reviews = await getReviews();

  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(aboutFAQs);

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
          src="/images/hero-aerial.jpg"
          alt="Aerial view of a premium landscape renovation by Outdoor Renovations in Austin, Texas"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-4">
            About Outdoor Renovations
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 max-w-3xl">
            Built on Craftsmanship. Driven by Vision.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl font-body">
            Over 16 years of refined outdoor spaces across the Austin metro —
            built with intention, precision, and long-term vision.
          </p>
        </div>
      </section>

      <ReviewCarousel reviews={reviews} />

      {/* Owner Story Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-6">
                Renovating Outdoor Dreams to Reality
              </h2>
              <div className="space-y-4 text-muted font-body">
                <p>
                  Founded by Kyle Stoutenger, Outdoor Renovations was built on a
                  commitment to delivering outdoor spaces that reflect the
                  homeowner&apos;s vision while respecting the natural landscape
                  of Central Texas. With deep roots in the Austin landscape
                  industry, our team approaches every property with precision,
                  craftsmanship, and an uncompromising standard of quality.
                </p>
                <p>
                  What began as a dedication to honest, detail-oriented work has
                  grown into a full-service landscape operation serving
                  Austin&apos;s most premier communities. From thoughtful,
                  to-scale designs and 3D renderings to expert installation and
                  ongoing landscape care — we handle every aspect of your outdoor
                  project as a single point of contact.
                </p>
                <p>
                  Our approach is straightforward: we assess your property
                  honestly, design with intention, build with precision, and
                  maintain with care. No shortcuts. No overselling. Just expert
                  guidance from a team that has completed over 200 projects
                  across the Austin metro with a 99% client satisfaction rate.
                </p>
                <p>
                  We are proud to offer discounted rates for military personnel,
                  first responders, and nonprofit organizations — because the
                  communities we serve deserve to be supported in return.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-accent rounded-xl p-8 sticky top-24 overflow-hidden">
                <div
                  className="relative w-full h-48 -mt-8 -mx-8 mb-6"
                  style={{ width: "calc(100% + 4rem)" }}
                >
                  <Image
                    src="/images/project-estate-1.jpg"
                    alt="Premium landscape project by Outdoor Renovations in Austin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <h3 className="font-heading font-bold text-dark text-xl mb-6">
                  At a Glance
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Clock,
                      label: `${siteConfig.yearsExperience} Years Experience`,
                    },
                    {
                      icon: Shield,
                      label: "Licensed General Contractor of Landscape",
                    },
                    { icon: Award, label: "200+ Projects Completed" },
                    { icon: Users, label: "Fully Bonded & Insured" },
                    {
                      icon: CheckCircle,
                      label: "Residential & Commercial",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-body text-dark font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-primary/20">
                  <p className="text-sm text-muted font-body mb-1">
                    Service Area
                  </p>
                  <p className="font-heading font-bold text-dark text-sm">
                    {siteConfig.serviceArea}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary w-full mt-6 text-center"
                >
                  Get a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-2">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              Design. Build. Maintain.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-body">
              Every project follows a proven process refined over 16+ years and
              200+ completed outdoor renovations across the Austin metro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <PenTool className="w-12 h-12 text-primary-light mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Design
              </h3>
              <p className="text-gray-300 font-body">
                We start with a thorough site assessment and consultation,
                followed by to-scale 2D plans, 3D renderings, and full
                construction documentation. Every design is tailored to your
                property, lifestyle, and the unique conditions of Central Texas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <Hammer className="w-12 h-12 text-primary-light mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Build
              </h3>
              <p className="text-gray-300 font-body">
                Our construction team executes every project with precision
                craftsmanship and premium materials. From hardscaping and custom
                carpentry to irrigation, lighting, and metal fabrication — we
                serve as your single point of contact from concept to
                completion.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <TreeDeciduous className="w-12 h-12 text-primary-light mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Maintain
              </h3>
              <p className="text-gray-300 font-body">
                Protect your investment with our property management services.
                From weekly lawn care and seasonal planting rotations to
                all-inclusive outdoor concierge service — we keep your landscape
                looking its best year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Qualifications */}
      <section className="section-padding bg-light">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              Our Credentials &amp; Qualifications
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-body">
              Every credential we hold represents a commitment to doing this
              work at the highest level. These are the standards we live by on
              every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                Licensed General Contractor
              </h3>
              <p className="text-muted font-body mb-4">
                Outdoor Renovations holds a General Contractor of Landscape
                license, ensuring all work meets state and local regulatory
                standards. Every project is executed with full legal compliance
                and professional accountability.
              </p>
              <ul className="space-y-2 text-sm text-muted font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  State-licensed landscape contractor
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Full code compliance on every project
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Permit management and inspections
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                Fully Bonded &amp; Insured
              </h3>
              <p className="text-muted font-body mb-4">
                Your property is fully protected on every project. Outdoor
                Renovations carries comprehensive general liability and
                workers&apos; compensation insurance, plus bonding that
                guarantees project completion.
              </p>
              <ul className="space-y-2 text-sm text-muted font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  General liability coverage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Workers&apos; compensation insurance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Bonded for project completion assurance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                1-Year Service Guarantee
              </h3>
              <p className="text-muted font-body mb-4">
                Every project is backed by our 1-year service guarantee plus
                applicable manufacturer warranties on all materials. We stand
                behind our work and ensure your outdoor space performs as
                designed.
              </p>
              <ul className="space-y-2 text-sm text-muted font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  1-year workmanship guarantee
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Manufacturer material warranties
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Responsive support after completion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-primary font-body font-bold text-sm uppercase tracking-widest mb-2">
              Full-Service Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              Everything Your Outdoor Space Needs
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-body">
              From initial concept to ongoing care, Outdoor Renovations handles
              every aspect of your outdoor project under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: PenTool, label: "Landscape Design", slug: "landscape-design" },
              { icon: Leaf, label: "Softscaping & Planting", slug: "softscaping-planting" },
              { icon: Hammer, label: "Custom Carpentry", slug: "custom-carpentry" },
              { icon: TreeDeciduous, label: "Property Management", slug: "property-management" },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex flex-col items-center text-center p-6 bg-light rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading font-bold text-dark group-hover:text-primary transition-colors">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-secondary">
              View All Capabilities
            </Link>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Work With a Team You Can Trust"
        subheadline="Outdoor Renovations brings 16+ years of licensed landscape expertise to every project. Get a consultation and see the difference craftsmanship makes."
        primaryCTAText="Get a Consultation"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Us"
        secondaryCTAUrl={siteConfig.phoneHref}
        backgroundImage="/images/project-evening.jpg"
      />

      <FAQAccordion
        faqs={aboutFAQs}
        title="Questions About Outdoor Renovations"
      />
    </>
  );
}
