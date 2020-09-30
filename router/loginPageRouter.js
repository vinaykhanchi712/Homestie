const express = require("express")
const router = express.Router()

router.get("/user", (req, res) => {
    res.render("login")
})

router.get("/admin", (req, res) => {
    res.render("login")
})

module.exports = router