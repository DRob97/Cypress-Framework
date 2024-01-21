const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({

  env: {
    SITE_URL: process.env.UI_URL
  },
  e2e: {
    viewportHeight: 1440,
    viewportWidth: 2560,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
