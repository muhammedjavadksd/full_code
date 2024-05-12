
//Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const proxy = require("express-http-proxy")

//Config
dotenv.config("./.env");

//const
const PORT = process.env.PORT || 7000
const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT

app.use((req, res, next) => {
    console.log("Request came")
    next()
})
 
//middleware
app.use("/api/auth", proxy("http://localhost:7001"))
 

app.listen(PORT, () => {
    console.log("Gateway started at Port : " + PORT)
})