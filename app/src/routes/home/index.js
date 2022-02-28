"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

//어디로 이동하는지
router.get("/", ctrl.home);
router.get("/apply", ctrl.apply);

module.exports = router;