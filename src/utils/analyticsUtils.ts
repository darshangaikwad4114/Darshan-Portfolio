import { track } from '@vercel/analytics';

/**
 * Utility function for tracking custom events
 * 
 * @param eventName - Name of the event to track
 * @param properties - Optional properties to include with the event
 */
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (!eventName) {
    console.warn('Event name is required for tracking');
    return;
  }
  
  try {
    track(eventName, properties);
  } catch (error) {
    // Silent fail in production, log in development
    if (import.meta.env.DEV) {
      console.error('Analytics tracking error:', error);
    }
  }
};
