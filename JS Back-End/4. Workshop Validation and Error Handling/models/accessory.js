const mongoose = require("mongoose");

const AccessorySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: [5, "name must be at least 5 characters long!"],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9]+$/.test(v);
         },
         message: `name must consists English letters and digits only!`
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
   description: {
      type: String,
      required: true,
      minlength: [20, "description must be at least 20 characters long!"],
      maxlength: [1000, "description must be less than 1000 characters long!"],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
         },
         message: `description must consists English letters, digits and whitespaces!`
      }
   },
   cubes: [{
      type: mongoose.Types.ObjectId,
      ref: "Cube"
   }]
})

module.exports = mongoose.model("Accessory", AccessorySchema);