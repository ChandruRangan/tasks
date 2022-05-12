

const express = require("express");
const app = express();
const alert = require("alert")
const database = require("./models/mongoconfig");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(bodyparser.json());
const emp = require("./models/empSchema");
const pro = require("./models/proSchema");

// const mongoose = require("mongoose")
//employee details
app.get("/", (req, res) => {
  // res.send("<h1>hi</h1>");
  res.render("employee", {
    viewtitle: "Insert Employee Details",
  });
});

app.post("/insert", (req, res) => {
  req.body._id == "";
  insertValue(req, res);
});

function insertValue(req, res) {
  var employee = new emp();
  employee.fullName = req.body.ename;
  employee.email = req.body.email;
  employee.password = req.body.pwd;
  employee.phoneNumber = req.body.phone;
  employee.joinDate = req.body.jdate;
  employee.dateofbirth = req.body.dob;
  // console.log(req.boby.birthDate)
  employee.save((err) => {
    if (!err) {
      console.log("Value inserted");
      res.redirect("/");
      alert("value inserted");
    } else {
      console.log("something goes wrong while inserting" + err);
    }
  });
}
//project details
app.get("/project", (req, res) => {
    res.render("project", {
      viewtitle: "Insert Project Details",
    });
  
});

app.post("/project", (req, res) => {
  req.body._id == "";
  insertRecord(req, res);
});

function insertRecord(req, res) {
  var project = new pro();
  project.projectName = req.body.pname;
  project.projectLead = req.body.lname;
  project.teamMember1 = req.body.tmname1;
  project.teamMember2 = req.body.tmname2;
  project.teamMember3 = req.body.tmname3;
  project.p_StartDate = req.body.sdate;
  project.p_EndDate = req.body.edate;
  project.save((err) => {
    if (!err) {
      console.log("project added");
      res.redirect("/project");
      alert("value inserted");
    } else {
      console.log("something went wrong while inserting" + err);
    }
  });
}

//empTable
app.get("/empTable", (req, res) => {
  emp.find((err, docs) => {
    if (!err) {
      res.render("empTable", {
        employee: docs,
      });
    } else {
      console.log("not found: " + err);
    }
  });
});

//proTable
app.get("/proTable", (req, res) => {
  pro.find((err, docs) => {
    if (!err) {
      res.render("proTable", {
        project: docs,
      });
    } else {
      console.log("not found: " + err);
    }
  });
});


//empdelete
app.get("/delete",(req,res) =>{
  emp.findByIdAndDelete({_id:req.query.id},(err) => {
    if(!err){
      res.redirect("/empTable");
      alert("sure! you want to delete the data");
    }
    else{
      console.log("not found: " + err);
    }
  })
})

//prodelete
app.get("/deletepro",(req,res) =>{
  pro.findByIdAndDelete({_id:req.query.id},(err) => {
    if(!err){
      res.redirect("/proTable");
      alert("sure! you want to delete the data");
    }
    else{
      console.log("not found: " + err);
    }
  })
})

//empsearch
app.get("/search",(req,res) =>{
  emp.find(
    {$or: [
    {fullName: {$regex: req.query.search}},
    {email: {$in: req.query.search}},
    {phoneNumber: {$in: req.query.search}}
    ]},
    function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.render("empTable",{employee: data});
      }
    })
})

//prosearch
app.get("/searchs",(req,res) =>{
  pro.find(
    {$or : [
    {projectName:{$regex: req.query.search}},
    {projectLead:{$regex: req.query.search}},
    {teamMember1:{$regex: req.query.search}},
    {teamMember2:{$regex: req.query.search}},
    {teamMember3:{$regex: req.query.search}},
    ]},
    function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.render("proTable",{project: data});
      }
    })
})

//update

app.get("/empupdate",(req,res)=>{
  const id=req.query.id;
  // const date = new Date(req.body.jdate)
  // const jdate =`${date.getMonth()} - ${date.getDate()} - ${date.getFullYear()}`
  emp.find({_id:id},
      function(err, data){
          if(err){
              console.log(err);
          }
          else{
              res.render("empupdate", {employee: data,id:id});
              // alert("updated!")
          }
      })
});
app.post('/updateemp', (req, res) => {
  const id=req.query.id;
  console.log(id)
  emp.updateOne({_id:id},req.body,(err,data)=>{
      if(!err){
          res.redirect("/empTable");
          alert("updated");
      }
      else{
          console.log(err);
      }
  })
})

app.get("/proupdate",(req,res)=>{
  const id=req.query.id;
  pro.find({_id:id},
      function(err, data){
          if(err){
              console.log(err);
          }
          else{
              res.render("proupdate", {project: data,id:id});
          }
      })
});
app.post('/updatepro', (req, res) => {
  const id=req.query.id;
  console.log(id)
  pro.updateOne({_id:id},req.body,(err,data)=>{
      if(!err){
        res.redirect("/proTable");
        alert("updated");
      }
      else{
          console.log(err);
      }
  })
})

app.listen(3444, () => {
  console.log("http://localhost:3444");
});
