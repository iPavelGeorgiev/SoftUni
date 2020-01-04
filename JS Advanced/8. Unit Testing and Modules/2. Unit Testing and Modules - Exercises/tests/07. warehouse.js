const { expect } = require("chai");
const { beforeEach } = require("mocha");
const Warehouse = require("../07. warehouse.js");

describe("Warehouse tests", () => {
   let instance;
   beforeEach(() => {
      instance = new Warehouse(1);
   });

   describe("constructor() tests", () => {
      it("should throw a string if the constructor gets a negative number or 0", () => {
         const action1 = () => new Warehouse("1");
         const action2 = () => new Warehouse(0);

         expect(action1).to.throw("Invalid given warehouse space");
         expect(action2).to.throw("Invalid given warehouse space");
      });

      it ("should create all required constructor properties with a valid input", () => {
         expect(instance.capacity).to.equal(1);
         expect(instance.availableProducts).to.deep.equal({'Food': {}, 'Drink': {}});
      });
   });

   describe("addProduct(type, product, quantity) tests", () => {
      
   });
});
