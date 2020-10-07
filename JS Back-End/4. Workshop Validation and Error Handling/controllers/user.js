const { UserModel } = require("../models/index");
const { registerValidations } = require("../utils/validations");
const config = require("../config/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
   get: {
      register: function (req, res) {
         res.render("registerPage", {
            title: "Register | Cube Workshop",
            isLoggedIn: req.isLoggedIn
         });
      },
      login: function (req, res) {
         res.render("loginPage", {
            title: "Login | Cube Workshop",
            isLoggedIn: req.isLoggedIn
         });
      },
      logout: function (req, res) {
         res.clearCookie("aid");
         res.redirect("/");
      }
   },
   post: {
      register: async function (req, res, next) {
         const data = { ...req.body };
         const validate = registerValidations(req);

         if (validate.status) {
            res.status(404);
            return res.render("registerPage", {
               title: "Register | Cube Workshop",
               isLoggedIn: req.isLoggedIn,
               error: validate.message
            });
         }

         try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.password, salt);
            const user = await UserModel.exists({ username: data.username });

            if (user) {
               res.status(404);
               return res.render("registerPage", {
                  title: "Register | Cube Workshop",
                  isLoggedIn: req.isLoggedIn,
                  error: "Username already exists!"
               });
            }

            await UserModel.create({
               username: data.username,
               password: hashedPassword
            });

            console.log("User is successfully registered");
            res.redirect("/login");
         } catch (err) {
            next(err);
         }
      },
      login: async function (req, res, next) {
         const data = { ...req.body };

         if (!data.username || !data.password) {
            res.status(404);
            return res.render("loginPage", {
               title: "Login | Cube Workshop",
               isLoggedIn: req.isLoggedIn,
               error: "All fields must be filled!"
            });
         }

         try {
            const user = await UserModel.findOne({ username: data.username });

            if (!user) {
               res.status(404);
               return res.render("loginPage", {
                  title: "Login | Cube Workshop",
                  isLoggedIn: req.isLoggedIn,
                  error: "The username or password is incorrect!"
               });
            }

            const status = await bcrypt.compare(data.password, user.password)

            if (!status) {
               res.status(404);
               return res.render("loginPage", {
                  title: "Login | Cube Workshop",
                  isLoggedIn: req.isLoggedIn,
                  error: "The username or password is incorrect!"
               });
            }

            const payload = {
               userId: user._id,
               username: user.username
            }

            const token = await jwt.sign(payload, config.jwtSecret);

            await res.cookie(config.cookie, token);
            res.redirect("/");
         } catch (err) {
            next(err);
         }
      }
   }
}