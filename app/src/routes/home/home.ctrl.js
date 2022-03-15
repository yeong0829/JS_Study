"use strict";

//const User = require("../../models/User");

const output ={
  home : (req, res) => {
    res.render("home/index");
  },
  project : (req, res) => {
    res.render("home/project");
  },
  apply: (req,res)=>{
    res.render("home/apply");
  },
  js: (req,res)=>{
    res.render("home/js");
  },
  qna: (req,res)=>{
    res.render("qna/apply");
  },
  answer: (req,res)=>{
    res.render("answer/apply");
  }
  };

// const process={
//   login : (req, res)=>{
//     const user = new User(req.body);
//     const response = user.login();
//     return res.json(response);
//   },
//   register:(req, res)=>{
//     const user = new User(req.body);
//     const response = user.register();
//     return res.json(response);
//   }
// };



module.exports = {
  output,
  process,
};
