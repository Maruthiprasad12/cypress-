import herokuapp from "../../pages/herokupages"
import data from"../../fixtures/herokuinput.json"
describe('verify herokuapp functionalites ', () => {
    it('verify with valid username and password', () => {
      cy.herokuapp()
      cy.url().should("eq",'https://the-internet.herokuapp.com/secure')
      cy.get('a[href="/logout"]').click()
    })
  })
  describe('verify herokuapp functionalites ', () => {
    it('verify with invalid username and valid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get(herokuapp.userNameInput()).type(data.usernameh)
        cy.get(herokuapp.PasswordInput()).type(data.password1)
        cy.get(herokuapp.submitButton()).click()
        cy.get('div[id="flash"]')
       
    })
  })
  describe('verify herokuapp functionalites ', () => {
    it('verify with valid username and invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[id="username"]').type("tomsmith")
        cy.get('input[id="password"]').type("xgfasfhfd")
        cy.get('button[type="submit"]').click()
        cy.get('div[class="flash error"]') 
        cy.contains(' Your password is invalid!').should('be.visible')  
    })
  })
  describe('verify herokuapp functionalites ', () => {
    it('verify with invalid username and invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[id="username"]').type("toxbbbh")
        cy.get('input[id="password"]').type("xgfasfhfd")
        cy.get('button[type="submit"]').click()
        cy.get('div[class="flash error"]')
         
    })
  })

