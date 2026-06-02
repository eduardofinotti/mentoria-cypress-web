import { faker } from "@faker-js/faker";

Cypress.Commands.add("preencheCampo", (selector, info) => {
  cy.get(selector, { timeout: 30000 })
    .should("be.visible")
    .clear()
    .type(info);
});
