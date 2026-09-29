import { motion } from 'framer-motion';
import { bulkOrderRequirements, bulkOrderBenefits } from '../data/bulkOrders';

const requirementRows = [];

for (let i = 0; i < bulkOrderRequirements.length; i += 2) {
  requirementRows.push(bulkOrderRequirements.slice(i, i + 2));
}

const BulkOrders = () => {
  return (
    <section id="bulk-orders" className="bg-[#EFE7D3] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
            B2B Bulk Orders
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#0B3D2E] md:text-5xl">
            Built for
            <span className="text-[#D9A441]">
              {' '}
              International B2B Requirements.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5E665F]">
            Whether you are an importer, distributor, wholesaler, restaurant,
            retailer or private-label business, share your requirements and we
            can coordinate a suitable sourcing solution.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left - B2B Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-[#0B3D2E] p-8 md:p-10"
          >
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#D9A441]/20" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                B2B Supply
              </p>

              <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#F7F1E3] md:text-4xl">
                Your Requirement.
                <br />
                <span className="text-[#D9A441]">Our Sourcing Network.</span>
              </h3>

              <p className="mt-6 leading-7 text-[#C9D3CD]">
                We work with international buyers who require commercial
                quantities, specific product specifications, customized
                packaging or ongoing supply arrangements.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {bulkOrderBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-[#DDE5DF]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D9A441] text-xs font-bold text-[#06291F]">
                      ✓
                    </span>

                    {benefit}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-9 inline-flex rounded-full bg-[#D9A441] px-7 py-3 font-semibold text-[#06291F] transition-colors hover:bg-[#E5B653]"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>

          {/* Right - Requirements */}
          {/* Right - Requirements */}
          <div className="space-y-5">
            {requirementRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-5 sm:grid-cols-2 sm:grid-rows-[auto_auto_1fr_auto]"
              >
                {row.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: (rowIndex * 2 + index) * 0.08,
                      }}
                      className="
        group grid
        overflow-hidden
        rounded-2xl
        border border-[#0B3D2E]/10
        bg-[#F7F1E3]
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
        sm:row-span-4
        sm:grid-rows-subgrid
      "
                    >
                      {/* Number + Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold tracking-[0.2em] text-[#D9A441]">
                          {item.number}
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3D2E] text-[#D9A441] transition-all duration-300 group-hover:bg-[#D9A441] group-hover:text-[#06291F]">
                          <Icon
                            size={20}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="mt-7 font-serif text-2xl font-semibold text-[#0B3D2E]">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-6 text-[#5E665F]">
                        {item.description}
                      </p>

                      {/* Decorative Line */}
                      <div className="mt-6 h-px w-8 bg-[#D9A441] transition-all duration-300 group-hover:w-16" />
                    </motion.article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Requirement Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-[#D9A441]/30 bg-[#F7F1E3] p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                Ready to Discuss?
              </p>

              <h3 className="mt-3 font-serif text-3xl font-semibold text-[#0B3D2E]">
                Send us your sourcing requirements.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-[#5E665F]">
                The more details you provide, the easier it is for our team to
                understand your requirement and coordinate the next steps.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0B3D2E] px-7 py-3 font-semibold text-[#F7F1E3] transition-colors hover:bg-[#06291F]"
            >
              Send Your Requirement
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkOrders;
