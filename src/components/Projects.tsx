import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import OptimizedImage from "./OptimizedImage";
import MotionCard from "./MotionCard";

const projects = [
  {
    title: "QuickCart E-Commerce App",
    description:
      "Full-stack e-commerce solution with real-time product data, advanced filtering, and a feature-rich shopping cart.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    techStack: ["React.js", "Node.js", "Tailwind CSS", "FakeStoreAPI"],
    achievements: [
      "Improved page load efficiency by 40%",
      "Reduced server requests by 60%",
      "Increased checkout completion rates by 20%",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/ecommerce-app",
      live: "https://quick-cart-ecommerce-shop.netlify.app/",
    },
    spotlightColor: "rgba(26, 171, 255, 0.2)",
  },
  {
    title: "FlimFinder Movie App",
    description:
      "Movie discovery platform with real-time search, local storage for favorites, and a refined UI.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    techStack: ["React", "Node.js", "Bootstrap", "OMDB API"],
    achievements: [
      "Enhanced performance by 40% using lazy loading",
      "Implemented code splitting for optimal loading",
      "Ensured WCAG-compliant accessibility",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/Movie-app",
      live: "https://darshan-movie-app.netlify.app/",
    },
    spotlightColor: "rgba(100, 121, 167, 0.2)",
  },
  {
    title: "Crypto Price Tracker App",
    description:
      "Real-time cryptocurrency tracking tool with advanced filtering and automated data refresh.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    techStack: ["React.js", "Axios", "CSS3", "Coin Gecko API"],
    achievements: [
      "Ensured 100% cross-device compatibility",
      "Introduced color-coded market indicators",
      "Implemented real-time price updates",
    ],
    links: {
      github:
        "https://github.com/darshangaikwad4114/Cryptocurrency-Price-Tracker",
      live: "https://darshan-cryptocurrency-price-tracker.netlify.app/",
    },
    spotlightColor: "rgba(70, 199, 255, 0.2)",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <MotionCard className="h-full w-full">
                <SpotlightCard
                  className="h-full w-full bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-700 flex flex-col hover:shadow-xl transition-shadow duration-300"
                  spotlightColor={
                    project.spotlightColor || "rgba(26, 171, 255, 0.15)"
                  }
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                    <OptimizedImage
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
                      priority={index === 0}
                      loading="lazy"
                      onError={() => {
                        // fallback image logic if needed
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-gray-800 p-2 rounded-full transform scale-75 hover:scale-100 transition-all duration-200"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start text-xs text-gray-600 dark:text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 mt-1 mr-1.5 bg-primary-600 dark:bg-primary-400 rounded-full flex-shrink-0"></span>
                            <span className="line-clamp-2">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex justify-between items-center">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-ring rounded"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        <span className="text-xs">Source Code</span>
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 text-xs flex items-center hover:underline focus-ring rounded"
                      >
                        <span>View Demo</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </MotionCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/darshangaikwad4114?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 font-medium animated-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
