require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
// const morgan = require("morgan")
const ejs = require("ejs")
const path = require("path")

// incuding router files
const homePageRouter = require("./router/homePageRouter") 
const loginPageRouter = require("./router/loginPageRouter") 
const signupPageRouter = require("./router/signupPageRouter") 

// initiaising express app 
const app = express();

// setting viewengine as ejs...
app.set("view engine", "ejs")

// uisng bodyParser middleware...
app.use(bodyParser.urlencoded({ extended : true }))

// use morgan middleware
// app.use(morgan("dev"))

// serving static files
app.use(express.static(path.join(__dirname, "public")))


// routes....
// home page route...
app.use("/", homePageRouter)

// login page route...
app.use("/login", loginPageRouter)

// register page route...
app.use("/signup", signupPageRouter)

// error page...
app.use((req, res) => {
    res.render("error")
})

// serving the project
let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server live at port ${port}`)
})