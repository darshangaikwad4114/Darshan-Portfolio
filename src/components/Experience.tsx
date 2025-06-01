import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
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
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden"
      role="region"
      aria-labelledby="experience-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

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
            My Journey
          </motion.span>
          <h2
            id="experience-heading"
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6"
          >
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My professional journey and academic background that shaped my
            expertise in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              full-stack development
            </span>{" "}
            and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Work Experience */}
          <motion.div variants={cardVariants} className="group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <MotionCard
              className="h-full w-full"
              hoverRotationDegrees={1}
              hoverScale={1.01}
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center mr-4 border border-gray-200/50 dark:border-gray-700/50">
                      <img
                        src="/images/skyi.png"
                        alt="SKYi Technology logo"
                        className="h-10 w-auto"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Full Stack Developer
                      </h4>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        SKYi Technology
                      </p>
                      <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Pune, India</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>May 2024 - Present</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Current
                  </div>
                </div>

                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    "Engineered a scalable e-commerce module using MERN stack and Next.js, improving product listing efficiency and real-time inventory tracking, supporting 1,000+ users.",
                    "Developed a secure, role-based admin panel with advanced analytics, enabling efficient CRUD operations and live KPI monitoring; reduced manual reporting by 70%.",
                    "Conducted regular performance audits, implemented version control (Git), and applied security patches on AWS hosted applications to ensure high availability and code integrity.",
                    "Collaborated cross-functionally to deliver a high-performing solar energy and e-commerce platform, ensuring security compliance and seamless payment gateway.",
                  ].map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start p-4 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionCard>
          </motion.div>

          {/* Education */}
          <motion.div variants={cardVariants} className="group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <MotionCard
              className="h-full w-full"
              hoverRotationDegrees={1}
              hoverScale={1.01}
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 relative overflow-hidden rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Bachelor in Computer Application (BCA)
                    </h4>
                    <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      Savitribai Phule Pune University (SPPU)
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-4">
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
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-semibold shadow-lg">
                    CGPA: 8.79/10.00
                  </div>
                </div>

                <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mb-6" />

                <div>
                  <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    Relevant Coursework
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "Object-Oriented Programming",
                      "Database Management System",
                      "Data Structures and Algorithms",
                      "Operating Systems",
                      "Computer Networks",
                      "Software Engineering",
                    ].map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center p-3 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-200/30 dark:border-purple-700/30 hover:bg-purple-100/50 dark:hover:bg-purple-800/30 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 mr-2 bg-purple-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionCard>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={cardVariants} className="group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <MotionCard
              className="h-full w-full"
              hoverRotationDegrees={1}
              hoverScale={1.01}
            >
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20 transition-all duration-500 relative overflow-hidden rounded-2xl p-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "React Course",
                      provider: "Udemy",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                      link: "https://www.udemy.com/certificate/UC-f10aa1a2-50f5-4aa9-85d3-cd3a9fe635b7/",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      name: "JavaScript Mastery Course",
                      provider: "Udemy",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                      link: "https://www.udemy.com/certificate/UC-3e05e730-c46e-47a8-b6aa-907487249c32/",
                      color: "from-yellow-400 to-orange-400",
                    },
                    {
                      name: "NodeJS Masterclass",
                      provider: "Udemy",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                      link: "https://www.udemy.com/certificate/UC-e2d3d266-89d8-41d8-ad89-865e6f733422/",
                      color: "from-green-400 to-emerald-400",
                    },
                  ].map((cert, idx) => (
                    <motion.div
                      key={idx}
                      className="group/cert p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover/cert:scale-110 transition-transform duration-300`}
                        >
                          <img
                            src={cert.icon}
                            alt={`${cert.name} icon`}
                            className="w-8 h-8"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {cert.provider}
                          </p>
                        </div>
                      </div>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 text-sm font-medium hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 group/link"
                        whileHover={{ x: 3 }}
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </motion.a>
                    </motion.div>
                  ))}
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
