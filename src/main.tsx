import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// No need to import inject here as we're using the AnalyticsProvider component

// Add this for debugging image paths in production
if (import.meta.env.PROD) {
  console.log('Running in production mode');
  console.log('Public URL:', import.meta.env.BASE_URL);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Remove this as we're handling it in AnalyticsProvider component
// inject();
