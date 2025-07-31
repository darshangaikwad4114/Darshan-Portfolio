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
                          <span>May 2024 - Present</span>
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
                    Current
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

          {/* Certifications */}
          <motion.div variants={cardVariants}>
            <MotionCard className="h-full w-full">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L24 6.857v10.286L12 24 0 17.143V6.857L12 0zm-2.4 17.143l9.6-9.6-1.8-1.8-7.8 7.8-3.6-3.6-1.8 1.8 5.4 5.4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Certifications
                  </h3>
                  <div className="flex items-center gap-2 ml-auto">
                    <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                      Completed
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href="https://www.udemy.com/certificate/UC-example-react/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-200 group"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      React.js Complete Course
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        From Udemy
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.udemy.com/certificate/UC-example-javascript/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-200 group"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      JavaScript Algorithms & Data Structures
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        From Udemy
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.udemy.com/certificate/UC-example-frontend/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-200 group"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      Frontend Development Libraries
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        From Udemy
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
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
