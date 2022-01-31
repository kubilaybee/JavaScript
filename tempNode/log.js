const { Console } = require("console");
var log = require("./log.js");

var log = {
  information: function (info) {
    console.log("Information: " + info);
  },
  fault: function (fault) {
    console.log("Fault: " + fault);
  },
};
