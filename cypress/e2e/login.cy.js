import login from "../../pages/loginpage"
import data from"../../fixtures/loginpasswords.json"
describe('Verify Login functionality', () => {


    it('Verify Logo visible in login page', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.OrageHRMlogo()).should("be.visible")

       
    })
    it('Verify Login with valid Credentials', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.usernameNameInput()).type(data.username)
        cy.get(login.PasswordInput()).type(data.Password)
        cy.get(login.submittbutton()).click()
        // cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/')
       
    })
    it('Verify Login with invalid username and valid password', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        cy.get('input[placeholder="Username"]').type(data.username1)
        cy.get('input[placeholder="Password"]').type(data.Password)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div.orangehrm-login-error > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p').should("be.visible")
    })
    it('Verify Login with valid username and invalid password', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        cy.get('input[placeholder="Username"]').type(data.username)
        cy.get('input[placeholder="Password"]').type(data.Password1)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div.orangehrm-login-error > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p').should("be.visible")
    })
    it('Verify Login with invalid username and invalid password', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        cy.get('input[placeholder="Username"]').type(data.username1)
        cy.get('input[placeholder="Password"]').type(data.Password1)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div.orangehrm-login-error > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error').should("be.visible")
    }) 
 })