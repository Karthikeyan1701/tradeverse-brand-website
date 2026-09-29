import { motion } from 'framer-motion';
import { exportProcess, tradeTerms } from '../data/logistics';
import { ArrowRight } from 'lucide-react';

const Logistics = () => {
  return (
    <section
      id="logistics"
      className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-[#D9A441]/10" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full border border-[#D9A441]/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
            Export & Logistics
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-[1.08] text-[#F7F1E3] sm:text-5xl lg:text-6xl">
            From India
            <span className="text-[#D9A441]"> to Global Markets.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-[#C9D3CD] sm:text-lg sm:leading-8">
            We coordinate the export journey from initial buyer requirements
            through sourcing, documentation and shipment arrangements.
          </p>
        </motion.div>

        {/* Export Process */}
        <div className="relative mt-20">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-[#D9A441]/30 xl:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 xl:grid-rows-[auto_auto_1fr]">
            {exportProcess.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative text-center xl:row-span-3 xl:grid-rows-subgrid"
              >
                {/* Step Number */}
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D9A441] bg-[#0B3D2E] font-semibold text-[#D9A441]">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="mt-6 font-serif text-xl font-semibold text-[#F7F1E3]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3 text-sm leading-6 text-[#AEBDB4]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Logistics Content */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {/* India → UK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-[#06291F] p-8 md:p-12"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full border border-[#D9A441]/10" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
              Global Trade
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-[#F7F1E3] md:text-4xl">
              India
              <span className="mx-3 text-[#D9A441]">→</span>
              United Kingdom
            </h3>

            <p className="mt-5 leading-7 text-[#BFCBC3]">
              We support international buyers sourcing food products from India,
              with a particular focus on connecting Indian suppliers with the
              United Kingdom market.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#D9A441]/20 p-4">
                <p className="text-xs uppercase tracking-wider text-[#AEBDB4]">
                  Origin
                </p>

                <p className="mt-2 font-semibold text-[#F7F1E3]">India</p>
              </div>

              <div className="rounded-xl border border-[#D9A441]/20 p-4">
                <p className="text-xs uppercase tracking-wider text-[#AEBDB4]">
                  Focus Market
                </p>

                <p className="mt-2 font-semibold text-[#F7F1E3]">
                  United Kingdom
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trade Terms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#F7F1E3] p-8 md:p-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
              Flexible Trade Terms
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-[#0B3D2E] md:text-4xl">
              Trade Terms Based on Your Requirements
            </h3>

            <p className="mt-5 leading-7 text-[#5E665F]">
              We can discuss shipment and commercial arrangements based on buyer
              requirements, product specifications, destination and mutually
              agreed terms.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tradeTerms.map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-[#0B3D2E]/15 bg-white px-5 py-3 text-sm font-semibold text-[#0B3D2E]"
                >
                  {term}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B3D2E] transition-colors hover:text-[#D9A441]"
            >
              Discuss Your Shipment
              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-[#D9A441]/20 pt-10 text-center"
        >
          <p className="font-serif text-2xl text-[#F7F1E3] md:text-3xl">
            Have an export requirement?
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-[#D9A441] px-7 py-3 font-semibold text-[#06291F] transition-colors hover:bg-[#E5B653]"
          >
            Send Your Requirement
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Logistics;
