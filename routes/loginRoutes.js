const express = require("express");
const router = express.Router();

router.get("/letslogin", (req, res) => {
  res.render("login");
});

router.post("/letslogin", (req,res) => {
  console.log(req.body); // this prints whatever input in our body
  res.redirect("/login/letslogin")
});

module.exports = router;
