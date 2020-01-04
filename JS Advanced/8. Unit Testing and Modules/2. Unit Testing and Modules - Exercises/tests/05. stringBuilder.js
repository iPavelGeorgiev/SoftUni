const { expect } = require("chai");
const { beforeEach } = require("mocha");
const StringBuilder = require("../05. stringBuilder")

describe("StringBuilder tests", function () {
   let instance;
   beforeEach(() => {
      instance = new StringBuilder("dogs");
   });

   describe("Constructor tests", function () {
      it("should initialize with correct parameter", () => {
         instance = new StringBuilder();
         expect(instance._stringArray).to.deep.equal([], "property is not initialized correctly")
      });

      it("should initialize without parameter", () => {
         expect(instance._stringArray).to.deep.equal(["d", "o", "g", "s"], "property is not initialized correctly")
      });

      it('testing the _stringArray property', function () {
         let sB = new StringBuilder('a');
         sB.insertAt('11', 0);
         let expected = sB._stringArray.length
         expect(expected).to.equal(3);
         });
   });

   describe("toString() tests", () => {
      it("should return string with all elements joined by an empty string", () => {
         expect(instance.toString()).to.equal("dogs", "method did not return the correct result!");
      });
   })

   describe("append() tests", () => {
      it("should throw TypeError with incorrect parameter", () => {
         expect(() => instance.append(5)).to.throw(TypeError, "Argument must be string")
      });

      it("should return correct result with correct parameter", () => {
         const expected = "dogs" + "bark";

         instance.append("bark");

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });

      it("should return correct result with multiple calls", () => {
         const expected = "dogs" + "bark" + "a" + "lot";

         instance.append("bark");
         instance.append("a");
         instance.append("lot");

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });
   })

   describe("prepend() tests", () => {
      it("should throw TypeError with incorrect parameter", () => {
         expect(() => instance.prepend(5)).to.throw(TypeError, "Argument must be string")
      });

      it("should return correct result with correct parameter", () => {
         const expected = "small" + "dogs"

         instance.prepend("small");

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });

      it("should return correct result with multiple calls", () => {
         const expected = "our" + "family" + "loves" + "dogs";
         
         instance.prepend("loves");
         instance.prepend("family");
         instance.prepend("our");

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });
   })

   describe("insertAt() tests", () => {
      it("should throw TypeError with incorrect parameters", () => {
         expect(() => instance.insertAt(5, "test")).to.throw(TypeError, "Argument must be string")
      });

      it("should return correct result with correct parameters", () => {
         const charToInsert = "ie";
         const index = 3;
         const expected = "dogies";

         instance.insertAt(charToInsert, index);

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });

      it("should return correct result with multiple calls", () => {
         const charToInsert = "o";
         const index = 1;
         const expected = "doooogs";

         instance.insertAt(charToInsert, index);
         instance.insertAt(charToInsert, index);
         instance.insertAt(charToInsert, index);

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });
   })

   describe("remove() tests", () => {
      it("should return correct result with correct parameters", () => {
         const startIndex = 1;
         const length = 2;
         const expected = "ds";

         instance.remove(startIndex, length);

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });

      it("should return correct result with multiple calls", () => {
         const startIndex = 1;
         const length = 2;
         const expected = "ds";

         instance.append("dogs");
         instance.remove(startIndex, length);
         instance.remove(startIndex, length);
         instance.remove(startIndex, length);

         expect(instance.toString()).to.equal(expected, "method did not return the correct result!")
      });
   })

   describe("_vrfyParam tests", () => {
      it("should throw TypeError with incorrect parameter", () => {
         expect(() => StringBuilder._vrfyParam(5)).to.throw(TypeError, "Argument must be string")
      });
   })
})