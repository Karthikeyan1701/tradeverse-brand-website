import { footerLinks, footerContact } from '../data/footer';
import { ArrowRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06291F] text-[#F7F1E3]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <h2 className="font-serif text-3xl font-semibold tracking-wide">
                TRADEVERSE
              </h2>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
                Import & Exports
              </p>
            </a>

            <p className="mt-6 max-w-sm leading-7 text-[#AEBDB4]">
              Connecting India's finest food products with global markets
              through reliable sourcing, quality coordination and efficient
              export solutions.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-[#D9A441] px-6 py-3 font-semibold text-[#06291F] transition-colors hover:bg-[#E5B653]"
            >
              Request a Quote
            </a>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                {section.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#AEBDB4] transition-colors hover:text-[#F7F1E3]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              {/* Location */}
              <div>
                <p className="text-xs uppercase tracking-wider text-[#71847A]">
                  Location
                </p>

                <p className="mt-1 text-[#F7F1E3]">{footerContact.location}</p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs uppercase tracking-wider text-[#71847A]">
                  WhatsApp / Phone
                </p>

                <a
                  href={`tel:${footerContact.phone.replace(/\s/g, '')}`}
                  className="mt-1 block text-[#F7F1E3] transition-colors hover:text-[#D9A441]"
                >
                  {footerContact.phone}
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917200270565"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9A441] transition-colors hover:text-[#E5B653]"
              >
                Chat on WhatsApp
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D9A441]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-[#71847A] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {currentYear} TRADEVERSE Import & Exports. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="group inline-flex items-center gap-2 transition-colors hover:text-[#F7F1E3]"
            >
              Back to Top
              <ArrowUp
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
