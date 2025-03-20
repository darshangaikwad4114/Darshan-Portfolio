import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey and academic background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Front End Developer Intern
              </h4>
              <p className="text-primary-600 dark:text-primary-400 mb-4">Idle Solutions Pvt Ltd (Remote)</p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Enhanced website structure by refactoring HTML and compressing images, improving load speed by 25%.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Developed and tested responsive UI using CSS media queries and Chrome DevTools, improving cross-device experience and increasing user satisfaction by 15%.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Improved site performance by minifying JavaScript (30% reduction) and optimizing CSS rules, increasing search visibility by 20%.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor in Computer Application (BCA)
              </h4>
              <p className="text-primary-600 dark:text-primary-400 mb-4">Savitribai Phule Pune University (SPPU)</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">CGPA: 8.79/10.00 (A+ Grade)</p>
              <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">Relevant Coursework:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Object-Oriented Programming
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Database Management System
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Data Structures and Algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  Operating Systems
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-200">React Course – Udemy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-200">JavaScript Mastery Course – Udemy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-200">NodeJS Masterclass (Nodejs, Rest API, Express, MongoDB) – Udemy</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;