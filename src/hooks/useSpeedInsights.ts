import { useCallback } from 'react';
import { trackMetric } from '@vercel/speed-insights/react';

/**
 * Custom hook for tracking custom web vitals and performance metrics
 * with Vercel Speed Insights
 * 
 * @returns Object containing tracking functions for speed metrics
 */
export function useSpeedInsights() {
  /**
   * Track a custom performance metric
   * 
   * @param name - Name of the metric to track (e.g., 'time-to-interactive')
   * @param value - Value of the metric in milliseconds
   * @param attribution - Optional object with additional context about the metric
   */
  const trackCustomMetric = useCallback((
    name: string,
    value: number,
    attribution?: Record<string, any>
  ) => {
    if (!name || typeof value !== 'number') return;
    
    try {
      trackMetric(name, value, attribution);
    } catch (error) {
      // Silent fail in production, log in development
      if (import.meta.env.DEV) {
        console.error('Speed Insights tracking error:', error);
      }
    }
  }, []);

  /**
   * Start measuring a custom duration metric
   * 
   * @param actionName - Name of the action being measured (e.g., 'image-load')
   * @returns A function to stop timing and record the measurement
   */
  const startMeasurement = useCallback((actionName: string) => {
    const startTime = performance.now();
    
    // Return a function that, when called, will record the elapsed time
    return (additionalData?: Record<string, any>) => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      trackCustomMetric(
        `custom-${actionName}-duration`, 
        duration,
        { action: actionName, ...additionalData }
      );
      
      return duration;
    };
  }, [trackCustomMetric]);

  /**
   * Track user interaction performance
   * 
   * @param interactionType - Type of interaction (e.g., 'click', 'submit')
   * @param componentName - Name of the component where interaction occurred
   */
  const trackInteraction = useCallback((
    interactionType: string,
    componentName: string,
    fn: () => void
  ) => {
    const measureEnd = startMeasurement(`interaction-${interactionType}`);
    
    // Execute the provided function
    fn();
    
    // Record the measurement
    measureEnd({ component: componentName });
  }, [startMeasurement]);

  return {
    trackCustomMetric,
    startMeasurement,
    trackInteraction
  };
}
