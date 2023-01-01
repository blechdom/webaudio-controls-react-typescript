module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "./jest.transform.js",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/node_modules/(?!@storybook)",
  ],
  moduleNameMapper: {
    "\\.mdx?$": "<rootDir>/src/tests/mocks/mdxMock.js",
  },
};
