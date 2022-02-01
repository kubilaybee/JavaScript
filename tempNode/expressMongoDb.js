var mongoose = require("mongoose");
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
