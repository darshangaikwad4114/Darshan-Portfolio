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
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 pt-16"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-6"
            >
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Darshan
                  </span>
                </h1>

                {/* Animated title */}
                <div className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 min-h-[32px] flex items-center justify-center lg:justify-start">
                  <DecryptedText
                    key={key}
                    text={titles[currentTitleIndex]}
                    speed={25}
                    sequential={true}
                    animateOn="view"
                    maxIterations={15}
                    className="text-gray-700 dark:text-gray-300"
                    encryptedClassName="text-gray-400 dark:text-gray-500 opacity-70"
                    revealDirection="center"
                    parentClassName="transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I create modern web applications with clean code and exceptional
                user experiences.
              </p>

              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="/assets/Darshan_Gaikwad_Resume.pdf"
                  target="_blank"
                  download
                  aria-label="Download Resume"
                  onClick={handleResumeClick}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-200 w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Briefcase className="w-5 h-5 mr-2" />
                    Hire Me
                  </motion.button>
                </Link>
              </div>

              {/* Social links */}
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  {
                    href: "https://github.com/darshangaikwad4114",
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/darshan-gaikwad/",
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://x.com/Darshan4811421",
                    icon: <Twitter className="w-5 h-5" />,
                    label: "X",
                  },
                  {
                    href: "https://www.instagram.com/darshan_4114_/",
                    icon: <Instagram className="w-5 h-5" />,
                    label: "Instagram",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                    aria-label={`${social.label} Profile`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Profile image column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="relative w-full h-full">
                  <img
                    src="/images/profile.webp"
                    loading="lazy"
                    alt="Darshan Gaikwad"
                    className="rounded-full w-full h-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
