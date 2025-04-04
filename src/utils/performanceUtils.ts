import { track } from "@vercel/analytics";

/**
 * Optimized utility to measure and track a performance duration
 */
export const measurePerformance = (
  metricName: string,
  properties?: Record<string, unknown>,
) => {
  const startTime = performance.now();

  return () => {
    const duration = performance.now() - startTime;

    // Only track if duration is meaningful (avoid noise from very short operations)
    if (duration > 5) {
      track("performance_metric", {
        metric_name: metricName,
        value: Math.round(duration), // Round to avoid excessive precision
        ...properties,
        timestamp: new Date().toISOString(),
      });
    }

    return duration;
  };
};
