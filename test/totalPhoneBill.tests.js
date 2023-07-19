import assert from "assert";
import totalPhoneBill from "../js/totalPhoneBill.js";

describe("totalPhoneBill function", function () {
    describe("It calculates how much your calls and smsses bill will cost.", function () {

        it("should return R3.40", function () {
            assert.equal(totalPhoneBill("sms, call"),'R3.40')
        });
        it("should return 'Phone bill should only include, call or sms.' when incorrect data is entered.", function () {
            assert.equal(totalPhoneBill("asisipho"),'Phone bill should only include, call or sms.')
        });
        it("should return 'Bill is empty.' when bill data is not entered.", function () {
            assert.equal(totalPhoneBill(""),'Phone bill is empty.')
        });
    });

});