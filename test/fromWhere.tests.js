import assert from "assert";
import fromWhere from "../js/fromWhere.js";

describe("fromWhere function", function () {
    describe("Checks from which town a registration number is from", function () {
        it("should return 'Please enter registration' when not input is given", function () {
            assert.equal(fromWhere(""),'Please enter registration.')
        });
        it("should return Cape Town is registration startd with CA.", function () {
            assert.equal(fromWhere("CA 1234"),'Cape Town')
        });
        it("should return 'Some other town!' when town not detected", function () {
            assert.equal(fromWhere("ZZ1234"),'Some other town!')
        });

    });

});