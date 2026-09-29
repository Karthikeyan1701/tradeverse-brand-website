import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight, Leaf } from 'lucide-react';

const aboutPoints = [
  {
    title: 'Our Mission',
    text: 'To build long-term international trade relationships by providing reliable sourcing, consistent quality and professional export services.',
    icon: Target,
  },
  {
    title: 'Our Vision',
    text: 'To establish TRADEVERSE as a trusted Indian export partner for food products across the United Kingdom and other international markets.',
    icon: Eye,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F1E3] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative leaf */}
      <div className="pointer-events-none absolute -left-16 top-20 hidden text-[#0B3D2E]/5 sm:block">
        <Leaf size={180} strokeWidth={1} aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0B3D2E]">
              About TRADEVERSE
            </p>

            {/* Heading */}
            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#17221D] sm:text-5xl lg:text-6xl">
              Your Trusted Partner
              <span className="block text-[#0B3D2E]">
                for Indian Food Exports
              </span>
            </h2>

            {/* Gold divider */}
            <div className="my-7 h-px w-16 bg-[#D9A441]" />

            {/* Paragraphs */}
            <div className="max-w-xl space-y-5 text-[15px] leading-7 text-[#5E665F] sm:text-base">
              <p>
                TRADEVERSE Import & Exports is an India-based export company
                focused on supplying quality food products to international
                buyers.
              </p>

              <p>
                Our product portfolio includes fresh and perishable produce,
                Indian spices and edible oils, sourced through reliable supplier
                networks and prepared to meet the requirements of international
                trade.
              </p>

              <p>
                From sourcing and quality coordination to documentation and
                shipment handling, we work to provide our customers with a
                smooth and dependable export experience.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B3D2E] px-6 py-3 text-sm font-semibold text-[#F7F1E3] transition-all duration-300 hover:-translate-y-1 hover:bg-[#06291F] hover:shadow-lg"
            >
              Explore Our Products
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </motion.div>

          {/* Right: Image + Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-4xl">
              <img
                src="/images/about-trade.jpg"
                alt="TRADEVERSE food export operations"
                className="h-110 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-130 lg:h-140"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#06291F]/40 via-transparent to-transparent" />

              {/* Image badge */}
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-[#0B3D2E]/85 px-5 py-4 text-[#F7F1E3] backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D9A441]">
                  From India
                </p>

                <p className="mt-1 font-serif text-lg">To Global Markets</p>
              </div>
            </div>

            {/* Mission / Vision cards */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.1,
                    }}
                    className="rounded-2xl border border-[#0B3D2E]/10 bg-white/95 p-6 shadow-xl shadow-[#0B3D2E]/10 backdrop-blur-sm"
                  >
                    {/* Icon */}
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/40 bg-[#D9A441]/10 text-[#0B3D2E]">
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#17221D]">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5E665F]">
                      {point.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
