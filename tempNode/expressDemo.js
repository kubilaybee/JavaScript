var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// extended true olursa json gibi bir data dönüşü sağlanır
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (request, response) {
  response.send("Hello");
});
app.get("/admin", function (request, response) {
  response.send("Hello Admin");
});

app.get("/product", function (request, response) {
  console.log("ID: " + request.query.id);
  console.log("Category ID: " + request.query.categoryid);

  response.send("Hello Product");
});

app.post("/product", urlEncodedParser, function (request, response) {
  console.log(request.body.name);
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
