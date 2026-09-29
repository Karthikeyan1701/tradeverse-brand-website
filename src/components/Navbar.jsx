import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why TRADEVERSE', href: '#why-tradeverse' },
  { label: 'Quality', href: '#quality' },
  { label: 'Logistics', href: '#logistics' },
  { label: 'UK Market', href: '#uk-market' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B3D2E]/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={handleNavClick}
        >
          {/* Temporary logo mark */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9A441]/15 text-xl">
            <img
              src="/images/tradeverse-logo.png"
              alt="TRADEVERSE"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="leading-none">
            <span className="block font-serif text-lg font-semibold tracking-wide text-[#F7F1E3] sm:text-xl">
              TRADEVERSE
            </span>

            <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.2em] text-[#D9A441] sm:text-[9px] sm:tracking-[0.25em]">
              Import & Exports
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[13px] font-medium text-[#F7F1E3]/85 transition-colors duration-300 hover:text-[#D9A441]"
            >
              {link.label}

              {/* Hover underline */}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#D9A441] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#D9A441] px-5 py-2.5 text-sm font-semibold text-[#12372A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5B653] hover:shadow-lg lg:flex"
        >
          Request a Quote
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F7F1E3] transition-colors hover:border-[#D9A441] hover:text-[#D9A441] lg:hidden"
        >
          {isMenuOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0B3D2E] transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="border-b border-white/10 py-4 text-sm font-medium text-[#F7F1E3]/90 transition-colors hover:text-[#D9A441]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#D9A441] px-5 py-3 text-sm font-semibold text-[#12372A] transition-colors hover:bg-[#E5B653]"
          >
            Request a Quote
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
