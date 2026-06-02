import { faker } from "@faker-js/faker";

Cypress.Commands.add("acessarLogin", (email) => {
  cy.visit("/login");
});

Cypress.Commands.add("preencherEmail", (email) => {
  cy.get("#user").type(email);
});

Cypress.Commands.add("preencherSenha", (senha) => {
  cy.get("#password").type(senha);
});

Cypress.Commands.add("clicarLogin", () => {
  cy.get("#btnLogin").click();
});

Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/login");
  cy.get("#user").type(email);
  cy.get("#password").type(senha);
  cy.get("#btnLogin").click();
  cy.get("#swal2-title")
    .should("have.text", "Login realizado")
    .should("be.visible");
});
