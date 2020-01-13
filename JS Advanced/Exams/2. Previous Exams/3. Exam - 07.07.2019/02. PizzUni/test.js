const { expect } = require("chai");
const { assert } = require("chai");
const { beforeEach } = require("mocha");
const PizzUni = require("./02. pizzUni");

describe("PizzUni tests", function () {
   let PizzStore;
   beforeEach(function () {
      PizzStore = new PizzUni();
   })

   describe("constructor tests", function () {
      it("should initialize registeredUsers property correctly", function () {
         const expectedProperties = {
            registeredUsers: [],
            availableProducts: {
               drinks: ["Coca-Cola", "Fanta", "Water"],
               pizzas: ["Italian Style", "Barbeque Classic", "Classic Margherita"]
            },
            orders: []
         }

         assert.deepOwnInclude(PizzStore, expectedProperties);
      });
   });

   describe("registerUser({email}) tests", function () {
      it("should throw an error if email already exists", function () {
         PizzStore.registerUser("john@gmail.com");
         const duplicateUser = () => PizzStore.registerUser("john@gmail.com");

         expect(duplicateUser).to.throw(Error, 'This email address (john@gmail.com) is already being used!');
      });

      it("upon registration, registeredUsers hold user's email and orderHistory", function () {
         let expectedUser = {
            email: "john@gmail.com",
            orderHistory: []
         }

         let registerUser = PizzStore.registerUser("john@gmail.com");

         expect(registerUser).to.deep.equal(expectedUser);

         expect(PizzStore.registeredUsers).to.have.lengthOf(1);
      });

      it("input should be an string", function () {
         PizzStore.registerUser("john@gmail.com");

         expect(PizzStore.registeredUsers[0].email).to.be.an("string");
      });
   })

   describe("makeAnOrder() tests", function () {
      it("should throw an error if input email is not registered", function () {
         PizzStore.registerUser("john@gmail.com");
         const action = () => PizzStore.makeAnOrder("george@gmail.com", "Italian Style", "Water");

         expect(action).to.throw(Error, "You must be registered to make orders!");
      });

      it("should throw error if pizza type does not exist", function () {
         PizzStore.registerUser("john@gmail.com");
         const action = () => PizzStore.makeAnOrder("john@gmail.com", "pizza", "Water");

         expect(action).to.throw(Error, "You must order at least 1 Pizza to finish the order.");
      });

      it("should not add an invalid drink to order list", function () {
         let userOrder = {
            orderedPizza: "Italian Style"
         };

         PizzStore.registerUser("john@gmail.com")
         PizzStore.makeAnOrder("john@gmail.com", "Italian Style", "Coffee");

         expect(PizzStore.registeredUsers[0].orderHistory[0]).to.deep.equal(userOrder);
      });

      it("should make an order with valid input", function () {
         let userOrder = {
            orderedPizza: "Italian Style",
            orderedDrink: "Water"
         };

         let order = {
            ...userOrder,
            email: "john@gmail.com",
            status: 'pending'
         }

         PizzStore.registerUser("john@gmail.com")
         PizzStore.makeAnOrder("john@gmail.com", "Italian Style", "Water");

         expect(PizzStore.registeredUsers[0].orderHistory[0]).to.deep.equal(userOrder);

         expect(PizzStore.orders[0]).to.deep.equal(order);
      });

      it("should return correct order index", function () {
         PizzStore.registerUser("john@gmail.com")
         let action = PizzStore.makeAnOrder("john@gmail.com", "Italian Style", "Water");

         expect(action).to.equal(0);
      });
   });

   describe("completeOrder() tests", function () {
      it("Should complete first order", function () {
         PizzStore.registerUser("john@gmail.com");
         PizzStore.makeAnOrder("john@gmail.com", "Italian Style", "Water");
         PizzStore.completeOrder();

         expect(PizzStore.orders[0].status).to.equal("completed");
      });

      it("should return current object", function () {
         let order = {
            orderedPizza: "Italian Style",
            orderedDrink: "Water",
            email: "john@gmail.com",
            status: 'completed'
         }

         PizzStore.registerUser("john@gmail.com");
         PizzStore.makeAnOrder("john@gmail.com", "Italian Style", "Water");
         const action = PizzStore.completeOrder();

         expect(action).to.deep.equal(order);
      });
   });

   describe("detailsAboutMyOrder({id}) tests", function () {
      it("should return undefined with invalid input", function () {
         PizzStore.registerUser("john@gmail.com");
         PizzStore.makeAnOrder("john@gmail.com", "Barbeque Classic", "Coca-Cola");
         PizzStore.completeOrder();
         expect(PizzStore.detailsAboutMyOrder(1)).to.equal(undefined);
      });

      it("should return order status", function () {
         let order = {
            orderedPizza: "Italian Style",
            orderedDrink: "Water",
            email: "john@gmail.com",
            status: 'pending'
         }

         PizzStore.registerUser("john@gmail.com");
         PizzStore.makeAnOrder("john@gmail.com", "Italian Style", "Water");
         const action = PizzStore.detailsAboutMyOrder(0);

         expect(action).to.deep.equal("Status of your order: pending");
      });
   });

   describe("doesTheUserExist({email})) tests", function () {
      it("returns an object with all the registered users with that email", function () {
         let expectedUser = {
            email: "john@gmail.com",
            orderHistory: []
         }

         PizzStore.registerUser("john@gmail.com");
         const action = PizzStore.doesTheUserExist("john@gmail.com");

         expect(action).to.deep.equal(expectedUser);
      });
   });
})