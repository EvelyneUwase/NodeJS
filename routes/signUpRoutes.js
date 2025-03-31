const express = require("express");
const router = express.Router();

// iimport models
const signUp = require('../models/signUp');

router.get("/letsSignUp", (req,res) => {
  res.render("signUp");
});

router.post("/letsSignUp", (req,res) => {
 try {
  const user = new signUp(req.body);
  console.log(user); 
  user.save();
  res.redirect("/letsSignUp")

 } catch (error) {
  res.status(400).render("signUp")
  console.log(error);
  
 }
});

module.exports = router;
