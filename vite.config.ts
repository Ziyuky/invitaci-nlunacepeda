import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// GitHub Project Pages serves the site at https://<user>.github.io/<repo>/ — set BASE_PATH in CI.
// For a custom domain or username.github.io root site, use BASE_PATH=/ or omit it.
// https://vitejs.dev/config/shared-options.html#base
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
});
