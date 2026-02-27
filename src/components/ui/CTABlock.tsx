import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

interface CTABlockProps {
  headline: string;
  subheadline: string;
  primaryCTAText: string;
  primaryCTAUrl: string;
  secondaryCTAText: string;
  secondaryCTAUrl: string;
  backgroundImage?: string;
}

export function CTABlock({
  headline,
  subheadline,
  primaryCTAText,
  primaryCTAUrl,
  secondaryCTAText,
  secondaryCTAUrl,
  backgroundImage,
}: CTABlockProps) {
  const hasImage = !!backgroundImage;

  return (
    <section className={`relative overflow-hidden ${hasImage ? 'bg-dark text-white' : 'bg-accent'}`}>
      {hasImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </>
      )}
      <div className="relative container-narrow section-padding text-center">
        <h2 className={`text-3xl md:text-4xl mb-4 ${hasImage ? 'text-white' : 'text-dark'}`}>
          {headline}
        </h2>
        <p className={`font-body text-lg max-w-2xl mx-auto mb-6 ${hasImage ? 'text-gray-300' : 'text-muted'}`}>
          {subheadline}
        </p>

        {/* Phone number */}
        <a
          href={siteConfig.phoneHref}
          className={`inline-flex items-center gap-2 font-body font-bold text-2xl md:text-3xl transition-colors mb-8 ${
            hasImage
              ? 'text-primary-light hover:text-white'
              : 'text-primary-dark hover:text-primary'
          }`}
        >
          <Phone className="h-6 w-6 md:h-7 md:w-7" />
          {siteConfig.phone}
        </a>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryCTAUrl} className="btn-primary text-base px-8 py-3.5">
            {primaryCTAText}
          </Link>
          <Link
            href={secondaryCTAUrl}
            className={`btn-secondary text-base px-8 py-3.5 ${
              hasImage ? 'border-white text-white hover:bg-white hover:text-dark' : ''
            }`}
          >
            {secondaryCTAText}
          </Link>
        </div>
      </div>
    </section>
  );
}
