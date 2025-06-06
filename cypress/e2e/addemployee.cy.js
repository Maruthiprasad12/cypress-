describe('verify add employee functionalities', () => {
  it('passes', () => {
    cy.login()
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('input[name="firstName"]').type("maruthi")
    cy.get('input[name="lastName"]').type("prasad")
    cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input').type("12345")
    cy.get("button[type='submit']").click()
    cy.contains('Successfully Saved').should("be.visible")
    cy.url().should('include',"web/index.php/pim/viewPersonalDetails/empNumber")
  })
})
describe('verify add employee functionalities', () => {
  it('passes', () => {
    cy.login()
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('input[name="firstName"]').type("Prasad")
    cy.get('input[name="lastName"]').type("PC")
    cy.get("button[type='submit']").click()
    cy.contains('Successfully Saved').should("be.visible")
  })
})