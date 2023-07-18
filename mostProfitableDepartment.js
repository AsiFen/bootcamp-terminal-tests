export default function mostProfitableDepartment(salesData) {
  var saleMap = {}
  if (salesData !== null && salesData !== '') {
    for (var i = 0; i < salesData.length; i++) {
      var sale = salesData[i].department
      if (saleMap[sale] === undefined) {
        saleMap[sale] = salesData[i].sales // these are values
      }
      else {
        saleMap[sale] += salesData[i].sales
      }
    }
  }
  else {
    return "Sales data list is empty."
  }

  var counter = 0, dprt;
  for (var department in saleMap) {
    if (saleMap[department] > counter) {
      counter = saleMap[department]
      dprt = department
    }
  } 
  if (counter == 0 ){
    return "Departments are breaking even."

  }
  return dprt
}
var salesData = [
  {department : 'hardware', sales : 0, day : 'Monday'},
  {department : 'outdoor', sales : 0, day : 'Monday'},

  
];
console.log(mostProfitableDepartment(salesData))