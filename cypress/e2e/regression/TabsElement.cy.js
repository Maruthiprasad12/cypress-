describe('working on tabs', () => {
  it('Tabs Elements', () => {
    cy.on("uncaught:execption", () => {
      return false
    })
    cy.visit('https://www.cypress.io/')
    cy.visit('/your-page', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').callsFake((url) => {
          win.location.href = "https://docs.cypress.io/app/get-started/install-cypress"; // navigates without opening new tab
        }).as('windowOpen');
      }
    });

    // cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke("removeAttr","target").click({force: true})
    // cy.url().should("eq", 'https://docs.cypress.io/app/get-started/install-cypress')
  })
})