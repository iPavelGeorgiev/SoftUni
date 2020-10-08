const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      minlength: [3, "username must be at least 3 characters long!"],
      validate: {
         validator: function (v) {
            return /^[A-Za-z0-9]+$/.test(v);
         },
         message: "username must contain only English letters and digits!"
      }
   },
   password: {
      type: String,
      required: true,
      minlength: [3, "password must be at least 3 characters long!"]
   },
   likedPlays: [{
      type: mongoose.Types.ObjectId,
      ref: "Play"
   }]
});

module.exports = mongoose.model("User", UserSchema);