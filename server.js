// 1. dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const moment = require("moment");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  });
require("dotenv").config();



//import User Model
const SignUp = require('./models/SignUp');


// 2. instantiations
const app = express();
const PORT = 3004;

//import routes

const salesAgentRoutes = require("./routes/salesAgentRoutes");
const authRoutes = require("./routes/authRoutes");
const directorRoutes = require("./routes/directorRoutes");
const managerRoutes = require("./routes/managerRoutes");
const salesDashbRoutes =require("./routes/saleDashbRoutes");
const indexRoutes = require("./routes/indexRoutes");
const salesRoutes = require("./routes/salesRoutes");
const produceRoutes = require("./routes/produceRoutes");

// 3. configurations

// 
app.locals.moment = moment;
// for setting how to  connecting to database mongodb
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });


// set a view engine
app.set("view engine", "pug"); // to specify the view engine
app.set("views", path.join(__dirname, "views"));

// 4. middleware
app.use(express.urlencoded({ extended: true })); //this ensures req.body gets parsed correctly from inputs
app.use(express.static(path.join(__dirname, "public"))); //This helps to parse data from the form
app.use("/public/images/uploads", express.static(__dirname + "/public/img/uploads")); //helps to retrieve image

// express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


// // passport configs they help to initialise passport
passport.use(SignUp.createStrategy());
passport.serializeUser(SignUp.serializeUser()); //gives a serial number to the user within a system inorder to track them
passport.deserializeUser(SignUp.deserializeUser());//

// 5. route
// using imported routes
app.use("/sales", salesRoutes);
app.use("/agents", salesAgentRoutes);
app.use("/", authRoutes);
app.use("/", directorRoutes);
app.use("/", managerRoutes);
app.use("/", salesDashbRoutes );
app.use("/", indexRoutes);
app.use("/", produceRoutes);



// 6.Bootstrapping
app.listen(PORT, () => console.log(`listening on  ${PORT}`));
