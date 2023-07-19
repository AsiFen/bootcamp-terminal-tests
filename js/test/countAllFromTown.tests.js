import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('countAllFromTown function', function () {
    describe('This function counts how many car registration numbers are from a chosen town.', function () {
        it('should return 2 when a list of registration numbers is entered and the locator matches 2 of the registration plates.', function () {
            assert.equal(countAllFromTown("CA 123456, CY789101, CJ112131, CA 101111", "CA"), 2);
        });

        it('should return a "Registration number is missing." when registration number list not entered.', function () {
            assert.equal(countAllFromTown("", "CJ"), 'Registration number is missing.');
        });
        it('should return a  "Locator is mising." when locator not entered.', function () {
            assert.equal(countAllFromTown("CA12345", ""), 'Locator is missing.');
        });
    });
});