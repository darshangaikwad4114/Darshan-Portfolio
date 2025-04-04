import { ReactNode, useEffect, useCallback } from "react";
import { inject, track } from "@vercel/analytics";

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
    track("page_view", {
      path: window.location.pathname,
      referrer: document.referrer,
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

// Move utility function to a separate file
// This fixes the react-refresh/only-export-components warning
