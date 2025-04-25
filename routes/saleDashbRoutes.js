const express= require("express");
const router = express.Router();

router.get("/go-salesDash", (req, res) => {
    res.render("salesDashboard");
});



module.exports = router;