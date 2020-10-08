const express = require("express");
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.route("/create")
   .get(auth(true), controller.play.get.create)
   .post(auth(true), controller.play.post.create);

router.get("/details/:id", auth(true), controller.play.get.details);

router.get("/like/:id", auth(true), controller.play.get.like);

router.get("/delete/:id", auth(true), controller.play.get.delete);

router.route("/edit/:id")
   .get(auth(true), controller.play.get.edit)
   .post(auth(true), controller.play.post.edit);

module.exports = router;