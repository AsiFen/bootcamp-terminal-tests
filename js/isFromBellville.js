export default function isFromBellville(numberPlate) {
    if (numberPlate !== null && numberPlate !== "") {
        if (numberPlate.startsWith("CY")) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return "Please enter car registration."
    }
    
}