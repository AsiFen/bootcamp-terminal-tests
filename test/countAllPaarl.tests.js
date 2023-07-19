import assert from "assert";
import countAllPaarl from "../js/countAllPaarl.js";

describe('countAllPaarl function', function () {
    describe('This function has two parameters, one that is a list separated by commas with registration numbers and the second the locator of any Town it return how many registration numbers are from that town.', function () {
        it('should return should return 2 when a list of registration numbers is entered and two registration numbers start with CJ.', function () {
            assert.equal(countAllPaarl('CJ 123, CK 345, CJ 123'), 2);

        });
        it('should return a "Registration must be 6 digits." when registration number has less or more than 6  gidits.', function () {
            assert.equal(countAllPaarl("CJ12345"),'Registration must be 6 digits.' );

        });
        it('should return a "Please enter valid registration list." when no data is entered.', function () {
            assert.equal(countAllPaarl(""), 'Please enter valid registration list.');
        });
    });
});