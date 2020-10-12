const { ExpenseModel, UserModel } = require("../models/index");

module.exports = {
   get: {
      profile: async (req, res, next) => {
         const userId = req.userID;

         try {
            const user = await UserModel.findById(userId);
            const expenses = await ExpenseModel.find({ "_id": { $in: user.expenses } });

            const totalMerchants = expenses.length;
            const totalAmount = expenses.reduce((accu, curr) => {
               accu += curr.total;
               return accu;
            }, 0);
            const availableAmount = user.amount - totalAmount;

            res.render("account-info", {
               title: "Account Info",
               isLoggedIn: req.isLoggedIn,
               loggedUsername: req.loggedUsername,
               userID: req.userID,
               totalMerchants,
               totalAmount,
               availableAmount
            })
         } catch (err) {
            next(err);
         }
      }
   }
}