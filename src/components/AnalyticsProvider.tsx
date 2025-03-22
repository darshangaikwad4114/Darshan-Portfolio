import { ReactNode, useEffect, useCallback } from 'react';
import { inject, track } from '@vercel/analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
}

/**
 * Analytics provider component that initializes Vercel Analytics
 * and provides tracking functionality throughout the application
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Track page view with current path and referrer
  const trackPageView = useCallback(() => {
    track('page_view', { 
      path: window.location.pathname,
      referrer: document.referrer
    });
  }, []);

  useEffect(() => {
    // Initialize analytics once when the app loads
    inject();
    
    // Track initial page view
    trackPageView();
    
    // For SPA with react-scroll, we can track section visibility
    // but this would require more complex intersection observer logic
    // which can be added if needed
    
    return () => {
      // Cleanup if needed
    };
  }, [trackPageView]);
  
  return <>{children}</>;
}

/**
 * Utility function for tracking custom events
 * 
 * @param eventName - Name of the event to track
 * @param properties - Optional properties to include with the event
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
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
