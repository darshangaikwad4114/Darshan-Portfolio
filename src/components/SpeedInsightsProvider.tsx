import React, { ReactNode, useEffect } from 'react';
import { trackMetric } from '@vercel/speed-insights/react';

interface SpeedInsightsProviderProps {
  children: ReactNode;
}

/**
 * Provider component for tracking Vercel Speed Insights metrics
 * This wrapper helps centralize performance monitoring
 */
export function SpeedInsightsProvider({ children }: SpeedInsightsProviderProps) {
  useEffect(() => {
    // Track metrics for initial page load
    trackMetric('app-loaded', performance.now(), {
      event: 'initial-load',
    });

    // Track navigation timing metrics
    if (performance && 'getEntriesByType' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navEntry) {
        // Track DOM Content Loaded time
        trackMetric('dom-content-loaded', navEntry.domContentLoadedEventEnd, {
          navigationEntry: true,
        });
        
        // Track Load Complete time
        trackMetric('load-complete', navEntry.loadEventEnd, {
          navigationEntry: true,
        });
        
        // Track Time to First Byte
        trackMetric('ttfb', navEntry.responseStart - navEntry.requestStart, {
          navigationEntry: true,
        });
      }
    }

    // Setup Intersection Observer to track when elements become visible
    const setupElementVisibilityTracking = () => {
      const sections = document.querySelectorAll('section[id]');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              trackMetric(`section-visible-${sectionId}`, performance.now(), {
                section: sectionId,
                viewportHeight: window.innerHeight,
                viewportWidth: window.innerWidth,
              });
            }
          });
        },
        { threshold: 0.3 } // Consider visible when 30% in view
      );
      
      sections.forEach((section) => observer.observe(section));
      
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };
    
    // Delay setup to ensure DOM is fully rendered
    const timer = setTimeout(setupElementVisibilityTracking, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}

/**
 * Utility to measure and track a performance duration
 * @param metricName The name of the metric to track
 * @returns Function to stop measuring and record the metric
 */
export const measurePerformance = (metricName: string, properties?: Record<string, any>) => {
  const startTime = performance.now();
  
  return () => {
    const duration = performance.now() - startTime;
    trackMetric(metricName, duration, {
      ...properties,
      timestamp: new Date().toISOString(),
    });
    return duration;
  };
};
