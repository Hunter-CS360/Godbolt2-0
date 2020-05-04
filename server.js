var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  console.log("requested main page");
  res.sendfile("main.html");
});
app.listen(8080);
