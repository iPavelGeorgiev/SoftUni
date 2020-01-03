const { expect } = require("chai");
const isSymmetric = require("../05. checkForSymmetry.js");

describe("isSymmetric tests", () => {
   it("should return false for any input that isn’t of the correct type", () => {
      expect(isSymmetric("test")).to.equal(false);
      expect(isSymmetric(1)).to.equal(false);
      expect(isSymmetric({})).to.equal(false);
   });

   it("should return true if the input array is symmetric", () => {
      expect(isSymmetric([1, 1, 1])).to.equal(true);
      expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.equal(true);
   });

   it("should return false if the input array is not symmetric", () => {
      expect(isSymmetric([1, 1, 2])).to.equal(false);
   });

   it("The returned value should be of type number", () => {
      expect(isSymmetric([1, 1, 1])).to.be.an("boolean");
   })
})