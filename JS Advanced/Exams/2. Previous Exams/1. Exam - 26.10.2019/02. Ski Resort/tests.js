const { expect } = require("chai");
const { beforeEach } = require("mocha");
const SkiResort = require("./02. skiResort");

describe("SkiResort", () => {
   let hotel;
   beforeEach(function () {
      hotel = new SkiResort("Ivan");
   })

   describe("constructor() tests", () => {
      it("should initialize name property", () => {
         expect(hotel.name).to.equal("Ivan");
      });

      it("input name should be a string", () => {
         expect(hotel.name).to.be.an("string");
      });

      it("should initialize voters property", () => {
         expect(hotel.voters).to.equal(0);
      });

      it("should initialize hotels property", () => {
         expect(hotel.hotels).to.deep.equal([]);
      });
   });

   describe("build(name, beds) tests", () => {
      it("should throw error with invalid input", () => {
         const action = () => hotel.build("", 0);
         expect(action).to.throw(Error, "Invalid input")
      });

      it("should add the hotel to the hotels array and return the proper message", () => {
         const expected = {
            name: "Danube",
            beds: 1,
            points: 0
         }

         const newHotel = hotel.build("Danube", 1);

         expect(hotel.hotels[0]).to.deep.equal(expected);
         expect(newHotel).to.equal("Successfully built new hotel - Danube");
      });
   });

   describe("book(name, beds) tests", () => {
      it("should throw error with invalid input", () => {
         const action = () => hotel.book("", 0);
         expect(action).to.throw(Error, "Invalid input");
      });

      it("should throw error if hotel doesn't exists", () => {
         const action = () => hotel.book("Drustar", 1);
         expect(action).to.throw(Error, "There is no such hotel");
      });

      it("should throw error if beds are not enough", () => {
         hotel.build("Danube", 1);

         const action = () => hotel.book("Danube", 2);

         expect(action).to.throw(Error, "There is no free space");
      });

      it("should decrease the number of beds with the given beds and return proper massage", () => {
         hotel.build("Danube", 1);

         const action = hotel.book("Danube", 1);

         expect(action).to.equal("Successfully booked");
         expect(hotel.hotels[0].beds).to.equal(0);
      });
   });

   describe("leave(name, beds, points) tests", () => {
      it("should throw error with invalid input", () => {
         const action = () => hotel.leave("", 0, 0);
         expect(action).to.throw(Error, "Invalid input");
      });

      it("should throw error if hotel doesn't exists", () => {
         const action = () => hotel.leave("Drustar", 1, 1);
         expect(action).to.throw(Error, "There is no such hotel");
      });

      it("should increment votes, hotel points, beds and return proper message", () => {
         hotel.build("Danube", 1);
         hotel.book("Danube", 1);

         const action = hotel.leave("Danube", 1, 1);

         expect(action).to.equal("1 people left Danube hotel");
         expect(hotel.voters).to.equal(1);
         expect(hotel.hotels[0].points).to.equal(1);
      });
   });

   describe("averageGrade() tests", () => {
      it("should return proper message if there are no voters", () => {
         const action = hotel.averageGrade();

         expect(action).to.equal("No votes yet");
      });

      it("should calculate and return average grade", () => {
         hotel.build("Danube", 1);
         hotel.build("Drustar", 2);
         hotel.book("Danube", 1);
         hotel.book("Drustar", 2);
         hotel.leave("Danube", 1, 1);
         hotel.leave("Drustar", 1, 2);

         const action = hotel.averageGrade();

         expect(action).to.equal("Average grade: 1.50");
      });
   });

   describe("Getter bestHotel tests", () => {
      it("should return proper message with zero votes", () => {
         expect(hotel.bestHotel).to.equal("No votes yet");
      });

      it("should return the best hotel in a given format", () => {
         hotel.build("Danube", 1);
         hotel.build("Drustar", 2);
         hotel.book("Danube", 1);
         hotel.book("Drustar", 2);
         hotel.leave("Danube", 1, 1);
         hotel.leave("Drustar", 1, 2);

         const action = hotel.bestHotel;

         expect(action).to.equal("Best hotel is Drustar with grade 2. Available beds: 1");
      });
   });
})