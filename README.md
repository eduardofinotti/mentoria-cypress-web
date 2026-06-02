# Projeto de Automação Web com Cypress

Projeto simples de automação de testes web utilizando **Cypress**.

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js
- npm
- Visual Studio Code ou outro editor de código

Para verificar se o Node.js e o npm estão instalados, execute:

```bash
node -v
npm -v
```

## Instalação

Clone o projeto ou crie a pasta do projeto e acesse pelo terminal:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Caso o Cypress ainda não esteja instalado, execute:

```bash
npm install cypress
```

## Estrutura básica

```bash
cypress/
  e2e/
    teste.cy.js
  fixtures/
  support/
    commands.js
    e2e.js

cypress.config.js
package.json
```

## Abrir o Cypress

Para abrir a interface do Cypress, execute:

```bash
npx cypress open
```

Depois escolha a opção **E2E Testing** e selecione o navegador desejado.

## Executar os testes pelo terminal

Para rodar os testes em modo headless, execute:

```bash
npx cypress run
```

## Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/teste.cy.js"
```

## Exemplo de teste

Arquivo: `cypress/e2e/teste.cy.js`

```javascript
describe('Testes Web', () => {
  it('Deve acessar a página inicial', () => {
    cy.visit('/')
  })
})
```

## Scripts sugeridos

No `package.json`, você pode adicionar:

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

Assim, você pode executar:

```bash
npm run cy:open
```

ou

```bash
npm run cy:run
```

## Observação

Este é um projeto básico para iniciar automação de testes web com Cypress.
