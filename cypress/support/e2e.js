require('@shelex/cypress-allure-plugin');
require('cypress-plugin-api');
import './commands'

before(() => {
    cy.exec('rm -rf cypress/screenshots/*');
});