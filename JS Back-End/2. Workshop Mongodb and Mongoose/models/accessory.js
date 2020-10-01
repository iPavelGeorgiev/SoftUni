const mongoose = require("mongoose");

const AccessorySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: [6, 'name should be at least 6 characters long!'],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
         },
         message: `name should consists English letters, digits and whitespaces!`
      }
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
   description: {
      type: String,
      required: true,
      maxlength: [2000, "description should be less than 2000 characters long!"]
   },
   cubes: [{
      type: mongoose.Types.ObjectId,
      ref: "Cube"
   }]
})

module.exports = mongoose.model("Accessory", AccessorySchema);