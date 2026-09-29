import { motion } from "framer-motion";
import whyTradeverse from "../data/whyTradeverse";

const WhyTradeverse = () => {
  return (
    <section
      id="why-tradeverse"
      className="relative overflow-hidden bg-[#0B3D2E] py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#D9A441]/20" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#D9A441]/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
            Why TRADEVERSE
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#F7F1E3] md:text-5xl lg:text-6xl">
            Built Around Reliability,
            <span className="text-[#D9A441]"> Quality & Trust.</span>
          </h2>

          <p className="mt-6 text-lg leading-7 text-[#DDE5DF] sm:text-lg sm:leading-8">
            International food trade requires more than sourcing products.
            We coordinate the process from supplier selection to shipment with
            a focus on dependable service and long-term business relationships.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-[#D9A441]/20 md:grid-cols-2 lg:grid-cols-3">
          {whyTradeverse.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group bg-[#0B3D2E] p-6 sm:p-8 transition-colors duration-300 hover:bg-[#06291F]"
            >
              {/* Number + Icon */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-[#D9A441]">
                  {item.number}
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9A441]/30 text-xl text-[#D9A441] transition-all duration-300 group-hover:border-[#D9A441] group-hover:bg-[#D9A441] group-hover:text-[#06291F]">
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-8 font-serif text-2xl font-semibold text-[#F7F1E3]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-[#BFCBC3]">
                {item.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-8 h-px w-10 bg-[#D9A441] transition-all duration-300 group-hover:w-20" />
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 border-t border-[#D9A441]/20 pt-10 text-center"
        >
          <p className="font-serif text-xl italic leading-8 text-[#F7F1E3] sm:text-2xl sm:leading-9 lg:text-3xl">
            "From trusted sourcing to global delivery,
            <span className="text-[#D9A441]"> we keep trade moving.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyTradeverse;