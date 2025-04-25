const express= require("express");
const router = express.Router();

router.get("/go-director", (req, res) => {
    res.render("directorDashboard");
});


module.exports = router;