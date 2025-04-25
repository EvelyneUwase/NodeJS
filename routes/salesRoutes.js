const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
// import model
const Sale = require("../models/Sale");


router.get("/addSale", (req, res) => {
  res.render("registerSale");
});

router.post("/addSale", connectEnsureLogin.ensureLoggedOut(), async (req, res) => {
  try {
    const newSale = new Sale(req.body);
    await newSale.save();
    console.log("New sale saved:", newSale);
    res.redirect("/sales/addSale");
  } catch (err) {
    console.error("Error saving sale:", err);
    res.status(400).send("Unable to save sale to the database");
  }
});


// getting data from DB to list

router.get("/salesList", async (req, res) => {
  try {
    const sales = await Sale.find().sort({})
    res.render("salesList", { sales }); // passing sales to the Pug view
  } catch (err) {
    console.error("Error fetching sales:", err);
    res.status(500).send("Unable to retrieve sales from the database");
  }
});


// Update Sale
router.get("/updateSale/:id", async (req, res) => {
  try {
    const updateSale = await Sale.findOne({ _id: req.params.id });
    res.render("updateSale", { sale: updateSale });
  } catch (error) {
    res.status(400).send("Unable to update data in dataBase");
  }
});

router.post("/updateSale", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sales/salesList");
  } catch (error) {
    res.status(400).send("Unable to update data in the dataBase");
  }
});

// deleting
router.post("/deleteSale", connectEnsureLogin.ensureLoggedIn(), async(req,res) =>{
  try {
    await Sale.deleteOne({_id:req.body.id});
    res.redirect("back")
  } catch (error) {
    res.status(400).send("Unable to delete sale in the database")
  }
})


module.exports = router;



// connectEnsureLogin.ensureLoggedOut(), this function is optional on where you want to secure or limit users unless they are logged in
