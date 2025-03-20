import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'QuickCart E-Commerce App',
    description: 'Full-stack e-commerce solution with real-time product data, advanced filtering, and a feature-rich shopping cart.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'FakeStoreAPI'],
    achievements: [
      'Improved page load efficiency by 40%',
      'Reduced server requests by 60%',
      'Increased checkout completion rates by 20%',
    ],
    links: {
      github: 'https://github.com/yourusername/quickcart',
      live: 'https://quickcart-demo.vercel.app',
    },
  },
  {
    title: 'FlimFinder Movie App',
    description: 'Movie discovery platform with real-time search, local storage for favorites, and a refined UI.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'Node.js', 'Bootstrap', 'OMDB API'],
    achievements: [
      'Enhanced performance by 40% using lazy loading',
      'Implemented code splitting for optimal loading',
      'Ensured WCAG-compliant accessibility',
    ],
    links: {
      github: 'https://github.com/yourusername/filmfinder',
      live: 'https://filmfinder-demo.vercel.app',
    },
  },
  {
    title: 'Crypto Price Tracker App',
    description: 'Real-time cryptocurrency tracking tool with advanced filtering and automated data refresh.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Axios', 'CSS3', 'Coin Gecko API'],
    achievements: [
      'Ensured 100% cross-device compatibility',
      'Introduced color-coded market indicators',
      'Implemented real-time price updates',
    ],
    links: {
      github: 'https://github.com/yourusername/crypto-tracker',
      live: 'https://crypto-tracker-demo.vercel.app',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Showcasing my best work and technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 mt-1.5 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;