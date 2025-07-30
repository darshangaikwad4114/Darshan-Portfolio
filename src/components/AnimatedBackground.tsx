import React from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Simple clean gradient background for both themes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 dark:from-gray-900/50 dark:via-gray-900 dark:to-blue-900/30" />
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
