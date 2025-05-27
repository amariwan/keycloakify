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
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
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

  docs: {
    theme: {
      base: "light"
    }
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
} as StorybookConfig;
