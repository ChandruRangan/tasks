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



mongoose.connect('mongodb://localhost:27017/CRUDtask',
  {
    useNewUrlParser: true,
    //  useFindAndModify: false,
    //  useUnifiedTopology: true
  }
);
const db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
//setup server port
    app.listen(5000,()=>{
      console.log("port is running");
      }); 

    app.use('/',Emproute);
      

      






 


