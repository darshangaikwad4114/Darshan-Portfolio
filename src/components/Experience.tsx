import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import MotionCard from "./MotionCard";

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

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gray-50 dark:bg-gray-900"
      role="region"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm"
          >
            ✨ Career Journey
          </motion.span>
          <h2
            id="experience-heading"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional background and academic foundation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Work Experience */}
          <motion.div variants={cardVariants}>
            <MotionCard className="h-full w-full">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/skyi.webp"
                        alt="SKYi Technology logo"
                        className="w-12 h-12 object-contain rounded-lg bg-white p-1 shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Full Stack Developer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        SKYi Technology
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Pune, India</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>May 2024 - May 2025</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <ul className="space-y-1">
                          <li>
                            • Developing full-stack web applications using
                            React.js and Node.js
                          </li>
                          <li>
                            • Implementing responsive designs with modern CSS
                            frameworks
                          </li>
                          <li>
                            • Collaborating with cross-functional teams in agile
                            environment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    1 Year Internship
                  </span>
                </div>
              </div>
            </MotionCard>
          </motion.div>

          {/* Education */}
          <motion.div variants={cardVariants}>
            <MotionCard className="h-full w-full">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/Sppu.webp"
                        alt="SPPU Logo"
                        className="w-12 h-12 object-contain rounded-lg bg-white p-1 shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Bachelor in Computer Application (BCA)
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        Savitribai Phule Pune University (SPPU)
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Pune, India</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>2020 - 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    CGPA: 8.79
                  </div>
                </div>
              </div>
            </MotionCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
