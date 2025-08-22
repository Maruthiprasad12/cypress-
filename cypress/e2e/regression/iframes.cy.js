describe("working with iframe",()=>{
    it(" handling iframes",()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('.demo-frame').then((maruthi)=>{
            let radio1 = maruthi.contents().find('#radio-1')
            cy.wrap(radio1).check({force : true})
        })
    })
})