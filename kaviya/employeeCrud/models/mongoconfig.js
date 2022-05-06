// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb://localhost:27017/employeeCrud",
//   { useNewUrlParser: true },
//   (err) => {
//     if (!err) {
//       console.log("Connection created.");
//     } else {
//       console.log("Connection failed: : " + err);
//     }
//   }
// );

// require("./emp.insert");

const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/employeeCrud",
{
    useNewUrlParser: true

}, (err) => {
    if(!err){
        console.log('connection')
    }

    else {
    console.log("something went wrong")
    }
}); 

// .then(() => {
//     console.log('connection successful');
// }).catch((err) => {
//     console.log("something went wrong",err)
// }))

/* //Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = "mongodb://localhost:27017/employeeCrud";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
 */
