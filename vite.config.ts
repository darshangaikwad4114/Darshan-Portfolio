import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    build: {
      // Optimize build output
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: isProduction, // Remove console logs in production
          drop_debugger: isProduction, // Remove debugger statements in production
          pure_funcs: isProduction
            ? ["console.log", "console.info", "console.debug"]
            : [],
        },
      },
      cssMinify: true,
      cssCodeSplit: false, // Use a single CSS file for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            animations: ["framer-motion"],
            icons: ["lucide-react", "react-icons"],
          },
        },
      },
      // Generate sourcemaps only in development
      sourcemap: !isProduction,
    },

    // Add consistent CSS configuration for development
    css: {
      devSourcemap: true,
    },

    // Add path aliases for cleaner imports
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true, // Listen on all addresses, including LAN and public addresses
      hmr: {
        overlay: true,
      },
      // Add security headers
      headers: {
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
      },
      // Proxy configuration removed as it's not needed
    },

    // Enable consistent preview mode
    preview: {
      port: 5173,
      host: true,
    },
  };
});
