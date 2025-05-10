import maruthi from"../../fixtures/swaginput.json"
import swaglab from"../../pages/swaglabpage"
describe('verify swaglabs functionalities ', () => {
    it('verifing username Inputs', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get(swaglab.userNameInput()).type(maruthi.username)
      cy.get(swaglab.PasswordInput()).type(maruthi.password)
      cy.get(swaglab.submitButton()).click()

    })
  })