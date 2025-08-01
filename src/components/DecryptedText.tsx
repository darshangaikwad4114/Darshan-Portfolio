import { useState, useEffect, useRef, useCallback, useMemo } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center" | "random";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view";
  [key: string]: string | number | boolean | undefined;
}

// 🚀 OPTIMIZATION 1: Extract animation engine to custom hook
const useDecryptAnimation = (
  text: string,
  speed: number,
  maxIterations: number,
  sequential: boolean,
  revealDirection: DecryptedTextProps["revealDirection"],
  availableChars: string[],
) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const iterationRef = useRef(0);
  const revealedIndicesRef = useRef<Set<number>>(new Set());

  // 🚀 OPTIMIZATION 2: Memoize heavy calculations
  const getNextIndex = useCallback(
    (revealedSet: Set<number>): number => {
      const textLength = text.length;

      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return textLength - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          return revealedSet.size % 2 === 0
            ? middle + offset
            : middle - offset - 1;
        }
        default: {
          const availableIndices = Array.from(
            { length: textLength },
            (_, i) => i,
          ).filter((i) => !revealedSet.has(i) && text[i] !== " ");
          if (availableIndices.length === 0) return -1;
          return availableIndices[
            Math.floor(Math.random() * availableIndices.length)
          ];
        }
      }
    },
    [text, revealDirection],
  );

  // 🚀 OPTIMIZATION 3: Use RAF for smooth animations instead of setInterval
  const animateFrame = useCallback(() => {
    if (!isScrambling) return;

    iterationRef.current += 1;

    if (sequential) {
      const currentRevealed = revealedIndicesRef.current;
      if (currentRevealed.size >= text.length) {
        setIsScrambling(false);
        return;
      }

      const nextIndex = getNextIndex(currentRevealed);
      if (nextIndex >= 0) {
        revealedIndicesRef.current = new Set([...currentRevealed, nextIndex]);
      }
    }

    // Update display text with current revealed indices
    setDisplayText(() => {
      const currentRevealed = revealedIndicesRef.current;
      return text
        .split("")
        .map((char, i) => {
          if (char === " " || currentRevealed.has(i)) return text[i];
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");
    });

    if (iterationRef.current >= maxIterations && !sequential) {
      setIsScrambling(false);
      setDisplayText(text);
    }
  }, [
    isScrambling,
    sequential,
    text,
    maxIterations,
    getNextIndex,
    availableChars,
  ]);

  // 🚀 OPTIMIZATION 4: Single RAF loop instead of setInterval
  useEffect(() => {
    if (!isScrambling) return;

    let animationId: number;

    const animate = () => {
      animateFrame();
      if (isScrambling) {
        animationId = setTimeout(() => requestAnimationFrame(animate), speed);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      if (animationId) clearTimeout(animationId);
    };
  }, [isScrambling, animateFrame, speed]);

  const startAnimation = useCallback(() => {
    setIsScrambling(true);
    revealedIndicesRef.current = new Set();
    iterationRef.current = 0;
  }, []);

  const resetAnimation = useCallback(() => {
    setIsScrambling(false);
    setDisplayText(text);
    revealedIndicesRef.current = new Set();
    iterationRef.current = 0;
  }, [text]);

  return {
    displayText,
    isScrambling,
    startAnimation,
    resetAnimation,
  };
};

export default function OptimizedDecryptedText({
  text,
  speed = 30,
  maxIterations = 6,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}: DecryptedTextProps) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🚀 OPTIMIZATION 5: Move character array to useMemo with proper dependencies
  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? [...new Set(text.split("").filter((char) => char !== " "))]
      : characters.split("");
  }, [text, characters, useOriginalCharsOnly]);

  // 🚀 OPTIMIZATION 6: Use the optimized animation hook
  const { displayText, isScrambling, startAnimation, resetAnimation } =
    useDecryptAnimation(
      text,
      speed,
      maxIterations,
      sequential,
      revealDirection,
      availableChars,
    );

  // 🚀 OPTIMIZATION 7: Simplified trigger logic
  useEffect(() => {
    if (animateOn === "hover") {
      if (isHovering) {
        startAnimation();
      } else {
        resetAnimation();
      }
    }
  }, [isHovering, animateOn, startAnimation, resetAnimation]);

  // 🚀 OPTIMIZATION 8: Intersection Observer with cleanup
  useEffect(() => {
    if (animateOn !== "view" || !containerRef.current) return;

    const element = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animateOn, startAnimation]);

  // 🚀 OPTIMIZATION 9: Simplified render with CSS optimization
  return (
    <div
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={
        animateOn === "hover" ? () => setIsHovering(true) : undefined
      }
      onMouseLeave={
        animateOn === "hover" ? () => setIsHovering(false) : undefined
      }
      {...props}
    >
      <span
        className={`${className} ${isScrambling ? encryptedClassName : ""} transition-colors duration-150 will-change-contents`}
        style={{
          contain: "layout style", // CSS containment for better performance
          fontKerning: "none", // Prevent text shifting during animation
        }}
      >
        {displayText}
      </span>
    </div>
  );
}
