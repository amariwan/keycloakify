import { defineConfig, loadEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/",
    plugins: [
      react(),
      keycloakify({
        accountThemeImplementation: "none",
        keycloakVersionTargets: {
          "all-other-versions": `${env.THEME_NAME}.jar`,
          "22-to-25": false
        },
        themeName: env.THEME_NAME,
        themeVersion: "1.0.0"
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    define: {
      "import.meta.env.THEME_NAME": JSON.stringify(env.THEME_NAME || "default-theme")
    }
  };
});
