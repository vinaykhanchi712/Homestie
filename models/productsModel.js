const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id: Number,
    image: String,
    name: String,
    description: String,
    video: String,
    warrenty: String,
    category: String
})

module.exports = mongoose.model("Product", productSchema)