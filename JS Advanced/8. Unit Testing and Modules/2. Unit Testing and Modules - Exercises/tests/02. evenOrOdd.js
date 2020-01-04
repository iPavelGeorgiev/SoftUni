const { expect } = require("chai");
const isOddOrEven = require("../02. evenOrOdd");

describe("isOddOrEven", () => {
   it("Should return undefined with a number parameter", () => {
      expect(isOddOrEven(5)).to.equal(undefined, "Function did not return the correct result!")
   });

   it("Should return undefined with an object parameter", () => {
      expect(isOddOrEven({})).to.equal(undefined, "Function did not return the correct result!")
   });

   it("Should return the correct result with even length", () => {
      expect(isOddOrEven("beer")).to.equal("even", "Function did not return the correct result!")
   });

   it('Should return the correct result with odd length', () => {
      expect(isOddOrEven("car")).to.equal("odd", "Function did not return the correct result!")
   });
});