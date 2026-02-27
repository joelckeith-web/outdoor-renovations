import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Areas | Landscape Services Across the Austin Metro",
  description: `Outdoor Renovations provides expert landscape design, build, and maintenance services across the Austin metro area. Find outdoor renovation services in your community. Call ${siteConfig.phone}.`,
};

const regions = [
  {
    name: "West Austin & Hill Country",
    cities: ["Westlake Hills", "Lakeway", "Bee Cave", "Rollingwood"],
  },
  {
    name: "South & Central Austin",
    cities: ["Barton Creek", "Travis Heights", "Circle C Ranch"],
  },
  {
    name: "North Austin & Lake Travis",
    cities: ["Steiner Ranch", "Tarrytown"],
  },
  {
    name: "Greater Austin Metro",
    cities: ["Dripping Springs"],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/hero-drone-yard.jpg"
          alt="Aerial view of Austin, Texas landscape renovation"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-4">
            Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 max-w-3xl">
            Serving Austin&apos;s Finest Communities
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6 font-body">
            Outdoor Renovations serves homeowners and commercial properties
            across the Austin metro area. Find expert landscape design, build,
            and maintenance services in your community.
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

      {/* Regions & Cities */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-body font-extrabold text-dark mb-4">
              Find Landscape Services Near You
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-body">
              Select your community to learn about our landscape services in
              your area, or call us at{" "}
              <a href={siteConfig.phoneHref} className="text-primary font-bold">
                {siteConfig.phone}
              </a>{" "}
              to speak with a team member.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-light rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-body font-extrabold text-dark text-xl mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {region.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {region.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-white rounded-lg p-3 text-center border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <p className="font-body font-bold text-dark group-hover:text-primary transition-colors">
                        {city}
                      </p>
                      <span className="text-primary text-xs font-bold flex items-center justify-center gap-0.5 mt-1">
                        View Services <ChevronRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Don't See Your Community?"
        subheadline="We serve the entire Austin metro region. If your community isn't listed, we likely still cover your area. Give us a call and we'll confirm."
        primaryCTAText="Contact Us"
        primaryCTAUrl="/contact"
        secondaryCTAText="Call Now"
        secondaryCTAUrl={siteConfig.phoneHref}
      />
    </>
  );
}
