require("dotenv").config()

// requiring modules....
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")
const path = require("path")

// incuding router files....
const homePageRouter = require("./router/homePageRouter")
const loginPageRouter = require("./router/loginPageRouter")
const signupPageRouter = require("./router/signupPageRouter")
// const contactPageRouter = require("./router/contactPageRouter")
const employmentPageRouter = require("./router/employmentPageRouter")
const categoriesPageRouter = require("./router/categoriesPageRouter")
const productPageRouter = require("./router/productPageRouter")
const consultationPageRouter = require("./router/consultationPageRoute")

// initiaising express app....
const app = express();

// setting viewengine as ejs...
app.set("view engine", "ejs")

// uisng bodyParser middleware...
app.use(bodyParser.urlencoded({ extended: true }))

// *********************************************************************************
// use morgan middleware only for developing....
// const morgan = require("morgan")
// app.use(morgan("dev"))
// *********************************************************************************

// serving static files
app.use(express.static(path.join(__dirname, "public")))

const password = process.env.PASSWORD

// connecting mongoose...
mongoose
    .connect(`mongodb+srv://selva21:${password}@dbforhomestie.1sqlb.mongodb.net/homestieDatabase`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

// routes....
// home page route...
app.use("/", homePageRouter)

// login page route...
app.use("/login", loginPageRouter)

// register page route...
app.use("/signup", signupPageRouter)

// contact page route....
// app.use("/contact", contactPageRouter)

// employment register page route....
app.use("/employment", employmentPageRouter)

// categories page route....
app.use("/categories", categoriesPageRouter)

// product page route....
app.use("/product", productPageRouter)

// consultation page route....
app.use("/consultation", consultationPageRouter)

// contact us...
app.get("/contact", (req, res) => {
    res.render("contactUs")
})

const contactModel = require("./models/contactModel")
app.post("/contact", (req, res) => {
    const newUserMessage = new contactModel({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    newUserMessage.save((err) => {
        if(err){
            console.log(err);
        } else {
            res.redirect("/contact")
        }
    })
})


// error page...
app.use((req, res) => {
    res.render("error")
})

// serving the project
let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server live at port ${port}`)
})