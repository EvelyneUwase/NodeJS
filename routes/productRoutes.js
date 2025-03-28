const express = require("express");
const router = express.Router();

router.get("/addProduct", (req, res) => {
  res.render("productForm");
});

router.post("/addProduct", (req,res) => {
  console.log(req.body); // this prints whatever input in our body
  res.redirect("/products/addProduct")
});

router.get("/getProduct", (req, res) => {
  res.send("This is the list of products");
});

module.exports = router;
