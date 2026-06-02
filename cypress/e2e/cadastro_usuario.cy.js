/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
import {
  acessarCadastro,
  casdastrar,
  preencherEmail,
  preencherNome,
  preencherSenha,
  validarCadastroSucesso,
} from "../support/pages/cadastro_usuario_page";

describe(`Cadastro de usuário`, () => {
  it(`Cadastro de usuário com sucesso`, () => {
    acessarCadastro();
    preencherNome(faker.person.firstName());
    preencherEmail("test@tesr.com");
    preencherSenha("121212");
    casdastrar();

    validarCadastroSucesso();
    // cadastrarUsuario('eduardo', 'email@email.com', '123456')
  });

  it(`Cadastro com email invalido`, () => {
    acessarCadastro();
    preencherNome("eduardo");
    preencherEmail("t12121212m");
    preencherSenha("121212");
    casdastrar();

    validarCadastroSucesso();
  });

  it(`Cadastro com email sem @`, () => {
    acessarCadastro();
    preencherNome("eduardo");
    preencherEmail("testes.com");
    preencherSenha("121212");
    casdastrar();
  });
});
