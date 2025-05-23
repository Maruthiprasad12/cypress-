describe('Drag and Drop', () => {
    it('Drag And Drop', () => {
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    //   cy.get('#menu-fried-chicken').drag('#plate-items')
     //   cy.get("#menu-hamburger").drag("#plate-items")
    //    2nd apporch
    const dataTransfer = new DataTransfer();
    cy.get('#menu-fried-chicken').trigger('dragstart',{
        dataTransfer
    })
    cy.get('#plate-items').trigger('drop',{
        dataTransfer
    })
    cy.get('#menu-hamburger').trigger('dragstart',{
        dataTransfer
    })
    cy.get('#plate-items').trigger('drop',{
        dataTransfer
    })
    cy.get('#menu-ice-cream').trigger('dragstart',{
        dataTransfer
    })
    cy.get('#plate-items').trigger('drop',{
        dataTransfer
    })

    })
  })