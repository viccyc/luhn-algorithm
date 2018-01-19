var assert = require("chai").assert;
var check = require("./luhn-algorithm");

describe("Checks", function() {
  it("should return true if the credit card number is valid", function() {
    var card = "1234 5678 3456 7890";
    var result = check(card);
    assert.isTrue(result);
  });

  it("should return false if the credit card number is NOT valid", function() {
    var card = "1234";
    assert.isFalse(check(card));
  });
});

