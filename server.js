// 1. dependencies
const express = require('express')
const path = require('path')

// 2. instantiations
const app = express();
const PORT = 3030;

//import routes
const productRoutes = require("./routes/productRoutes")

// 3. configurations
// set a view engine
app.set("view engine", "pug"); // to specify the view engine
app.set("views", path.join(__dirname, "views"));


// 4. middleware
app.use(express.urlencoded({extended: true})); //
app.use(express.static(path.join(__dirname, "public"))) //This helps to parse data from the form



// 5. routes
// using imported routes
app.use("/", productRoutes)


// 6.Bootstrapping
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

