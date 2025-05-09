import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  hoverRotationDegrees?: number;
}

const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = "",
  hoverRotationDegrees = 3,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate distance from the center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateXValue =
      ((e.clientY - centerY) / (rect.height / 2)) * hoverRotationDegrees;
    const rotateYValue =
      ((centerX - e.clientX) / (rect.width / 2)) * hoverRotationDegrees;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves the card
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${className} perspective will-change-transform`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        z: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
