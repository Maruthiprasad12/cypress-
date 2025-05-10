describe.only('verify job functionalities ', () => {
  const jobtitle=["SDET1","SDET2","SDET!"]
  jobtitle.forEach(element => {
    it('verifing job title', () => {
      cy.login()
      cy.contains('Admin').click()
      cy.contains('Job').click()
      cy.contains('Job Title').click()
      cy.get('button.oxd-button.oxd-button--medium').click()
      cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(element)
      cy.get("button[type='submit']").click()
      // cy.contains('Successfully Saved').should("be.visible")
    })
  });
  // it('verifing job title', () => {
  //   cy.login()
  //   cy.contains('Admin').click()
  //   cy.contains('Job').click()
  //   cy.contains('Job Title').click()
  //   cy.get('button.oxd-button.oxd-button--medium').click()
  //   cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("sdet engineer")
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Successfully Saved').should("be.visible")
  // })
})
describe('verify job functionalities', () => {
  it('verifing paygrade', () => {
    cy.login()
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Pay Grades').click()
    cy.get('button.oxd-button.oxd-button--medium').click()
    cy.get('input[class="oxd-input oxd-input--active"]').last().type("Manager")
    cy.get("button[type='submit']").click()
    cy.contains('Successfully Saved').should("be.visible")
    cy.url().should('include',"web/index.php/admin/payGrade")
  })
})
describe('verify job functionalities', () => {
  it('verifing Employment Status', () => {
    cy.login()
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Employment Status').click()
    cy.get('button.oxd-button.oxd-button--medium').click()
    cy.get('input[class="oxd-input oxd-input--active"]').last().type("full time")
    cy.get("button[type='submit']").click()
    cy.contains('Successfully Saved').should("be.visible")
    cy.url().should('include',"web/index.php/admin/employmentStatus")
  })
})