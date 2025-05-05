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

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}: DecryptedTextProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set(),
  );
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const iterationRef = useRef(0);

  // Memoize the characters array to avoid recreating it on each render
  const availableChars = useMemo(
    () =>
      useOriginalCharsOnly
        ? text.split("").filter((char) => char !== " ")
        : characters.split(""),
    [text, characters, useOriginalCharsOnly],
  );

  // Move getNextIndex into useCallback to fix the exhaustive-deps warning
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
        case "random":
        default: {
          // Find indices that aren't revealed yet
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
    [revealDirection, text],
  );

  // Optimize shuffle function with useMemo
  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>): string => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];

          // Use cached array for better performance
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");
    },
    [availableChars],
  );

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset animation when text changes
  useEffect(() => {
    setDisplayText(text);
    setRevealedIndices(new Set());
    iterationRef.current = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [text]);

  // Main animation effect with revealedIndices added to dependencies
  useEffect(() => {
    if (isHovering || animateOn === "view") {
      setIsScrambling(true);
      iterationRef.current = 0;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Store the interval ID in the ref
      const intervalId = setInterval(() => {
        iterationRef.current += 1;

        if (sequential) {
          setRevealedIndices((prevRevealed) => {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              if (nextIndex >= 0) {
                const newRevealed = new Set(prevRevealed);
                newRevealed.add(nextIndex);
                setDisplayText(shuffleText(text, newRevealed));
                return newRevealed;
              }
            }

            // Finish animation
            clearInterval(intervalId);
            setIsScrambling(false);
            return prevRevealed;
          });
        } else {
          // For non-sequential animation
          setDisplayText(shuffleText(text, revealedIndices));

          if (iterationRef.current >= maxIterations) {
            clearInterval(intervalId);
            setIsScrambling(false);
            setDisplayText(text);
          }
        }
      }, speed);

      // Save the ID to the ref
      intervalRef.current = intervalId;

      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    } else {
      // Reset when not hovering and using hover mode
      if (animateOn === "hover" && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(text);
        setRevealedIndices(new Set());
        setIsScrambling(false);
      }
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    shuffleText,
    animateOn,
    getNextIndex,
    revealedIndices, // Add missing dependency
  ]);

  // IntersectionObserver for view mode
  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsHovering(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "0px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animateOn]);

  // Use CSS transitions for smoother character changes
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
        className={`${className} ${isScrambling ? encryptedClassName : ""} transition-colors duration-150`}
        style={{
          willChange: "contents",
          display: "inline-block",
          transform: "translateZ(0)", // Hardware acceleration
        }}
      >
        {displayText}
      </span>
    </div>
  );
}
