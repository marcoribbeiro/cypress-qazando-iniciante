const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'awoo1v', //'pp9aum', //
  e2e: {
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
    "charts": true,
    "reportTitle": 'Projeto do curso de Cypress',
    "reportPageTitle": 'Projeto do curso de Cypress',
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
      },
    baseUrl: "http://automationpratice.com.br/'",
    defaultCommandTimeout: 5000,
    //viewportHeight: 335,
    //viewportHeight: 889,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
