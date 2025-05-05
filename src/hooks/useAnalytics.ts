import { useCallback } from "react";
import { track } from "@vercel/analytics";

/**
 * Custom hook for tracking analytics events with type safety
 *
 * @returns Object containing tracking functions
 */
export function useAnalytics() {
  /**
   * Track a custom event
   *
   * @param eventName - Name of the event to track
   * @param properties - Optional properties to include with the event
   */
  const trackEvent = useCallback(
    (
      eventName: string,
      properties?: Record<string, string | number | boolean | null>,
    ) => {
      if (!eventName) return;

      try {
        track(eventName, properties);
      } catch (error) {
        // Silent fail in production, log in development
        if (import.meta.env.DEV) {
          console.error("Analytics tracking error:", error);
        }
      }
    },
    [],
  );

  /**
   * Track a page view
   *
   * @param path - Optional path override (defaults to current path)
   */
  const trackPageView = useCallback(
    (path?: string) => {
      trackEvent("page_view", {
        path: path || window.location.pathname,
        referrer: document.referrer,
        title: document.title,
        timestamp: new Date().toISOString(),
      });
    },
    [trackEvent],
  );

  /**
   * Track user interactions with elements
   *
   * @param elementName - Name/identifier of the element
   * @param action - Action performed (e.g., 'click', 'hover')
   */
  const trackInteraction = useCallback(
    (elementName: string, action: string) => {
      trackEvent("user_interaction", {
        element: elementName,
        action,
        path: window.location.pathname,
        timestamp: new Date().toISOString(),
      });
    },
    [trackEvent],
  );

  /**
   * Optimized utility to measure and track a performance duration
   * (Moved from performanceUtils.ts to consolidate analytics functions)
   */
  const measurePerformance = useCallback(
    (
      metricName: string,
      properties?: Record<string, string | number | boolean | null>,
    ) => {
      const startTime = performance.now();

      return () => {
        const duration = performance.now() - startTime;

        // Only track if duration is meaningful (avoid noise from very short operations)
        if (duration > 5) {
          trackEvent("performance_metric", {
            metric_name: metricName,
            value: Math.round(duration), // Round to avoid excessive precision
            ...properties,
            timestamp: new Date().toISOString(),
          });
        }

        return duration;
      };
    },
    [trackEvent],
  );

  return {
    trackEvent,
    trackPageView,
    trackInteraction,
    measurePerformance,
  };
}
