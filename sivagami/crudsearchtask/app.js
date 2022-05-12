const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser= require("body-parser");
const Emproute=  require ('./emp.route');  //import route
//const router = require("./emp.route");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.use(express.json());
const dotenv = require('dotenv');

// Set up Global configuration access
dotenv.config();

mongoose.connect('mongodb://localhost:27017/CRUDtask',
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

//setup server port
    // app.listen(5000,()=>{
    //   console.log("port is running");
    //   }); 

   let PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is up and running on ${PORT} ...`);
     });

     app.use('/',Emproute);
      






 


