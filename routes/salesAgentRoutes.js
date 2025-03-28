const express = require("express");
const router = express.Router();

router.get("/addSales", (req, res) => {
    res.render("salesAgent");
});



router.post("/addSales", (req,res) => {
    console.log(req.body);
    res.redirect("/sales/addSales")
});


module.exports = router;