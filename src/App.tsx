import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "./components/SEOHead";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // Add page load animation
  useEffect(() => {
    // Trigger initial animations
    document.body.classList.add("page-loaded");

    return () => document.body.classList.remove("page-loaded");
  }, []);

  // Add responsive font sizing with more specific controls
  useEffect(() => {
    const setResponsiveFontSize = () => {
      const width = window.innerWidth;
      // Use more conservative font size changes to prevent large differences
      const baseFontSize = width < 768 ? 14 : width < 1024 ? 15 : 16;
      document.documentElement.style.fontSize = `${baseFontSize}px`;

      // Add a data attribute to help debug size issues
      document.documentElement.setAttribute(
        "data-viewport-width",
        width.toString(),
      );
    };

    window.addEventListener("resize", setResponsiveFontSize);
    setResponsiveFontSize();

    return () => window.removeEventListener("resize", setResponsiveFontSize);
  }, []);

  // Add touch detection for better mobile styling
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.classList.add("touch-device");
    }
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEOHead />
        <ScrollProgressBar />
        <AnimatePresence mode="wait">
          <motion.div
            className="min-h-screen bg-white dark:bg-gray-900 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedBackground />
            <Header />
            <main className="relative z-10">
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
