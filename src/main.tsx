import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Initialize analytics in production only
if (import.meta.env.PROD) {
  inject();
}

// Remove React StrictMode in production for better performance
const AppWrapper = import.meta.env.PROD ? (
  <>
    <App />
    <SpeedInsights />
  </>
) : (
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);

createRoot(document.getElementById("root")!).render(AppWrapper);
