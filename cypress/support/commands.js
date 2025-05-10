// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//require('@4tw/cypress-drag-drop')
Cypress.Commands.add('login', () => {    
    cy.visit('/web/index.php/auth/login')
    // cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin123")
    cy.get("button[type='submit']").click()
    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
Cypress.Commands.add('herokuapp', () => {

    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('input[id="username"]').type("tomsmith")
    cy.get('input[id="password"]').type("SuperSecretPassword!")
    cy.get('button[type="submit"]').click()
 })