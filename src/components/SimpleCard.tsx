import { ReactNode } from "react";

interface SimpleCardProps {
  children: ReactNode;
  className?: string;
}

const SimpleCard = ({ children, className = "" }: SimpleCardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
