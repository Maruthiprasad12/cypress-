describe('working on alerts', () => {
    it('Handling Alerts', () => {
      cy.visit('https://www.selenium.dev/selenium/web/alerts.html')
      cy.get('#alert').click()
      cy.on('Window:alert', (alert)=>{ 
        // expect(alert).to.equal('I am a JS Alert')  
        return true
      })
    })
    it('Handling Confirm Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('Window:confirm', (alert)=>{
            return false
        })
    })
    it('Handling Confirm Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click().wao
        cy.on('window:confirm', (alert)=>{
            return true
        })
      })
      it('Handling Prompt Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((maruthi)=>{
          cy.stub(maruthi, 'prompt').returns("Manikanta")
          cy.contains("Click for JS Prompt").click()   
        })
    })
    it('Handling Pompt Cancel', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.window().then((maruthi)=>{
        cy.stub(maruthi, 'prompt').callsFake(()=> null)
        cy.contains("Click for JS Prompt").click()   
      })
  })   
  })