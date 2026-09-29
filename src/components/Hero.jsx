import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Handshake, Truck, Globe2 } from 'lucide-react';

const highlights = [
  {
    icon: BadgeCheck,
    label: 'Quality',
  },
  {
    icon: Handshake,
    label: 'Reliable Sourcing',
  },
  {
    icon: Truck,
    label: 'Efficient Logistics',
  },
  {
    icon: Globe2,
    label: 'Global Reach',
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#0B3D2E]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-trade.jpg"
          alt="Indian food products and international shipping"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#06291F]/95 via-[#0B3D2E]/80 to-[#0B3D2E]/25" />

      {/* Additional bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-[#06291F]/80 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-3xl" />

      {/* Content */}
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A441]"
          >
            TRADEVERSE IMPORT & EXPORTS
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-[#F7F1E3] sm:text-6xl lg:text-7xl"
          >
            Connecting India's Finest Food Products{' '}
            <span className="text-[#D9A441]">with Global Markets</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-7 text-[#F7F1E3]/80 sm:text-lg"
          >
            We source and export carefully selected fresh produce, authentic
            Indian spices and premium edible oils from India to international
            markets, with a strong focus on the United Kingdom.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-4"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className="flex items-center gap-2 text-sm text-[#F7F1E3]/90"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9A441]/50">
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#D9A441]"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{highlight.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* Primary CTA */}
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D9A441] px-7 py-3.5 text-sm font-semibold text-[#12372A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5B653] hover:shadow-xl"
            >
              Explore Our Products
              <ArrowRight
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#F7F1E3]/40 bg-[#0B3D2E]/20 px-7 py-3.5 text-sm font-semibold text-[#F7F1E3] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441] hover:text-[#D9A441]"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#F7F1E3]/50 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <span className="h-8 w-px bg-linear-to-b from-[#D9A441] to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;
