class swaglabpage{
    userNameInput(){
        return'input[id="user-name"]'
    }
    PasswordInput(){
        return'input[id="password"]'
    }
    submitButton(){
        return'button[type="submit"]'
    }

}
const swaglab = new swaglabpage()
export default swaglab