const express = require("express")
const bodyParser = require("body-parser")
const contactModel = require("../models/contactModel")
const app = express()
const contactRouter = express.Router()

app.use(bodyParser.urlencoded({ extended : true }))

contactRouter.route("/")
    .get((req, res) => {
        res.render("contactUs")
    })
    .post((req, res) => {
        const newUserMessage = new contactModel({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        newUserMessage.save((err) => {
            if(err){
                console.log(err);
            } else {
                res.redirect("/contact")
            }
        })
    })

module.exports = contactRouter