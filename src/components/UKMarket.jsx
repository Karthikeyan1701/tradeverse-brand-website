import { motion } from 'framer-motion';
import { ArrowRight, Globe2 } from 'lucide-react';
import { ukBuyerTypes, ukMarketHighlights } from '../data/ukMarket';

const buyerRows = [];

for (let i = 0; i < ukBuyerTypes.length; i += 3) {
  buyerRows.push(ukBuyerTypes.slice(i, i + 3));
}

const UKMarket = () => {
  return (
    <section id="uk-market" className="bg-[#F7F1E3] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
              UK Market
            </p>

            <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#0B3D2E] md:text-5xl">
              Connecting Indian Food
              <span className="text-[#D9A441]"> with the United Kingdom.</span>
            </h2>
          </div>

          <p className="leading-7 text-[#5E665F] lg:pb-1">
            We connect Indian food suppliers with UK-based importers,
            distributors, wholesalers and food businesses looking for dependable
            sourcing solutions.
          </p>
        </motion.div>

        {/* Main India → UK Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-[#0B3D2E]"
        >
          <div className="grid min-h-105 lg:grid-cols-2">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                India
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="mx-2 inline-block"
                  aria-hidden="true"
                />
                United Kingdom
              </p>

              <h3 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-[#F7F1E3] md:text-5xl">
                A sourcing connection built for
                <span className="text-[#D9A441]"> international buyers.</span>
              </h3>

              <p className="mt-6 max-w-xl leading-7 text-[#C9D3CD]">
                From fresh produce and authentic Indian spices to edible oils
                and customized bulk requirements, we coordinate sourcing and
                export requirements based on each buyer's needs.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ukMarketHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 text-sm text-[#DDE5DF]"
                  >
                    <Globe2
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#D9A441]"
                      aria-hidden="true"
                    />

                    {highlight}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-9 inline-flex w-fit rounded-full bg-[#D9A441] px-7 py-3 font-semibold text-[#06291F] transition-colors hover:bg-[#E5B653]"
              >
                Send Your Requirement
              </a>
            </div>

            {/* Right Visual */}
            <div className="relative min-h-87.5 lg:min-h-full">
              <img
                src="/images/uk-market.jpg"
                alt="India to United Kingdom food export"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-[#0B3D2E] via-[#0B3D2E]/30 to-transparent" />

              {/* Route Indicator */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-[#06291F]/80 p-4 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:gap-4 sm:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#AEBDB4]">
                    Origin
                  </p>

                  <p className="mt-1 font-serif text-xl text-[#F7F1E3]">
                    India
                  </p>
                </div>

                <div className="flex flex-1 items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#D9A441]" />

                  <div className="relative flex-1">
                    <div className="border-t border-dashed border-[#D9A441]/60" />

                    <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9A441]/30 bg-[#0B3D2E]">
                      <Globe2
                        size={14}
                        strokeWidth={1.8}
                        className="text-[#D9A441]"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <span className="h-2 w-2 rounded-full bg-[#D9A441]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#AEBDB4]">
                    Market
                  </p>

                  <p className="mt-1 font-serif text-xl text-[#F7F1E3]">UK</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buyer Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
              Who We Work With
            </p>

            <h3 className="mt-3 font-serif text-3xl font-semibold text-[#0B3D2E] md:text-4xl">
              Supporting Different Types of UK Buyers
            </h3>
          </div>

          <div className="space-y-6">
            {buyerRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto]"
              >
                {row.map((buyer, index) => (
                  <motion.article
                    key={buyer.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: (rowIndex * 3 + index) * 0.07,
                    }}
                    className="
            group grid
            rounded-2xl
            border border-[#0B3D2E]/10
            bg-white
            p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            lg:row-span-4
            lg:grid-rows-subgrid
          "
                  >
                    {/* Number */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3D2E] text-sm font-semibold text-[#D9A441]">
                      {String(buyer.id).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h4 className="mt-6 font-serif text-2xl font-semibold text-[#0B3D2E]">
                      {buyer.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-3 leading-7 text-[#5E665F]">
                      {buyer.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 h-px w-8 bg-[#D9A441] transition-all duration-300 group-hover:w-16" />
                  </motion.article>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-[#D9A441]/30 bg-[#EFE7D3] p-8 text-center md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
            Looking to Source from India?
          </p>

          <h3 className="mt-4 font-serif text-3xl font-semibold text-[#0B3D2E] md:text-4xl">
            Tell us what you need.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#5E665F]">
            Share your product, quantity, specifications and destination
            requirements with our export team.
          </p>

          <a
            href="#contact"
            className="group mt-7 inline-flex items-center rounded-full bg-[#0B3D2E] px-7 py-3 font-semibold text-[#F7F1E3] transition-colors hover:bg-[#06291F]"
          >
            Send Your Requirement
            <ArrowRight
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UKMarket;
