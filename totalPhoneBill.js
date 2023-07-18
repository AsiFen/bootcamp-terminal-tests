export default function totalPhoneBill(billString) {
  var billStr = billString.split(", ")

  var call = 0
  var sms = 0
  if (billString !== null && billString !== "") {
    for (var i = 0; i < billStr.length; i++) {
      if (billStr[i] === "sms") {
        sms++
      }
      else if (billStr[i] === "call") {
        call++
      }
      else {
        return "Phone bill should only include, call or sms."
      }
    }
    var total = call * 2.75 + sms * 0.65;
    return "R" + total.toFixed(2)
  }
  else {
    return "Phone bill is empty."
  }
}

console.log(totalPhoneBill("asisipho fente"))