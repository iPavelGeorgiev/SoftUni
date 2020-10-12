const { ExpenseModel, UserModel } = require("../models/index");
const { addExpenseValidations } = require("../utils/validations");
const formatExpenses = require("../utils/format-expenses");

module.exports = {
   get: {
      addExpense: function (req, res) {
         res.render("add-expense", {
            title: "Add Expense",
            isLoggedIn: req.isLoggedIn,
            loggedUsername: req.loggedUsername,
            userID: req.userID,
         })
      },
      report: async function (req, res, next) {
         const { id } = req.params;

         try {
            const expenses = [await ExpenseModel.findById(id).lean()];
            const expense = await formatExpenses(expenses)[0];
            console.log(expense);

            res.render("report", {
               title: "Report",
               isLoggedIn: req.isLoggedIn,
               loggedUsername: req.loggedUsername,
               userID: req.userID,
               expense
            })
         } catch (err) {
            next(err)
         }
      },
      delete: async function (req, res, next) {
         const expenseId = req.params.id;
         const userId = req.userID;

         try {
            await ExpenseModel.findByIdAndDelete(expenseId);
            await UserModel.updateOne({ "_id": userId }, { $pull: { "expenses": expenseId } });
            
            res.redirect("/");
         } catch (err) {
            next(err);
         }
      }
   },
   post: {
      addExpense: async function (req, res, next) {
         const {
            merchant,
            total,
            category,
            description,
            report
         } = req.body;

         const validate = addExpenseValidations(req);

         if (validate.status) {
            res.status(404);
            return res.render("add-expense", {
               title: "Add Expense",
               isLoggedIn: req.isLoggedIn,
               loggedUsername: req.loggedUsername,
               error: "All fields must be filled!"
            });
         }

         try {
            const expense = await ExpenseModel.create({
               merchant,
               total,
               category,
               description,
               report: report == "on" ? true : false,
               user: req.userID
            });

            await UserModel.updateOne({ _id: req.userID }, { $addToSet: { expenses: expense._id } });

            console.log("Expense is successfully added");
            res.redirect("/");
         } catch (err) {
            next(err);
         }
      }
   }
}