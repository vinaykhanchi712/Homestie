const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// bodyParser middleware...
app.use(bodyParser.urlencoded({ extended: true }));

// connecting mongoose...
mongoose
    .connect("mongodb://localhost:27017/homestieDatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

// schema for collection...
const employmentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    areaCode: String,
    telNum: String,
    email: String,
    speciality: String,
    address: String,
});

// creating a model...
const homestieProjEmpl = mongoose.model("Employment", employmentSchema);


// routes...
router.get("/", (req, res) => {
    res.render("employment");
});

router.post("/", (req, res) => {
    const newEmpl = new homestieProjEmpl({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        areaCode: req.body.areacode,
        telNum: req.body.telnum,
        email: req.body.email,
        speciality: req.body.speciality,
        address: req.body.address,
    });

    newEmpl.save((error) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect("/");
        }
    })

});

module.exports = router;