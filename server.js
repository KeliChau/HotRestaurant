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
    customerName: "Corey Sullivan",
    phoneNumber: "6508880054",
    customerEmail: "thisusernameisnottaken@gmail.com",
    customerID: "asljkfhaksdjgajf"
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
  res.sendFile(path.join(__dirname, "view.html"));
});

/* API ROUTES
***************/
//api/tables

app.get("/api/tables", function(req, res) {
  var apiTable =[];
  for (var i = 0; i < 5; i++) {
    apiTable.push(tables[i]);
  }

  res.json(apiTable);
});

//api/waitList
app.get("/api/waitlist", function(req, res) {
  var apiWait =[];
  for (var i = 5; i < tables.length; i++) {
    apiWait.push(tables[i]);
  }

  res.json(apiWait);
});

//
app.post("/api/new", function(req, res) {
  var newReserve = req.body;

  tables.push(newReserve);

  res.status(201).json(newReserve);

  res.sendFile(path.join(__dirname, "view.html"));
  
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
