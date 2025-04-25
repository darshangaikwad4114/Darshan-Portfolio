import React, { useState, useEffect } from 'react';

interface SizeDebuggerProps {
  enabled?: boolean;
}

const SizeDebugger: React.FC<SizeDebuggerProps> = ({ enabled = false }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  const [fontSize, setFontSize] = useState('');
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  const [deviceOrientation, setDeviceOrientation] = useState('');
  
  useEffect(() => {
    if (!enabled) return;
    
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      const computedStyle = window.getComputedStyle(document.documentElement);
      setFontSize(computedStyle.fontSize);
      setDevicePixelRatio(window.devicePixelRatio);
      setDeviceOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, [enabled]);
  
  if (!enabled) return null;
  
  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 9999,
        maxWidth: '200px'
      }}
    >
      <div>Window: {windowSize.width}px × {windowSize.height}px</div>
      <div>Root font: {fontSize}</div>
      <div>Pixel ratio: {devicePixelRatio}x</div>
      <div>Orientation: {deviceOrientation}</div>
      <div>Environment: {import.meta.env.DEV ? 'Development' : 'Production'}</div>
    </div>
  );
};

export default SizeDebugger;
