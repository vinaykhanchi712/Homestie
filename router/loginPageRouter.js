const express = require("express")
const loginRouter = express.Router()
const bodyParser = require("body-parser")
const userModel = require("../models/userModel")
const app = express()
const bcrypt = require("bcrypt")

app.use(bodyParser.json())

loginRouter.route("/user")
    .get((req, res) => {
        res.render("login", { role: "user" })
    })

loginRouter.route("/admin")
    .get((req, res) => {
        res.render("login", { role: "admin" })
    })

loginRouter.route("/:role")
    .get((req, res) => {
        const role = req.body.role
        if (role === "user") {
            res.redirect("/user")
        } else {
            res.redirect("/admin")
        }
    })
    .post((req, res) => {
        userModel.findOne({ email: req.body.email }, (err, foundUser) => {
            if (err) {
                res.send(err)
            } else {
                if(foundUser.length == 0){
                    res.send("No user found for the given email")
                }
                else if( req.params.role === foundUser.role ){
                    bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
                        if(err) { res.send(err) }
                        else {
                            if(result === true){
                                res.render("loggedIn")
                            } else {
                                res.render("failedLogin", { data: req.params.role })
                            }
                        }
                    });
                } else {
                    res.render("failedLogin", { data: req.params.role })
                }
            }
        })
    })

module.exports = loginRouter