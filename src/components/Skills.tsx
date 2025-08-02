import { motion } from "framer-motion";
import { Code2, Globe, Server, Database } from "lucide-react";
import MotionCard from "./MotionCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
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
    title: "Frontend Frameworks",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Framer Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
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
        name: "Styled Components",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-6 h-6" />,
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
        name: "Axios",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
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
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
    ],
  },
  {
    title: "Dev Tools & Deployment",
    icon: <Server className="w-6 h-6" />,
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    skills: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Webpack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
      },
      {
        name: "Babel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden"
      role="region"
      aria-labelledby="skills-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-10" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
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
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm"
          >
            ⚡ Technical Arsenal
          </motion.span>
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern technologies and frameworks I use to build digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          role="list"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
              role="listitem"
            >
              <MotionCard className="h-full w-full">
                <div className="h-full w-full bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 flex flex-col hover:shadow-lg transition-all duration-300 relative overflow-hidden rounded-xl p-5">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 ${category.iconBg} rounded-lg flex items-center justify-center mr-3 text-white shadow-md transition-transform duration-200`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-200">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: skillIndex * 0.02,
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center px-3 py-1.5 bg-white/80 dark:bg-gray-800/90 rounded-full border border-gray-300/50 dark:border-gray-600/30 hover:bg-white dark:hover:bg-gray-700 hover:scale-102 transition-all duration-200 shadow-sm backdrop-blur-sm">
                          <div className="w-4 h-4 flex items-center justify-center mr-2 transition-transform duration-200">
                            <img
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              className="w-4 h-4 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm whitespace-nowrap">
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
