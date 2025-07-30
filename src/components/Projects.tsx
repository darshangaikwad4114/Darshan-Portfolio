import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import SimpleCard from "./SimpleCard";
import OptimizedImage from "./OptimizedImage";

// Function to generate consistent colors based on tech name
const getTechColor = (techName: string) => {
  // Simple hash function to generate a number from string
  const hash = techName.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Use predefined color palette based on hash
  const colorPalette = [
    {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-300 dark:border-blue-700",
    },
    {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-300 dark:border-green-700",
    },
    {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-300 dark:border-purple-700",
    },
    {
      bg: "bg-amber-100 dark:bg-amber-900/30",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-300 dark:border-amber-700",
    },
    {
      bg: "bg-pink-100 dark:bg-pink-900/30",
      text: "text-pink-600 dark:text-pink-400",
      border: "border-pink-300 dark:border-pink-700",
    },
    {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-300 dark:border-indigo-700",
    },
    {
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      text: "text-cyan-600 dark:text-cyan-400",
      border: "border-cyan-300 dark:border-cyan-700",
    },
  ];

  return colorPalette[Math.abs(hash) % colorPalette.length];
};

const projects = [
  {
    title: "Cryptocurrency Price Tracker",
    description:
      "Built a dashboard that fetches live cryptocurrency data with auto-refresh every 60 seconds using CoinGecko API. Integrated filters for market cap, price range, and volume; sortable in both ascending and descending order. Implemented interactive historical price charts with multiple timeframes using Chart.js. Added a categorized news feed using CryptoCompare API with dynamic data handling and fallback logic. Applied caching, code splitting, and virtualization to reduce load time and support large data sets.",
    image: "/images/CryptoTracker.webp",
    techStack: [
      "React.js",
      "Axios",
      "Chart.js",
      "CoinGecko API",
      "CryptoCompare API",
      "Vite",
      "CSS3",
    ],
    links: {
      github:
        "https://github.com/darshangaikwad4114/Cryptocurrency-Price-Tracker",
      live: "https://darshan-cryptocurrency-price-tracker.netlify.app/",
    },
  },
  {
    title: "QuickCart E-Commerce App",
    description:
      "Created an online shopping platform that displays real-time product listings through FakeStoreAPI. Implemented advanced filters for category, price, and availability along with cart management functionality. Managed global state using Context API and hooks for consistent user data across components. Structured app using reusable components for product listing, filtering, and checkout. Integrated client-side routing with React Router and styled the interface with Tailwind CSS for cross-device support.",
    image: "/images/QuickCart.webp",
    techStack: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "FakeStoreAPI",
      "React Router",
      "Context API",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/ecommerce-app",
      live: "https://quick-cart-ecommerce-shop.netlify.app/",
    },
  },
  {
    title: "FilmFinder Movie App",
    description:
      "Developed a movie search tool that retrieves and displays real-time data from OMDB API. Enabled categorized browsing and a local favorites list with state handled via useState and useEffect. Applied lazy loading, virtualization, and memoization techniques to improve render performance. Ensured accessibility through ARIA roles, keyboard navigation, and semantic HTML structure. Used custom hooks for API logic and error handling, and implemented client-side focus management.",
    image: "/images/FlimFinder.webp",
    techStack: [
      "React.js",
      "Axios",
      "OMDB API",
      "Bootstrap 5",
      "CSS Modules",
      "React Hooks",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/Movie-app",
      live: "https://darshan-movie-app.netlify.app/",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm"
          >
            🚀 Proof of Work
          </motion.span>
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
              <SimpleCard className="h-full w-full p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4 group">
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </a>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => {
                        const colors = getTechColor(tech);
                        return (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 ${colors.bg} ${colors.text} rounded-full text-xs border ${colors.border} font-medium`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-ring rounded px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      <span className="text-xs font-medium">Source Code</span>
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-xs flex items-center hover:underline focus-ring rounded font-medium px-3 py-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <span>View Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>
              </SimpleCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/darshangaikwad4114?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 font-medium"
            whileHover={{
              scale: 1.02,
            }}
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
