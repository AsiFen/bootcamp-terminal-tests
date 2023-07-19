import assert from "assert";
import findItemsOver20 from "../js/findItemsOver20.js";

describe("findItemsOver20 function", function () {
    describe("From a list of items it checks which quantity of an item is greater than 20", function () {
        it("should return 'You have entered an empty list.' when list is empty", function () {
            assert.equal(findItemsOver20(""),'You have entered an empty list.')
        });
        it("should return the list of objects that have quantity over 20", function () {
            let itemList = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'apples', qty : 3},
            ];
            assert.deepEqual(findItemsOver20(itemList), [{name : 'pears', qty : 37}])
        });
        it("should return that no items with quantity over 20 found", function () {
            assert.equal(findItemsOver20("insert list with qty less than 20"),'No items with quantity over 20.')
        });

    });

});