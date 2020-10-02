const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

// bodyParser middleware...
app.use(bodyParser.urlencoded({ extended: true }));

// creating a model...
const homestieProjEmpl = require("../models/employmentModel")

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