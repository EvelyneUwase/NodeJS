const express = require("express");
const router = express.Router();
const passport = require("passport");

// import models

const SignUp = require("../models/SignUp");

//signup routes
router.get("/letsSignUp", (req, res) => {
  res.render("signUp");
});

router.post("/letsSignUp", async (req, res) => {
  try {
    const user = new SignUp(req.body);
    let existingUser = await SignUp.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(400).send("Not Registered, email already exists");
    } else {
      await SignUp.register(user, req.body.password, (error) => {
        if (error) {
          throw error;
        }
        res.redirect("/login");
      });
    }
    console.log(user);
  } catch (error) {
    res.status(400).render("signUp");
    console.log(error);
  }
});

//login routes

router.get("/login", (req, res) => {
  res.render("login");
})

router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
    console.log(req.body); // this prints whatever input in our body
    req.session.user = req.user;
    if (req.user.role === "manager"){
      res.redirect("/go-manager");
    } else if (req.user.role === "salesAgent"){
      res.redirect("/go-salesDash");
    } else if (req.user.role === "director"){
      res.redirect("/go-director");
    } else {
      res.send("Access Denied!");
    }
  });


  router.get("/logout", (req, res) =>{
    if(req.session){
      req.session.destroy((error) => {
        if(error){
          return res.status(500).send(error, "Error logging out")
        }
        res.redirect("/")
      })
    }
  })

  //for home page
  router.get("/", (req, res) =>{
    res.render("index")
  });

module.exports = router;



// .sort({$natural:-1}) its a code to sort items from first entered to last it is placed after find