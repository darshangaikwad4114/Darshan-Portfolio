import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, FileText, ChevronDown, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';
import DecryptedText from './DecryptedText';
import { useAnalytics } from '../hooks/useAnalytics';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [key, setKey] = useState(0);
  const { trackInteraction } = useAnalytics();
  
  const titles = [
    'Full Stack Developer',
    'Freelance Web Developer',
    'Technology Enthusiast',
    'Mountain Explorer',
    'Open Source Contributor',
  ];

  // Track when hero section is fully loaded
  const trackHeroLoaded = useCallback(() => {
    // Track time to hero loaded - removed trackMetric as it's not exported
    // Use analytics tracking instead
    trackInteraction('hero_section_visible', 'view');
  }, [trackInteraction]);

  useEffect(() => {
    // Title rotation logic
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setKey(prev => prev + 1);
    }, 2000);

    // Track hero section visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackHeroLoaded();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const heroSection = document.getElementById('about');
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
    trackInteraction('resume_download', 'click');
  };

  // Track hire me button click  
  const handleHireMeClick = () => {
    trackInteraction('hire_me_button', 'click');
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-20 right-0 w-72 h-72 bg-primary-100/30 dark:bg-primary-900/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 py-12 md:py-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Welcome to my portfolio
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Darshan</span>
              </motion.h1>
              
              <div className="text-xl md:text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400 h-[60px] md:h-[72px] flex items-center justify-center lg:justify-start">
                <span className="mr-2 text-gray-700 dark:text-gray-300">I'm a </span>
                <DecryptedText 
                  key={key}
                  text={titles[currentTitleIndex]} 
                  speed={25} 
                  sequential={true}
                  animateOn="view"
                  maxIterations={15}
                  className="text-primary-600 dark:text-primary-400"
                  encryptedClassName="text-primary-400 dark:text-primary-600 opacity-70"
                  revealDirection="center"
                  parentClassName="transition-all duration-300 ease-in-out"
                />
              </div>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I craft responsive, high-performance web applications with modern technologies
                that deliver exceptional user experiences. Passionate about clean code,
                performance optimization, and staying on the cutting edge of web development.
              </motion.p>
              
              {/* Call-to-action buttons with tracking */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <motion.a
                    href="/assets/Darshan_Gaikwad_Resume.pdf"
                    target="_blank" 
                    download
                    onClick={handleResumeClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus-ring"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>View Resume</span>
                  </motion.a>
                  
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className="w-full sm:w-auto"
                    onClick={handleHireMeClick}
                  >
                    <motion.button
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus-ring"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>Hire Me</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Social links */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="https://github.com/darshangaikwad4114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 focus-ring"
                  aria-label="GitHub Profile"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/darshan-gaikwad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 focus-ring"
                  aria-label="LinkedIn Profile"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/darshan_4114_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 focus-ring"
                  aria-label="Instagram Profile"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Profile image column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src="/images/profile.jpg"
                  alt="Darshan Gaikwad"
                  className="rounded-full w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary-500/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">Scroll Down</span>
            <ChevronDown className="w-5 h-5 text-primary-500 dark:text-primary-400" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;