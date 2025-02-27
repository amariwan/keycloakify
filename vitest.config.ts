import { defineConfig } from "vitest/config";
import { resolve as pathResolve } from "path";

export default defineConfig({
  test: {
    alias: {
      keycloakify: pathResolve(__dirname, "./src")
    },
    exclude: ["**/node_modules/**", "**/dist/**", "**/sample_react_project/**"]
  }
});
