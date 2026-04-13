import "@testing-library/jest-dom";

// Mock IntersectionObserver
Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: class IntersectionObserver {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  },
});

// Mock ResizeObserver
Object.defineProperty(globalThis, "ResizeObserver", {
  writable: true,
  value: class ResizeObserver {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  },
});
