class reddiffpage{

    DOB(){
        return'select[name^="DOB_Day"]'
    }
    YEAR(){
        return'select[name^="DOB_Year"]'
    }
    MONTH(){
        return'select[name^="DOB_Month"]'
    }
    CheckBox(){
        return'.nomargin'
    }
    RadioBoxFemale(){
        return'input[value="f"]'
    }
    RadioBoxMale(){
        return'input[value="m"]'
    }
}

const reddiff=new reddiffpage()
export default reddiff