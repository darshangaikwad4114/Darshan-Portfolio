import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  color = "bg-primary-500 dark:bg-primary-400",
  height = 3,
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
      className={`fixed top-0 left-0 right-0 ${color} z-50`}
      style={{
        height,
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ScrollProgressBar;
