var http = require("http");

http
  .createServer(function (request, response) {
    response.end("Merhaba");
  })
  .listen(8080);
