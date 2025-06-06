const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    "video": true,
    defaultCommandTimeout: 40000,
       "baseUrl":"https://opensource-demo.orangehrmlive.com",
       "cookievalue":"orangehrm=tqj0vm70miegufae6v03n3bljl",
      // specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
       on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
