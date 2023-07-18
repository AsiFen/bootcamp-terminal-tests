export default function findItemsOver(itemsList, threshold) {
  var items = []
  if (itemsList !== null && itemsList !== "") {
    for (var i = 0; i < itemsList.length; i++) {
      let item = itemsList[i]
      if (item.qty > threshold) {
        items.push(item)
      }
    }
    if (items.length === 0) {
      return "No items had quantities over the threshold."
    }
    return items
  }
  else {
    return "You have entered an empty list."
  }
  
}
var itemList = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];
