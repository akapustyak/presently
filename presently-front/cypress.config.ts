import { defineConfig } from "cypress";
import webpackConfig from "./webpack.cypress.config";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
    viewportWidth: 500,
    viewportHeight: 500,
  },

  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
