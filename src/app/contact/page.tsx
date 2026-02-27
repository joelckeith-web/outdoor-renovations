import type { Metadata } from "next";
import Image from "next/image";
import { getReviews } from "@/lib/get-reviews";
import { ReviewCarousel } from "@/components/global/ReviewCarousel";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get a Consultation",
  description:
    "Contact Outdoor Renovations for landscape design, outdoor construction, or property management. Request a consultation or call (512) 743-0570. Serving the Austin metro area.",
};

export default async function ContactPage() {
  const reviews = await getReviews();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/images/project-patio.jpg"
          alt="Beautiful outdoor patio renovation by Outdoor Renovations in Austin, Texas"
          fill
          className="object-cover object-center"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        <div className="relative container-narrow section-padding pt-28 md:pt-32">
          <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6 max-w-3xl">
            Start Your Outdoor Renovation
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl font-body">
            Whether you need a complete landscape design, a patio renovation, or
            ongoing property care — Outdoor Renovations is here to help. Call us
            directly or fill out the form below and we will get back to you
            promptly.
          </p>
        </div>
      </section>

      <ReviewCarousel reviews={reviews} />

      {/* Contact Content */}
      <ContactForm />
    </>
  );
}
