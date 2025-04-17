import { useState, useEffect } from "react";

// Types for GitHub data
type ContributionLevel = 0 | 1 | 2 | 3 | 4;
type DayData = {
  count: number;
  level: ContributionLevel;
  date: string;
};
type WeekData = DayData[];

// GitHub API response types
interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  // Add other properties as needed, but these are the minimum we use
}

// GraphQL response types
interface GitHubGraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: GitHubContributionWeek[];
        };
      };
    };
  };
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubContributionDay {
  contributionCount: number;
  date: string;
  contributionLevel: string; // This will be one of "NONE", "FIRST_QUARTILE", etc.
}

interface GitHubStats {
  totalContributions: number;
  repositories: number;
  stars: number;
  contributionData: WeekData[];
  loading: boolean;
  error: Error | null;
}

// Add cache duration (4 hours)
const CACHE_DURATION = 4 * 60 * 60 * 1000;

// Base API URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const useGitHubData = (username: string): GitHubStats => {
  const [data, setData] = useState<GitHubStats>({
    totalContributions: 0,
    repositories: 0,
    stars: 0,
    contributionData: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      // Try to get data from cache first
      const cachedData = localStorage.getItem(`github-data-${username}`);
      if (cachedData) {
        try {
          const { data, timestamp } = JSON.parse(cachedData);
          const isValid = Date.now() - timestamp < CACHE_DURATION;

          if (isValid) {
            setData({
              ...data,
              loading: false,
              error: null,
            });
            return;
          }
          // Use empty catch block without parameters to avoid unused variable warnings
        } catch {
          console.warn("Failed to parse cached GitHub data");
          // Continue to fetch fresh data
        }
      }

      try {
        // Use the GitHub token from environment variables
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        if (!token) {
          console.warn("GitHub token not found. Using mock data instead.");
          generateMockData();
          return;
        }

        // Fetch repositories to get count and stars
        const reposResponse = await fetch(
          `${API_BASE_URL}api/github/repos?username=${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!reposResponse.ok) {
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        }

        const repos = (await reposResponse.json()) as GitHubRepository[];
        const repoCount = repos.length;
        const starCount = repos.reduce(
          (acc: number, repo: GitHubRepository) => acc + repo.stargazers_count,
          0,
        );

        // Get contribution data using GraphQL API
        // This is the most reliable way to get contribution data similar to GitHub's heatmap
        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                      contributionLevel
                    }
                  }
                }
              }
            }
          }
        `;

        const graphqlResponse = await fetch(
          `${API_BASE_URL}api/github/graphql`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          },
        );

        if (!graphqlResponse.ok) {
          throw new Error(
            `GitHub GraphQL API error: ${graphqlResponse.status}`,
          );
        }

        const graphqlData =
          (await graphqlResponse.json()) as GitHubGraphQLResponse;

        // Process contribution data
        const contributionCalendar =
          graphqlData.data?.user?.contributionsCollection?.contributionCalendar;

        if (!contributionCalendar) {
          throw new Error("Could not retrieve contribution data");
        }

        const totalContributions = contributionCalendar.totalContributions;

        // Transform GraphQL weeks data to our WeekData format
        const weeks: WeekData[] = contributionCalendar.weeks.map(
          (week: GitHubContributionWeek) => {
            return week.contributionDays.map((day: GitHubContributionDay) => {
              // Map GitHub's contribution levels (0-4) to our ContributionLevel type
              const level = Number(
                day.contributionLevel
                  .replace("NONE", "0")
                  .replace("FIRST_QUARTILE", "1")
                  .replace("SECOND_QUARTILE", "2")
                  .replace("THIRD_QUARTILE", "3")
                  .replace("FOURTH_QUARTILE", "4"),
              ) as ContributionLevel;

              return {
                date: day.date,
                count: day.contributionCount,
                level,
              };
            });
          },
        );

        // Save fresh data to cache
        const dataToCache = {
          totalContributions,
          repositories: repoCount,
          stars: starCount,
          contributionData: weeks,
        };

        localStorage.setItem(
          `github-data-${username}`,
          JSON.stringify({
            data: dataToCache,
            timestamp: Date.now(),
          }),
        );

        setData({
          ...dataToCache,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setData((prev) => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error
              : new Error("Unknown error occurred"),
        }));

        // Fallback to mock data on error
        generateMockData();
      }
    };

    const generateMockData = () => {
      // Generate mock contribution data
      const weeks: WeekData[] = [];
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 51 * 7);

      let totalContributions = 0;

      for (let w = 0; w < 52; w++) {
        const week: DayData[] = [];
        for (let d = 0; d < 7; d++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(currentDate.getDate() + w * 7 + d);

          const isWeekend = d >= 5;
          const levelChance = isWeekend ? 0.3 : 0.6;
          let level: ContributionLevel = 0;

          if (Math.random() < levelChance) {
            level = (Math.floor(Math.random() * 4) + 1) as ContributionLevel;
          }

          const count =
            level === 0 ? 0 : Math.floor(level * Math.random() * 7) + 1;
          totalContributions += count;

          week.push({
            count,
            level,
            date: currentDate.toISOString().split("T")[0],
          });
        }
        weeks.push(week);
      }

      // Create hotspots of activity
      const hotPeriods = [10, 24, 38];
      hotPeriods.forEach((weekIndex) => {
        if (weeks[weekIndex]) {
          for (let d = 0; d < 5; d++) {
            const level = (Math.floor(Math.random() * 2) +
              3) as ContributionLevel;
            const count = Math.floor(level * Math.random() * 10) + 5;
            totalContributions += count - weeks[weekIndex][d].count;
            weeks[weekIndex][d].level = level;
            weeks[weekIndex][d].count = count;
          }
        }
      });

      setData({
        totalContributions,
        repositories: 32, // Mock data
        stars: 86, // Mock data
        contributionData: weeks,
        loading: false,
        error: null,
      });
    };

    fetchGitHubData();
  }, [username]);

  return data;
};
