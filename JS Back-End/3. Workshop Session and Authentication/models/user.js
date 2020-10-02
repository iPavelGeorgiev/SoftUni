const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [6, "username should be at least 6 characters long!"],
      maxlength: [25, "username should be 25 or less characters long!"]
   },
   password: {
      type: String,
      required: true,
      minlength: [6, "password should be at least 6 characters long!"]
   }
})

// UserSchema.pre("save", async function (next) {
//    const salt = bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password, salt);
//    next();
// });

module.exports = mongoose.model("User", UserSchema);