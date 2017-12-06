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
mongoose.connect("mongodb://localhost/nytsearch", {
    useMongoClient: true
});

const db = mongoose.connection;
// Show any mongoose errors
db.on("error", error => console.log("Mongoose Error: ", error));
// Log a success message
db.once("open", error => console.log("Mongoose connection successful."));










// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

