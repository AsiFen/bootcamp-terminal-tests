import assert from "assert";
import isWeekday from "../isWeekday.js";

describe("isWeekday of function", function () {
    describe("Check if day entered is the a day of the week", function () {

        it("should return false if Saturday is entered", function () {
            assert.equal(isWeekday("Saturday"),false)
        });
        it("should return false if Sunday is entered", function () {
            assert.equal(isWeekday("Sunday"),false)
        });
        it("should return false if monday is entered in small caps", function () {
            assert.equal(isWeekday("monday"),false)
        });
        it("should return true if Tuesday is entered", function () {
            assert.equal(isWeekday("Tuesday"),true)
        });
        it("should return false if no input is entered", function () {
            assert.equal(isWeekday(""),false)
        });

    });

});