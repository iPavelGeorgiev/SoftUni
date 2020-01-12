const { expect } = require("chai");
const { beforeEach } = require("mocha");
const BookStore = require("../02. bookStore");

describe("BookStore tests", function () {
   let store;
   beforeEach(function () {
      store = new BookStore("Amazon");
   })

   describe("constructor tests", function () {
      it("should initialize name property correctly", function () {
         expect(store.name).to.equal("Amazon", "property did not initialize correctly!");
      });

      it("should initialize books property correctly", function () {
         expect(store.books).to.deep.equal([], "property did not initialize correctly!");
      });

      it("should initialize _workers property correctly", function () {
         expect(store._workers).to.deep.equal([], "property did not initialize correctly!");
      });

      it("getter workers should reference to _workers", function () {
         expect(store.workers).to.deep.equal(store._workers, "getter not working correctly!");
      });
   });

   describe("stockBooks() tests", function () {
      it("shoud add this books to store.books and return all books", function () {
         let result = store.stockBooks(['Inferno-Dan Braun']);
         //test 3, 4
         expect(store.books).to.have.lengthOf(1);
         expect(store.books[0]).to.deep.equal({ title: 'Inferno', author: 'Dan Braun' });
         expect(result).to.deep.equal([{ title: 'Inferno', author: 'Dan Braun' }]);
     });
   });

   describe("hire() tests", function () {
      it("should throw error", function () {
         store.hire("Ivan", "accountant");

         const hire = () => store.hire("Ivan", "accountant");

         expect(hire).to.throw(Error, "This person is our employee", "method did not return correct result!");
      })

      it("should return correct message", function () {
         const expectOutputMsg = store.hire("Pesho", "cashier");

         expect(expectOutputMsg).to.equal("Pesho started work at Amazon as cashier", "method did not return correct result!");
      })

      it("workers property should have correct length after hiring", function () {
         store.hire("Pesho", "cashier");
         expect(store.workers).to.have.lengthOf(1, "method did not return correct result!");
      })

      it("workers property should store hired person", function () {
         const worker = {
            name: "George",
            position: "trainer",
            booksSold: 0
         }

         store.hire("George", "trainer")

         expect(store.workers[0]).to.deep.equal(worker, "method did not return correct result!")
      })
   })

   describe("fire() tests", function () {
      it("should throw error", function () {
         const fire = () => store.fire("Ivan");

         expect(fire).to.throw(Error, "Ivan doesn't work here", "method did not return correct result!");
      })

      it("workers property should have correct length after firing worker", function () {
         store.hire("Pesho", "cashier");
         store.fire("Pesho");
         expect(store.workers).to.have.lengthOf(0, "method did not return correct result!");
      })

      it("should return correct message", function () {
         store.hire("Pesho", "cashier");
         const fire = store.fire("Pesho");

         expect(fire).to.equal("Pesho is fired", "method did not return correct result!");
      })

      it("should remove worked from workers property after firing", function () {
         const worker = {
            name: "Ivan",
            position: "cleaner",
            booksSold: 0
         }

         store.hire("Pesho", "cashier");
         store.hire("Ivan", "cleaner");
         store.hire("Anton", "cashier");
         store.fire("Ivan");

         expect(store.workers[0]).to.not.have.any.property("name", "Ivan", "method did not return correct result!");
         expect(store.workers[1]).to.not.have.any.property("name", "Ivan", "method did not return correct result!");
      });
   });

   describe("sellBook() tests", function () {
      it("should throw error with invalid book property", function () {
         store.stockBooks(["Inferno-Dan Braun", "Harry Potter-J.Rowling"]);
         store.hire("Ivan", "seller");
         const sell = () => store.sellBook("IT", "Ivan")

         expect(sell).to.throw(Error, "This book is out of stock", "method did not return correct result!");
      });

      it("should throw error with invalid worker property", function () {
         store.stockBooks(["Inferno-Dan Braun", "Harry Potter-J.Rowling"]);
         store.hire("Ivan", "seller");
         const sell = () => store.sellBook("Inferno", "Pesho");

         expect(sell).to.throw(Error, "Pesho is not working here", "method did not return correct result!");
      });

      it("should sell book", function () {
         store.stockBooks(["Inferno-Dan Braun", "Harry Potter-J.Rowling"]);
         store.stockBooks(["VoidZone-Goergi Ivanov", "Lord of the rings-Tolkien"]);
         store.hire("Ivan", "seller");
         store.sellBook("Inferno", "Ivan");

         expect(store.books).to.have.lengthOf(3, "method did not return correct result!");
         expect(store.workers[0].booksSold).to.equal(1, "method did not return correct result!");
      });
   });

   describe("printWorkers() tests", function () {
      it("should return correct message", function () {
         store.hire("Pesho", "cashier");

         const expectMsg = store.printWorkers();

         expect(expectMsg).to.equal("Name:Pesho Position:cashier BooksSold:0", "method did not return correct result!");
      });
   });
})
