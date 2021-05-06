const path = require("path");

module.exports = {
  "stories": [
    "../resources/js/**/*.stories.mdx",
    "../resources/js/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.fallback = {
      "crypto": false,
      "path": false,
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "/../resources/js"),
    };

    return config;
  }
}
