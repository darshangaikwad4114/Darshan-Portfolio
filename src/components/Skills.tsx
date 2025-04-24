import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "PostCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg" },
      { name: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    ],
  },
  {
    title: "Database & Deployment",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
    ],
  },
  {
    title: "Tools & Utilities",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      { name: "Babel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];

const Skills = React.memo(() => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mb-10">
            A comprehensive overview of my technical capabilities
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 
                            px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700 
                            shadow-sm"
                  >
                    <div className="w-5 h-5 flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/20?text=Icon";
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
