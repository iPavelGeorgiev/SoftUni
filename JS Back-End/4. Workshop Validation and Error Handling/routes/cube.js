const express = require('express');
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.route("/create")
   .get(auth(), controller.cube.get.create)
   .post(auth(), controller.cube.post.create);

router.get("/details/:id", auth(true), controller.cube.get.details);

router.route("/delete/:id")
   .get(auth(), controller.cube.get.delete)
   .post(auth(), controller.cube.post.delete);

router.route("/edit/:id")
   .get(auth(), controller.cube.get.edit)
   .post(auth(), controller.cube.post.edit);

module.exports = router;