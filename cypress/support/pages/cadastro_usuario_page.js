
export function acessarCadastro() {
  cy.visit("/register");
}

export function preencherNome(nome) {
  // cy.preencheCampo('#user', 'infosdsidjsi')
  cy.get("#user").type(nome);
}

export function preencherEmail(email) {
  cy.preencheCampo("#email", email);
}

export function preencherSenha(senha) {
  cy.preencheCampo("#password", senha);
}

export function casdastrar() {
  cy.get("#btnRegister").click();
}

export function validarCadastroSucesso() {
  cy.get("#msg").should("be.visible");
}

export function cadastrarUsuario(nome, email, senha) {
  acessarCadastro();
  preencherNome(nome);
  preencherEmail(email);
  preencherSenha(senha);
  casdastrar();
}
