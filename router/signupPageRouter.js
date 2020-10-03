const express = require("express")
const signupRouter = express.Router()
const bodyParser = require("body-parser")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const saltrounds = 12

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
        const role = req.params.role
        if( role === "user" ){
            res.redirect("/user")
        } else {
            res.redirect("/admin")
        }
    })
    .post((req, res) => {
        const role = req.params.role
        if(req.body.password === req.body.password2){
            bcrypt.hash(req.body.password, saltrounds, (err, hash) => {
                if(err){
                    res.send(err)
                } else {
                    const newUser = new userModel({
                        role: role,
                        email: req.body.email,
                        name: req.body.name,
                        number: req.body.number,
                        password: hash
                    })
        
                    newUser.save((err) => {
                        if(err){
                            res.send(err)
                        } else {
                            res.render("loggedIn")
                        }
                    })
                }
            })
        } else {
            res.send("Your passwords dont match")
        }
    })

module.exports = signupRouter