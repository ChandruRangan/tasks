/*const mongoose = require("mongoose");

const { MONGO_URI } = "mongodb://localhost:27017/JWT";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser= require("body-parser");
// const Emproute=  require ('./emp.route');  //import route
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/CRUDtaska',
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
    app.listen(5000,()=>{
      console.log("port is running");
      }); 

    // app.use('/',Emproute);
      

