const express = require("express");
const { Db } = require("mongodb");
const { Employee } = require("./model/EmpModel");  //import EmpModel
const {Project} = require("./model/ProjectModel");  //import ProjectModel
const app = express();
const router = require('express').Router();


//employee API
router.get("/",function(req,res){
  res.render('cruds',{title:'CRUDtask'});
});

router.post("/insert",(req,res)=>{
  console.log( 'INSERT', req.body);
    insertdata(req, res);
});
function insertdata(req, res){
  console.log('inside func')
    const employee = new Employee();
    employee.FullName = req.body.FullName;
    employee.Email = req.body.email;
    employee.Password = req.body.pwd;
    employee.PhoneNumber= req.body.phoneno;
    employee.JoiningDate = req.body.Joindate;
    employee.DateofBirth = req.body.DOB;

    employee.save((err,doc)=>{
      console.log('error', err);
     if(!err)
      res.redirect("/");
     else
     console.log('error', err);
    });
};

//Project API
router.get('/project',function(req,res){
  res.render('project',{title:'projecttable'});
});

router.post("/proinsert",(req,res)=>{
  
    insertproject(req, res);
});
function insertproject(req, res){
const project= new Project();
    project.ProjectName = req.body.PN;
    project.ProjectLead = req.body.PL;
    project.TeamMembers = req.body.TM;
    project.ProjectstartDate = req.body.startDate;
    project.ProjectEndDate= req.body.endDate;

    project.save((err,doc)=>{
      if(!err)
       res.redirect("/project");
      else
      console.log('error', err);
     });
 };
    
router.get('/dis',(req,res)=>{
  
 Employee.find((err,empdetails)=>{
     if(!err){
       console.log(empdetails);
      res.render("find",{employee:empdetails});
     }
     else{
      console.log(err);
     }
   });
  });
  
  router.get('/prodis',(req,res)=>{
   Project.find((err,projectdetails)=>{
      if(!err){
        res.render("protable",{project:projectdetails});
       
      }
      else{
        console.log(err);
      }
    });
});
//     .then((projecttable)=>{
//       res.render('find',{project:projecttable});
//   })
//   // })
//  .catch((err)=>{
//      res.json({message:err});
//   });
// });

// router.post("/find",function(req,res){
  
//   Employee.find({})
//    .then((value)=>{
//       res.render('find',{employee:value});
//    })
//       .catch((err)=>{
//         res.json({message:err});
//      });
   
//     Project.find({})
//     .then((value)=>{
//       res.render('find',{project:value});
//   })
//   // })
//  .catch((err)=>{
//      res.json({message:err});
//   });
// });






// function updateRecord(req,res){
//   Employee.findByIdAndUpdate( {_id: req.body._id }, req.body, {new: true}, (err,doc)=>{
//    if(!err) {res.redirect('/list'); }
//    else
//      console.log(err, 'error in update');
//   });
// }

// router.get('/list',(req,res)=>{
//   Employee.find((err,docs)=>{
//     if(!err){
//       res.render("employee/list",{
//         list:docs
//       });
//     }
//   });
// });

// router.get('/:id',(req,res)=>{
//   Employee.findById(req.params.id, (err,doc)=>{
//     if(!err){
//       res.render("cruds",{
//         title:"update employee",
//         employee:doc
//       });
//     }
//   });
// });
  

  
module.exports=router;





