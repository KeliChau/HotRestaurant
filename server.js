// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//Built in
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//dummy
var tables = [
  {
    customerName: "Ahmed",
    customerEmail: "afhaque89@gmail.com",
    customerID: "afhaque89",
    phoneNumber: "979-587-0887"
  },
  {
    customerName: "John Liscar",
    phoneNumber: "7065706063",
    customerEmail: "john.liscar@gmail.com",
    customerID: ""
  },
  {
    customerName: "Austin Branham",
    phoneNumber: "7708837281",
    customerEmail: "austinhb1993@gmail.com",
    customerID: ""
  },
  {
    customerName: "Rick James",
    phoneNumber: "555 555 5555",
    customerEmail: "rickjames@rickjames.com",
    customerID: ""
  },
  {
    customerName: "Miki",
    phoneNumber: "555-555-5555",
    customerEmail: "miki@gmail.com",
    customerID: "miki3"
  }
];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
//home route
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//tables route
app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

//api/tables
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

//api/waitList
app.get("/api/waitlist", function(req, res) {});

//reserve route post
app.post("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "book.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
