describe('Verifying click on hidden element', () => {
    it('verifying hiddenelement', () => {
        cy.on("uncaught:execption",()=>{
            return false
        })
      cy.visit('https://www.cypress.io/')
      cy.get('a[href="/blog/category/Releases"]').click({force:true})
    })
  })