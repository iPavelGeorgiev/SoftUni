const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      unique: true,
      minlength: 4
   },
   description: {
      type: String,
      required: true,
      minlength: [20, "description minlength is 20 characters!"],
      maxlength: [50, "description maxlength is 50 characters!"]
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
   isPublic: {
      type: Boolean,
      required: true,
      default: false
   },
   date: {
      type: String,
      required: true
   },
   creator: {
      type: String,
      required: true
   },
   enrolledUsers: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
   }]
});

module.exports = mongoose.model("Course", CourseSchema);