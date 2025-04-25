import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder = "https://via.placeholder.com/400x300?text=Loading...",
  onLoad,
  onError,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(!priority);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(priority ? src : placeholder);

  useEffect(() => {
    // Skip if image is prioritized (already loaded) or if there was an error
    if (priority || error) return;

    let isMounted = true;
    const img = new Image();
    img.src = src;

    // Set longer timeout for slower connections
    const timeoutId = setTimeout(() => {
      if (isMounted && loading) {
        console.warn(`Image load timeout for: ${src}`);
      }
    }, 8000);

    img.onload = () => {
      if (isMounted) {
        setImgSrc(src);
        setLoading(false);
        if (onLoad) onLoad();
        clearTimeout(timeoutId);
      }
    };

    img.onerror = () => {
      if (isMounted) {
        console.error(`Failed to load image: ${src}`);
        setError(true);
        if (onError) onError();
        clearTimeout(timeoutId);
      }
    };

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [src, priority, error, onLoad, onError, loading]);

  if (error) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          Failed to load image
        </span>
      </div>
    );
  }

  return (
    <motion.div className="relative w-full h-full">
      <motion.img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={`${className} ${loading ? "filter blur-sm" : "filter blur-0"} transition-all duration-300`}
        animate={{ opacity: loading ? 0.7 : 1 }}
        onError={() => {
          setError(true);
          if (onError) onError();
        }}
        sizes={sizes}
        decoding={priority ? "sync" : "async"}
        style={{
          objectFit: "cover",
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "100%", 
        }}
      />
    </motion.div>
  );
}
