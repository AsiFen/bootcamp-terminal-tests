export default function transportFee(shift) {
  if (shift !== null & shift !== '') { 
    switch (shift) {

      case 'morning':
        return "R20"
      case "afternoon":
        return "R10"
      case "nightshift":
        return "free"
    }
  }
  
  else{
    return "Please enter your shift."

  }
 
}