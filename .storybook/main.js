module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "@storybook/addon-links",
    "@storybook/addon-storyshots",
  ],
  framework: "@storybook/react",
  staticDirs: ["../src/stories/assets", "../src/webaudio-controls"],
};
