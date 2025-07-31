import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import SimpleCard from "./SimpleCard";
import { useAnalytics } from "../hooks/useAnalytics";
import { useForm, ValidationError } from "@formspree/react";

// Use the form ID provided by Formspree
const FORMSPREE_FORM_ID = "moveowzg";

const contactMethods = [
  {
    icon: <MdEmail className="w-5 h-5" />,
    title: "Email Me",
    description: "Send me an email anytime",
    value: "darshangaikwad4114@gmail.com",
    href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=darshangaikwad4114@gmail.com",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    title: "GitHub",
    description: "Check out my projects",
    value: "darshangaikwad4114",
    href: "https://github.com/darshangaikwad4114",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    title: "LinkedIn",
    description: "Let's connect professionally",
    value: "darshan-gaikwad",
    href: "https://www.linkedin.com/in/darshan-gaikwad/",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { trackEvent } = useAnalytics();

  // Use Formspree's useForm hook
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const isSubmitting = state.submitting;
  const submitSuccess = state.succeeded;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission success
  useEffect(() => {
    if (submitSuccess) {
      try {
        trackEvent("contact_form_submit", {
          success: true,
          formLength: formData.message.length,
          hasName: Boolean(formData.name),
          hasEmail: Boolean(formData.email),
          timestamp: new Date().toISOString(),
        });
      } catch (error) {
        // Prevent analytics errors from affecting form functionality
        console.error("Analytics error:", error);
      }

      // Reset form data after successful submission
      setFormData({ name: "", email: "", message: "" });

      // Show success message
      setShowSuccessMessage(true);

      // Hide success message after 4 seconds
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 4000);

      // Clean up timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [submitSuccess, formData, trackEvent]);

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4"
          >
            🤝 Let's Connect
          </motion.span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
          role="list"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              variants={cardVariants}
              className="group"
              role="listitem"
            >
              <SimpleCard className="h-full w-full p-4 flex flex-col hover:shadow-lg transition-all duration-300 text-center">
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col group-hover:scale-[1.02] transition-transform duration-300"
                >
                  <div
                    className={`w-10 h-10 ${method.iconBg} rounded-lg flex items-center justify-center mb-3 text-white shadow-lg group-hover:scale-105 transition-transform duration-300 mx-auto`}
                  >
                    {method.icon}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {method.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">
                    {method.description}
                  </p>

                  <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                    {method.value}
                  </p>
                </a>
              </SimpleCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <SimpleCard className="bg-white dark:bg-gray-800 shadow-xl">
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg">
                  <MdSend className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Full Name *
                      </label>
                      <div
                        className={`relative ${focusedField === "name" ? "ring-2 ring-blue-300 dark:ring-blue-700 rounded-lg" : ""}`}
                      >
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-3 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300 placeholder:text-gray-400"
                          placeholder="Your full name"
                          required
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Email Address *
                      </label>
                      <div
                        className={`relative ${focusedField === "email" ? "ring-2 ring-blue-300 dark:ring-blue-700 rounded-lg" : ""}`}
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-3 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300 placeholder:text-gray-400"
                          placeholder="your.email@example.com"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Your Message *
                    </label>
                    <div
                      className={`relative ${focusedField === "message" ? "ring-2 ring-blue-300 dark:ring-blue-700 rounded-lg" : ""}`}
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        className="w-full px-3 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white resize-none transition-all duration-300 placeholder:text-gray-400"
                        placeholder="Tell me about your project..."
                        required
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-600 dark:text-red-400 text-sm bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-4 rounded-xl border border-red-200/50 dark:border-red-800/20 text-center"
                    >
                      There was an error submitting the form. Please check your
                      inputs and try again.
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {showSuccessMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="text-green-600 dark:text-green-400 text-sm bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm p-4 rounded-xl border border-green-200/50 dark:border-green-800/20 text-center"
                      >
                        <div className="flex items-center justify-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="font-medium">
                            Message sent successfully! I'll get back to you
                            within 24 hours.
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 text-white font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Send message"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <MdSend className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>

              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-30 pointer-events-none rounded-xl" />
            </div>
          </SimpleCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
