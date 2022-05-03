// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// app.use(bodyparser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(bodyparser.json());
// //const Employee = mongoose.model("empModel");

// app.get("/", (req, res) => {
//   res.render("index", {viewtitle: "Insert Employee",});
// });

// //app.post("/", (req, res) => {});

// app.listen(2000, () => {
//   console.log(`The running port is http://localhost:2000`);
// });

// require('./models/mongoconfig');

const express = require("express");
const app = express();
const database = require('./models/mongoconfig');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended:true }));
app.set('view engine','ejs');
app.use(bodyparser.json());
const emp = require('./models/empSchema');
// const project = require('./models/projectSchema');

// const mongoose = require("mongoose")
app.get("/",(req,res)=>{
    // res.send("<h1>hi</h1>");
    res.render('index', {
    viewtitle:"Insert Employee Details"
    });
});

app.post('/insert',(req,res) => {
  req.body._id =='';
  insertValue(req,res);
});

function insertValue(req,res){
  var employee = new emp();
  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.password = req.body.password;
  employee.phoneNumber = req.body.phoneNumber;
  employee.joinDate = req.body.joinDate;
  employee.dateofbirth = req.body.dateofbirth;
  employee.save((err) => {
    if(!err){
      console.log("Value inserted");
      res.rediect("/");
    }
    else{
      console.log('something goes wrong while inserting'+ err);
    }
  })
}

// app.get("/",(req,res)=>{
//   // res.send("<h1>hi</h1>");
//   res.render('views', {
//   viewtitle:"Insert Project Details"
//   });
// });


app.listen(2000, () => {
    console.log("port 2000 is running!");
});
