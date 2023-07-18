import assert from "assert";
import greet from "../greet.js";

describe('Greet function', function () {
  describe('This function greets a user with hello and their name', function () {
    it('should send a Hello and your name', function () {
      assert.equal(greet("Asiphe"), 'Hello, Asiphe');

    });
    it('should return "Please enter a name." when a string is not entered.', function () {
      assert.equal(greet(), 'Please enter a name.');
    });

    it('should return "That is an integer, enter name please." when an interger is entered.', function () {
      assert.equal(greet(123), 'That is an integer, enter name please.');

    });
  });
});