import { Given, When, Then , } from '@badeball/cypress-cucumber-preprocessor'

Given("user launch the url",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("the user saw the logo",()=>{
    cy.get('img[alt="company-branding"]').should("exist")
})

When("logo visible in the dom",()=>{
    cy.get('img[alt="company-branding"]').should("be.visible")
})

Then("verifying src value",()=>{
    cy.get('img[alt="company-branding"]').should("have.attr",'src',"/web/images/ohrm_branding.png?v=1721393199309")
})