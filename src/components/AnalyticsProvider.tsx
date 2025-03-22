import { ReactNode, useEffect } from 'react';
import { inject, track } from '@vercel/analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
}

// A wrapper component that initializes Vercel Analytics
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize analytics once when the app loads
    inject();
    
    // Track initial page view
    track('page_view', { path: window.location.pathname });
    
    // Optional: Track route changes if you implement client-side routing
    const handleRouteChange = () => {
      track('page_view', { 
        path: window.location.pathname,
        referrer: document.referrer
      });
    };
    
    // For SPA routing - add event listeners for your router here if needed
    
    return () => {
      // Clean up event listeners if added
    };
  }, []);
  
  return <>{children}</>;
}

// Export a utility function for custom event tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};
