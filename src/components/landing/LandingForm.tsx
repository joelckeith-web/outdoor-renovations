'use client';

import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { useUTMParams } from '@/lib/useUTMParams';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

interface LandingFormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  message: string;
}

interface LandingFormProps {
  serviceLabel: string;
  messagePlaceholder?: string;
  leadSource: string;
}

export function LandingForm(props: LandingFormProps) {
  return (
    <Suspense>
      <LandingFormInner {...props} />
    </Suspense>
  );
}

function LandingFormInner({
  serviceLabel,
  messagePlaceholder = 'Briefly describe your project (optional)',
  leadSource,
}: LandingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const utmParams = useUTMParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LandingFormData>();

  const onSubmit = async (data: LandingFormData) => {
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          service: serviceLabel,
          leadSource,
          utmSource: utmParams.utm_source,
          utmMedium: utmParams.utm_medium,
          utmCampaign: utmParams.utm_campaign,
          utmTerm: utmParams.utm_term,
          utmContent: utmParams.utm_content,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      // Push form_submission event to GTM dataLayer
      window.dataLayer?.push({
        event: 'form_submission',
        form_name: leadSource,
        form_service: serviceLabel,
      });

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-dark mb-2">
          Consultation Request Received!
        </h3>
        <p className="text-muted font-body mb-4">
          Kyle or a member of our team will contact you shortly. For immediate help:
        </p>
        <a
          href={siteConfig.phoneHref}
          className="btn-primary text-lg w-full justify-center"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call {siteConfig.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-primary px-6 py-4 text-center">
        <p className="text-white font-heading font-bold text-lg">
          Get Your Free {serviceLabel} Consultation
        </p>
        <p className="text-white/80 font-body text-sm mt-1">
          No obligation. Fast response.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <input type="hidden" value={leadSource} name="leadSource" />

        <div>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
            placeholder="Full Name *"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
            placeholder="Phone Number *"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
            placeholder="Email Address *"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            {...register('zipCode', { required: 'ZIP code is required' })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
            placeholder="ZIP Code *"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>
          )}
        </div>

        <div>
          <textarea
            rows={3}
            {...register('message')}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none placeholder:text-gray-400"
            placeholder={messagePlaceholder}
          />
        </div>

        {submitError && (
          <p className="text-red-600 text-sm text-center font-body">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full text-lg py-4 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Get My Free Consultation
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 pt-1">
          <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
          <p className="text-xs text-muted font-body">
            100% free. No spam. Your info is private.
          </p>
        </div>
      </form>
    </div>
  );
}
