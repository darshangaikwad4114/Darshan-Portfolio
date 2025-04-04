import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

// Define types for our contribution data
type ContributionLevel = 0 | 1 | 2 | 3 | 4; // 0 = no contribution, 1-4 = increasing levels
type DayData = {
  count: number;
  level: ContributionLevel;
  date: string; // ISO format date string
};
type WeekData = DayData[];

interface GitHubHeatmapProps {
  data?: WeekData[];
  className?: string;
}

// Move these constants outside the component to prevent recreation on each render
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getLevelColor = (level: ContributionLevel): string => {
  switch (level) {
    case 0:
      return "bg-gray-100 dark:bg-zinc-800";
    case 1:
      return "bg-emerald-100 dark:bg-emerald-800";
    case 2:
      return "bg-emerald-200 dark:bg-emerald-600";
    case 3:
      return "bg-emerald-300 dark:bg-emerald-500";
    case 4:
      return "bg-emerald-400 dark:bg-emerald-400";
    default:
      return "bg-gray-100 dark:bg-zinc-800";
  }
};

// Generate sample data if none provided
const generateSampleData = (): WeekData[] => {
  const weeks: WeekData[] = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 51 * 7); // Go back ~51 weeks

  for (let w = 0; w < 52; w++) {
    const week: DayData[] = [];
    for (let d = 0; d < 7; d++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + w * 7 + d);

      // Generate random contribution level
      const level = Math.floor(Math.random() * 5) as ContributionLevel;
      const count =
        level === 0 ? 0 : Math.floor(level * Math.random() * 10) + 1;

      week.push({
        count,
        level,
        date: currentDate.toISOString().split("T")[0],
      });
    }
    weeks.push(week);
  }

  return weeks;
};

const GitHubHeatmap: React.FC<GitHubHeatmapProps> = ({
  data,
  className = "",
}) => {
  // No need to recreate these arrays on each render
  const days = DAYS;
  const months = MONTHS;

  // Use state to track container width
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  // Use provided data or generate sample data
  const heatmapData = useMemo(() => data || generateSampleData(), [data]);

  // Update container width on resize
  useEffect(() => {
    if (!containerRef) return;

    const updateWidth = () => {
      setContainerWidth(containerRef.clientWidth);
    };

    // Initial measurement
    updateWidth();

    // Set up resize observer
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  // Use useCallback to ensure stable function reference
  const getResponsiveCellSize = useCallback(() => {
    if (containerWidth < 400) return { cellSize: 10, cellGap: 2 };
    if (containerWidth < 600) return { cellSize: 12, cellGap: 2 };
    if (containerWidth < 800) return { cellSize: 14, cellGap: 2 };
    return { cellSize: 16, cellGap: 2 }; // Default size
  }, [containerWidth]);

  // Calculate responsive sizing with useMemo to avoid recalculations
  const responsiveSizing = useMemo(() => {
    const { cellSize, cellGap } = getResponsiveCellSize();
    const cellWithGap = cellSize + cellGap;

    // Calculate available width for cells considering padding and labels
    const availableWidth = containerWidth ? containerWidth - 60 : 800;

    // Calculate how many weeks we can fit
    const weeksToShow = Math.min(52, Math.floor(availableWidth / cellWithGap));

    // Calculate chart width based on available space
    const chartWidth = weeksToShow * cellWithGap;

    return { cellSize, cellGap, cellWithGap, weeksToShow, chartWidth };
  }, [containerWidth, getResponsiveCellSize]);

  const { cellSize, cellGap, cellWithGap, weeksToShow, chartWidth } =
    responsiveSizing;

  // Calculate month positions based on available weeks - memoized
  const monthPositions = useMemo(() => {
    const positions: { [key: string]: number } = {};
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - (weeksToShow - 1) * 7); // Go back ~N weeks

    for (let w = 0; w < weeksToShow; w++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + w * 7);
      const monthIndex = currentDate.getMonth();
      const month = months[monthIndex];

      // Only set position once per month (first appearance)
      if (!positions[month]) {
        positions[month] = w;
      }
    }

    return Object.entries(positions).map(([month, weekIndex]) => ({
      month,
      position: cellGap + weekIndex * cellWithGap,
    }));
  }, [weeksToShow, cellGap, cellWithGap, months]); // Added months to dependencies

  return (
    <motion.div
      className={`relative py-2 rounded-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-4">
        {/* Use ref to get container width */}
        <div
          ref={setContainerRef}
          className="relative overflow-hidden pl-8 text-gray-600 dark:text-zinc-400"
        >
          {containerWidth > 0 && (
            <div
              className="relative"
              style={{
                transform: "translate(25px, 18px)",
                minHeight: `${days.length * cellWithGap + 20}px`,
                width: `${chartWidth}px`,
                maxWidth: "100%",
              }}
            >
              {/* Day labels */}
              {days.map((day, index) => (
                <div
                  key={day}
                  className="text-xs text-gray-400 dark:text-gray-500 absolute"
                  style={{
                    left: "-25px",
                    top: `${cellSize / 2 + index * cellWithGap}px`,
                    transform: "translateY(-50%)",
                    textAlign: "right",
                  }}
                >
                  {day.charAt(0)}
                </div>
              ))}

              {/* Month labels - more compact */}
              {monthPositions.map(({ month, position }, index) => {
                // Show fewer month labels on smaller screens
                const shouldDisplay =
                  containerWidth < 500
                    ? index % 3 === 0
                    : containerWidth < 700
                      ? index % 2 === 0
                      : true;

                return (
                  shouldDisplay && (
                    <div
                      key={month}
                      className="text-xs text-gray-400 dark:text-gray-500 absolute"
                      style={{
                        left: `${position}px`,
                        top: "-18px",
                        textAlign: "center",
                      }}
                    >
                      {month}
                    </div>
                  )
                );
              })}

              {/* Heatmap squares - only show the weeks that fit */}
              {heatmapData.slice(52 - weeksToShow).map((week, weekIndex) => (
                <React.Fragment key={`week-${weekIndex}`}>
                  {week.map((day, dayIndex) => {
                    const cellColor = getLevelColor(day.level);
                    return (
                      <motion.div
                        key={`day-${weekIndex}-${dayIndex}`}
                        className={`absolute text-zinc-50 dark:text-zinc-900 ${cellColor} cursor-pointer`}
                        style={{
                          width: `${cellSize}px`,
                          height: `${cellSize}px`,
                          borderRadius: "3px",
                          left: `${cellGap + weekIndex * cellWithGap}px`,
                          top: `${cellGap + dayIndex * cellWithGap}px`,
                        }}
                        whileHover={{ scale: 1.2 }}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-end pr-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mr-2">
          Less
        </div>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-sm mr-1 ${getLevelColor(level as ContributionLevel)}`}
          />
        ))}
        <div className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          More
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubHeatmap;
