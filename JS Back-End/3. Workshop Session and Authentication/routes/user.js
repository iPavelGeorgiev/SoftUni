const express = require("express");
const controller = require("../controllers/index");
const { guestAccess, getUserStatus } = require("../utils/auth");

const router = express.Router();

router.route("/register")
   .get(guestAccess, getUserStatus ,controller.user.get.register)
   .post(controller.user.post.register);

router.route("/login")
   .get(guestAccess, getUserStatus ,controller.user.get.login)
   .post(controller.user.post.login);

router.get("/logout", controller.user.get.logout);

module.exports = router;