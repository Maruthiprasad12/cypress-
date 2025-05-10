const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": true,
    defaultCommandTimeout: 40000,
       "baseUrl":"https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
