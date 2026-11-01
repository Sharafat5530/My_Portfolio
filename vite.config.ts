import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// This file runs under Node, but the template ships no @types/node. Declare the one global it reads.
declare const process: { env: Record<string, string | undefined>; cwd(): string };

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: { overlay: false },
    watch: {
      // Using glob strings instead of functions to prevent TypeScript compilation (tsc) errors
      ignored: [
        "**/server/**",
        "**/.web-builder/**",
        "**/*.db",
        "**/*.db-*",
        "**/*.tsbuildinfo",
        "**/*.md",
      ],
    },
    proxy: {
      "/api": {
        target: `http://127.0.0.1:${process.env.BACKEND_PORT ?? "8000"}`,
        changeOrigin: true,
        ws: true,
      },
    },
  },
});