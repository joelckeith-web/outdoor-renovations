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
          {/* Form — Dark green card with prominent styling */}
          <div className="lg:col-span-3">
            <div className="bg-primary-dark rounded-2xl p-8 md:p-10 shadow-2xl shadow-primary-dark/40">
              <h2 className="text-2xl font-body font-bold text-white mb-2">
                Request a Consultation
              </h2>
              <p className="text-primary-light font-body text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you within one business day.
              </p>

              {isSubmitted ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
                  <CheckCircle className="w-16 h-16 text-primary-light mx-auto mb-4" />
                  <h3 className="text-2xl font-body font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-300 font-body">
                    We have received your request and will get back to you within
                    one business day. For immediate assistance, call us at{" "}
                    <a
                      href={siteConfig.phoneHref}
                      className="text-primary-light font-bold underline"
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
                        className="block text-sm font-body font-semibold text-white mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-300 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-body font-semibold text-white mb-1.5"
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
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors"
                        placeholder="you@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-300 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-body font-semibold text-white mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors"
                        placeholder="(512) 555-0100"
                      />
                      {errors.phone && (
                        <p className="text-red-300 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-body font-semibold text-white mb-1.5"
                      >
                        ZIP Code *
                      </label>
                      <input
                        id="zipCode"
                        type="text"
                        {...register("zipCode", {
                          required: "ZIP code is required",
                        })}
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors"
                        placeholder="78746"
                      />
                      {errors.zipCode && (
                        <p className="text-red-300 text-sm mt-1">
                          {errors.zipCode.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-body font-semibold text-white mb-1.5"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors"
                      >
                        <option value="" className="text-dark">Select a service...</option>
                        <option value="landscape-design" className="text-dark">Landscape Design</option>
                        <option value="hardscaping" className="text-dark">Hardscaping</option>
                        <option value="custom-carpentry" className="text-dark">Custom Carpentry</option>
                        <option value="softscaping-planting" className="text-dark">Softscaping &amp; Planting</option>
                        <option value="irrigation-drainage" className="text-dark">Irrigation &amp; Drainage</option>
                        <option value="landscape-lighting" className="text-dark">Landscape Lighting</option>
                        <option value="metal-fabrication" className="text-dark">Metal Fabrication</option>
                        <option value="property-management" className="text-dark">Property &amp; Pest Management</option>
                        <option value="other" className="text-dark">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeframe"
                        className="block text-sm font-body font-semibold text-white mb-1.5"
                      >
                        Timeframe
                      </label>
                      <select
                        id="timeframe"
                        {...register("timeframe")}
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors"
                      >
                        <option value="" className="text-dark">When do you need service?</option>
                        <option value="asap" className="text-dark">As Soon As Possible</option>
                        <option value="1-2-weeks" className="text-dark">1–2 Weeks</option>
                        <option value="1-month" className="text-dark">Within a Month</option>
                        <option value="1-3-months" className="text-dark">1–3 Months</option>
                        <option value="planning" className="text-dark">Just Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-body font-semibold text-white mb-1.5"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Please describe your project or question",
                      })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg font-body text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors resize-y"
                      placeholder="Describe your outdoor renovation goals, property details, and any relevant information..."
                    />
                    {errors.message && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary-dark font-body font-bold text-lg rounded-lg hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
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
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-light rounded-xl p-8 sticky top-24 shadow-lg">
              <h3 className="font-body font-bold text-dark text-xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-dark text-sm">
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
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-dark text-sm">
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
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-dark text-sm">
                      Service Area
                    </p>
                    <p className="text-muted font-body">
                      {siteConfig.serviceArea}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-dark text-sm">
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
                <p className="font-body font-bold text-dark text-sm mb-2">
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
