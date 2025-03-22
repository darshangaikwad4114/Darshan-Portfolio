import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { inject } from '@vercel/analytics';
import { SpeedInsightsProvider } from './components/SpeedInsightsProvider';

// Add this for debugging image paths in production
if (import.meta.env.PROD) {
  console.log('Running in production mode');
  console.log('Public URL:', import.meta.env.BASE_URL);
}

// Wrap the app with the SpeedInsightsProvider for enhanced metrics tracking
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsightsProvider>
      <App />
    </SpeedInsightsProvider>
  </StrictMode>
);

// Initialize analytics
inject();
