const { expect } = require("chai");
const sum = require("../04. sumOfNumbers.js");

describe("sum tests", () => {
   it("should return proper result with [1, 1, 1] params", () => {
      expect(sum([1, 1, 1])).to.equal(3);
   });

   it("should return proper result with [1, 1, -1] params", () => {
      expect(sum([1, 1, -1])).to.equal(1);
   });

   it("the returned value should be of type number", () => {
      expect(sum([1, 1, 1])).to.be.an("number");
   });
})