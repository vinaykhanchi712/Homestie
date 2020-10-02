const express = require("express")
const router = express.Router()
const db = require("../db-utils/content.json")


router.get("/mobile", (req, res) => {
    let arrayOfProducts = []    
    db.forEach(data => {
        if( data.category === "mobile" ){
            arrayOfProducts.push(data)
        }
    });
    res.render("categories", { data : arrayOfProducts })
})
router.get("/laptops", (req, res) => {
    let arrayOfProducts = []    
    db.forEach(data => {
        if( data.category === "laptop" ){
            arrayOfProducts.push(data)
        }
    });
    res.render("categories", { data: arrayOfProducts })
})
router.get("/networkcomponents", (req, res) => {
    let arrayOfProducts = []    
    db.forEach(data => {
        if( data.category === "networking" ){
            arrayOfProducts.push(data)
        }
    });
    res.render("categories", { data : arrayOfProducts })
})
router.get("/electricappliances", (req, res) => {
    let arrayOfProducts = []    
    db.forEach(data => {
        if( data.category === "electronics" ){
            arrayOfProducts.push(data)
        }
    });
    res.render("categories", { data : arrayOfProducts })
})
router.get("/homeappliances", (req, res) => {
    let arrayOfProducts = []    
    db.forEach(data => {
        if( data.category === "home appliance" ){
            arrayOfProducts.push(data)
        }
    });
    res.render("categories", { data : arrayOfProducts })
})

module.exports = router