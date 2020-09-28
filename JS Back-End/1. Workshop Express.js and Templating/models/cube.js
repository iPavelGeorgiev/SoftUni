const { v4 } = require("uuid");
const { saveCube } = require("../controllers/database");

class Cube {
   constructor(name, description, imageUrl, difficulty) {
      this.id = v4();
      this.name = name || "No Name";
      this.description = description;
      this.imageUrl = imageUrl || "Placeholder";
      this.difficulty = difficulty || 0;
   }

   save (cb) {
      const cubeData = {
         id: this.id,
         name: this.name,
         description: this.description,
         imageUrl: this.imageUrl,
         difficulty: this.difficulty
      }

      saveCube(cubeData, cb);
   }
}

module.exports = Cube;