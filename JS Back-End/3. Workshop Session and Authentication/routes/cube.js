const express = require('express');
const controller = require("../controllers/index");
const { authAccess, getUserStatus } = require("../utils/auth");

const router = express.Router();

router.route("/create")
   .get(authAccess, getUserStatus, controller.cube.get.create)
   .post(authAccess, getUserStatus, controller.cube.post.create);

router.get("/details/:id", getUserStatus, controller.cube.get.details);

router.route("/delete/:id")
   .get(authAccess, getUserStatus, controller.cube.get.delete)
   .post(authAccess, getUserStatus, controller.cube.post.delete);

router.route("/edit/:id")
   .get(authAccess, getUserStatus, controller.cube.get.edit)
   .post(authAccess, getUserStatus, controller.cube.post.edit);

module.exports = router;