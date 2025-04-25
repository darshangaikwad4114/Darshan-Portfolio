import { useCallback } from "react";
import { track } from "@vercel/analytics";

/**
 * Custom hook for tracking performance metrics
 * Uses Vercel Analytics instead of Speed Insights trackMetric API
 *
 * @returns Object containing tracking functions for performance metrics
 */
export function useSpeedInsights() {
  /**
   * Track a custom performance metric
   *
   * @param name - Name of the metric to track (e.g., 'time-to-interactive')
   * @param value - Value of the metric in milliseconds
   * @param attribution - Optional object with additional context about the metric
   */
  const trackCustomMetric = useCallback(
    (name: string, value: number, attribution?: Record<string, unknown>) => {
      if (!name || typeof value !== "number") return;

      try {
        track("performance_metric", {
          metric_name: name,
          value: value,
          ...attribution,
        });
      } catch (error) {
        // Silent fail in production, log in development
        if (import.meta.env.DEV) {
          console.error("Speed Insights tracking error:", error);
        }
      }
    },
    [],
  );

  return { trackCustomMetric };
}
