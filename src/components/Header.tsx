import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useTheme } from "../contexts/ThemeContextDefinition";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Use useMemo to avoid recreating navItems on each render
  const navItems = useMemo(
    () => [
      { name: "About", to: "about" },
      { name: "Skills", to: "skills" },
      { name: "Experience", to: "experience" },
      { name: "Projects", to: "projects" },
      { name: "Services", to: "services" },
      { name: "Contact", to: "contact" },
    ],
    [],
  ); // Empty dependency array means this will only be created once

  useEffect(() => {
    // Add scroll event listener to detect active section and header scroll state
    const handleScroll = () => {
      // Update header shadow based on scroll position
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => item.to);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    // Initial check to set active section on page load
    setTimeout(handleScroll, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]); // Now navItems won't change between renders

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus-ring"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Desktop navigation */}
          <div
            className="hidden md:flex items-center space-x-2"
            role="navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.to
                    ? "text-primary-600 dark:text-primary-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                } cursor-pointer focus-ring`}
                aria-current={activeSection === item.to ? "page" : undefined}
              >
                {item.name}
                {activeSection === item.to && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 dark:bg-primary-400 mx-3"
                    layoutId="navIndicator"
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 ml-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus-ring"
              aria-label="Toggle dark mode"
              whileTap={{ scale: 0.95 }}
              whileHover={{ rotate: 15 }}
            >
              {theme === "dark" ? (
                <Sun className="text-yellow-500" size={20} />
              ) : (
                <Moon className="text-gray-700" size={20} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-900 rounded-lg mt-4 shadow-lg"
              role="menu"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, staggerChildren: 0.1 }}
                className="pt-2 pb-3 space-y-1 px-2"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      activeSection === item.to
                        ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    } focus-ring`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      activeSection === item.to ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 dark:border-gray-800 my-2 pt-2">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 space-x-3 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 focus-ring"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="text-yellow-500" size={20} />
                        <span className="text-sm">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="text-gray-700" size={20} />
                        <span className="text-sm">Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
