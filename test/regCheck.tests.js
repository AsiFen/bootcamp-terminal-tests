import assert from "assert";
import regCheck from "../js/regCheck.js";

describe("regCheck function", function () {
    describe("Checks if registration string entered is from a certain location", function () {

        it("should return false if registration plate does not end with the locator", function () {
            assert.equal(regCheck("DC 55 YU GP", "CA"), false)
        });
        it("should return true if registration plate ends with locator", function () {
            assert.equal(regCheck("DC 55 YU GP", "GP"), true)
        });
        it("should return 'Registration plate or locator is missing.' if locator missing", function () {
            assert.equal(regCheck("DC 55 YU GP", ""), 'Registration plate or locator is missing.')
        });

    });

});