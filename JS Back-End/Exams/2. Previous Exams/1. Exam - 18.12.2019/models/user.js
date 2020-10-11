const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true,
      validate: {
         validator: function (v) {
            return /^\S+@\S+$/.test(v);
         },
         message: "The email must be in the following format (mailboxname @ domainname)"
      }
   },
   password: {
      type: String,
      required: true,
      minlength: [6, "password must be at least 6 characters long!"]
   },
   trippHistory: [{
      type: mongoose.Types.ObjectId,
      ref: "Tripp"
   }]
});

module.exports = mongoose.model("User", UserSchema);