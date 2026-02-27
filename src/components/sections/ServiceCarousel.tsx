'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceItem {
  name: string;
  slug: string;
  shortDescription: string;
  icon: string;
  image: string;
}

interface ServiceCarouselProps {
  services: ServiceItem[];
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  const scrollBy = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-service-card]');
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 24;
    const distance = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    el.scrollBy({ left: distance, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [updateScrollButtons]);

  // Auto-scroll — slow cycle (7s interval)
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        const el = scrollRef.current;
        if (!el) return;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollBy('right');
        }
      }, 7000);
    };
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scrollBy]);

  const pauseAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollBy('right');
      }
    }, 7000);
  }, [scrollBy]);

  return (
    <section className="section-padding overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
      <div className="relative container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div className="text-center md:text-left">
            <p className="text-primary-light font-body font-bold text-sm uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-body font-bold text-white">
              Landscape Services for Every Need
            </h2>
            <p className="text-gray-300 max-w-2xl mt-3 font-body mx-auto md:mx-0">
              From initial concept and design through construction and ongoing
              care, Outdoor Renovations is your single point of contact for
              every aspect of your outdoor space.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-8">
            <button
              type="button"
              onClick={() => scrollBy('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'bg-white text-primary-dark hover:bg-accent hover:border-white'
                  : 'opacity-30 cursor-not-allowed text-white/50'
              }`}
              aria-label="Scroll services left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'bg-white text-primary-dark hover:bg-accent hover:border-white'
                  : 'opacity-30 cursor-not-allowed text-white/50'
              }`}
              aria-label="Scroll services right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width scrollable track — no container boundary */}
      <div
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              data-service-card
              className="group flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[calc((100vw-7*1.5rem)/6)] xl:w-[calc((100vw-7*1.5rem)/5)] rounded-xl overflow-hidden bg-white shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 border border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-body font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile scroll indicator dots */}
        <div className="flex justify-center gap-1.5 mt-6 md:hidden">
          {services.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
