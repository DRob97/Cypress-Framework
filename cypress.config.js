const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({

  env: {
    SITE_URL: process.env.UI_URL
  },
  e2e: {
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
