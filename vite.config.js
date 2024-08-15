import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
   base: "https://miguecarmona12.github.io/paradise",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
