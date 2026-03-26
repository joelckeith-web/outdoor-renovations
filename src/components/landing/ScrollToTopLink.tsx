'use client';

interface ScrollToTopLinkProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollToTopLink({ className, children }: ScrollToTopLinkProps) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={className}
    >
      {children}
    </button>
  );
}
