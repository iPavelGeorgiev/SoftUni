const mongoose = require("mongoose");

const TrippSchema = new mongoose.Schema({
   startPoint: {
      type: String,
      required: true,
      unique: true
   },
   endPoint: {
      type: String,
      required: true
   },
   date: {
      type: String,
      required: true
   },
   time: {
      type: String,
      required: true
   },
   seats: {
      type: Number,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   carImage: {
      type: String,
      required: true
   },
   driver: {
      type: mongoose.Types.ObjectId,
      ref: "User"
   },
   buddies: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
   }]
});

module.exports = mongoose.model("Tripp", TrippSchema);