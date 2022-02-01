var mongoose = require("mongoose");
var Customer = require("./customer");
// url=>mongodb+srv://admin:1230123@cluster0.t5gqq.mongodb.net/shop?retryWrites=true&w=majority
//mongodb+srv://admin:<password>@cluster0.t5gqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
  "mongodb+srv://admin:1230123@cluster0.t5gqq.mongodb.net/shop?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("connected to mongoDB");
    }
  }
);

// var customer1 = new Customer({
//   name: "Ezekiel",
//   city: "Town",
// });

// customer1.save((error) => {
//   if (error) {
//     throw error;
//   }

//   console.log("Customer saved !");
// });
