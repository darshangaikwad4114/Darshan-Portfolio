import React from 'react';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>
            <SpotlightCard 
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg"
              spotlightColor="rgba(26, 171, 255, 0.15)"
            >
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Front End Developer Intern
                </h4>
                <p className="text-primary-600 dark:text-primary-400 mb-1">Idle Solutions Pvt Ltd, Pune, India</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Remote • Nov - Dec 2022</p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Enhanced website structure by refactoring HTML and compressing images, improving load speed by 25%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Developed and tested responsive UI using CSS media queries and Chrome DevTools, improving cross-device experience and increasing user satisfaction by 15%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Improved site performance by minifying JavaScript (30% reduction) and optimizing CSS rules, increasing search visibility by 20%. Used Google Lighthouse for performance analysis.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Implemented interactive JavaScript features such as real-time content loading and tooltips, enhancing website interactivity and user experience.</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <SpotlightCard 
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg p-8"
              spotlightColor="rgba(100, 121, 167, 0.15)"
            >
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Bachelor in Computer Application (BCA)
                </h4>
                <p className="text-primary-600 dark:text-primary-400 mb-1">Savitribai Phule Pune University (SPPU), Pune, India</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">2020 - 2023</p>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: 8.79/10.00 (A+ Grade)
                  </div>
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">Relevant Coursework:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Database Management System</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Data Structures and Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Operating Systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full" aria-hidden="true"></span>
                    <span>Computer Networks</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <SpotlightCard 
              className="bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg p-8"
              spotlightColor="rgba(70, 199, 255, 0.15)"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                      alt="React icon" 
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">React Course</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a 
                        href="https://www.udemy.com/certificate/UC-f10aa1a2-50f5-4aa9-85d3-cd3a9fe635b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        Udemy Certificate <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                      alt="JavaScript icon" 
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">JavaScript Mastery Course</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a 
                        href="https://www.udemy.com/certificate/UC-3e05e730-c46e-47a8-b6aa-907487249c32/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        Udemy Certificate <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm mr-4">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
                      alt="Node.js icon" 
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">NodeJS Masterclass</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a 
                        href="https://www.udemy.com/certificate/UC-e2d3d266-89d8-41d8-ad89-865e6f733422/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
                      >
                        Udemy Certificate <span className="ml-1">↗</span>
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;