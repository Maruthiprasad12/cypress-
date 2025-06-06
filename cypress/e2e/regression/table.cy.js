describe('working with tables elements',()=>{
    it('verifying rows',()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').should("have.length",4)

    })
    it("verifying column",()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>thead>tr:nth-child(1)>th').should("have.length",6)
    })
    it("verifying specific value in row & coloumn",()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr:nth-child(4)>td:nth-child(4)').then((text)=>{
            var textvalue = text.text()
            expect(textvalue).to.equal('$50.00')
        })
    })
        it.only("verifying specific value in row & coloumn",()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').each((rows)=>{
            cy.wrap(rows).within((celldata)=>{
                cy.log(celldata.text())
                
            })
         
        })
    })
})