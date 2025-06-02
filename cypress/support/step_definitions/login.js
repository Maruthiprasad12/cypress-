import { Given, When, Then , } from '@badeball/cypress-cucumber-preprocessor'
import login from"../../pages/loginpage"
import addpage from '../../pages/addemployee'
import data from "../../fixtures/input.json"
 
Given('user launch the application', ()=>{

    cy.visit('/web/index.php/auth/login')
})

When('user enter username {string} and password {string}',(username,password)=>{

    cy.get(login.usernameNameInput()).type(username)
    cy.get(login.PasswordInput()).type(password)
})

When('user clicks on login button',() =>{
    cy.get(login.submittbutton()).click()
})

Then('user navigate to dashboard',() =>{
    cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

Then('it will show error mesaage',()=>{
    cy.contains(login.errormessage()).should("be.visible")
})

When("user need clicks on PIM",() =>{
    cy.contains(addpage.piminput()).click()
})
 
When("user need clicks on addemployee",() =>{
    cy.contains(addpage.clickaddemp()).click()
})

When("user enter the firstname {string} and lastname {string}",(firstname,lastname)=>{
    cy.get(addpage.firstname()).type(firstname)
    cy.get(addpage.lastname()).type(lastname)
})
 When("user enter the firstname and lastname",()=>{
    cy.get(addpage.firstname()).type(data.firstname)
    cy.get(addpage.lastname()).type(data.lastname)
})

When('user enter the id number {string}',(number)=>{
    cy.get(addpage.idinput()).last().type(number)
})

Then('user clicks save button',()=>{
    cy.get(addpage.savebutton()).click()
})
