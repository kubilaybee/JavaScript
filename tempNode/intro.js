var http = require("http");
var log = require("./log.js");
var sayHello = require("./exportsDemo.js");

http
  .createServer(function (request, response) {
    console.log(request.url);
    if (request.url == "/admin") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html><body><strong>Admin Page</strong></body></html>");
    } else if (request.url == "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<html><body><strong>Main Page</strong></body></html>");
    } else if (request.url == "/customer") {
      response.writeHead(200, { "Content-Type": "application/json" }); // json data sendind
      response.write(JSON.stringify({ name: "Tony", lastName: "Montana" }));
    }
    response.end();
  })
  .listen(8080);

log.information("Sunucu Online");
console.log(sayHello());
