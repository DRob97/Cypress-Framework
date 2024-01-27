const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  defaultCommandTimeout: 4000,

  viewportHeight: 1440,
  viewportWidth: 2560,
  chromeWebSecurity: false,
  retries: 2,
  env: {
    SITE_URL: process.env.UI_URL
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    viewportHeight: 1440,
    viewportWidth: 2560,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
  },
})
