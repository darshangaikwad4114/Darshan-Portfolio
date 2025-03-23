import React from 'react';
import { motion } from 'framer-motion';

interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-primary-600 dark:text-primary-400',
    white: 'text-white',
    gray: 'text-gray-600 dark:text-gray-400'
  };

  const spinnerSize = sizeClasses[size];
  const spinnerColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`${spinnerSize} ${spinnerColor}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
          <path 
            d="M12 2C6.47715 2 2 6.47715 2 12C2 12.6342 2.05802 13.2532 2.17065 13.8523" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default LoadingIndicator;
