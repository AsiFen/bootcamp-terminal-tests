export default function regCheck(regPlate, locator){
    if (regPlate !== '' && locator !== ''){
    return regPlate.endsWith(locator)
    }
    else {
        return "Registration plate or locator is missing."
    }
}
    console.log(regCheck("","GP" ))
