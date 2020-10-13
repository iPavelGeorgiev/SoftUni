const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [5, "username must be at least 5 characters long!"],
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
      minlength: [5, "password must be at least 5 characters long!"]
   },
   createdCourses: [{
      type: mongoose.Types.ObjectId,
      ref: "Course"
   }],
   enrolledCourses: [{
      type: mongoose.Types.ObjectId,
      ref: "Course"
   }]
});

module.exports = mongoose.model("User", UserSchema);