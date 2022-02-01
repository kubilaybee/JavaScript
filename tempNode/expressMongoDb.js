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
//   name: "Barry",
//   city: "City",
// });

// customer1.save((error) => {
//   if (error) {
//     throw error;
//   }

//   console.log("Customer saved !");
// });

// datas to list {}
// filter the data with { name: "Tony" }
// Customer.find({ name: "Tony" }, (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });

// Customer.findById("61f8aa5c75b6f2935015031f", (error, data) => {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });

Customer.find({}, (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
})
  .where("city")
  .equals("Town") // eşleşme or gt=greaterThan komutu büyük lt() küçük lte küçük eşit
  .limit(2) // dönecek data sayısı
  .sort("name") // sıralama funct -name tersten sıralama sağlar
  .select("name city"); // sadece dönecek datalar
