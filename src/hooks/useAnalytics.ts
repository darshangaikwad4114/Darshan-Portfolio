import { useCallback } from "react";
import { track } from "@vercel/analytics";

export function useAnalytics() {

  const trackEvent = useCallback(
    (
      eventName: string,
      properties?: Record<string, string | number | boolean | null>,
    ) => {
      if (!eventName) return;

      try {
        track(eventName, properties);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Analytics tracking error:", error);
        }
      }
    },
    [],
  );

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

  const measurePerformance = useCallback(
    (
      metricName: string,
      properties?: Record<string, string | number | boolean | null>,
    ) => {
      const startTime = performance.now();

      return () => {
        const duration = performance.now() - startTime;

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
