const { UserModel } = require("../models/index");
const { registerValidations } = require("../utils/validations");
const config = require("../config/environment");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
   get: {
      login: function (req, res) {
         res.render("login", {
            title: "Login",
            isLoggedIn: req.isLoggedIn
         });
      },
      register: function (req, res) {
         res.render("register", {
            title: "Register",
            isLoggedIn: req.isLoggedIn
         });
      },
      logout: function (req, res) {
         res.clearCookie(config.cookie);
         res.redirect("/");
      }
   },
   post: {
      login: async function (req, res, next) {
         const { email, password } = req.body;
         
         if (!email || !password) {
            res.status(404);
            return res.render("login", {
               title: "Login",
               isLoggedIn: req.isLoggedIn,
               error: "All fields must be filled!"
            });
         }

         try {
            const user = await UserModel.findOne({ email });

            if (!user) {
               res.status(404);
               return res.render("login", {
                  title: "Login",
                  isLoggedIn: req.isLoggedIn,
                  error: "The email or password is incorrect!"
               });
            }

            const status = await bcrypt.compare(password, user.password);

            if (!status) {
               res.status(404);
               return res.render("login", {
                  title: "Login",
                  isLoggedIn: req.isLoggedIn,
                  error: "The email or password is incorrect!"
               });
            }

            const payload = {
               userID: user._id,
               email
            }

            const token = await jwt.sign(payload, config.jwtSecret);
            await res.cookie(config.cookie, token);
            res.redirect("/");
         } catch (err) {
            next(err);
         }
      },
      register: async function (req, res, next) {
         const { email, password, rePassword } = req.body;
         const validate = registerValidations(req);

         if (validate.status) {
            res.status(404);
            return res.render("register", {
               title: "Register",
               isLoggedIn: req.isLoggedIn,
               error: validate.message 
            });
         }

         try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await UserModel.exists({ email });

            if (user) {
               res.status(404);
               return res.render("register", {
                  title: "Register",
                  isLoggedIn: req.isLoggedIn,
                  error: "User with this email already exists!"
               });
            }

            await UserModel.create({
               email,
               password: hashedPassword
            });

            console.log("User is successfully registered");
            res.redirect("/login");
         } catch (err) {
            next(err);
         }
      }
   }
}