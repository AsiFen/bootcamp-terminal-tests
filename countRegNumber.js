export default function countRegNumber(reg) {
  if (reg !== null && reg !== "") {
    let theReg = reg.split(",")

    return theReg.length
  }
  else {
    return "Please enter valid registration"
  }
}
 console.log(countRegNumber(''))