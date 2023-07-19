export default function countAllPaarl(registration) {
  if (registration !== null && registration !== "") {
    
    var reg = registration.split(", ")
    var arrReg = []
    var count = 0
    for (var i = 0; i < reg.length; i++) {
      var rreg = reg[i]
      if (rreg.length !== 6 ) {
        return "Registration must be 6 digits."
      }
      else if (rreg.startsWith("CJ")) {
        arrReg.push(rreg)
        count += 1
      }
    }
    return count
  }

  else{
    return "Please enter valid registration list."
  }
}
console.log(countAllPaarl('CJ1234, CJ1234'))