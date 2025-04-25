const express = require("express");
const router = express.Router();

// import register model
const Produce = require("../models/Produce")

router.get("/addProduce", (req, res) => {
  res.render("registerProduce");
});

router.post("/addProduce", async (req, res) => {
  try {
    const newProduce = new Produce(req.body);
    await newProduce.save();
    console.log("Produce saved:", newProduce);
    res.redirect("/addProduce");
  } catch (err) {
    console.error("Error saving produce:", err);
    res.status(400).send("Unable to save produceto the database");
  }
});



// getting data fron database
router.get("/produceList", async (req, res) => {
  try {
    const produces = await Produce.find();
    res.render("produceList", { produces }); // passing sales to the Pug view
  } catch (err) {
    console.error("Error fetching sales:", err);
    res.status(500).send("Unable to retrieve sales from the database");
  }
});


router.get('/addProduce/:id', async (req, res) => {
  try {
    const produce = await Produce.findById(req.params.id);
    if (!produce) {
      return res.status(404).send('Produce not found');
    }
    res.render('addProduce', { produce }); // assuming you use addProduce.pug
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route to delete a produce item
router.post('/produce/delete/:id', async (req, res) => {
  try {
    await Produce.findByIdAndDelete(req.params.id);
    res.redirect('/produce'); // or wherever your list of produce is
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});




module.exports = router
