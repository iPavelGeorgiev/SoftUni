const { UserModel } = require("../models/index");
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
         const { username, password, repeatPassword } = req.body;

         if (!username || password !== repeatPassword) {
            alert("Invalid username or password");
            return res.redirect("/register");
         }


         try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            await UserModel.create({
               username,
               password: hashedPassword
            });

            console.log("User is successfully registered");
            res.redirect("/login");
         } catch (err) {
            next(err);
         }
      },
      login: async function (req, res, next) {
         const { username, password } = req.body;

         try {
            const user = await UserModel.findOne({ username });

            if (!user) {
               console.log("user not found!");
               return res.redirect("/login");
            }

            const status = await bcrypt.compare(password, user.password)

            if (status) {
               const payload = {
                  userId: user._id,
                  username: user.username
               }
               
               const token = await jwt.sign(payload, config.jwtSecret);

               await res.cookie("aid", token);
               res.redirect("/");
            } else {
               console.log("Invalid login credentials");
               res.redirect("/login");
            }
         } catch (err) {
            next(err);
         }
      }
   }
}