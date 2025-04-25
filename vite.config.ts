import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.svg",
          "icons/*.png",
          "assets/*.pdf",
          "images/*.{jpg,png}",
        ],
        manifest: {
          name: "Darshan Gaikwad - Portfolio",
          short_name: "Darshan",
          description:
            "Portfolio website of Darshan Gaikwad, Frontend Developer specializing in React",
          theme_color: "#0090f5",
          icons: [
            {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
    build: {
      // Optimize build output
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: isProduction, // Keep console logs in development
          drop_debugger: true,
        },
      },
      // Change CSS minification from lightningcss to default
      cssMinify: true, // Changed from 'lightningcss' to true
      cssCodeSplit: false, // Use a single CSS file
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            animations: ["framer-motion"],
            icons: ["lucide-react", "react-icons"],
          },
        },
      },
      // Generate sourcemaps in development
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
      proxy: {
        "/api": {
          target: "https://darshan-gaikwad-portfolio.vercel.app",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    
    // Enable consistent preview mode
    preview: {
      port: 5173,
      host: true,
    },
  };
});
