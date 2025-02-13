import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import * as path from "node:path";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    keycloakify({
      accountThemeImplementation: "none",
      keycloakVersionTargets: {
        "all-other-versions": "reha-inside-theme.jar",
        "22-to-25": false
      },
      themeName: "reha-inside-theme",
      themeVersion: "1.0.0"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
