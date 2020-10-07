const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [5, "username must be at least 5 characters long!"],
      maxlength: [25, "username must be 25 or less characters long!"],
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
   }
})
 
// UserSchema.pre("save", async function (next) {
//    const salt = bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password, salt);
//    next();
// });

module.exports = mongoose.model("User", UserSchema);