const express = require("express");
const controller = require("../controllers/index");
const auth = require("../utils/auth");

const router = express.Router();

router.get("/profile/:id", auth(true), controller.profile.get.profile);

module.exports = router;