import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const serviceLinks = [
  { label: 'Landscape Design', href: '/services/landscape-design' },
  { label: 'Hardscaping', href: '/services/hardscaping' },
  { label: 'Custom Carpentry', href: '/services/custom-carpentry' },
  { label: 'Softscaping & Planting', href: '/services/softscaping-planting' },
  { label: 'Irrigation & Drainage', href: '/services/irrigation-drainage' },
  { label: 'Property Management', href: '/services/property-management' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Service Areas', href: '/locations' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main footer content */}
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading font-extrabold text-xl text-primary-light tracking-tight">
                {siteConfig.businessName}
              </span>
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">
              {siteConfig.motto}
            </p>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Premium landscape design, build, and maintenance serving the{' '}
              {siteConfig.serviceArea}.{' '}
              {siteConfig.yearsExperience} years of craftsmanship and care.
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-primary-light mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-primary-light mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-primary-light font-body text-xs font-bold uppercase tracking-wider mb-1">
                We proudly offer discounted rates for
              </p>
              <p className="text-gray-300 font-body text-sm">
                Military, First Responders &amp; Nonprofits
              </p>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-primary-light mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-light" />
                  <span className="font-body text-sm">
                    <span className="block text-white font-bold">{siteConfig.phone}</span>
                    Click to call
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-light" />
                  <span className="font-body text-sm">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm">
                  <span className="block text-white font-bold">Service Area</span>
                  {siteConfig.serviceArea}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 font-body text-xs">
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-gray-600 font-body text-xs italic">
            Design &bull; Landscape &bull; Maintain
          </p>
        </div>
      </div>
    </footer>
  );
}
