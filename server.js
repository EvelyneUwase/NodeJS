// 1. dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();

// 2. instantiations
const app = express();
const PORT = 3030;

//import routes
const productRoutes = require("./routes/productRoutes");
const salesAgentRoutes = require("./routes/salesAgentRoutes");

// 3. configurations
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
app.use(express.urlencoded({ extended: true })); //
app.use(express.static(path.join(__dirname, "public"))); //This helps to parse data from the form

// 5. routes
// using imported routes
app.use("/products", productRoutes);
app.use("/sales", salesAgentRoutes);

// 6.Bootstrapping
app.listen(PORT, () => console.log(`listening on  ${PORT}`));
