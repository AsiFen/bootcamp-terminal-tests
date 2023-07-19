import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe("findItemsOver function", function () {
    describe("Returns all items from a list whose quantity is greater than the given threshold.", function () {

        it("should return the list of objects that are greater than the given threshold", function () {
            let itemList = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ];
            assert.deepEqual(findItemsOver(itemList, 27),[{name : 'pears', qty : 37}])
        });
        it("should return a 'No items had quantities over the threshold.' when threshold of a 100 is entered", function () {
            let itemList = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3},
            ];
        
            assert.equal(findItemsOver(itemList,38),'No items had quantities over the threshold.')
        });
        it("should return 'You have entered an empty list.' when list entered is empty", function () {
            assert.equal(findItemsOver("", ""),'You have entered an empty list.')
        });

    });

});