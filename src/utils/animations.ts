// 🚀 CENTRALIZED ANIMATION VARIANTS - Single source of truth
export const animationVariants = {
  // Container animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  containerSlow: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  },

  // Card animations with performance optimizations
  card: {
    hidden: {
      opacity: 0,
      y: 20, // Reduced from 50 for better performance
      scale: 0.95, // Reduced from 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Increased for snappier animation
        damping: 20, // Increased for less bounce
        duration: 0.4, // Reduced from 0.6
      },
    },
  },

  // Fade animations
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },

  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  },

  // Button hover states
  buttonHover: {
    hover: { scale: 1.02, y: -2 },
    tap: { scale: 0.98 },
  },

  // Icon hover states
  iconHover: {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  },
};

// 🚀 OPTIMIZED VIEWPORT CONFIGURATIONS
export const viewportConfig = {
  default: { once: true, margin: "-50px" },
  lazy: { once: true, margin: "-100px" },
  eager: { once: true, margin: "0px" },
};

// 🚀 TRANSITION PRESETS
export const transitions = {
  fast: { duration: 0.2, ease: "easeOut" },
  normal: { duration: 0.3, ease: "easeOut" },
  slow: { duration: 0.5, ease: "easeOut" },
  spring: { type: "spring", stiffness: 100, damping: 20 },
  bouncy: { type: "spring", stiffness: 200, damping: 10 },
};
