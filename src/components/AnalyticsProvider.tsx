import { ReactNode, useEffect } from "react";
import { inject } from "@vercel/analytics";

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    inject();
  }, []);

  return <>{children}</>;
}
