const express = require("express");
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.get("/shared-tripps", auth(true), controller.tripp.get.sharedTripps);

router.route("/offer-tripp")
   .get(auth(true), controller.tripp.get.offerTripp)
   .post(auth(true), controller.tripp.post.offerTripp);

router.get("/details/:id", auth(true), controller.tripp.get.details);

router.get("/close/:id", auth(true), controller.tripp.get.close);

router.get("/join/:id", auth(true), controller.tripp.get.join);

module.exports = router;