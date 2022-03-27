"use strict";

const express = require("express");
const router = express.Router();
const mailer = require('./mail');

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/Project", ctrl.output.project);
router.get("/apply", ctrl.output.apply);
router.get("/js", ctrl.output.js);
router.get("/qna", ctrl.output.qna);
router.get("/a1", ctrl.output.a1);
router.post("/apply", ctrl.process.apply);
module.exports = router;

router.get('/mail', (req, res) => {
    const { email }  = req.body;
  
    let emailParam = {
      toEmail: email,     // 수신할 이메일
  
      subject: 'JS 스터디',   // 메일 제목
  
      text: `JS STUDY에 지원이 확인 됐습니다🤗 비대면 면접 일정이 추후에 공지될 예정이니 열심히 준비해 주세요!`                // 메일 내용
    };
  
    mailer.sendGmail(emailParam);
  
    res.status(200).send("성공");
  })
  
  module.exports = router;