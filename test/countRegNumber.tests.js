import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe("countRegNumber function", function () {
    describe("Count how many registration numbers are in the string", function () {

        it("should return 2 when a list of registration numbers is entered and there are two registration numbers entered.", function () {
            assert.equal(countRegNumber('CA 42665, AA 12 RT GP'),2)
        });
        it("should return 'Please enter valid registration' when no registration list is entered.", function () {
            assert.equal(countRegNumber(''),'Please enter valid registration')
        });
        it("should return 1 when registration list is separated by a dot and not expected comma.", function () {
            assert.equal(countRegNumber("CA 42665. AA 12 RT GP"),1)
        });
    });

});