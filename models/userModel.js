const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    role: String,
    name: String,
    password: String,
    email: String,
    phone: String
})

module.exports = mongoose.model("User", userSchema)