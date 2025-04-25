const express= require("express");
const router = express.Router();

router.get("/go-manager", (req, res) => {
    res.render("managerDashboard");
});


module.exports = router;