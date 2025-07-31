import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

interface ScrollProgressBarProps {
  className?: string;
  height?: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  className = "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg",
  height = 4,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Only show progress bar after scrolling down a bit
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 ${className} z-[100]`}
      style={{
        height: `${height}px`,
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ScrollProgressBar;
