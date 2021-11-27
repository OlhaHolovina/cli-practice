// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

const {validateAmount} = require("../validator-functions/validateAmount");
const {validateCurrency} = require("../validator-functions/validateCurrency");
const {validateCurrencySupport} = require("../validator-functions/validateCurrencySupport");
const {validateCalculation} = require("../validator-functions/validateCalculation");
const {calculateConversion} = require("../src/calculateConversion");

describe('myCoolFunction()', () => {
  test('should return the message: "Wow, what a cool function"', () => {
    const result = myCoolFunction();

    expect(result).toBe('Wow, what a cool function');
  });
});
