export default function countAllFromTown(regString, locator) {
  var regList = regString.split(",")
  var arrTownNo = []
 
  if (regString !== '' && locator !== '') {
    for (var i = 0; i < regList.length; i++) {
      var reg = regList[i].trim()
      if (reg.startsWith(locator)) {
        arrTownNo.push(reg)
      }
    }
    return arrTownNo.length
  }
  else if (regString === '' || regString == null) {
    return "Registration number is missing."
  }
  else if (locator === '' || locator == null) {
    return "Locator is missing."
  }
}
