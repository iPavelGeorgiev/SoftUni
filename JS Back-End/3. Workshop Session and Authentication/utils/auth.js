const config = require("../config/config");
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');

const guestAccess = (req, res, next) => {
   const token = req.cookies["aid"];

   if (token) {
     return res.redirect("/");
   }

   next();
 }
 
 const authAccess = (req, res, next) => {
   const token = req.cookies["aid"];
   if (!token) {
     return res.redirect("/");
   }
   
   try {
     jwt.verify(token, config.jwtSecret);
     next();
   } catch(e) {
     return res.redirect("/");
   }
 }

 const getUserStatus = (req, res, next) => {
   const token = req.cookies["aid"];

   if (!token) {
     req.isLoggedIn = false;
   }
   
   try {
     const decoded = jwt.verify(token, config.jwtSecret);
     req.userId = decoded.userId;
     req.isLoggedIn = true;
   } catch(e) {
     req.isLoggedIn = false;
   }

   next();
 }

module.exports = {
   guestAccess,
   authAccess,
   getUserStatus
}