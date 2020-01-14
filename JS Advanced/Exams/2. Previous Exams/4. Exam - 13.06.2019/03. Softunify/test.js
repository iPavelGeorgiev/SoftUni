const { expect } = require("chai");
const SoftUniFy = require("./03. softunify.js");

describe("SoftUniFy Tests", () => {
   describe("Properties test", () => {
      it("Should contain allSongs property that is initialized as an empty object", () => {
         const action = new SoftUniFy();
         expect(action.allSongs).to.be.a("object");
      })
   })

   describe("downloadSong", () => {
      it("should add the given information to the allSongs", () => {
         const action = new SoftUniFy();
         action.downloadSong("Bruno Mars", "Magic", "Tonight...");
         expect(action.allSongs["Bruno Mars"]).to.eql({ rate: 0, votes: 0, songs: ["Magic - Tonight..."] });
      })
   })

   describe("playSong", () => {
      it("should search all already downloaded songs and returns them", () => {
         const action = new SoftUniFy();
         action.downloadSong("Bruno Mars", "Magic", "Tonight...");
         expect(action.playSong("Magic")).to.be.equal("Bruno Mars:\nMagic - Tonight...\n")
      })
      it("Return string if song is not found", () => {
         const action = new SoftUniFy();
         expect(action.playSong("Magic")).to.be.equal("You have not downloaded a Magic song yet. Use SoftUniFy's function downloadSong() to change that!")
      })
   })

   describe("songsList", () => {
      it("If allSong is empty return string", () => {
         const action = new SoftUniFy();
         expect(action.songsList).to.be.equal("Your song list is empty");
      })
      it("Gets all already downloaded songs", () => {
         const action = new SoftUniFy();
         action.downloadSong("Bruno Mars", "Magic", "Tonight...")
         expect(action.songsList).to.be.equal("Magic - Tonight...");
      })
   })

   describe("rateArtist", () => {
      it("Return message if song not exist", () => {
         const action = new SoftUniFy();
         expect(action.rateArtist("Bruno Mars")).to.be.equal("The Bruno Mars is not on your artist list.")
      })
      it("If input is valid", () => {
         const action = new SoftUniFy();
         action.downloadSong("Bruno Mars", "Magic", "Tonight...");
         expect(action.rateArtist("Bruno Mars", 50)).to.be.equal(50)
      })
   })
})