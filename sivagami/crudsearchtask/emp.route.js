const express = require("express");
const { Db } = require("mongodb");
const { Employee } = require("./model/EmpModel");  //import EmpModel
const {Project} = require("./model/ProjectModel");  //import ProjectModel
const app = express();
const router = require('express').Router();


//employee API
router.get("/",function(req,res){
  res.render("Emp",{title:'empdetails'});
});

router.post("/insert",(req,res)=>{
    insertdata(req, res);
});
function insertdata(req, res){
  console.log('inside func')
    const employee = new Employee();
    const date=new Date(req.body.Joindate);
    const JoinDate=(date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear();
    const dateb=new Date(req.body.DateOfBirth);
    const DateOfBirth=(dateb.getMonth()+1)+'/'+dateb.getDate()+'/'+dateb.getFullYear();
    employee.FullName = req.body.FullName;
    employee.Email = req.body.email;
    employee.Password = req.body.pwd;
    employee.PhoneNumber= req.body.phoneno;
    employee.JoiningDate = req.body.Joindate;
    employee.DateofBirth = req.body.DateOfBirth;

    employee.save((err)=>{
      // console.log('error', err);
     if(!err)
      res.redirect("/");
     else
     console.log('error'+err);
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

   //update Employee ApI

router.get('/update',(req,res)=>{
  console.log('ironman')
   const id=req.query.id;
  Employee.find({_id:id},function(err,docs){
    if(!err){
      console.log('spider')
      res.render("Empupdate",{employee:docs,id:id});
    }
    else(err)
      console.log(err);
    
  });
});

router.post("/update",(req,res)=>{
  console.log( 'INSERT', req.body);
  updatedata(req,res);
});

function updatedata(req,res){
  console.log('inside fn');
  console.log(req.query.id);
  Employee.updateOne( {_id: req.query.id }, req.body,(err,doc)=>{
    console.log('inside fn');
   if(!err){
    console.log('update')
    res.redirect("/dis"),{
    employee:doc
    }
    }
   else
     console.log(err, 'error in update'),{
     employee:req.body 
    }
  });
}


//delete Employee API

router.get("/delete",(req,res) => { 
  console.log('delete')
  Employee.findByIdAndDelete({_id:req.query.id},(err)=>{
    console.log("deleteone")
    if(!err){
      console.log('always delete')
      res.redirect('/dis');
    }
    else{
      console.log("cannot delete"+err);
    }
  })

})
   

//Project API
router.get('/project',function(req,res){
  res.render('project',{title:'projecttable'});
});

router.post("/proinsert",(req,res)=>{
  
    insertproject(req, res);
});
function insertproject(req, res){
const project= new Project();
const dateS=new Date(req.body.startDate);
    const startDate=(dateS.getMonth()+1)+'/'+dateS.getDate()+'/'+dateS.getFullYear();
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
  

// update Project API

router.get('/proupdate',(req,res)=>{
  const id=req.query.id;
  Project.find({_id:id},(err,docs)=>{
    if(!err){
      res.render("proupdate",{project:docs,id:id});
    }
  });
});

router.post("/updated",(req,res)=>{
  console.log( 'INSERT', req.body);
  Projectupdate(req,res);
});


function Projectupdate(req,res){
  console.log('inside fn');
   const id=req.query.id;
  Project.updateOne( {_id: req.query.id }, req.body,(err,doc)=>{
    console.log('inside fn');
   if(!err){
    console.log('update')
    res.redirect("/prodis"),{
    project:doc
    }
    }
   else
     console.log(err, 'error in update'),{
     project:req.body 
    }
  });
}

//delete Project API

router.get("/prodelete",(req,res)=>{
  console.log('inside fn')
  Project.findByIdAndRemove({_id:req.query.id},(err,doc)=>{
    console.log('delete')
    if(!err){
      res.redirect('/prodis');
     }
     else{
       console.log('cannot delete'+err);
     }
  })
})

//search API

router.post('/search',(req,res)=>{
  Employee.find({FullName:req.body.search},(err,data)=>{
    if(!err){
      res.render("Emptable",{employee:data});
    }
    else{
      console.log(err);
    }
  })
})

router.post('/prosearch',(req,res)=>{
  Project.find({ProjectName:req.body.prosearch},(err,data)=>{
    if(!err){
      res.render("protable",{employee:data});
    }
    else{
      console.log(err);
    }
  })
})













// router.get('/delete', (req, res)=> {
//   console.log('sivi');
//   Employee.findByIdAndRemove({_id:req.query.id}, (err, doc) => {
//     console.log("deleteone")
//       if (!err) {
//         console.log('always delete')
//           res.redirect('/dis');
//       } else {
//           console.log('Failed to Delete user Details: ' + err);
//       }
//   });
// })


  
module.exports=router;





