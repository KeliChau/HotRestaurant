// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var clientJS = require('./index.js');
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
    resName: "Corey Sullivan"
  }
];
var waitlist = [];

// var apiTable =[];
// var apiWait =[];


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

//Routes
//home route
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//tables route
app.get("/book", function(req, res) {
  res.sendFile(path.join(__dirname, "book.html"));
});

//tables route
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

/* API ROUTES
***************/
//api/tables

app.get("/api/tables", function(req, res) {
  // for (var i = 0; i < tables.length; i++) {
  //   waitlist.push(tables[i]);
  // }

   return res.json(tables);

});

//api/waitList
app.get("/api/waitlist", function(req, res) {
  // for (var i = 5; i < tables.length; i++) {
  //   waitlist.push(tables[i]);
  // }

  return res.json(waitlist);
});

//
app.post("/api/new", function(req, res) {
  var newReserve = req.body;
  if(tables.length == 5){
    waitlist.push(newReserve);
  }else{
    tables.push(newReserve);
  }

  res.status(201).json(newReserve);

  // res.sendFile(path.join(__dirname, "view.html"));
  
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
