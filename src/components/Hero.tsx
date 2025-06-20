import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  FileText,
  ChevronDown,
  Briefcase,
  Twitter,
} from "lucide-react";
import { Link } from "react-scroll";
import DecryptedText from "./DecryptedText";
import { useAnalytics } from "../hooks/useAnalytics";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [key, setKey] = useState(0);
  const { trackInteraction } = useAnalytics();

  const titles = [
    "Full Stack Developer",
    "Freelancer",
    "Open Source Contributor",
    "Trekking Mountains",
  ];

  // Track when hero section is fully loaded
  const trackHeroLoaded = useCallback(() => {
    // Track time to hero loaded - removed trackMetric as it's not exported
    // Use analytics tracking instead
    trackInteraction("hero_section_visible", "view");
  }, [trackInteraction]);

  useEffect(() => {
    // Title rotation logic
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setKey((prev) => prev + 1);
    }, 2000);

    // Track hero section visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackHeroLoaded();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    const heroSection = document.getElementById("about");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [titles.length, trackHeroLoaded]);

  // Track resume download
  const handleResumeClick = () => {
    trackInteraction("resume_download", "click");
  };

  // Track hire me button click
  const handleHireMeClick = () => {
    trackInteraction("hire_me_button", "click");
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 pt-16 sm:pt-20 overflow-hidden"
    >
      {/* Background decorative elements - optimized for mobile */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-20" />
      <div className="absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Add the animated background */}
      <AnimatedBackground particleCount={15} />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-24 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              {/* Welcome badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm shadow-sm">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Darshan
                  </span>
                </h1>

                {/* Animated title */}
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 dark:text-gray-300 min-h-[40px] sm:min-h-[50px] md:min-h-[60px] lg:min-h-[80px] flex items-center justify-center lg:justify-start">
                  <span className="mr-2 sm:mr-3">I'm a </span>
                  <DecryptedText
                    key={key}
                    text={titles[currentTitleIndex]}
                    speed={25}
                    sequential={true}
                    animateOn="view"
                    maxIterations={15}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
                    encryptedClassName="text-gray-400 dark:text-gray-500 opacity-70"
                    revealDirection="center"
                    parentClassName="transition-all duration-300 ease-in-out"
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I craft{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  responsive, high-performance
                </span>{" "}
                web applications with modern technologies that deliver
                exceptional user experiences.
              </motion.p>

              {/* Call-to-action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.a
                  href="/assets/Darshan_Gaikwad_Resume.pdf"
                  target="_blank"
                  download
                  aria-label="Download Resume"
                  onClick={handleResumeClick}
                  className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 text-sm sm:text-base"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Resume</span>
                </motion.a>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={handleHireMeClick}
                >
                  <motion.button
                    className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>Hire Me</span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex justify-center lg:justify-start gap-3 sm:gap-4 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {[
                  {
                    href: "https://github.com/darshangaikwad4114",
                    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/darshan-gaikwad/",
                    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://x.com/Darshan4811421",
                    icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: "X",
                  },
                  {
                    href: "https://www.instagram.com/darshan_4114_/",
                    icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: "Instagram",
                  },
                ].map((social, socialIndex) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-lg group"
                    aria-label={`${social.label} Profile`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + socialIndex * 0.1 }}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile image column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Darshan Gaikwad"
                  className="rounded-full w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/10 to-transparent"></div>

                {/* Add an orbital circle around the profile image */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-blue-500/20"
                  style={{ margin: "-8px" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center p-2 sm:p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
