const express = require("express")
const loginRouter = express.Router()
const bodyParser = require("body-parser")

loginRouter.use(bodyParser.json())

loginRouter.route("/user")
    .get((req, res) => {
        res.render("login", { role : "user" })
    })

loginRouter.route("/admin")
    .get((req ,res) => {
        res.render("login", { role: "admin" })
    })
    
loginRouter.route("/:role")
    .get((req, res) => {
        const role = req.body.role
        if( role === "user" ){
            res.redirect("/user")
        } else {
            res.redirect("/admin")
        }
    })    

module.exports = loginRouter