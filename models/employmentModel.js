const mongoose = require("mongoose")

// schema for collection...
const employmentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    areaCode: String,
    telNum: String,
    email: String,
    speciality: String,
    address: String,
});

module.exports = mongoose.model("Employment", employmentSchema);