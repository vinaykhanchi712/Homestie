const express = require("express")
const productRouter = express.Router()
const db = require("../db-utils/content.json")


productRouter.route("/:id")
    .get((req, res) => {
        const id = req.params.id
        const result = db.filter(product => {
            return String(product.id) === id
        })
        console.log(result);
        res.render("product", { data : result })
    })

module.exports = productRouter    