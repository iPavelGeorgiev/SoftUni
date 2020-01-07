const { expect } = require("chai");
const { beforeEach } = require("mocha");
const ChristmasMovies = require("./02. christmasMovies.js");

describe("ChristmasMovies", () => {
   let test;
   beforeEach(function () {
      test = new ChristmasMovies();
   });

   describe("constructor() tests", () => {
      it ("should use valid prop", () => {
         expect(test.movieCollection).to.deep.equal([]);
         expect(test.movieCollection).to.be.an("array");

         expect(test.watched).to.deep.equal({});
         expect(test.watched).to.be.an("object");

         expect(test.actors).to.deep.equal([]);
         expect(test.actors).to.be.an("array");
      });
   });

   describe("buyMovie(movieName, actors) tests", () => {
      it ("should throw error if movies exists", () => {
         test.buyMovie("Vikings", ["John", "George"]);
         const errAction = () => test.buyMovie("Vikings", ["John", "George"]);

         expect(errAction).to.throw(Error, "You already own Vikings in your collection!");
      });

      it ("should add unique movie", () => {
         test.buyMovie("Vikings", ["John", "George", "Peter", "Peter"]);
         const expected = {
            name: "Vikings",
            actors: ["John", "George", "Peter"]
         }

         expect(test.movieCollection[0]).to.deep.equal(expected);
         expect(test.movieCollection).to.have.lengthOf(1);
      });

      it ("should return proper message when success", () => {
         const action = test.buyMovie("Vikings", ["John", "George"]);

         expect(action).to.equal("You just got Vikings to your collection in which John, George are taking part!");
      });
   });

   describe('watchMovie(movieName) tests', () => {
      it('should throw error if movie does not exist', () => {
         const errAction = () => test.watchMovie("Lords");

         expect(errAction).to.throw(Error, "No such movie in your collection!");
      });

      it ("should add movie to watch with value 1", () => {
         test.buyMovie("Vikings", ["John", "George"]);
         test.watchMovie("Vikings");
         const expected = {
            Vikings: 1
         }

         expect(test.watched).to.deep.equal(expected);
         expect(test.watched["Vikings"]).to.equal(1);
      });

      it ("should increment movie by 1 if it already watched", () => {
         test.buyMovie("Vikings", ["John", "George"]);
         test.watchMovie("Vikings");
         test.watchMovie("Vikings");
         const expected = {
            Vikings: 2
         }

         expect(test.watched).to.deep.equal(expected);
         expect(test.watched["Vikings"]).to.equal(2);
      });
   });

   describe('discardMovie(movieName) tests', () => {
      it('should throw error if movies is not in in the collection', () => {
         const errAction = () => test.discardMovie("Vikings");

         expect(errAction).to.throw(Error, "Vikings is not at your collection!");
      });

      it('should throw error if movie is not watched', () => {
         test.buyMovie("Vikings", ["John", "George"]);
         const errAction = () => test.discardMovie("Vikings");

         expect(errAction).to.throw(Error, "Vikings is not watched!");
      });

      it("should remove movie test 2", () => {
         test.buyMovie("Vikings", ["John", "George"]);
         test.watchMovie("Vikings");
         test.discardMovie("Vikings");

         expect(test.movieCollection).to.deep.equal([]);
         expect(test.movieCollection).to.have.lengthOf(0);
         expect(test.watched).to.deep.equal({});
      });

      it ("should return proper message on success", () => {
         test.buyMovie("Vikings", ["John", "George"]);
         test.watchMovie("Vikings");
         const action = test.discardMovie("Vikings");

         expect(action).to.equal("You just threw away Vikings!")
      });
   });

   describe('favouriteMovie() tests', () => {
      it('should throw error', () => {
         const errAction = () => test.favouriteMovie();

         expect(errAction).to.throw(Error, "You have not watched a movie yet this year!")
      });

      it('should return proper message', () => {
         test.buyMovie("Vikings", ["John", "George"]);
         test.buyMovie("Game of Thrones", ["John", "George"]);
         test.watchMovie("Vikings");
         test.watchMovie("Vikings");
         test.watchMovie("Game of Thrones");
         const action = test.favouriteMovie()

         expect(action).to.equal("Your favourite movie is Vikings and you have watched it 2 times!");
      });
   });

   describe('mostStarredActor() tests', () => {
      it('should throw error', () => {
         const errAction = () => test.mostStarredActor();

         expect(errAction).to.throw(Error, "You have not watched a movie yet this year!")
      });

      it ("should return proper message", () => {
         test.buyMovie("Vikings", ["John", "George"]);
         test.buyMovie("Game of Thrones", ["John", "Ivan"]);
         test.watchMovie("Vikings");
         test.watchMovie("Vikings");
         test.watchMovie("Game of Thrones");

         const errAction = test.mostStarredActor();

         expect(errAction).to.equal("The most starred actor is John and starred in 2 movies!");
      });
   });
})