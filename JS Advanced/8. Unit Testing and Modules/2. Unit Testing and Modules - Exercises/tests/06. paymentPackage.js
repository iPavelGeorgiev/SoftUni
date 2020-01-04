const { expect } = require("chai");
const { beforeEach } = require("mocha");
const PaymentPackage = require("../06. paymentPackage.js");

describe("paymentPackage", () => {
   let instance;
   beforeEach(() => {
      instance = new PaymentPackage("HR Services", 1500);
   });

   describe("constructor tests", () => {
      it("should initialize with correct parameters", () => {
         expect(instance.name).to.equal("HR Services");
         expect(instance.value).to.equal(1500);
         expect(instance.VAT).to.equal(20);
         expect(instance.active).to.equal(true);
      });
   });

   describe("accessors tests", () => {
      describe ("name tests", () => {
         it("should throw a proper error if the name parameter is not of type string", () => {
            instance = () => new PaymentPackage(242, 1500);

            expect(instance).to.throw(Error, "Name must be a non-empty string");
         });

         it("should throw a proper error if string length is 0", () => {
            instance = () => new PaymentPackage("", 1500);

            expect(instance).to.throw(Error, "Name must be a non-empty string");
         });
      });

      describe("value tests", () => {
         it("should throw a proper error if the value parameter is not of type number", () => {
            instance = () => new PaymentPackage("HR Services", "test");

            expect(instance).to.throw(Error, "Value must be a non-negative number");
         });

         it("should throw a proper error if the value parameter is negative number", () => {
            instance = () => new PaymentPackage("HR Services", -1500);

            expect(instance).to.throw(Error, "Value must be a non-negative number");
         })
      });

      describe("VAT tests", () => {
         it("should throw a proper error if the VAT property is not of type number", () => {
            const action = () => instance.VAT = "test";

            expect(action).to.throw(Error, "VAT must be a non-negative number");
         });

         it("should throw a proper error if the VAT property is negative number", () => {
            const action = () => instance.VAT = -20;

            expect(action).to.throw(Error, "VAT must be a non-negative number");
         })
      });

      describe("active tests", () => {
         it("should throw a proper error if the active property is not of type boolean", () => {
            const action = () => instance.active = "test";

            expect(action).to.throw(Error, "Active status must be a boolean");
         });
      })
   });

   describe ("toString() tests", () => {
      it("should return a proper message", () => {
         const expected = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800";

         const action = instance.toString();

         expect(action).to.equal(expected);
      });
   })
})