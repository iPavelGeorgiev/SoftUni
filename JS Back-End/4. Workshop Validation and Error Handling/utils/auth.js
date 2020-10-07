const { cookie, jwtSecret } = require("../config/config");
const { UserModel } = require("../models/index");
const jwt = require('jsonwebtoken');

module.exports = (justContinue = false, logReg = false) => {
  return async function (req, res, next) {
    const token = req.cookies[cookie] || "";

    try {
      const result = await jwt.verify(token, jwtSecret);
      const user = await UserModel.findById(result.userId);

      if (!user) {
        throw new Error("User not found!")
      }

      req.isLoggedIn = true;

      if (logReg) {
        return res.redirect("/")
      }

      next()
    } catch (err) {
      if (justContinue) {
        next();
        return;
      }
      res.redirect("/login");
    }
  }
}