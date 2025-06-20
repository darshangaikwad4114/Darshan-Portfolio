import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import MotionCard from "./MotionCard";

// Function to generate consistent colors based on tech name
const getTechColor = (techName: string) => {
  // Simple hash function to generate a number from string
  const hash = techName.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Use predefined color palette based on hash
  const colorPalette = [
    {
      bg: "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
      text: "text-blue-700 dark:text-blue-300",
      border: "border-blue-300/50 dark:border-blue-600/50",
    },
    {
      bg: "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30",
      text: "text-green-700 dark:text-green-300",
      border: "border-green-300/50 dark:border-green-600/50",
    },
    {
      bg: "bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30",
      text: "text-purple-700 dark:text-purple-300",
      border: "border-purple-300/50 dark:border-purple-600/50",
    },
    {
      bg: "bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30",
      text: "text-amber-700 dark:text-amber-300",
      border: "border-amber-300/50 dark:border-amber-600/50",
    },
    {
      bg: "bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30",
      text: "text-pink-700 dark:text-pink-300",
      border: "border-pink-300/50 dark:border-pink-600/50",
    },
    {
      bg: "bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30",
      text: "text-indigo-700 dark:text-indigo-300",
      border: "border-indigo-300/50 dark:border-indigo-600/50",
    },
    {
      bg: "bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30",
      text: "text-cyan-700 dark:text-cyan-300",
      border: "border-cyan-300/50 dark:border-cyan-600/50",
    },
  ];

  return colorPalette[Math.abs(hash) % colorPalette.length];
};

const projects = [
  {
    title: "QuickCart E-Commerce App",
    category: "E-Commerce",
    description:
      "A comprehensive online shopping platform featuring real-time product listings, advanced filtering, and seamless cart management. Built with modern React patterns and optimized for performance across all devices.",
    shortDescription:
      "Modern e-commerce platform with real-time product listings and advanced filtering capabilities.",
    image: "/images/QuickCart.png",
    techStack: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "FakeStoreAPI",
      "React Router",
      "Context API",
    ],
    achievements: [
      "Real-time product listings via FakeStoreAPI",
      "Advanced filters for category, price, and availability",
      "Cart management with persistent state",
      "Global state with Context API and hooks",
      "Reusable components for listing, filtering, checkout",
      "Client-side routing with React Router",
      "Responsive UI with Tailwind CSS",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/ecommerce-app",
      live: "https://quick-cart-ecommerce-shop.netlify.app/",
    },
    spotlightColor: "rgba(59, 130, 246, 0.15)",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "FilmFinder Movie App",
    category: "Entertainment",
    description:
      "An intuitive movie discovery platform that leverages OMDB API for real-time movie data. Features advanced search capabilities, categorized browsing, and a personalized favorites system with optimized performance.",
    shortDescription:
      "Movie discovery platform with real-time search and personalized favorites system.",
    image: "/images/FlimFinder.png",
    techStack: [
      "React.js",
      "Axios",
      "OMDB API",
      "Bootstrap 5",
      "CSS Modules",
      "React Hooks",
    ],
    achievements: [
      "Real-time movie search via OMDB API",
      "Categorized browsing and local favorites list",
      "State management with useState and useEffect",
      "Performance: lazy loading, virtualization, memoization",
      "Accessibility: ARIA roles, keyboard navigation, semantic HTML",
      "Custom hooks for API logic and error handling",
      "Client-side focus management",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/Movie-app",
      live: "https://darshan-movie-app.netlify.app/",
    },
    spotlightColor: "rgba(139, 92, 246, 0.15)",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Cryptocurrency Price Tracker",
    category: "Finance",
    description:
      "A sophisticated dashboard for tracking cryptocurrency prices with live data updates, interactive charts, and comprehensive market analysis. Features real-time news integration and advanced data visualization.",
    shortDescription:
      "Real-time crypto tracking dashboard with interactive charts and market analysis.",
    image: "/images/CryptoTracker.png",
    techStack: [
      "React.js",
      "Axios",
      "Chart.js",
      "CoinGecko API",
      "CryptoCompare API",
      "Vite",
      "CSS3",
    ],
    achievements: [
      "Live crypto data with 60s auto-refresh (CoinGecko API)",
      "Filters for market cap, price, volume; sortable ascending/descending",
      "Interactive historical charts (multiple timeframes, Chart.js)",
      "Categorized news feed (CryptoCompare API) with fallback logic",
      "Performance: caching, code splitting, virtualization",
      "Supports large data sets with optimized load time",
    ],
    links: {
      github:
        "https://github.com/darshangaikwad4114/Cryptocurrency-Price-Tracker",
      live: "https://darshan-cryptocurrency-price-tracker.netlify.app/",
    },
    spotlightColor: "rgba(34, 197, 94, 0.15)",
    gradient: "from-green-500/10 to-emerald-500/10",
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 relative overflow-hidden"
      role="region"
      aria-labelledby="projects-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-20" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            Portfolio Showcase
          </motion.span>
          <h2
            id="projects-heading"
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing my expertise through innovative web applications built
            with modern technologies. Each project demonstrates{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              problem-solving skills
            </span>{" "}
            and attention to detail.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          role="list"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group"
              role="listitem"
            >
              <MotionCard
                className="h-full w-full"
                hoverRotationDegrees={2}
                hoverScale={1.02}
              >
                <div
                  className={`h-full w-full bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 ${project.gradient} relative overflow-hidden rounded-2xl`}
                >
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl group">
                    <OptimizedImage
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      priority={index === 0}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 dark:bg-black/95 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-lg">
                      {project.category}
                    </div>                    {/* Hover overlay with actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/30 p-3 rounded-full hover:bg-white/50 transition-colors duration-200 z-10"
                          aria-label={`View ${project.title} demo`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/30 p-3 rounded-full hover:bg-white/50 transition-colors duration-200 z-10"
                          aria-label={`View ${project.title} source code`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>

                      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:w-24 transition-all duration-500" />

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => {
                          const colors = getTechColor(tech);
                          return (
                            <span
                              key={tech}
                              className={`px-3 py-1.5 ${colors.bg} ${colors.text} rounded-full text-xs border ${colors.border} font-medium transition-transform duration-200 hover:scale-105`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6 flex-1">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                        <span className="w-4 h-4 mr-2 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full" />
                        </span>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements
                          .slice(0, 3)
                          .map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-xs text-gray-600 dark:text-gray-300 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                      </ul>
                    </div>                    {/* CTA */}
                    <div className="mt-auto pt-6 border-t border-gray-100/50 dark:border-gray-800/50">
                      <div className="flex items-center justify-end">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </a>
                      </div>
                    </div>{/* Removed spotlight effect overlay */}
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

export default Projects;
