import { ReactNode } from "react";

interface AnalyticsProviderProps {
  children: ReactNode;
}

// Simplified since inject() is already called in main.tsx
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return <>{children}</>;
}
