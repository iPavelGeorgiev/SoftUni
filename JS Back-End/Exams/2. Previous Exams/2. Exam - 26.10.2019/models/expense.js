const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
   merchant: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true,
      default: Date.now
   },
   total: {
      type: Number,
      required: true
   },
   category: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true,
      minlength: [10, "description must be at least 10 characters long!"],
      maxlength: [50, "description must be less than or equal to 50 characters long!"]
   },
   report: {
      type: Boolean,
      required: true,
      default: false
   },
   user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
   }
});

module.exports = mongoose.model("Expense", ExpenseSchema);