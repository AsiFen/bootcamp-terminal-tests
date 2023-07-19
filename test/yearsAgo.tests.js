import assert from "assert";
import yearsAgo from "../js/yearsAgo.js";

describe("yearsAgo function", function () {
    describe("This function calculates how many years has passed since a specific year", function () {

        it("should return 24 when year entered is 1999", function () {
            assert.equal(yearsAgo(1999),24)
        });
        it("should return 0 when year is 2023", function () {
            assert.equal(yearsAgo(2023),0)
        });
        it("shoudld return a 'Please enter a year' when no year is entered", function () {
            assert.equal(yearsAgo(),"Please enter a year.")
        });
    });
});