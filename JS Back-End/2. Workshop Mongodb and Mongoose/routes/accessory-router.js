const express = require('express');
const controller = require("../controllers/index");

const router = express.Router();

router.route("/create/accessory")
   .get(controller.accessory.get.create)
   .post(controller.accessory.post.create);

router.route("/attach/accessory/:id")
   .get(controller.accessory.get.attach)
   .post(controller.accessory.post.attach);

module.exports = router;