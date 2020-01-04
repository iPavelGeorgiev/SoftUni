const { expect } = require("chai");
const mathEnforcer = require("../04. mathEnforcer");

describe("mathEnforcer", () => {
   describe("addFive", () => {
      it("Should return undefined with a non-number parameter", () => {
         expect(mathEnforcer.addFive("abc")).to.equal(undefined, "Method did not return the correct result!")
      })

      it("Should return undefined if invoked without parameter", () => {
         expect(mathEnforcer.addFive()).to.equal(undefined, "Method did not return the correct result!")
      });

      it("Should return correct result with a positive integer parameter", () => {
         expect(mathEnforcer.addFive(10)).to.equal(15, "Method did not return the correct result!")
      });

      it("Should return correct result with a negative integer parameter", () => {
         expect(mathEnforcer.addFive(-5)).to.equal(0, "Method did not return the correct result!")
      });

      it("Should return correct result with a floating-point number parameter", () => {
         expect(mathEnforcer.addFive(3.14)).to.closeTo(8.14, 0.01, "Method did not return the correct result!")
      });
   });

   describe("subtractTen", () => {
      it("Should return undefined with a non-number parameter", () => {
         expect(mathEnforcer.subtractTen("abc")).to.equal(undefined, "Method did not return the correct result!")
      })

      it("Should return undefined if invoked without parameter", () => {
         expect(mathEnforcer.subtractTen()).to.equal(undefined, "Method did not return the correct result!")
      });

      it("Should return correct result with a positive integer parameter", () => {
         expect(mathEnforcer.subtractTen(20)).to.equal(10, "Method did not return the correct result!")
      });

      it("Should return correct result with a negative integer parameter", () => {
         expect(mathEnforcer.subtractTen(-5)).to.equal(-15, "Method did not return the correct result!")
      });

      it("Should return correct result with a floating-point number parameter", () => {
         expect(mathEnforcer.subtractTen(4.5)).to.closeTo(-5.5, 0.01, "Method did not return the correct result!")
      });
   });

   describe("sum", () => {
      it("Should return undefined with a non-number first parameter", () => {
         expect(mathEnforcer.sum("abc", 5)).to.equal(undefined, "Method did not return the correct result!")
      })

      it("Should return undefined with a non-number second parameter", () => {
         expect(mathEnforcer.sum(5, "abc")).to.equal(undefined, "Method did not return the correct result!")
      })

      it("Should return correct result", () => {
         expect(mathEnforcer.sum(5, 5)).to.equal(10, "Method did not return the correct result!")

         expect(mathEnforcer.sum(-5, -5)).to.equal(-10, "Method did not return the correct result!")

         expect(mathEnforcer.sum(3.5, 2.3)).to.be.closeTo(5.8, 0.01, "Method did not return the correct result!")

         expect(mathEnforcer.sum(-5, 7)).to.equal(2, "Method did not return the correct result!")
      })
   })
})