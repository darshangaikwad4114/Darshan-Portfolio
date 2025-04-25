import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubActivity from "./components/GitHubActivity";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "./components/SEOHead";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { motion, AnimatePresence } from "framer-motion";
import SizeDebugger from "./components/SizeDebugger";
import PerformanceDebugger from "./components/PerformanceDebugger";

function App() {
  // Flag to enable/disable debugging tools
  const [isDebugging] = useState(false);

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
        <AnalyticsProvider>
          <SEOHead />
          <ScrollProgressBar />
          <AnimatePresence mode="wait">
            <motion.div
              className="min-h-screen bg-white dark:bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header />
              <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <GitHubActivity username="darshangaikwad4114" />
                <Services />
                <Contact />
              </main>
              <Footer />

              {/* Debugging tools - only visible in development */}
              {isDebugging && (
                <>
                  <SizeDebugger enabled={true} />
                  <PerformanceDebugger enabled={true} />
                </>
              )}

              {/* Add Vercel Speed Insights */}
              <SpeedInsights />
            </motion.div>
          </AnimatePresence>
        </AnalyticsProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
