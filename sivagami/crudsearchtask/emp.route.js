const express = require("express");
const { Db } = require("mongodb");
const { Employee } = require("./model/EmpModel");  //import EmpModel
const {Project} = require("./model/ProjectModel");  //import ProjectModel
const app = express();
const router = require('express').Router();


//employee API
router.get("/",function(req,res){
  res.render('Emp',{title:'CRUDtask'});
});

router.post("/insert",(req,res)=>{
  // console.log( 'INSERT', req.body);
  // if(req.body.id == "")
    insertdata(req, res);
    // else
    // updatedata(req,res);
});
function insertdata(req, res){
  console.log('inside func')
    const employee = new Employee();
    // employee.employee_id = req.body.id;
    employee.FullName = req.body.FullName;
    employee.Email = req.body.email;
    employee.Password = req.body.pwd;
    employee.PhoneNumber= req.body.phoneno;
    employee.JoiningDate = req.body.Joindate;
    employee.DateofBirth = req.body.DOB;

    employee.save((err,doc)=>{
      // console.log('error', err);
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
    
 //display employeetable
router.get('/dis',(req,res)=>{
  
 Employee.find((err,empdetails)=>{
     if(!err){
      //  console.log(empdetails);
      res.render("Emptable",{employee:empdetails});
     }
     else{
      console.log(err);
     }
   });
  });
  

  //display projecttable
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



//update Employee

router.post("/update",(req,res)=>{
  console.log( 'INSERT', req.body);
  updatedata(req,res);
});

function updatedata(req,res){
  console.log('inside fn');
  const id=req.query;
  Employee.findOneAndUpdate( {id: req.query.id }, req.body, (err,doc)=>{
    console.log('inside fn');
   if(!err){
    console.log('update')
  res.redirect("/dis"),{
   employee:doc}
    }
   else
     console.log(err, 'error in update'),{
     employee:req.body}
  });
}

router.get('/update',(req,res)=>{
  console.log('ironman')
  const id=req.query;
  Employee.find((err,docs)=>{
    if(!err){
      console.log('spider')
      res.render("update",{
        employee:docs
      });
    }
  });
});

// router.get('/:id',(req,res)=>{
//   console.log('batman')
//   Employee.find(req.params.id, (err,docs)=>{
//     console.log('spiderman')
//     if(!err){
//       console.log('Ironman')
//       res.redirect("/update"),
//        {
//          title:"update employee",
//          employee:docs
//        };
//       }
//     else{
//       console.log(err)
//     }
//   });
// });
  

//update Project


//delete Employee API

// router.get("/delete",(req,res) => { 
//   console.log('delete')
//   Employee.findByIdAndDelete({_id:req.query.id},(err)=>{
//     console.log("deleteone")
//     if(!err){
//       console.log('always delete')
//       res.redirect('/Emptable');
//     }
//     else{
//       console.log("cannot delete"+err);
//     }
//   })

// })

router.get('/delete', (req, res)=> {
  console.log('sivi');
  Employee.findByIdAndRemove({_id:req.query.id}, (err, doc) => {
    console.log("deleteone")
      if (!err) {
        console.log('always delete')
          res.redirect('/dis');
      } else {
          console.log('Failed to Delete user Details: ' + err);
      }
  });
})

//delete Project API

router.get("/delete",(req,res)=>{
  console.log('inside fn')
  Project.findByIdAndDelete({ProjectName:req.query.PN},(err)=>{
    console.log('delete')
    if(!err){
      res.redirect('/protable');
     }
     else{
       console.log('cannot delete'+err);
     }
  })
})
  
module.exports=router;





