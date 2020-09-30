const express = require("express")
const router = express.Router()

router.get("/user", (req, res) => {
    res.render("signup")
})

router.get("/admin", (req, res) => {
    res.render("signup")
})

module.exports = router