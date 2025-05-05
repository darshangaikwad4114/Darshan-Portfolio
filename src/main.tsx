import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { SpeedInsightsProvider } from "./components/SpeedInsightsProvider";

// Initialize analytics in production only
if (import.meta.env.PROD) {
  inject();
}

// Wrap the app with the SpeedInsightsProvider for enhanced metrics tracking
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsightsProvider>
      <App />
    </SpeedInsightsProvider>
  </StrictMode>,
);
