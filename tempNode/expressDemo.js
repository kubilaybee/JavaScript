var express = require("express");
var app = express();

app.get("/", function (request, response) {
  response.send("Hello");
});
app.get("/admin", function (request, response) {
  response.send("Hello Admin");
});
app.get("/product", function (request, response) {
  response.send("Hello Product");
});

app.post("/product", function (request, response) {
  response.send("Post request accepted !!");
});

app.delete("/product", function (request, response) {
  response.send("Post deleted !!");
});

// customer ile başlayan *customer customer ile biten *customer* içinde customer geçen
app.get("*customer*", function (request, response) {
  response.send("Customers Listed !!");
});

var server = app.listen(8080);
