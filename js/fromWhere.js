export default function fromWhere(reg) {
  if (reg !== null && reg !== '') {
    if (reg.startsWith("CY")) {
      return "Bellville"
    }
    else if (reg.startsWith("CA")) {
      return "Cape Town"
    }
    else if (reg.startsWith("CJ")) {
      return "Paarl"
    }
    else {
      return "Some other town!"
    }
  }
  else {
    return "Please enter registration."
  }
}