import React, { useState, useEffect } from "react";

interface PerformanceEntry {
  name: string;
  value: number;
}

interface MemoryInfo {
  usedJSHeapSize: string;
  totalJSHeapSize: string;
}

// Define a proper interface for the Chrome Performance Memory API
interface PerformanceMemory {
  totalJSHeapSize: number;
  usedJSHeapSize: number;
  jsHeapSizeLimit: number;
}

// Extend the Performance interface to include memory
interface ExtendedPerformance extends Performance {
  memory?: PerformanceMemory;
}

const PerformanceDebugger: React.FC<{ enabled?: boolean }> = ({
  enabled = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceEntry[]>([]);
  const [fps, setFps] = useState<number | null>(null);
  const [memoryInfo, setMemoryInfo] = useState<MemoryInfo | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Get initial performance metrics
    const getPerformanceMetrics = () => {
      if (window.performance) {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType("paint");

        if (navigation) {
          const entries: PerformanceEntry[] = [
            {
              name: "TTFB",
              value: navigation.responseStart - navigation.requestStart,
            },
            { name: "DOM Content", value: navigation.domContentLoadedEventEnd },
            { name: "Load", value: navigation.loadEventEnd },
          ];

          paint.forEach((entry) => {
            entries.push({ name: entry.name, value: entry.startTime });
          });

          setMetrics(entries);
        }
      }

      // Get memory info if available (Chrome only)
      const extendedPerformance = performance as ExtendedPerformance;
      if (extendedPerformance.memory) {
        setMemoryInfo({
          usedJSHeapSize: formatBytes(
            extendedPerformance.memory.usedJSHeapSize,
          ),
          totalJSHeapSize: formatBytes(
            extendedPerformance.memory.totalJSHeapSize,
          ),
        });
      }
    };

    // Measure FPS
    let frameCount = 0;
    let lastTime = performance.now();
    let frameId: number;

    const measureFPS = (timestamp: number) => {
      frameCount++;
      const elapsed = timestamp - lastTime;

      if (elapsed >= 1000) {
        setFps(Math.round((frameCount * 1000) / elapsed));
        frameCount = 0;
        lastTime = timestamp;
      }

      frameId = requestAnimationFrame(measureFPS);
    };

    getPerformanceMetrics();
    frameId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  function formatBytes(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "8px",
        borderRadius: "4px",
        fontSize: "12px",
        zIndex: 9999,
        maxWidth: "200px",
        userSelect: "none",
      }}
    >
      <div style={{ marginBottom: "5px", fontWeight: "bold" }}>Performance</div>
      <div style={{ color: fps && fps < 30 ? "#ff6b6b" : "#a5ff9f" }}>
        FPS: {fps !== null ? fps : "calculating..."}
      </div>
      {metrics.map((metric) => (
        <div key={metric.name}>
          {metric.name}: {metric.value.toFixed(1)}ms
        </div>
      ))}
      {memoryInfo && (
        <>
          <div>Memory used: {memoryInfo.usedJSHeapSize}</div>
          <div>Memory total: {memoryInfo.totalJSHeapSize}</div>
        </>
      )}
    </div>
  );
};

export default PerformanceDebugger;
