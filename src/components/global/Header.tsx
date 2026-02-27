'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Capabilities', href: '/services' },
  { label: 'Service Areas', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar — phone number on desktop */}
      <div className="hidden md:block bg-primary-dark">
        <div className="container-narrow flex justify-end items-center py-1.5 text-sm text-white">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-primary-light transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Business Name */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-heading font-extrabold text-xl md:text-2xl text-primary-dark tracking-tight">
              {siteConfig.businessName}
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-body font-bold text-dark hover:text-primary transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm">
              Get a Consultation
            </Link>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-primary-dark hover:bg-accent transition-colors"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-dark hover:bg-gray-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container-narrow py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-body font-bold text-dark hover:bg-accent hover:text-primary-dark rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 px-3 py-3 text-base font-body font-bold text-primary-dark"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full mt-2 text-center"
              >
                Get a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
