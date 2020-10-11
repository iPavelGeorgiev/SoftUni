const express = require("express");
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.route("/login")
   .get(auth(false, true), controller.user.get.login)
   .post(controller.user.post.login);

router.route("/register")
   .get(auth(false, true), controller.user.get.register)
   .post(controller.user.post.register);

router.get("/logout", controller.user.get.logout);

module.exports = router;