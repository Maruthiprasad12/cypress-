describe("verify create employee", () => {

    it('verify create employee Api working', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.request({
            method: "POST",
            url: "/web/index.php/api/v2/pim/employees",
            headers: {
                "cookie": Cypress.env("cookievalue")
            }, body: { "firstName": "Mani", "middleName": "", "lastName": "Kanta", "empPicture": null, "employeeId": "04606" }
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.writeFile("cypress/fixtures/APIresponse/sample2.txt", response)
        })
    })
})