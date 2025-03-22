import React, { ReactNode, useEffect } from 'react';
import { track } from '@vercel/analytics';

interface SpeedInsightsProviderProps {
  children: ReactNode;
}

/**
 * Provider component for tracking performance metrics
 * Using Vercel Analytics instead of Speed Insights trackMetric API
 */
export function SpeedInsightsProvider({ children }: SpeedInsightsProviderProps) {
  useEffect(() => {
    // Track metrics for initial page load using Vercel Analytics instead
    track('performance_metric', {
      metric_name: 'app-loaded',
      value: performance.now(),
      event: 'initial-load',
    });

    // Track navigation timing metrics
    if (performance && 'getEntriesByType' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navEntry) {
        // Track DOM Content Loaded time
        track('performance_metric', {
          metric_name: 'dom-content-loaded',
          value: navEntry.domContentLoadedEventEnd,
          navigationEntry: true,
        });
        
        // Track Load Complete time
        track('performance_metric', {
          metric_name: 'load-complete',
          value: navEntry.loadEventEnd,
          navigationEntry: true,
        });
        
        // Track Time to First Byte
        track('performance_metric', {
          metric_name: 'ttfb',
          value: navEntry.responseStart - navEntry.requestStart,
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
              track('section_visible', {
                section: sectionId,
                time: performance.now(),
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
    track('performance_metric', {
      metric_name: metricName,
      value: duration,
      ...properties,
      timestamp: new Date().toISOString(),
    });
    return duration;
  };
};
