const { UserModel, ExpenseModel } = require("../models/index");
const formatExpenses = require("../utils/format-expenses");

module.exports = {
   get: {
      home: async function (req, res, next) {
         let expenses = false;
         try {
            const userInfo = await UserModel.findById(req.userID);

            if (userInfo) {
               expenses = await ExpenseModel.find({'_id': { $in: userInfo.expenses}}).lean();

               expenses = await formatExpenses(expenses);
            }


            res.render("home", {
               title: "MoneyGone",
               isLoggedIn: req.isLoggedIn,
               loggedUsername: req.loggedUsername,
               userID: req.userID,
               expenses
            });
         } catch (err) {
            next(err);
         }
      },
      notFound: function (req, res) {
         res.render("404", {
            title: "Not Found",
            isLoggedIn: req.isLoggedIn,
            loggedUsername: req.loggedUsername,
            userID: req.userID
         });
      }
   }
}