"use strict";

const User = require("../../models/User");

const output ={
  home : (req, res) => {
    res.render("home/member_intro");
  },
  project : (req, res) => {
    res.render("home/Project");
  },
  apply: (req,res)=>{
    res.render("home/apply");
  },
  js: (req,res)=>{
    res.render("home/JS");
  },
  qna: (req,res)=>{
    res.render("home/QnA");
  },
  a1: (req,res)=>{
    res.render("home/A1");
  }
  };

const process={
  apply:(req, res)=>{
    const user = new User(req.body);
    const response = user.apply();
    return res.json(response);
  }
};

module.exports = {
  output,
  process,
};
