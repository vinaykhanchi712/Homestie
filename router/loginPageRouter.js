const express = require("express")
const router = express.Router()

router.get("/:role", (req, res) => {
    const userRole = req.params.role
    
    res.render("login")
})

module.exports = router