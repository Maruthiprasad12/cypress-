describe("Working with links in DOM",()=>{
    it("verifying the links",()=>{
        cy.visit("https://www.cypress.io/")
        cy.get("a").its("length").then((count)=>{
            cy.log("Number of links is :"+ count)
        })
        cy.get("a").should("have.length",165)
    })
})