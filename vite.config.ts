import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import { buildEmailTheme } from "keycloakify-emails";
import * as path from "node:path";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    keycloakify({
      accountThemeImplementation: "Single-Page",
      keycloakVersionTargets: {
        "all-other-versions": "reha-inside-theme.jar",
        "22-to-25": false
      },
      themeName: "reha-inside-theme",
      themeVersion: "1.0.0",
      postBuild: async buildContext => {
        await buildEmailTheme({
          templatesSrcDirPath: import.meta.dirname + "/emails/page",
          themeNames: buildContext.themeNames,
          keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
          locales: ["en", "de"],
          i18nSourceFile: import.meta.dirname + "/emails/i18n.ts",
          cwd: import.meta.dirname,
          esbuild: {}
        });
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  define: {
    "process.env": {},
    "process.cwd": '() => "/"'
  },
  build: {
    rollupOptions: {
      external: ["fs", "path"]
    }
  }
});
