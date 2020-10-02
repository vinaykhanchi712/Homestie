const express = require("express")
const signupRouter = express.Router()
const bodyParser = require("body-parser")

signupRouter.use(bodyParser.json())

signupRouter.route("/user")
    .get((req, res) => {
        res.render("signup", { role: "user" })
    })

signupRouter.route("/admin")
    .get((req ,res) => {
        res.render("signup", { role: "admin" })
    })
    
signupRouter.route("/:role")
    .get((req, res) => {
        const role = req.body.role
        if( role === "user" ){
            res.redirect("/user")
        } else {
            res.redirect("/admin")
        }
    })    

module.exports = signupRouter