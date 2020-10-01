const express = require('express');
const controller = require("../controllers/index");

const router = express.Router();

router.route("/create")
   .get(controller.cube.get.create)
   .post(controller.cube.post.create);

router.get("/details/:id", controller.cube.get.details);

module.exports = router;