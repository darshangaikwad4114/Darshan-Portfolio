import { motion } from "framer-motion";
import { Code2, Globe, Server, Database } from "lucide-react";
import MotionCard from "./MotionCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      stiffness: 120,
      damping: 15,
      duration: 0.5,
    },
  },
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    description: "Core programming languages and markup technologies",
    gradient: "from-blue-500/10 to-cyan-500/10",
    spotlightColor: "rgba(59, 130, 246, 0.15)",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "SASS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Markdown",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
      },
    ],
  },
  {
    title: "Frontend Libraries and Frameworks",
    icon: <Globe className="w-6 h-6" />,
    description: "Modern frontend frameworks and UI libraries",
    gradient: "from-green-500/10 to-emerald-500/10",
    spotlightColor: "rgba(34, 197, 94, 0.15)",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React Router",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Framer Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    title: "Backend Databases and ORMs",
    icon: <Database className="w-6 h-6" />,
    description: "Server-side technologies and database management",
    gradient: "from-purple-500/10 to-pink-500/10",
    spotlightColor: "rgba(139, 92, 246, 0.15)",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      {
        name: "Socket.io",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "Dev Tools and Deployment",
    icon: <Server className="w-6 h-6" />,
    description: "Development tools and deployment platforms",
    gradient: "from-orange-500/10 to-red-500/10",
    spotlightColor: "rgba(251, 146, 60, 0.15)",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "NPM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Webpack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden"
      role="region"
      aria-labelledby="skills-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-20" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

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
            Technical Arsenal
          </motion.span>
          <h2
            id="skills-heading"
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6"
          >
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks to
            build{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              exceptional digital experiences
            </span>{" "}
            from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          role="list"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
              role="listitem"
            >
              <MotionCard
                className="h-full w-full"
                hoverRotationDegrees={1}
                hoverScale={1.02}
              >
                <div
                  className={`h-full w-full bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 ${category.gradient} relative overflow-hidden rounded-2xl p-8`}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 group-hover:w-32 transition-all duration-500" />
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/90 rounded-full border border-gray-300/50 dark:border-gray-600/30 hover:bg-white dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm backdrop-blur-sm relative overflow-hidden group-hover/skill:border-transparent">
                          {/* Animated border shine effect */}
                          <div className="absolute inset-0 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow p-[1px]">
                              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800"></div>
                            </div>
                          </div>
                          
                          <div className="w-5 h-5 flex items-center justify-center mr-2 group-hover/skill:scale-110 transition-transform duration-300 relative z-10">
                            <img
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              className="w-5 h-5 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm whitespace-nowrap relative z-10">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
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

export default Skills;
