const express = require('express');
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.route("/create/accessory")
   .get(auth(), controller.accessory.get.create)
   .post(auth(), controller.accessory.post.create);

router.route("/attach/accessory/:id")
   .get(auth(), controller.accessory.get.attach)
   .post(auth(), controller.accessory.post.attach);

module.exports = router;