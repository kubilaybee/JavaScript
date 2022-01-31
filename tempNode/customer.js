var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// schema
var customerSchema = new Schema({
  name: string,
  city: string,
});

var Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
