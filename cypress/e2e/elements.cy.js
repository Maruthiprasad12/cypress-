import reddiff from"../pages/reddiffpage"
// describe('Working with element', () => {
//     it('Working on Edit Box element ', () => {   
//     cy.visit('/web/index.php/auth/login')
//     cy.get('input[placeholder="Username"]').type(data.username)
//     cy.get('input[placeholder="Password"]').type("data.Password{enter}")
//     })
//   })
  describe('Working with element', () => {
    it('Working on Edit Box element ', () => {   
    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
    // cy.get('select[name^="DOB_Month"]').select("MAR")
    cy.get(reddiff.DOB()).select("01").should("have.value","01")
    cy.get(reddiff.YEAR()).select("2000").should("have.value","2000")
    cy.get(reddiff.MONTH()).select(8).should("have.value","08")
    })
    it('Working on CheckBox element ', () => {   
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get(reddiff.CheckBox()).check()
      cy.get(reddiff.CheckBox()).should("be.checked")
      cy.wait(4000)
      cy.get(reddiff.CheckBox()).uncheck()
      cy.get(reddiff.CheckBox()).should("not.be.checked")
    })
    it('Working on RadioButton element ', () => {   
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get(reddiff.RadioBoxFemale()).check()
      cy.wait(4000)
      cy.get(reddiff.RadioBoxMale()).check()
      })
  })
  