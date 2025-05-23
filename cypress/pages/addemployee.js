class addemployee{
    piminput(){
        return 'PIM'
    }
    clickaddemp(){
        return "Add Employee"
    }
    firstname(){
        return 'input[placeholder="First Name"]'
    }
    lastname(){
        return 'input[placeholder="Last Name"]'
    }
    idinput(){
       return 'input[class="oxd-input oxd-input--active"]'
    }
    savebutton(){
        return 'button[type="submit"]'
    }
}
const addpage = new addemployee()
export default addpage