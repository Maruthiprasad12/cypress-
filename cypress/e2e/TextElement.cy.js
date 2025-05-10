describe('Working with element', () => {
    it('Working on Text element', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.product-action').eq(2).click()
      cy.get('.product-action').eq(3).click()
      cy.contains('Cucumber - 1 Kg').parent().find('p[class="product-price"]').then((price)=>{
        var price1=price.text()
        cy.log(price1)

        expect(price1).to.equal("48")
      })
      cy.contains('Beetroot - 1 Kg').parent().find('p[class="product-price"]').then((price)=>{
        var price2=price.text()
        cy.log(price2)

        expect(price2).to.equal("32")
      })
    })
  })