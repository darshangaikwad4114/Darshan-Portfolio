import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        
        {/* Add Vercel Speed Insights - now that the package is installed */}
        <SpeedInsights />
      </div>
    </AnalyticsProvider>
  );
}

export default App;