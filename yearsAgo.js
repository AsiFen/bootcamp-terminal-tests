
export default function yearsAgo(yearThen) {
  if (yearThen) {
    const x = new Date();
    let yearNow = x.getFullYear();
    return yearNow - yearThen
  } else {
    return "Please enter a year."
  }
}

console.log(yearsAgo())