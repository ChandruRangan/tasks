const express = require("express");
const app = express();
const Csvroute= require ('./routes/csvroute');
const fs=require('fs');
const bodyparser= require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine','ejs');
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/csvtask',
  {
    useNewUrlParser: true,
    //  useFindAndModify: false,
    //  useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


let PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is up and running on ${PORT} ...`);
     });



app.use('/',Csvroute);

// localhost:5000?filter=Removeabove50