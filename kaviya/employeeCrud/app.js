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
const pro = require('./models/proSchema');

// const mongoose = require("mongoose")
//employee details
app.get("/",(req,res)=>{
    // res.send("<h1>hi</h1>");
    res.render('employee', {
    viewtitle:"Insert Employee Details"
    });
});

app.post('/insert',(req,res) => {
  req.body._id =='';
  insertValue(req,res);
});

function insertValue(req,res){
  var employee = new emp();
  employee.fullName = req.body.ename;
  employee.email = req.body.email;
  employee.password = req.body.pwd;
  employee.phoneNumber = req.body.phone;
  employee.joinDate = req.body.jdate;
  employee.dateofbirth = req.body.dob;
  employee.save((err) => {
    if(!err){
      console.log("Value inserted");
      res.redirect("/");
    }
    else{
      console.log('something goes wrong while inserting'+ err);
    }
  })
}
//project details
app.get("/project",(req,res)=>{
  // res.send("<h1>hi</h1>");
  res.render('project', {
  viewtitle:"Insert Project Details"
  });
});

app.post('/insert',(req,res) => {
  req.body._id =='';
  insertRecord(req,res);
});

function insertRecord(req,res){
  var project = new pro();
  project.projectName = req.body.projectName;
  project.projectLead = req.body.projectLead;
  project.teamMember = req.body.teamMember;
  project.p_StartDate = req.body.p_StartDate;
  project.p_EndDate= req.body.p_EndDate;
  project.save((err,doc) => {
    if(!err){
      console.log("project added");
      res.redirect("/project");
    }
    else{
      console.log("something went wrong while inserting" + err);
    }
  })
}

//empTable
app.get('/empTable',(req,res) => {
  emp.find((err,docs) => {
    if(!err){
      res.render("empTable", {
        employee: docs
      });
    }
    else{
      console.log('not found: '+err )
    }
  })
});


app.listen(3500, () => {
    console.log("port 3500 is running!");
});
