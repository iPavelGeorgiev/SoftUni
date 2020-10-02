const express = require('express');
const controller = require("../controllers/index");
const { authAccess, getUserStatus } = require("../utils/auth");

const router = express.Router();

router.route("/create/accessory")
   .get(authAccess, getUserStatus, controller.accessory.get.create)
   .post(authAccess, getUserStatus, controller.accessory.post.create);

router.route("/attach/accessory/:id")
   .get(authAccess, getUserStatus, controller.accessory.get.attach)
   .post(authAccess, getUserStatus, controller.accessory.post.attach);

module.exports = router;