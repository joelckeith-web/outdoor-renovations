"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeframe: string;
  zipCode: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // In production, this sends to a serverless function
    console.log("Form data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-heading font-extrabold text-dark mb-6">
              Request a Consultation
            </h2>

            {isSubmitted ? (
              <div className="bg-accent rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-muted font-body">
                  We have received your request and will get back to you within
                  one business day. For immediate assistance, call us at{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="text-primary font-bold"
                  >
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-heading font-bold text-dark mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-heading font-bold text-dark mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-heading font-bold text-dark mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(512) 555-0100"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-heading font-bold text-dark mb-1"
                    >
                      ZIP Code *
                    </label>
                    <input
                      id="zipCode"
                      type="text"
                      {...register("zipCode", {
                        required: "ZIP code is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="78746"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-heading font-bold text-dark mb-1"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="landscape-design">Landscape Design</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="custom-carpentry">Custom Carpentry</option>
                      <option value="softscaping-planting">
                        Softscaping &amp; Planting
                      </option>
                      <option value="irrigation-drainage">
                        Irrigation &amp; Drainage
                      </option>
                      <option value="landscape-lighting">
                        Landscape Lighting
                      </option>
                      <option value="metal-fabrication">
                        Metal Fabrication
                      </option>
                      <option value="property-management">
                        Property &amp; Pest Management
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeframe"
                      className="block text-sm font-heading font-bold text-dark mb-1"
                    >
                      Timeframe
                    </label>
                    <select
                      id="timeframe"
                      {...register("timeframe")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    >
                      <option value="">When do you need service?</option>
                      <option value="asap">As Soon As Possible</option>
                      <option value="1-2-weeks">1–2 Weeks</option>
                      <option value="1-month">Within a Month</option>
                      <option value="1-3-months">1–3 Months</option>
                      <option value="planning">Just Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-heading font-bold text-dark mb-1"
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                      required: "Please describe your project or question",
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                    placeholder="Describe your outdoor renovation goals, property details, and any relevant information..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-light rounded-xl p-8 sticky top-24">
              <h3 className="font-heading font-bold text-dark text-xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark text-sm">
                      Phone
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-primary font-body text-lg font-bold hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-muted text-sm font-body">
                      Click to call
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark text-sm">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary font-body font-bold hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark text-sm">
                      Service Area
                    </p>
                    <p className="text-muted font-body">
                      {siteConfig.serviceArea}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark text-sm">
                      Business Hours
                    </p>
                    <p className="text-muted font-body">
                      Mon–Fri: 8:00 AM – 5:00 PM
                    </p>
                    <p className="text-muted font-body">
                      Sat: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-heading font-bold text-dark text-sm mb-2">
                  Ready to Get Started?
                </p>
                <p className="text-muted text-sm font-body mb-3">
                  Call us directly for the fastest response on your outdoor
                  renovation project.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="btn-primary w-full text-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
