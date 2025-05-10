class herokupage{
    userNameInput(){
        return'input[id="username"]'
    }
    PasswordInput(){
        return'input[id="password"]'
    }
    submitButton(){
        return'button[type="submit"]'
    }

}
const herokuapp = new herokupage()
export default herokuapp