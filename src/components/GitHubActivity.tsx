import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContextDefinition";
import { BookOpen, Star, Users, UserPlus } from "lucide-react";

const username = "darshangaikwad4114";
const stats = [
  {
    label: "Repositories",
    value: 19,
    icon: (
      <BookOpen className="w-6 h-6 mb-2 text-primary-600 dark:text-primary-400" />
    ),
  },
  {
    label: "Stars",
    value: 67,
    icon: (
      <Star className="w-6 h-6 mb-2 text-primary-600 dark:text-primary-400" />
    ),
  },
  {
    label: "Followers",
    value: 13,
    icon: (
      <Users className="w-6 h-6 mb-2 text-primary-600 dark:text-primary-400" />
    ),
  },
  {
    label: "Following",
    value: 52,
    icon: (
      <UserPlus className="w-6 h-6 mb-2 text-primary-600 dark:text-primary-400" />
    ),
  },
];

const GitHubActivity = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="github-activity" className="section-spacing section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-subtitle">
          My open-source journey and coding streaks as{" "}
          <span className="font-semibold text-primary-600 dark:text-primary-400">
            @{username}
          </span>
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 min-w-[160px] flex flex-col items-center border border-gray-100 dark:border-gray-800"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(26,171,255,0.10)",
            }}
          >
            {stat.icon}
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Contribution Calendar
        </h3>
        <div className="flex justify-center overflow-x-auto rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow p-4">
          <GitHubCalendar
            username={username}
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockSize={16}
            blockMargin={5}
            fontSize={14}
            theme={{
              light: ["#eaeef5", "#bae9ff", "#85dcff", "#46c7ff", "#1aabff"],
              dark: ["#30394e", "#6479a7", "#85dcff", "#1aabff", "#46c7ff"],
            }}
          />
        </div>
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 font-medium shadow"
        >
          View @{username} on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubActivity;
