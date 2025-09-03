import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";
import MotionCard from "./MotionCard";

const visionItems = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Solution Architecture",
    description:
      "Evolving from developer to solution architect, designing scalable systems that solve complex business problems with emerging technologies.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation Leadership",
    description:
      "Leading digital transformation initiatives by integrating AI/ML, blockchain, and cloud-native technologies into real-world applications.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tech Entrepreneurship",
    description:
      "Building sustainable tech products that create value for users while contributing to open source ecosystems and mentoring fellow developers.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Global Impact",
    description:
      "Leveraging technology to create solutions that make a positive impact on communities, whether through accessible web applications or educational initiatives.",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
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

const Vision = () => {
  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-pink-50 dark:from-gray-900 dark:via-indigo-950/20 dark:to-purple-950/30 relative overflow-hidden"
      role="region"
      aria-labelledby="vision-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm"
          >
            🚀 Future Vision
          </motion.span>
          <h2
            id="vision-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What I Have the Potential to Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond current expertise lies unlimited potential. Here's where I'm
            heading next - combining technical excellence with innovative
            thinking to create meaningful impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {visionItems.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <MotionCard className="h-full w-full group">
                <div
                  className={`h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.gradient} group-hover:border-purple-200 dark:group-hover:border-purple-700`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-16 h-16 ${item.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Turn Potential into Reality
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's collaborate and build something extraordinary together. The
              future of technology is waiting to be created.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Target className="w-5 h-5 mr-2" />
              Let's Build the Future
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;