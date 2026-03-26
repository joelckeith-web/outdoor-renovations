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
  Heart,
  Layers,
  Hammer,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { LandingForm } from '@/components/landing/LandingForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { ScrollToTopLink } from '@/components/landing/ScrollToTopLink';

export const metadata: Metadata = {
  title: 'Outdoor Renovation | Design Consultation',
  description:
    'Elevate your outdoor space with custom landscape design, expert hardscaping, and professional installation. Serving Austin Metro for 16+ years. Schedule a consultation.',
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  { icon: Shield, value: '16+', label: 'Years Experience' },
  { icon: Award, value: 'Licensed', label: 'Landscape Contractor' },
  { icon: Star, value: '5-Star', label: '200+ Reviews' },
  { icon: Clock, value: 'Full-Service', label: 'Design to Maintain' },
];

const benefits = [
  {
    icon: Leaf,
    title: 'Custom Landscape Design',
    description:
      'Custom to-scale 2D plans and 3D renderings so you can see your project before a single shovel breaks ground.',
    image: '/images/project-landscape.jpg',
  },
  {
    icon: Layers,
    title: 'Expert Hardscaping',
    description:
      'Patios, walkways, retaining walls, outdoor kitchens, and fire pits built with premium materials and precision craftsmanship.',
    image: '/images/project-hardscape.jpg',
  },
  {
    icon: Hammer,
    title: 'Custom Carpentry',
    description:
      'Pergolas, decks, casitas, fences, and privacy screens — handcrafted structures that define your outdoor living space.',
    image: '/images/project-deck.jpg',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Insured',
    description:
      'Licensed Landscape Contractor. Fully bonded and insured with a 1-year service guarantee on all work.',
    image: '/images/project-stonework.jpg',
  },
  {
    icon: Zap,
    title: 'Single Point of Contact',
    description:
      'From initial design consultation through final installation and ongoing maintenance — one team, one vision, one call.',
    image: '/images/project-outdoor-living.jpg',
  },
  {
    icon: Heart,
    title: 'Ongoing Property Care',
    description:
      'White-glove maintenance plans to protect your investment year-round. We design it, build it, and maintain it.',
    image: '/images/project-garden.jpg',
  },
];

const commonProjects = [
  'Complete Landscape Redesign and Installation',
  'Custom patio and outdoor kitchen installation',
  'Pergola, casita, or deck construction',
  'Landscape lighting and evening ambiance',
  'Softscaping and native Texas planting',
  'Smart irrigation system installation',
  'Retaining wall and drainage solutions',
  'Custom metal fabrication and ironwork',
  'Pool-adjacent landscape design',
  'Property maintenance and concierge service',
];

const decisionMatrix = {
  newBuild: {
    title: 'New Build',
    items: [
      'Starting from scratch on a blank canvas',
      'Recently purchased property needs full landscape design',
      'New construction with no existing outdoor features',
      'Want a comprehensive, cohesive outdoor plan from day one',
    ],
  },
  renovation: {
    title: 'Renovation',
    items: [
      'Updating an existing landscape that has seen better days',
      'Refreshing tired spaces with modern design elements',
      'Adding new features to an established property',
      'Addressing drainage, structural, or functional issues',
    ],
  },
};

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
    title: 'Schedule Your Consultation',
    description:
      'Tell us about your vision. We will visit your property, discuss your goals, and provide an initial project scope.',
  },
  {
    step: '2',
    title: 'Review Your Custom Design',
    description:
      'Our design team creates detailed 2D plans and 3D renderings so you can see exactly what your space will look like.',
  },
  {
    step: '3',
    title: 'Enjoy Your Outdoor Oasis',
    description:
      'Our licensed crew brings the design to life with expert craftsmanship. Your outdoor dream becomes reality.',
  },
];

const reviews = [
  {
    text: 'The 3D renderings Kyle\'s team created were incredible — we could see exactly what our backyard would look like before they started. The finished product exceeded even those renderings.',
    author: 'Sarah & Mike R.',
    location: 'Westlake Hills',
  },
  {
    text: 'Having one team handle the design, hardscaping, carpentry, and planting made everything seamless. No coordinating between contractors, no finger-pointing. Just beautiful work.',
    author: 'Jennifer T.',
    location: 'Lakeway',
  },
  {
    text: 'Outdoor Renovations transformed our property from a bare lot to an absolute showpiece. The attention to detail on the stonework and custom pergola is something we get compliments on weekly.',
    author: 'David & Lisa M.',
    location: 'Bee Cave',
  },
];

const faqs = [
  {
    question: 'How does the design consultation process work?',
    answer:
      'It starts with a free on-site visit where we walk your property, listen to your goals, and discuss budget range. From there, our design team creates custom 2D plans and photorealistic 3D renderings so you can visualize the finished project. We refine the design with you until it is exactly right before any construction begins.',
  },
  {
    question: 'How long does a typical outdoor renovation take?',
    answer:
      'Project timelines vary based on scope and complexity. A straightforward patio installation might take two to three weeks, while a full backyard transformation with hardscaping, carpentry, planting, and lighting typically runs six to twelve weeks. We provide a detailed timeline during the design phase so you know exactly what to expect.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the greater Austin Metro and Central Texas Hill Country. Our primary service areas include Westlake Hills, Lakeway, Bee Cave, Dripping Springs, Tarrytown, Barton Creek, Rollingwood, Steiner Ranch, Circle C Ranch, and Travis Heights. If you are nearby but not listed, reach out — we likely serve your area too.',
  },
  {
    question: 'Do you handle permits and HOA approvals?',
    answer:
      'Yes, we handle all necessary permits and can work directly with your HOA to ensure your project meets community guidelines. Our team is experienced with the requirements across Austin-area municipalities and homeowner associations, so you do not have to navigate that process alone.',
  },
  {
    question: 'What materials do you use for hardscaping?',
    answer:
      'We use premium natural stone, travertine, flagstone, concrete pavers, and custom-fabricated materials sourced for durability in Central Texas conditions. Every material is selected to withstand extreme heat, UV exposure, and the expansive clay soils common in our area. We walk you through material options during the design phase.',
  },
  {
    question: 'Can you work with my existing landscape?',
    answer:
      'Absolutely. Many of our projects involve renovating and enhancing existing outdoor spaces rather than starting from scratch. We assess what is working, what can be preserved, and what should be updated to create a cohesive, refreshed design that respects the character of your property.',
  },
  {
    question: 'Do you offer financing?',
    answer:
      'We can discuss flexible payment structures to fit your budget. Many of our clients phase their projects to spread costs over time. During your consultation, we will outline the investment required and discuss payment options that work for your situation.',
  },
  {
    question: 'What is included in your maintenance plans?',
    answer:
      'Our maintenance plans range from basic lawn and landscape care to full-service outdoor concierge programs. Services include mowing, trimming, seasonal planting, irrigation management, pest monitoring, and hardscape upkeep. Plans are customized to your property and the level of care you want.',
  },
  {
    question: 'How do you handle Central Texas heat and drought considerations?',
    answer:
      'Every design we create accounts for our local climate. We select drought-tolerant and native plants, design efficient irrigation systems that comply with water restrictions, choose heat-resistant hardscape materials, and orient shade structures to maximize comfort. Our 16-plus years in Central Texas means we know exactly what works here.',
  },
  {
    question: 'What sets Outdoor Renovations apart from other landscapers?',
    answer:
      'We are a true full-service firm — design, hardscaping, carpentry, metal fabrication, softscaping, lighting, irrigation, and ongoing maintenance all under one roof. You get a single point of contact and a licensed Landscape Contractor overseeing every detail. That level of integration and accountability is rare in this industry.',
  },
  {
    question: 'Do you provide warranties on your work?',
    answer:
      'Yes. Every project is backed by our 1-year service guarantee covering workmanship and materials. We are fully bonded and insured, and we stand behind our work long after the project is complete. If something is not right, we make it right — period.',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function OutdoorRenovationLP() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/hero-estate-landscape.jpg"
          alt="Modern estate with custom landscape design featuring stone steps and ornamental grasses"
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
                Austin Landscape Experts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Elevate Your Outdoor Space.{' '}
                <span className="text-primary-light">Let&apos;s Discuss Your Vision.</span>
              </h1>
              <p className="font-body text-lg text-gray-300 mb-8 leading-relaxed">
                From custom landscape design to expert installation, our licensed and insured team
                brings your outdoor vision to life. Serving Austin&apos;s most discerning
                homeowners for 16+ years.
              </p>

              {/* Phone CTA */}
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 bg-white text-primary font-body font-bold text-lg px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Right — Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <LandingForm
                serviceLabel="Outdoor Renovation"
                messagePlaceholder="Tell us about your outdoor project (e.g., backyard renovation, patio, landscape design)"
                leadSource="lp-outdoor-renovation"
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
              Why Choose Outdoor Renovations?
            </h2>
            <p className="font-body text-muted text-lg max-w-2xl mx-auto">
              One team. Complete outdoor solutions. From first sketch to final mulch — here is why
              Austin homeowners trust us with their properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-body font-bold text-dark mb-2">{benefit.title}</h3>
                  <p className="text-muted font-body text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
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
              From your first call to your finished outdoor space — our process is simple,
              transparent, and designed around you.
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

      {/* ==================== COMMON PROJECT TYPES ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
                Common Outdoor Projects We Handle
              </h2>
              <p className="font-body text-muted mb-8">
                Whether you need a single feature or a complete property transformation, our team
                has the expertise to bring your vision to life.
              </p>
              <ul className="space-y-3">
                {commonProjects.map((project) => (
                  <li key={project} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-dark">{project}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ScrollToTopLink className="btn-primary">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ScrollToTopLink>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/project-corten-steps.jpg"
                alt="Custom corten steel steps with native landscaping by Outdoor Renovations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DECISION MATRIX ==================== */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-4">
              New Build vs. Renovation
            </h2>
            <p className="font-body text-muted text-lg max-w-2xl mx-auto">
              Not sure which approach fits your situation? Here is how to think about it — and
              either way, we have you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* New Build */}
            <div className="bg-light rounded-xl p-8 border-2 border-primary/20">
              <h3 className="text-xl font-body font-bold text-primary mb-4">
                {decisionMatrix.newBuild.title}
              </h3>
              <ul className="space-y-3">
                {decisionMatrix.newBuild.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="font-body text-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Renovation */}
            <div className="bg-light rounded-xl p-8 border-2 border-primary/20">
              <h3 className="text-xl font-body font-bold text-primary mb-4">
                {decisionMatrix.renovation.title}
              </h3>
              <ul className="space-y-3">
                {decisionMatrix.renovation.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="font-body text-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center font-body text-muted mt-8">
            Whichever path fits, our process starts the same way — a free on-site consultation to
            understand your property and your goals.
          </p>
        </div>
      </section>

      {/* ==================== DEEP CONTENT ==================== */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-6">
              Outdoor Living in Central Texas: What You Need to Know
            </h2>
            <div className="prose font-body text-muted space-y-4 leading-relaxed">
              <p>
                Central Texas presents unique challenges and opportunities for outdoor living. With
                summer temperatures regularly exceeding 100 degrees, expansive clay soils that shift
                with moisture levels, and periodic water restrictions, designing a beautiful and
                functional outdoor space requires deep local expertise.
              </p>
              <p>
                Our team has spent over 16 years learning what thrives in this environment and what
                does not. We select drought-tolerant native and adapted plants, design efficient drip
                irrigation systems that comply with municipal water regulations, and choose hardscape
                materials rated for extreme UV exposure and thermal cycling.
              </p>
              <p>
                Soil movement is one of the most overlooked factors in Central Texas landscape
                projects. Without proper grading, drainage, and foundation preparation, patios crack,
                retaining walls shift, and plantings fail. Every project we design includes
                engineering-grade site assessment to account for these conditions before we break
                ground.
              </p>
              <p>
                The reward for getting it right is extraordinary. Austin&apos;s mild winters mean you
                can enjoy your outdoor space eight to ten months of the year. A well-designed
                landscape with strategic shade structures, evening lighting, and thoughtful material
                choices extends that window even further — giving you a true outdoor living room that
                adds value to your home and quality to your life.
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
              From the rolling hills of Lakeway to the tree-lined streets of Tarrytown, we bring
              expert outdoor design and construction to Austin&apos;s finest neighborhoods.
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
      <FAQAccordion faqs={faqs} title="Outdoor Renovation FAQs" />

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/hero-aerial.jpg"
          alt="Aerial view of completed outdoor renovation"
          fill
          className="object-cover"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/80" />

        <div className="relative container-narrow section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
            Your Dream Outdoor Space Starts With One Call
          </h2>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Request a project quote today. No obligation — a straightforward conversation about
            how we can elevate your property.
          </p>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-bold text-2xl md:text-3xl px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg mb-8"
          >
            <Phone className="h-6 w-6 md:h-7 md:w-7" />
            {siteConfig.phone}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ScrollToTopLink className="btn-primary text-base px-8 py-3.5">
              Get My Consultation
            </ScrollToTopLink>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-bold text-base px-8 py-3.5 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
