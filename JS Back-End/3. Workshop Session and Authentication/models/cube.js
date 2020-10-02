const mongoose = require("mongoose");

const CubeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: [6, "name should be at least 6 characters long!"],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
         },
         message: `name should consists English letters, digits and whitespaces!`
      }
   },
   description: {
      type: String,
      required: true,
      maxlength: [1000, "description should be less than 1000 characters long!"]
   },
   imageUrl: {
      type: String,
      required: true,
      validate: {
         validator: function (v) {
            return /^http[s]?:\/\/.+/gi.test(v);
         },
         message: `imageUrl should starts with http:// or https://!`
      }
   },
   difficulty: {
      type: Number,
      required: true,
      min: 1,
      max: 6
   },
   creatorId: {
      type: mongoose.Types.ObjectId,
      ref: "User"
   },
   accessories: [{
      type: mongoose.Types.ObjectId,
      ref: "Accessory"
   }]
});

module.exports = mongoose.model("Cube", CubeSchema);