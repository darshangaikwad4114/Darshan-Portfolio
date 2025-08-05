import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
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
  onLoad,
  onError,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          {alt || "Image not available"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={`${className} transition-all duration-300`}
      onError={() => {
        setError(true);
        if (onError) onError();
      }}
      onLoad={() => {
        if (onLoad) onLoad();
      }}
      sizes={sizes}
      style={{
        objectFit: "cover",
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
    />
  );
}
