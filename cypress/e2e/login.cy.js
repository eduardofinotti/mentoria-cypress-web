/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

// const telas = ["iphone-xr", "samsung-s10", "macbook-16"];

const telas = [
  { dispositivo: "Desktop", largura: 1280, altura: 720 },
  { dispositivo: "Tablet", largura: 768, altura: 1024 },
  { dispositivo: "Celular (iPhone X)", largura: 405, altura: 812 },
];

telas.forEach((tela) => {
  describe(`Login - ${tela.dispositivo}`, () => {
    beforeEach(() => {
      // Dado
      // Acessar tela de login
      cy.viewport(tela.largura, tela.altura);
      cy.acessarLogin();
    });

    it.only(`Login com sucesso - ${tela.dispositivo}`, () => {
      // Preencher email e senha
      
      // cy.get("#user").type(faker.internet.email());
      cy.preencherEmail(faker.internet.email())

      cy.get("#password")
        .type(faker.string.numeric(6))
        .should("have.attr", "type", "password");

      // Quando
      // Clicar em entrar
      cy.clicarLogin()

      // Entao
      // Vejo mensagem de login com sucesso
      cy.get("#swal2-title")
        .should("have.text", "Login realizado")
        .should("be.visible");
    });

    it(`Login com campos vazios - ${tela.dispositivo}`, () => {
      cy.clicarLogin()

      cy.get(".invalid_input")
        .should("be.visible")
        .should("have.text", "E-mail inválido.");
    });

    it(`Login e-mail vazio - ${tela.dispositivo}`, () => {
      cy.get("#user").should("have.value", "");
      cy.get("#password").type(faker.string.numeric(6));
      cy.clicarLogin()

      cy.get(".invalid_input")
        .should("have.text", "E-mail inválido.")
        .should("be.visible");
    });

    it(`Login senha vazia - ${tela.dispositivo}`, () => {
      cy.get("#user").type(faker.internet.email());
      cy.clicarLogin()

      cy.get(".invalid_input")
        .should("have.text", "Senha inválida.")
        .should("be.visible");
    });

    it.only(`Login e-mail inválido - ${tela.dispositivo}`, () => {
      
      cy.preencherEmail(faker.string.numeric(6))
      // cy.get("#user").type(faker.string.numeric(6));
      
      cy.get("#password").type(faker.string.numeric(6));
      cy.clicarLogin()

      cy.get(".invalid_input")
        .should("have.text", "E-mail inválido.")
        .should("be.visible");
    });

    it(`Login senha inválida - ${tela.dispositivo}`, () => {
      cy.get("#user").type(faker.internet.email());
      cy.get("#password").type(faker.string.numeric(4));
      cy.get("#btnLogin").click();

      cy.get(".invalid_input")
        .should("have.text", "Senha inválida.")
        .should("be.visible");
    });

    it(`Botão ainda não tem conta - ${tela.dispositivo}`, () => {
      cy.get("#createAccount").click();

      cy.get(".account_form")
        .find("h3")
        .should("have.text", "Cadastro de usuário")
        .should("be.visible");
    });
  });
});
