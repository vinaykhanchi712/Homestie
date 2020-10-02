const express = require("express")
const loginRouter = express.Router()
const bodyParser = require("body-parser")
const userModel = require("../models/userModel")

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
    .post((req, res) => {
        const role = req.params.role
        userModel.find({ email : req.body.name }, (err, foundUser) => {
            if(err){
                res.send(err)
            } else{
                if( foundUser.password === req.body.password.trim() && foundUser.role === role ){
                    res.render("logged-in")
                } else {
                    res.render("failedlogin", { data : role })
                }
            }
        })
    })

module.exports = loginRouter