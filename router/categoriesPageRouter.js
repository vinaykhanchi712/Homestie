const express = require("express")
const categoriesRouter = express.Router()
const productsModel = require("../models/productsModel")
const mongoose = require("mongoose")

categoriesRouter.route("/:categories")
    .get((req, res) => {
        const category = req.params.categories

        productsModel.find({ category : category }, (err, foundItems) => {
            if(err){
                console.log(err);
            } else{
                res.render("categories", { data: foundItems })
            }
        })
    })

module.exports = categoriesRouter