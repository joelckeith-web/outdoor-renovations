import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Phone,
  Shield,
  Award,
  Clock,
  Star,
  ArrowRight,
  Zap,
  BadgeCheck,
  MapPin,
  CheckCircle,
  Leaf,
  Layers,
  Hammer,
  Cog,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { LandingForm } from '@/components/landing/LandingForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { ScrollToTopLink } from '@/components/landing/ScrollToTopLink';

export const metadata: Metadata = {
  title: 'Hardscaping & Outdoor Living | Free Project Quote',
  description:
    'Custom patios, outdoor kitchens, fire features, and pergolas designed and built by a licensed landscape contractor. Serving Austin Metro for 16+ years. Get a free quote.',
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  { icon: Shield, value: '16+', label: 'Years Experience' },
  { icon: Award, value: 'Licensed', label: 'Landscape Contractor' },
  { icon: Star, value: '5-Star', label: '200+ Reviews' },
  { icon: Clock, value: 'Premium', label: 'Materials & Craft' },
];

const benefits = [
  {
    icon: Layers,
    title: 'Custom Patios & Walkways',
    description:
      'Natural stone, pavers, and flagstone installed with precision — built to withstand Central Texas heat and last for decades.',
  },
  {
    icon: Zap,
    title: 'Outdoor Kitchens & Fire Features',
    description:
      'From full outdoor kitchens with built-in grills to custom fire pits and fireplaces, we create gathering spaces your family will love.',
  },
  {
    icon: Hammer,
    title: 'Pergolas & Covered Structures',
    description:
      'Handcrafted pergolas, casitas, and shade structures that extend your living space and provide relief from the Texas sun.',
  },
  {
    icon: Cog,
    title: 'Custom Metal & Stonework',
    description:
      'In-house metal fabrication for custom gates, railings, edging, and architectural features that set your property apart.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Guaranteed',
    description:
      'Licensed General Contractor of Landscape. Every project is fully bonded, insured, and backed by our 1-year service guarantee.',
  },
  {
    icon: Leaf,
    title: 'Designed for Texas Climate',
    description:
      'Every material and design choice is made with Central Texas conditions in mind — heat, UV, soil movement, and water efficiency.',
  },
];

const signsChecklist = [
  'Your patio is cracked, uneven, or showing its age',
  'You want an outdoor kitchen or cooking area',
  'Your backyard lacks defined living or entertainment zones',
  'You need shade structures for the Texas summer',
  'Drainage issues are affecting your yard or foundation',
  'You want to increase your home\'s value and curb appeal',
  'Your existing hardscape does not match the quality of your home',
  'You are building a new home and need outdoor living design',
];

const projectTypes = [
  {
    title: 'Patios & Outdoor Rooms',
    items: ['Custom stone patios', 'Covered pavilions', 'Outdoor seating areas', 'Multi-level terraces'],
  },
  {
    title: 'Outdoor Kitchens',
    items: ['Built-in grills and smokers', 'Counters and prep areas', 'Bars and refrigeration', 'Gas and plumbing hookups'],
  },
  {
    title: 'Fire Features',
    items: ['Custom fire pits', 'Outdoor fireplaces', 'Gas fire features', 'Fire and water combinations'],
  },
  {
    title: 'Pergolas & Structures',
    items: ['Shade structures and pergolas', 'Casitas and pool houses', 'Covered patios with fans', 'Arbors and trellises'],
  },
];

const serviceAreas = {
  austinMetro: {
    label: 'Austin Metro',
    cities: ['Westlake Hills', 'Tarrytown', 'Barton Creek', 'Rollingwood', 'Travis Heights'],
  },
  hillCountry: {
    label: 'Hill Country',
    cities: ['Lakeway', 'Bee Cave', 'Dripping Springs', 'Steiner Ranch', 'Circle C Ranch'],
  },
};

const processSteps = [
  {
    step: '1',
    title: 'Schedule Your Free Quote',
    description:
      'Tell us about your hardscaping vision. We visit your property, evaluate the site, and discuss your goals and budget.',
  },
  {
    step: '2',
    title: 'Review Your Custom Design',
    description:
      'Our design team creates detailed plans with material selections and 3D renderings so you can see every detail before we build.',
  },
  {
    step: '3',
    title: 'Enjoy Your New Outdoor Living Space',
    description:
      'Our licensed crew installs your project with precision craftsmanship. Your outdoor living dream is built to last.',
  },
];

const reviews = [
  {
    text: 'Kyle\'s team built our outdoor kitchen and patio from scratch. The stonework is museum-quality and the built-in grill setup is exactly what we wanted. We practically live outside now.',
    author: 'Robert & Karen W.',
    location: 'Dripping Springs',
  },
  {
    text: 'We needed a complete hardscape solution — retaining walls, a new patio, and custom metal gates. Outdoor Renovations handled it all under one roof. The craftsmanship is outstanding.',
    author: 'Amanda S.',
    location: 'Steiner Ranch',
  },
  {
    text: 'The custom fire pit and pergola they designed for us turned our backyard into our favorite room in the house. The attention to every detail — lighting, materials, layout — was impressive.',
    author: 'Chris & Natalie P.',
    location: 'Travis Heights',
  },
];

const faqs = [
  {
    question: 'How much does a custom patio cost in Austin?',
    answer:
      'Custom patio costs vary widely based on size, materials, and complexity. A basic paver patio might start in the mid-teens per square foot, while premium natural stone with custom patterns and borders can run significantly higher. We provide detailed, transparent quotes during the design phase so there are no surprises.',
  },
  {
    question: 'What materials work best for patios in Central Texas?',
    answer:
      'Travertine, natural limestone, flagstone, and high-quality concrete pavers all perform well in our climate. We avoid materials that absorb excessive heat or are prone to cracking under thermal cycling. During your consultation, we walk you through material samples and explain the pros and cons of each option for your specific project.',
  },
  {
    question: 'How long does a hardscaping project take?',
    answer:
      'Timelines depend on project scope. A standard patio installation runs two to four weeks, while a full outdoor living build with kitchen, fire feature, and pergola can take six to ten weeks. We provide a detailed project schedule during the design phase and keep you informed throughout construction.',
  },
  {
    question: 'Can you build an outdoor kitchen on my existing patio?',
    answer:
      'In many cases, yes. We evaluate the existing slab or patio surface for structural integrity, drainage, and proximity to utilities. If modifications are needed, we handle those as part of the project. If a full rebuild makes more sense, we will be upfront about that during the consultation.',
  },
  {
    question: 'Do you handle drainage and grading?',
    answer:
      'Absolutely. Proper drainage is critical for any hardscape project, especially in Central Texas where expansive clay soils and heavy rains can wreak havoc. We design grading and drainage solutions into every project to protect your investment and your home\'s foundation.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the greater Austin Metro and Central Texas Hill Country, including Westlake Hills, Lakeway, Bee Cave, Dripping Springs, Tarrytown, Barton Creek, Rollingwood, Steiner Ranch, Circle C Ranch, and Travis Heights. If you are in a nearby area not listed, contact us — we likely cover your neighborhood.',
  },
  {
    question: 'Do you offer financing?',
    answer:
      'We offer flexible payment structures and can discuss phased project approaches to fit your budget. Many clients choose to build their outdoor living space in stages — starting with the patio and adding features like a kitchen or fire pit over time. We are happy to discuss options during your consultation.',
  },
  {
    question: 'What is the process from design to installation?',
    answer:
      'It begins with a free on-site consultation where we evaluate your space and discuss your vision. Next, our design team creates detailed plans with material selections and 3D renderings. Once you approve the design, we handle permitting, schedule construction, and build your project with a dedicated crew. You have a single point of contact throughout.',
  },
  {
    question: 'Do I need a permit for an outdoor kitchen or pergola?',
    answer:
      'In most Austin-area municipalities, yes — structures like outdoor kitchens, pergolas, and covered patios typically require building permits. We handle the entire permitting process for you, including any HOA submissions. This is included as part of our full-service approach.',
  },
  {
    question: 'How do you protect hardscaping from Texas heat and soil movement?',
    answer:
      'We engineer every project with Central Texas conditions in mind. This includes proper base preparation to account for soil expansion and contraction, selection of UV-stable and heat-resistant materials, adequate drainage to prevent water pooling, and flexible joint systems that accommodate ground movement without cracking.',
  },
  {
    question: 'Do you offer maintenance for hardscape features?',
    answer:
      'Yes. We offer ongoing maintenance plans that include hardscape cleaning, sealing, joint sand replenishment, and inspection for any settling or drainage issues. Keeping your hardscape well-maintained extends its life and keeps it looking like the day it was installed.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function HardscapingOutdoorLivingLP() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/project-hardscape.jpg"
          alt="Premium hardscaping and outdoor living space"
          fill
          priority
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />

        <div className="relative container-narrow section-padding">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="max-w-xl">
              <span className="inline-block bg-primary/90 text-white font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Hardscaping &amp; Outdoor Living
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Build Your Dream Outdoor Living Space.{' '}
                <span className="text-primary-light">Get a Free Project Quote</span>
              </h1>
              <p className="font-body text-lg text-gray-300 mb-8 leading-relaxed">
                Custom patios, outdoor kitchens, fire features, and pergolas designed and built by a
                licensed landscape contractor. Serving Austin Metro for 16+ years.
              </p>

              {/* Phone CTA */}
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 font-body font-bold text-xl text-primary-light hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Right — Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <LandingForm
                serviceLabel="Hardscaping & Outdoor Living"
                messagePlaceholder="Tell us about your project (e.g., patio, outdoor kitchen, pergola, fire pit)"
                leadSource="lp-hardscaping-outdoor-living"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-primary-dark py-6">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="w-6 h-6 text-primary-light mb-1" />
                <span className="text-white font-body font-bold text-lg">{stat.value}</span>
                <span className="text-gray-300 font-body text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              Why Choose Us for Hardscaping?
            </h2>
            <p className="font-body text-muted text-lg max-w-2xl mx-auto">
              Premium materials. Expert craftsmanship. A licensed team that designs and builds
              outdoor living spaces that last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-light rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-body font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-muted font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SIGNS CHECKLIST ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
                Signs You Need a Hardscape Upgrade
              </h2>
              <p className="font-body text-muted mb-8">
                If any of these sound familiar, it may be time to invest in professional hardscaping
                that matches the quality of your home.
              </p>
              <ul className="space-y-3">
                {signsChecklist.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-dark">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ScrollToTopLink className="btn-primary">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ScrollToTopLink>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/project-stonework.jpg"
                alt="Expert stonework by Outdoor Renovations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECT TYPES ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              Hardscape Project Types
            </h2>
            <p className="font-body text-muted text-lg max-w-2xl mx-auto">
              From intimate fire pit settings to full outdoor kitchens — we design and build every
              type of outdoor living feature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((type) => (
              <div
                key={type.title}
                className="bg-light rounded-xl p-8 border-2 border-primary/20"
              >
                <h3 className="text-xl font-body font-bold text-primary mb-4">{type.title}</h3>
                <ul className="space-y-3">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="font-body text-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DEEP CONTENT ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-6">
              Hardscaping in Central Texas: Built for This Climate
            </h2>
            <div className="prose font-body text-muted space-y-4 leading-relaxed">
              <p>
                Central Texas is one of the most demanding environments for hardscape construction.
                Summer surface temperatures on stone and concrete can exceed 150 degrees, clay soils
                expand and contract dramatically with moisture levels, and intense UV radiation
                degrades inferior materials within a few seasons. Building outdoor living spaces that
                look beautiful and perform for decades requires materials science and construction
                techniques specific to this region.
              </p>
              <p>
                Our team selects every material with these conditions in mind. We use travertine and
                natural limestone that reflect heat rather than absorb it, keeping surfaces more
                comfortable underfoot. Base preparation includes compacted aggregate layers
                engineered to flex with soil movement rather than crack. Drainage is integrated into
                every design to handle the intense, sudden downpours common in Central Texas without
                pooling or erosion.
              </p>
              <p>
                For outdoor kitchens and fire features, we use stainless steel components rated for
                outdoor exposure, countertop materials that resist UV fading and thermal shock, and
                gas line installations that meet all local building codes. Every structure we build —
                from pergolas to retaining walls — is engineered for the specific soil and wind
                conditions of your property.
              </p>
              <p>
                The result is an outdoor living space that does not just survive Central Texas
                conditions — it thrives in them. Our clients enjoy their patios, kitchens, and
                gathering spaces year after year with minimal maintenance, knowing the investment is
                protected by premium construction and our 1-year service guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              Proudly Serving {siteConfig.serviceArea}
            </h2>
            <p className="font-body text-muted text-lg max-w-2xl mx-auto">
              We build premium outdoor living spaces across Austin&apos;s most sought-after
              neighborhoods and the surrounding Hill Country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {Object.values(serviceAreas).map((area) => (
              <div key={area.label} className="bg-light rounded-xl p-6">
                <h3 className="text-lg font-body font-bold text-primary mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {area.label}
                </h3>
                <ul className="space-y-2">
                  {area.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 font-body text-dark text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-light" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3-STEP PROCESS ==================== */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              How It Works
            </h2>
            <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">
              From your first call to your finished outdoor living space — our process is
              transparent, efficient, and built around your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-body font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-body font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-body text-muted">
              {siteConfig.averageRating}-star average across {siteConfig.reviewCount} reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.author}
                className="bg-light rounded-xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-body text-dark text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-body font-bold text-dark text-sm">{review.author}</p>
                  <p className="font-body text-muted text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <FAQAccordion faqs={faqs} title="Hardscaping & Outdoor Living FAQs" />

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/project-patio.jpg"
          alt="Beautiful custom patio by Outdoor Renovations"
          fill
          className="object-cover"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/80" />

        <div className="relative container-narrow section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
            Ready to Build Your Outdoor Living Space?
          </h2>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Get a free project quote today. No obligation, no pressure — just a conversation about
            how we can transform your outdoor space.
          </p>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 font-body font-bold text-2xl md:text-3xl text-primary-light hover:text-white transition-colors mb-8"
          >
            <Phone className="h-6 w-6 md:h-7 md:w-7" />
            {siteConfig.phone}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ScrollToTopLink className="btn-primary text-base px-8 py-3.5">
              Get My Free Quote
            </ScrollToTopLink>
            <a
              href={siteConfig.phoneHref}
              className="btn-secondary border-white text-white hover:bg-white hover:text-dark text-base px-8 py-3.5"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
