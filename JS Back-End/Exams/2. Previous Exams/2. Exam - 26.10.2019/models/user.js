const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      minlength: [4, "username must be at least 4 characters long!"],
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
      minlength: [8, "password must be at least 8 characters long!"]
   },
   amount: {
      type: Number,
      required: true,
      default: 0
   },
   expenses: [{
      type: mongoose.Types.ObjectId,
      ref: "Expense"
   }]
});

module.exports = mongoose.model("User", UserSchema);