class loginpage{

    OrageHRMlogo(){
        return'#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img'
    }
    usernameNameInput(){
        return'input[name="username"]'
    }
    PasswordInput(){
        return'input[name="password"]'
    }
    submittbutton(){
        return'button[type="submit"]'
    }
}

const login=new loginpage()
export default login