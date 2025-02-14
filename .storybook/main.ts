import type { StorybookConfig } from "@storybook/react-vite";

export default {
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
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
