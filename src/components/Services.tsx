import { motion } from "framer-motion";
import { Code2, Smartphone, Search, Bug, Zap, Shield } from "lucide-react";
import MotionCard from "./MotionCard";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Website Design & Development",
    description:
      "Creating bespoke websites tailored to your unique needs using cutting-edge technologies like React, Next.js, and modern CSS frameworks.",
    spotlightColor: "rgba(59, 130, 246, 0.15)",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    category: "Development",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Fully Responsive & Mobile-First Design",
    description:
      "Crafting pixel-perfect responsive designs that provide exceptional user experience across all devices, from mobile to desktop.",
    spotlightColor: "rgba(139, 92, 246, 0.15)",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    category: "Design",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO & Performance Optimization",
    description:
      "Implementing advanced SEO strategies and performance optimizations to boost your search rankings and user engagement.",
    spotlightColor: "rgba(34, 197, 94, 0.15)",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    category: "Optimization",
  },
  {
    icon: <Bug className="w-6 h-6" />,
    title: "Maintenance & Quality Assurance",
    description:
      "Comprehensive testing, debugging, and ongoing maintenance to ensure your website runs flawlessly 24/7.",
    spotlightColor: "rgba(251, 146, 60, 0.15)",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    category: "Support",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning-Fast Performance",
    description:
      "Advanced optimization techniques including lazy loading, code splitting, and CDN integration for blazing-fast websites.",
    spotlightColor: "rgba(245, 158, 11, 0.15)",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
    category: "Performance",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Compliance",
    description:
      "Implementing industry-standard security measures, GDPR compliance, and best practices to protect your digital assets.",
    spotlightColor: "rgba(168, 85, 247, 0.15)",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    category: "Security",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
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

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden"
      role="region"
      aria-labelledby="services-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-20" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm"
          >
            💼 What I Offer
          </motion.span>
          <h2
            id="services-heading"
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6"
          >
            Freelance Services
          </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized web development services for impactful digital experiences. I deliver{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              exceptional results
            </span>{" "}
            using modern technologies and SEO best practices.
            </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group"
              role="listitem"
            >
              <MotionCard
                className="h-full w-full"
                hoverRotationDegrees={1}
                hoverScale={1.02}
              >
                <div className="h-full w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col">
                  {/* Category badge */}
                  <div className="flex justify-end mb-4">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                      {service.category}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-4 text-white`}>
                      {service.icon}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>

                    <div className="w-8 h-0.5 bg-blue-500 mb-3" />

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MotionCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
