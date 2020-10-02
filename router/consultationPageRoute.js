const express = require("express")
const consultationRouter = express.Router()
const employmentModel = require("../models/employmentModel")

consultationRouter.route("/:cat")
    .get((req, res) => {
        const cat = req.params.cat.trim()
        employmentModel.find({ speciality : cat }, (err, foundItems) => {
            if(err){
                console.log(err)
            } else {
                res.render("consult", { datas: foundItems })
            }
        })
    })

module.exports = consultationRouter