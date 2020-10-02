const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

// bodyParser middleware...
app.use(bodyParser.urlencoded({ extended: true }));

const homestieProjUser = require("../models/contactModel")

// routes...
router.get("/", (req, res) => {
    res.render("contactUS");
});

router.post("/", (req, res) => {
    const newUser = new homestieProjUser({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    newUser.save((error) => {
        if (error) console.log(error)
        else {
            res.redirect("/contact");
        }
    })

});

module.exports = router;