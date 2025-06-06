describe('working with fileupload',()=>{
     it('passes', () => {
    cy.login()
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('input[name="firstName"]').type("maruthi")
    cy.get('input[name="lastName"]').type("prasad")
    cy.get('input[class="oxd-input oxd-input--active"]').last().type("12345")
    cy.get('i[class="oxd-icon bi-plus"]').selectFile('C:/Users/MARUTHI PC/Desktop/Cypress/cypress/fixtures/image file/cat.jpg')
    cy.get("button[type='submit']").click()
    cy.contains('Successfully Saved').should("be.visible")
    cy.url().should('include',"web/index.php/pim/viewPersonalDetails/empNumber")
  })
})