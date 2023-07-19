import assert from "assert";
import mostProfitableDepartment from "../js/mostProfitableDepartment.js";

describe("mostProfitableDepartment function", function () {
    describe("Checks for the department thats bring in most money through sales.", function () {

        it("should return 'Departments are breaking even.' if departments are making 0 profits", function () {
            var salesData = [
                {department : 'hardware', sales : 0, day : 'Monday'},
                {department : 'outdoor', sales : 0, day : 'Monday'},

            ];
            assert.deepEqual(mostProfitableDepartment(salesData), 'Departments are breaking even.')
        });
        it("should return 'Sales data list is empty' when data is entered.", function () {
            assert.equal(mostProfitableDepartment(""),'Sales data list is empty.')
        });
        it("should return 'hardware' are the most profitable department.", function () {
            var salesData = [
                {department : 'hardware', sales : 4500, day : 'Monday'},
                {department : 'outdoor', sales : 1500, day : 'Monday'},
                {department : 'carpentry', sales : 5500, day : 'Monday'},
                {department : 'hardware', sales : 7500, day : 'Tuesday'},
                {department : 'outdoor', sales : 2505, day : 'Tuesday'},
                {department : 'carpentry', sales : 1540, day : 'Tuesday'},
                {department : 'hardware', sales : 1500, day : 'Wednesday'},

            ];
            assert.equal(mostProfitableDepartment(salesData), 'hardware')
        });
    });

});