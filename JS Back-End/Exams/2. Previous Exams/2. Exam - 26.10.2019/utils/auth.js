const jwt = require("jsonwebtoken");
const config = require("../config/environment");
const { UserModel } = require("../models/index");

module.exports = (redirectUnauthenticated = false, logReg = false) => {
   return async function (req, res, next) {
      const token = await req.cookies[config.cookie] || "";

      try {
         const result = await jwt.verify(token, config.jwtSecret)
         const user = await UserModel.findById(result.userID);

         if (!user) {
            throw new Error("User not found!")
         }
         
         req.isLoggedIn = true;
         req.loggedUsername = user.username;
         req.userID = user._id;

         if (logReg) {
            return res.redirect("/")
         }

         next()
      } catch (err) {

         if (redirectUnauthenticated) {
            res.redirect("/login");
            return;
         }

         next();
      }
   }
}