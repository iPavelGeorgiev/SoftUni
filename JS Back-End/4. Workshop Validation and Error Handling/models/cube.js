const mongoose = require("mongoose");

const CubeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: [5, "name must be at least 5 characters long!"],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
         },
         message: `name must consists English letters, digits and whitespaces!`
      }
   },
   description: {
      type: String,
      required: true,
      minlength: [20, "description must be at least 20 characters long!"],
      maxlength: [1000, "description must be less than or equal to 1000 characters long!"],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
         },
         message: `description must consists English letters, digits and whitespaces!`
      }
   },
   imageUrl: {
      type: String,
      required: true,
      validate: {
         validator: function (v) {
            return /^http[s]?:\/\/.+/gi.test(v);
         },
         message: `imageUrl must starts with http:// or https://!`
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