import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Updates', href: '#news' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EEDCE8] bg-[#FDF8FB]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-[#1F122B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D] rounded-sm"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#534363]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1F122B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D] rounded-sm after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#BE185D] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#BE185D] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-transform duration-150 hover:bg-[#9D174D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF8FB]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5CFE0] bg-white text-[#1F122B] md:hidden hover:bg-[#FBF2F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#EEDCE8] bg-[#FBF2F7] px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center text-sm font-medium text-[#3D2C4D] hover:text-[#BE185D] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#BE185D] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
