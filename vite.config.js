import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    outDir: "dist",
    sourcemap: false, // Disable source maps in production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },

  // Development server config (for local development)
  server: {
    host: "0.0.0.0", // Allow external connections
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },

  // Preview server config (for testing production build)
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
  },

  // Environment variables
  define: {
    // Make sure to prefix with VITE_ for client-side access
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },

  // Base path (adjust if serving from subdirectory)
  base: "/",
});
