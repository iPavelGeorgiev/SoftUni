const { expect } = require("chai");
const lookupChar = require("../03. charLookup");

describe("lookupChar", () => {
   it("Should return undefined if the first parameter is a number", () => {
      expect(lookupChar(5, 4)).to.equal(undefined, "Function did not return the correct result!")
   });

   it('Should return undefined if the second parameter is a string', () => {
      expect(lookupChar("Quality", "Good")).to.equal(undefined, "Function did not return the correct result!")
   });

   it('Should return undefined if the second parameter is a floating-point number', () => {
      expect(lookupChar("Quality", 3.14)).to.equal(undefined, "Function did not return the correct result!")
   });

   it("Should return 'Incorrect index' if second parameter is negative number", () => {
      expect(lookupChar("Street", -2)).to.equal("Incorrect index", "Function did not return the correct result!")
   });

   it("Should return 'Incorrect index' if the second parameter is bigger than the string length", () => {
      expect(lookupChar("Street", 10)).to.equal("Incorrect index", "Function did not return the correct result!")
   });

   it("Should return 'Incorrect index' if the second parameter is equal to the string length", () => {
      expect(lookupChar("Lemonade", 8)).to.equal("Incorrect index", "Function did not return the correct result!")
   });

   it("Should return undefined if invoked without parameters", () => {
      expect(lookupChar()).to.equal(undefined, "Function did not return the correct result!")
   });

   it("Should return character if both parameters are correct", () => {
      expect(lookupChar("Ice", 1)).to.equal("c", "Function did not return the correct result!")
   })
})