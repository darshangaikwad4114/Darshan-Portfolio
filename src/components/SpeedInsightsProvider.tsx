import React, { ReactNode, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";

interface SpeedInsightsProviderProps {
  children: ReactNode;
}

/**
 * Provider component for tracking performance metrics
 * Using Vercel Analytics with optimized tracking code
 */
export function SpeedInsightsProvider({
  children,
}: SpeedInsightsProviderProps) {
  const hasTrackedInitial = useRef(false);

  useEffect(() => {
    // Only track initial metrics once
    if (hasTrackedInitial.current) return;
    hasTrackedInitial.current = true;

    // Use requestIdleCallback for non-critical tracking to avoid impacting page load performance
    const trackWhenIdle = (callback: () => void) => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => callback(), { timeout: 2000 });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(callback, 100);
      }
    };

    // Track initial page load
    track("performance_metric", {
      metric_name: "app-loaded",
      value: performance.now(),
      event: "initial-load",
    });

    // Track navigation timing metrics in background
    trackWhenIdle(() => {
      if (performance && "getEntriesByType" in performance) {
        const navEntry = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;

        if (navEntry) {
          const metrics = {
            "dom-content-loaded": navEntry.domContentLoadedEventEnd,
            "load-complete": navEntry.loadEventEnd,
            ttfb: navEntry.responseStart - navEntry.requestStart,
          };

          // Send all metrics in a single batch to reduce network requests
          track("performance_metrics_batch", {
            metrics,
            navigationEntry: true,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          });
        }
      }
    });

    // Setup efficient section visibility tracking with fewer observers
    const setupEfficientVisibilityTracking = () => {
      const sections = document.querySelectorAll("section[id]");
      if (!sections.length) return;

      // Create a single observer instead of many
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("id");
              if (sectionId) {
                track("section_visible", { section: sectionId });
                observer.unobserve(entry.target); // Track only once per section
              }
            }
          });
        },
        { threshold: 0.3 },
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    };

    // Delay visibility tracking setup until after critical render
    const timer = setTimeout(setupEfficientVisibilityTracking, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}

// Moved measurePerformance to a separate file (performanceUtils.ts)
