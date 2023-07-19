import assert from "assert";
import transportFee from "../js/transportFee.js";

describe("transportFee function", function () {
    describe("Based on when is your shift, it tells you how much transport money you will be allocated.", function () {

        it("should return free if you have have a night shift", function () {
            assert.equal(transportFee("nightshift"),'free')
        });
        it("should return 'R20' when morning shift is entered", function () {
            assert.equal(transportFee("morning"),"R20")
        });
        it("should return 'Please enter your shift.' when  shift data is empty.", function () {
            assert.equal(transportFee(""), 'Please enter your shift.')
        });
    });

});