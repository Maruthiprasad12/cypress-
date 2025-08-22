describe("Working with tabs in web pages", () => {
    it("Working with tabs in web page", () => {

        cy.on("uncaught:execption", () => {
            return false
        })
        cy.visit("https://trello.com/")
        cy.contains("Log in").click()
        cy.origin('https://id.atlassian.com/', () => {
            cy.get("#username").type('pcmaruthiprasad@gmail.com')
            cy.contains("Continue").click()
            cy.get("#password").type('Maruthi@1234')
            cy.contains("Log in").click()
        })
    })
})