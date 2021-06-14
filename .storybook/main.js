const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");

module.exports = {
  stories: ["../src/**/*.stories.@(mdx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          // TODO: these are only necessary until @storybook/theming upgrades to @emotion/styled@11
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          "emotion-theming": getPackageDir("@emotion/react"),
        },
      },
    });
  },
}

function getPackageDir(package) {
  return path.dirname(require.resolve(path.join(package, 'package.json')))
}
