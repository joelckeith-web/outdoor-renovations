'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  technician: string;
}

export interface ReviewCarouselProps {
  /** Reviews passed from a server component (Sanity CMS). Falls back to placeholder data. */
  reviews?: Review[];
}

const placeholderReviews: Review[] = [
  {
    id: 1,
    name: 'Michael & Sarah T.',
    text: 'If you\'re reading this and considering Kyle, the President of Outdoor Renovations, for a potential project, you can stop your search — you\'ve found your guy. The attention to detail and craftsmanship exceeded every expectation we had for our backyard transformation.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 2,
    name: 'Jennifer W.',
    text: 'Professional, prompt, high quality services drawing from a wealth of experience in outdoor renovations and landscaping. Our patio and outdoor kitchen turned out absolutely stunning. Worth every penny.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 3,
    name: 'David & Lisa R.',
    text: 'Working with Kyle and his team at Outdoor Reno was a 5+ star experience. They transformed our Westlake Hills property into something we didn\'t think was possible. The 3D renderings gave us confidence before a single stone was laid.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 4,
    name: 'Robert H.',
    text: 'We hired Outdoor Renovations for a full landscape redesign including hardscaping, irrigation, and lighting. The project was completed on schedule and the result is magazine-worthy. Our neighbors keep asking who did the work.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 5,
    name: 'Amanda K.',
    text: 'Kyle\'s design-first approach made all the difference. Seeing our project in 3D before construction started eliminated all the guesswork. The pergola and fire pit area he designed have become the centerpiece of our home.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 6,
    name: 'Chris & Nicole M.',
    text: 'From the initial consultation to the final walkthrough, Outdoor Renovations was exceptional. They handled everything — design, permitting, irrigation, lighting, and hardscaping — as one seamless project with one point of contact.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 7,
    name: 'Patricia L.',
    text: 'Their white-glove property management service keeps our landscape looking pristine year-round. After they built our outdoor space, the maintenance team ensures our investment is protected. Truly a full-service company.',
    rating: 5,
    technician: 'Maintenance Team',
  },
  {
    id: 8,
    name: 'Thomas & Beth G.',
    text: 'We had a complicated hillside property in Lakeway that other companies wouldn\'t touch. Outdoor Renovations engineered retaining walls, drainage solutions, and a terraced garden that transformed an unusable slope into our favorite outdoor room.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 9,
    name: 'Steven P.',
    text: 'The custom metalwork and fencing Outdoor Renovations fabricated for our property is a work of art. Kyle understands that outdoor renovation is about more than just plants — it\'s about creating spaces that reflect how you want to live.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 10,
    name: 'Karen & Jim D.',
    text: 'After getting quotes from four companies, we went with Outdoor Renovations because Kyle took the time to truly understand what we wanted. The result speaks for itself — our Travis Heights backyard is now our favorite room in the house.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 11,
    name: 'Margaret S.',
    text: 'Outdoor Renovations renovated our existing landscape with intention — keeping what worked and upgrading what didn\'t. They didn\'t try to sell us a complete tear-out. That honesty earned our trust and our referrals.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
  {
    id: 12,
    name: 'Ryan & Jessica B.',
    text: 'The deck and outdoor living area they built for our Dripping Springs property exceeded our expectations. Kyle\'s background as a general contractor of landscape means nothing falls through the cracks. One call handles everything.',
    rating: 5,
    technician: 'Project Lead: Kyle S.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewCarousel({ reviews: reviewsProp }: ReviewCarouselProps) {
  const reviews = reviewsProp && reviewsProp.length > 0 ? reviewsProp : placeholderReviews;
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
    const cardWidth = el.querySelector<HTMLElement>('[data-review-card]')?.offsetWidth ?? 340;
    const gap = 24;
    const distance = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    el.scrollBy({ left: distance, behavior: 'smooth' });
  }, []);

  // Auto-scroll
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
      }, 5000);
    };

    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scrollBy]);

  // Pause auto-scroll on hover
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
    }, 5000);
  }, [scrollBy]);

  // Update button visibility on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, [updateScrollButtons]);

  return (
    <section className="section-padding bg-light overflow-hidden">
      <div className="container-narrow">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-dark mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted font-body text-lg max-w-2xl mx-auto">
            Real feedback from homeowners across the Austin metro who trusted us with their outdoor spaces.
          </p>
        </div>

        {/* Carousel container */}
        <div
          className="relative"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity ${
              canScrollLeft ? 'opacity-100 hover:bg-accent' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll reviews left"
          >
            <ChevronLeft className="h-5 w-5 text-primary-dark" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity ${
              canScrollRight ? 'opacity-100 hover:bg-accent' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll reviews right"
          >
            <ChevronRight className="h-5 w-5 text-primary-dark" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 -mx-1 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                data-review-card
                className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Accent bar */}
                <div className="h-1 bg-primary" />

                <div className="p-6">
                  <StarRating rating={review.rating} />
                  <p className="mt-4 text-dark font-body text-sm leading-relaxed line-clamp-5">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="font-heading font-bold text-sm text-dark">
                      {review.name}
                    </p>
                    <p className="text-muted font-body text-xs mt-0.5">
                      {review.technician}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
