const express = require("express");
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.route("/course/create")
   .get(auth(true), controller.course.get.create)
   .post(auth(true), controller.course.post.create);

router.route("/details/:id")
   .get(auth(true), controller.course.get.details)

module.exports = router;