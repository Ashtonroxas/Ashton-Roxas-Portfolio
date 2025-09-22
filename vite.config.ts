import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Increase the warning limit for large chunks (optional)
    chunkSizeWarningLimit: 2000, // kB

    // Manual chunking to split large dependencies
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and ReactDOM into their own chunk
          "react-vendors": ["react", "react-dom"],
        },
      },
    },
  },
});
