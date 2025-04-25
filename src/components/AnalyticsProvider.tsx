import { ReactNode, useEffect } from "react";
import { inject } from "@vercel/analytics";

interface AnalyticsProviderProps {
  children: ReactNode;
}

/**
 * Analytics provider component that initializes Vercel Analytics
 * and provides tracking functionality throughout the application
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize Vercel Analytics
    inject();
  }, []);

  return <>{children}</>;
}
