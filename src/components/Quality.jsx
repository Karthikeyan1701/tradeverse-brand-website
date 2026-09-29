import { motion } from 'framer-motion';
import qualityPractices from '../data/quality';

const Quality = () => {
  return (
    <section id="quality" className="bg-[#F7F1E3] py-20 sm:py-24 lg:py-32">
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
            Quality & Food Safety
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-[1.08] text-[#0B3D2E] sm:text-5xl lg:text-6xl">
            Quality at Every
            <span className="text-[#D9A441]"> Stage.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5E665F] sm:text-lg sm:leading-8">
            We coordinate sourcing, product specifications, packaging,
            documentation and shipment requirements with careful attention
            throughout the export process.
          </p>
        </motion.div>

        {/* Quality Practices */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto]">
          {qualityPractices.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group grid rounded-2xl border border-[#D9A441]/20 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:row-span-4 lg:grid-rows-subgrid"
            >
              {/* Number & Icon */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-[#D9A441]">
                  {item.number}
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F1E3] text-xl text-[#0B3D2E] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-[#D9A441]">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-8 font-serif text-2xl font-semibold text-[#0B3D2E]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-[#5E665F]">
                {item.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-px w-10 bg-[#D9A441] transition-all duration-300 group-hover:w-20" />
            </motion.article>
          ))}
        </div>

        {/* Export Compliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl bg-[#0B3D2E]"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Main Content */}
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                International Standards
              </p>

              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#F7F1E3] md:text-4xl">
                Prepared for International Trade
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-[#C9D3CD]">
                We work to meet applicable product, packaging, documentation and
                destination-market requirements for each shipment. Exact
                requirements may vary depending on the product, destination,
                buyer specifications and applicable regulations.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D9A441] px-6 py-3 font-semibold text-[#06291F] transition-colors hover:bg-[#E5B653]"
              >
                Discuss Your Requirements
                <span>→</span>
              </a>
            </div>

            {/* Visual Side */}
            <div className="relative min-h-70 overflow-hidden bg-[#06291F] sm:min-h-80 lg:min-h-full">
              <img
                src="/images/quality-food.jpg"
                alt="Quality inspection and food export preparation"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-[#06291F]/50" />

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="rounded-full border border-[#D9A441]/40 p-5 sm:p-8">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D9A441]/60 text-center sm:h-32 sm:w-32">
                    <div>
                      <span className="block text-3xl text-[#D9A441]">✦</span>

                      <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F1E3]">
                        Quality
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quality;
