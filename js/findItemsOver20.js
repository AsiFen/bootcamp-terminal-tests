export default function findItemsOver20(itemList) {
  var items = []
  if (itemList !== null && itemList !== "") {
    for (var i = 0; i < itemList.length; i++) {
      let item = itemList[i]
      if (item.qty > 20) {
        items.push(item)
      }
    }
    if (items.length == 0) {
      return "No items with quantity over 20."
    }
    return items
  }
  else {
    return "You have entered an empty list."
  }
}
