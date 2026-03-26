export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* No Header — LP is standalone */}
      <main>{children}</main>

      <footer className="bg-dark text-white border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 font-body text-xs">
            &copy; {currentYear} Outdoor Renovations. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-body">
            <a
              href="https://outdoorreno.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://outdoorreno.com/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://outdoorreno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Visit Outdoor Renovations
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
