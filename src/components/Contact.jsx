import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo, contactFields } from "../data/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    destination: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handles changes in all input fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Enquiry submitted:", formData);

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#06291F] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A441]">
            Contact Us
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#F7F1E3] md:text-5xl">
            Let's Discuss Your
            <span className="text-[#D9A441]">
              {" "}Export Requirement.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#C9D3CD]">
            Tell us what you are looking to source from India and our team can
            understand your requirements and coordinate the next steps.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl bg-[#0B3D2E] p-8 md:p-10"
          >
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A441]">
                Business Enquiries
              </p>

              <h3 className="mt-5 font-serif text-3xl font-semibold text-[#F7F1E3]">
                TRADEVERSE
                <br />
                <span className="text-[#D9A441]">
                  Import & Exports
                </span>
              </h3>

              <p className="mt-6 leading-7 text-[#C9D3CD]">
                Connect with our team for product sourcing, bulk orders,
                customized requirements and international export enquiries.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/30 text-[#D9A441]">
                    ◎
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8FA198]">
                      Location
                    </p>

                    <p className="mt-1 text-[#F7F1E3]">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/30 text-[#D9A441]">
                    ☎
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8FA198]">
                      WhatsApp / Phone
                    </p>

                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-[#F7F1E3] transition-colors hover:text-[#D9A441]"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                {contactInfo.email && (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/30 text-[#D9A441]">
                      @
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#8FA198]">
                        Email
                      </p>

                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-1 block text-[#F7F1E3] transition-colors hover:text-[#D9A441]"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917200270565"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex items-center justify-center rounded-full border border-[#D9A441]/40 px-6 py-3 font-semibold text-[#D9A441] transition-colors hover:bg-[#D9A441] hover:text-[#06291F]"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#F7F1E3] p-8 md:p-10"
          >

            {!submitted ? (
              <form onSubmit={handleSubmit}>

                <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">

                  {contactFields.map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="mb-2 block text-sm font-semibold text-[#17221D]"
                      >
                        {field.label}
                        {field.required && (
                          <span className="ml-1 text-[#D9A441]">
                            *
                          </span>
                        )}
                      </label>

                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={formData[field.id]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full rounded-xl border border-[#0B3D2E]/15 bg-white px-4 py-3.5 text-[#17221D] outline-none transition-all placeholder:text-[#8A918C] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/20"
                      />
                    </div>
                  ))}

                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#17221D]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product, specifications, packaging, shipment frequency or any other requirements."
                    className="w-full resize-none rounded-xl border border-[#0B3D2E]/15 bg-white px-4 py-3.5 text-[#17221D] outline-none transition-all placeholder:text-[#8A918C] focus:border-[#D9A441] focus:ring-2 focus:ring-[#D9A441]/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0B3D2E] px-7 py-4 font-semibold text-[#F7F1E3] transition-colors hover:bg-[#06291F]"
                >
                  Submit Enquiry
                  <span className="ml-2">
                    →
                  </span>
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#6B746E]">
                  By submitting this enquiry, you are providing your contact
                  details for the purpose of responding to your business
                  requirement.
                </p>

              </form>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-125 flex-col items-center justify-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0B3D2E] text-3xl text-[#D9A441]">
                  ✓
                </div>

                <h3 className="mt-8 font-serif text-3xl font-semibold text-[#0B3D2E]">
                  Enquiry Received
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#5E665F]">
                  Thank you for sharing your requirements. Our team will
                  review the information and coordinate the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-semibold text-[#0B3D2E] transition-colors hover:text-[#D9A441]"
                >
                  Submit Another Enquiry →
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;