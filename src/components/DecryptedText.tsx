import React, { useState, useEffect, useRef, useCallback } from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set(),
  );
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let currentIteration = 0;

    const shuffleText = (
      originalText: string,
      currentRevealed: Set<number>,
    ): string => {
      const availableChars = useOriginalCharsOnly
        ? originalText.split("").filter((char) => char !== " ")
        : characters;

      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");
    };

    if (isHovering || animateOn === "view") {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              if (nextIndex >= 0) {
                const newRevealed = new Set(prevRevealed);
                newRevealed.add(nextIndex);
                setDisplayText(shuffleText(text, newRevealed));
                return newRevealed;
              }
            }

            clearInterval(interval!);
            setIsScrambling(false);
            return prevRevealed;
          } else {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval!);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    characters,
    useOriginalCharsOnly,
    animateOn,
    getNextIndex, // Now this is stable due to useCallback
  ]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsHovering(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animateOn]);

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
        className={`${className} ${isScrambling ? encryptedClassName : ""}`}
      >
        {displayText}
      </span>
    </div>
  );
}
