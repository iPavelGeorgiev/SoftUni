const { expect } = require("chai");
const { beforeEach } = require("mocha");
const createCalculator = require("../07. addAndSubtract.js");

describe("createCalculator tests", () => {
   let calc;
   beforeEach(() => {
      calc = createCalculator();
   })

   it("the internal value should be private", () => {
      expect(calc.value).to.equal(undefined);
   });

   it("the returned object from createCalculator should contain add(), subtract() and get() properties", () => {
      expect(calc).to.have.property("add");
      expect(calc).to.have.property("subtract");
      expect(calc).to.have.property("get");
   });

   it("add() property should increase the internal value", () => {
      calc.add(1);
      calc.add("1");

      expect(calc.get()).to.equal(2);
   });

   it("subtract() property should decrease the internal value", () => {
      calc.subtract(1);
      calc.subtract("1");

      expect(calc.get()).to.equal(-2);
   });

   it("get() property should return number value", () => {
      calc.add(1);
      calc.add(1);

      expect(calc.get()).to.be.an("number");
   });
});