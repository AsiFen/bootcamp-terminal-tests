import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe("isFromBellville function", function () {
    describe("Check if a car's registration is from Bellvile or not.", function () {

        it("should return true if car registration starts with CY", function () {
            assert.equal(isFromBellville("CY 31314"), true)
        });
        it("should return 'Please enter car registration' if no data is entered.", function () {
            assert.equal(isFromBellville(""),'Please enter car registration.')
        });
        it("should return false if car registration does not start with CY", function () {
            assert.equal(isFromBellville("CT 1234"), false)
        });
    });

});