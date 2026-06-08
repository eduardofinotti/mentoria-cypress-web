const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "uq5js2",
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://automationpratice.com.br',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    }
  }
});
