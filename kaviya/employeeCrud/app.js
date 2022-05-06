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
  const date =new Date(req.body.jdate);
  const mdate=(date.getMonth()+1)+'-'+date.getDate()+'-'+date.getFullYear()
  console.log(mdate);
  employee.fullName = req.body.ename;
  employee.email = req.body.email;
  employee.password = req.body.pwd;
  employee.phoneNumber = req.body.phone;
  employee.joinDate = mdate;
  employee.dateofbirth = req.body.dob;
  employee.save((err) => {
    if (!err) {
      console.log("Value inserted");
      res.redirect("/");
    } else {
      console.log("something goes wrong while inserting" + err);
    }
  });
}
//project details
app.get("/project", (req, res) => {
  // res.send("<h1>hi</h1>");
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
  project.teamMember = req.body.tmname;
  project.p_StartDate = req.body.sdate;
  project.p_EndDate = req.body.edate;
  project.save((err) => {
    if (!err) {
      console.log("project added");
      res.redirect("/project");
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
    }
    else{
      console.log("not found: " + err);
    }
  })
})

//prodelete
app.get("/delete",(req,res) =>{
  pro.findByIdAndDelete({_id:req.query.id},(err) => {
    if(!err){
      res.redirect("/proTable");
    }
    else{
      console.log("not found: " + err);
    }
  })
})

//empsearch
app.get("/search",(req,res) =>{
  emp.find({fullName:req.query.search},
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
app.get("/search",(req,res) =>{
  emp.find({projectName:req.query.search},
    function(err,data){
      if(err){
        console.log(err);
      }
      else{
        res.render("proTable",{employee: data});
      }
    })
})

//update


// app.get("/update", (req, res) => {
//   // res.send("<h1>hi</h1>");
//   res.render("update", {
//     viewtitle: "update the employee details",
//   });
// });

app.get("/empupdate",(req,res)=>{
  const id=req.query.id;
  emp.find({_id:id},
      function(err, data){
          if(err){
              console.log(err);
          }
          else{
              res.render("empupdate", {employee: data,id:id});
          }
      })
});
app.post('/updatedata', (req, res) => {
  emp.updateOne({_id:req.query.id},req.body,(err,data)=>{
      if(!err){
          res.redirect("/empTable");
      }
      else{
          console.log(err);
      }
  })
})

// app.get('/:id',(req,res) =>{
//   emp.findById(req.params.id, (err,doc) =>  {
//     if(!err){
//       res.render('/update',{
//         employee: doc
//       })
//     }
//     else{
//       console.log(err);
//     }
//   })
// })

// app.post("/update", (req, res) => {
//   UpdateRecord(req, res);
// });

// function UpdateRecord(req,res){
  
// }
// 

app.listen(3446, () => {
  console.log("http://localhost:3446");
});
