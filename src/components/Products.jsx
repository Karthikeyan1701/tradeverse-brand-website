import { motion } from 'framer-motion';
import products from '../data/products';

function Products() {
  return (
    <section id="products" className="bg-[#F7F1E3] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0B3D2E]">
            Our Products
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#17221D] sm:text-5xl lg:text-6xl">
            Carefully Sourced.
            <span className="block text-[#0B3D2E]">Globally Supplied.</span>
          </h2>

          <div className="mx-auto my-6 h-px w-16 bg-[#D9A441]" />

          <p className="text-base leading-7 text-[#5E665F] sm:text-lg">
            We connect international buyers with selected food products sourced
            through reliable Indian supply networks.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group grid overflow-hidden rounded-[1.75rem] border border-[#0B3D2E]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0B3D2E]/10 md:row-span-5 md:grid-rows-subgrid"
            >
              {/* Image — Row 1 */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#06291F]/70 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-[#0B3D2E]/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7F1E3] backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5">
                  <h3 className="font-serif text-3xl font-semibold text-white">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Description — Row 2 */}
              <div className="p-7 pb-0">
                <p className="text-sm leading-6 text-[#5E665F]">
                  {product.description}
                </p>
              </div>

              {/* Product Items — Row 3 */}
              <div className="px-7 pt-6">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#17221D]"
                    >
                      <span className="mt-1 text-[#D9A441]">◆</span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note — Row 4 */}
              <div className="px-7 pt-6">
                <div className="border-t border-[#0B3D2E]/10 pt-5">
                  <p className="text-xs leading-5 text-[#5E665F]">
                    {product.note}
                  </p>
                </div>
              </div>

              {/* CTA — Row 5 */}
              <div className="px-7 pb-7 pt-6">
                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D2E]"
                >
                  {product.id === 4
                    ? 'Request a Quote'
                    : 'Discuss This Product'}

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-4xl bg-[#0B3D2E] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
              Looking for something specific?
            </p>

            <h3 className="mt-2 max-w-2xl font-serif text-2xl font-semibold text-[#F7F1E3] sm:text-3xl">
              Tell us your product and sourcing requirements.
            </h3>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D9A441] px-6 py-3.5 text-sm font-semibold text-[#12372A] transition-all duration-300 hover:bg-[#E5B653] lg:mt-0"
          >
            Request a Quote
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Products;
