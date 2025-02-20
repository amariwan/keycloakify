import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        "@": path.resolve(__dirname, "../src")
      }
    };
    return config;
  },
  staticDirs: ["../public"],
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: true,
    theme: {
      base: "light"
    }
  }
} as StorybookConfig;
