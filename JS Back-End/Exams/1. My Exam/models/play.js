const mongoose = require("mongoose");

const PlaySchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      unique: true,
      minlength: 1
   },
   description: {
      type: String,
      required: true,
      minlength: 1
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
   usersLiked: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
   }]
});

module.exports = mongoose.model("Play", PlaySchema);