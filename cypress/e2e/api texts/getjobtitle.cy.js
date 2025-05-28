describe("verify get employee", () => {

    it('verify get job title Api working', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.request({
            method: "GET",
            url: "/web/index.php/api/v2/pim/employees",
            headers: {
                "cookie": Cypress.env("cookievalue")
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.writeFile("cypress/fixtures/APIresponse/sample.txt", response)
        })
    })
})