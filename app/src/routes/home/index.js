"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/project", ctrl.output.project);
router.get("/apply", ctrl.output.apply);
router.get("/js", ctrl.output.js);
router.get("/qna", ctrl.output.qna);
router.get("/answer", ctrl.output.answer);
router.post("/apply", ctrl.process.apply);
module.exports = router;