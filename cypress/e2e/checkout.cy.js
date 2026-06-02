/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe(`Checkout`, () => {
  it(`Checkout realizado com sucesso`, () => {
    cy.visit("/login");
    cy.get("#user").type(email);
    cy.get("#password").type(senha);
    cy.get("#btnLogin").click();
    cy.get("#swal2-title")
      .should("have.text", "Login realizado")
      .should("be.visible");

    cy.login("edu@qazando.com", "123456");
  });
});
