const mongoose = require("mongoose")

// schema for collection...
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    subject: String,
});

// creating a model...
module.exports = mongoose.model("User", userSchema);