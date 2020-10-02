const express = require("express")
const productRouter = express.Router()
const mongoose = require("mongoose")
const productsModel = require("../models/productsModel")

productRouter.route("/:id")
    .get((req, res) => {
        const id = req.params.id

        productsModel.find({ id: id }, (err, foundItem) => {
            if(err) console.log(err);
            else {
                res.render("product",{
                    data : foundItem
                })
            }
        })
    })

module.exports = productRouter