const express = require("express");
const router = express.Router();
const multer = require("multer");

//import models

const SalesAgent = require("../models/SalesAgent");

router.get("/addAgent", (req, res) => {
  res.render("salesAgent");
});

router.post("/addAgent", async (req, res) =>{
  try {
    const agent = new SalesAgent(req.body);
    await agent.save();
    agent.image = req.file.path;
    console.log(agent);
    res.redirect("/agents/addAgent");
  } catch (error) {
    res.status(400).render("salesAgent");
    console.log(error);
  }
});


// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); //keeps the original name of the image
  },
});
var upload = multer({ storage: storage });

//for the salesList
router.get("/agentsList", async (req, res) => {
  try {
    const agents = await SalesAgent.find();
    res.render("salesAgentList", { agents });
  } catch (err) {
    console.error("Error fetching sales", err);
    res.status(400).send("Unable to find agents in the db");
  }
  res.render("sales");
});

module.exports = router;
