//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
//Define port 
const PORT = process.env.PORT || 3000;


//Initialize Express
const app = express();
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: false
}));
mongoose.Promise = Promise;
mongoose.connect("mongodb://heroku_fvmw6l8b:rt8o0ksq9ru7rl7iqt78oaj6t3@ds137256.mlab.com:37256/heroku_fvmw6l8b", {
    useMongoClient: true
});

const db = mongoose.connection;
// Show any mongoose errors
db.on("error", error => console.log("Mongoose Error: ", error));
// Log a success message
db.once("open", error => console.log("Mongoose connection successful."));

