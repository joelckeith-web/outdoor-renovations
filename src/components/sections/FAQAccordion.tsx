'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-light">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark">
            {title}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg shadow-gray-200/80 overflow-hidden border border-gray-100">
          {/* Gradient accent top bar */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
                openIndex === index ? 'border-l-4 border-l-primary bg-accent/30' : 'border-l-4 border-l-transparent'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 px-6 text-left group hover:bg-gray-50/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-body font-semibold text-dark text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-muted font-body leading-relaxed px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
