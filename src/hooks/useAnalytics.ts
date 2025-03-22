import { useCallback } from 'react';
import { track } from '@vercel/analytics';

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
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (!eventName) return;
    
    try {
      track(eventName, properties);
    } catch (error) {
      // Silent fail in production, log in development
      if (import.meta.env.DEV) {
        console.error('Analytics tracking error:', error);
      }
    }
  }, []);

  /**
   * Track a page view
   * 
   * @param path - Optional path override (defaults to current path)
   */
  const trackPageView = useCallback((path?: string) => {
    trackEvent('page_view', { 
      path: path || window.location.pathname,
      referrer: document.referrer,
      title: document.title,
      timestamp: new Date().toISOString(),
    });
  }, [trackEvent]);

  /**
   * Track user interactions with elements
   * 
   * @param elementName - Name/identifier of the element
   * @param action - Action performed (e.g., 'click', 'hover')
   */
  const trackInteraction = useCallback((elementName: string, action: string) => {
    trackEvent('user_interaction', {
      element: elementName,
      action,
      path: window.location.pathname,
      timestamp: new Date().toISOString(),
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackInteraction,
  };
}
