import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Code,
  Star,
  GitFork,
  Activity,
  Loader,
  AlertCircle,
} from "lucide-react";
import GitHubHeatmap from "./GitHubHeatmap";
import SpotlightCard from "./SpotlightCard";
import { useGitHubData } from "../hooks/useGitHubData";
import { useAnalytics } from "../hooks/useAnalytics";

interface GitHubActivityProps {
  username: string;
}

const GitHubActivity: React.FC<GitHubActivityProps> = ({
  username = "darshangaikwad4114",
}) => {
  const {
    totalContributions,
    repositories,
    stars,
    contributionData,
    loading,
    error,
  } = useGitHubData(username);
  const { trackInteraction } = useAnalytics();

  const handleGitHubLinkClick = () => {
    trackInteraction("github_profile_link", "click");
  };

  const handleFollowClick = () => {
    trackInteraction("github_follow_button", "click");
  };

  return (
    <section id="github-activity" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Code
              className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3"
              aria-hidden="true"
            />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              GitHub Activity
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My open-source contributions and coding activity
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <SpotlightCard
            className="bg-white dark:bg-gray-900 p-4 sm:p-6 border border-gray-100 dark:border-gray-700 relative"
            spotlightColor="rgba(26, 171, 255, 0.15)"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Github className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Contribution Activity
                </h3>
              </div>
              <motion.a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                whileHover={{ x: 3 }}
                onClick={handleGitHubLinkClick}
              >
                View on GitHub <span className="ml-1">→</span>
              </motion.a>
            </div>

            <div className="w-full">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader className="w-10 h-10 text-primary-500 animate-spin mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Loading GitHub contribution data...
                  </p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <AlertCircle className="w-10 h-10 text-amber-500 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Could not load GitHub data
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                    Displaying simulated contribution data. Please check your
                    connection or token.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <GitHubHeatmap data={contributionData} />
                </motion.div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Activity className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <h4 className="font-medium text-gray-700 dark:text-gray-200">
                    Total Contributions
                  </h4>
                </div>
                {loading ? (
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ) : (
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {totalContributions.toLocaleString()}+
                  </p>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GitFork className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <h4 className="font-medium text-gray-700 dark:text-gray-200">
                    Repositories
                  </h4>
                </div>
                {loading ? (
                  <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ) : (
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {repositories}
                  </p>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <h4 className="font-medium text-gray-700 dark:text-gray-200">
                    Stars Received
                  </h4>
                </div>
                {loading ? (
                  <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ) : (
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stars}
                  </p>
                )}
              </div>
            </div>
          </SpotlightCard>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 font-medium"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleFollowClick}
          >
            <Github className="mr-2 h-5 w-5" />
            Follow me on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
