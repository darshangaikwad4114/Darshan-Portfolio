import React from "react";

interface SimpleCardProps {
  children: React.ReactNode;
  className?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
