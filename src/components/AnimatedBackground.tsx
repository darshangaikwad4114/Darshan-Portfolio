import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  colors?: string[];
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  particleCount = 20,
  colors = ["#0090F5", "#6A98F0", "#8167F0", "#FF8B4C"],
}) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, [particleCount, colors]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
