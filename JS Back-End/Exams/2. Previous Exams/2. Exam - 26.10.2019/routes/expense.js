const express = require("express");
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.route("/add-expense")
   .get(auth(true), controller.expense.get.addExpense)
   .post(auth(true), controller.expense.post.addExpense);

router.get("/report/:id", auth(true), controller.expense.get.report);

router.get("/delete/:id", auth(true), controller.expense.get.delete);

module.exports = router;